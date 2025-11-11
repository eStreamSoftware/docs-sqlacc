---
sidebar_position: 2
title: Paper Industry
description: A guide for Paper Industry
slug: /usage/myinvois/paper-industires
tags: ["SQL Account", "Usage"]
---

## Introduction

For mostly paper industries, they have to calculate the total weight in KG converted from different packing size like REAM, PKT or MT. This total weight will be printed in the sales order, delivery order and tax invoice.

## Updates

Last Customisation Update : 06 Nov 2015

## Criterias

### Maintain Stock Group

[Stock | Maintain Stock Group...]

Stock group will be used as the Product Grade and Branding to categorise the stock items list.

### Maintain Stock Item

[Stock | Maintain Stock Item...]

1. Stock Master Data.

    | Types | Field Name | Data Types | Length | Usage |
    | --- | --- | --- | --- | --- |
    | STD | Code | String | 30  | Product Code, eg. ACGAAA100SK-31004300 |
    | STD | Description | String | 200 | Product Name, eg. Matt A/Paper China |
    | STD | 2nd Description | String | 200 | Paper packaging size to be display in sales tax invoice, eg. 100gsm 31" x 43" |
    | STD | Base UOM | String | 10  | stock unit of measurement, usually either enter as REAM or MT or PKT |
    | DIY | GSM | Float | Size :10, SubSize: 2 | GSM value for Weight KG calculation |
    | DIY | Width | Float | Size :10, SubSize: 2 | Width value for Weight KG calculation |
    | DIY | Length | Float | Size :10, SubSize: 2 | Length value for Weight KG calculation |
    | DIY | PKT | Float | Size :10, SubSize: 2 | PKT value for Weight KG calculation |
    | DIY | Weight_MT | Float | Size :10, SubSize: 4 | Weight MT value |
    | DIY | Weight_KG | Float | Size :10, SubSize: 4 | Weight Kgs value |

2. Formula

    ```pascal
    Weight KG = ((GSM x Width x Length)/3100)/PKT
    Weight MT = Weight KG/1000


    Both formula results are rounded to 4 decimal places.
    ```

3. Under Tools | DIY | SQL Control Center...Browse to Stock | Stock Item and insert new event OnBeforeSave with the DIY Script below:

```pascal
Var M : TDataSource;

begin
  M := TDataSource(Self.FindComponent('dsAccess'));
  M.DataSet.Edit;
  M.DataSet.FindField('UDF_Weight_KG').Value := SimpleRoundToEx((
      (M.DataSet.FindField('UDF_GSM').AsFloat *
      M.DataSet.FindField('UDF_Width').AsFloat *
      M.DataSet.FindField('UDF_Length').AsFloat) / 3100) /
      M.DataSet.FindField('UDF_PKT').AsFloat, -4);

  M.DataSet.FindField('UDF_Weight_MT').Value :=
      SimpleRoundToEx((M.DataSet.FindField('UDF_Weight_KG').AsFloat / 1000), -4);
end.
```

### Sales Document Entry

1. Sales document types include:

    - Quotation
    - Sales Order
    - Delivery Order
    - Invoice
    - Debit Note
    - Credit Note

2. Insert and update the following DIY fields & Script into above mentions sales documents in Tools | DIY | SQL Control Center...

    1. DIY Fields

        | Type | Field Name | Data Types | Length |
        | --- | --- | --- | --- |
        | DIY-F | GSM | Float | Size: 10, SubSize: 2 |
        | DIY-F | Width | Float | Size: 10, SubSize: 2 |
        | DIY-F | Length | Float | Size: 10, SubSize: 2 |
        | DIY-F | PKT | Float | Size: 10, SubSize: 2 |
        | DIY-F | Weight_MT | Float | Size: 10, SubSize: 4 |
        | DIY-F | Weight_KG | Float | Size: 10, SubSize: 4 |
        | DIY-F | TotWeight_MT | Float | Size: 10, SubSize: 4 |
        | DIY-F | TotWeight_KG | Float | Size: 10, SubSize: 4 |

    2. DIY Script: OnGridColumnValueChange event

        ```pascal
            var
          FComServer : Variant;

        function ComServer: Variant;
        begin
          if FComServer = Null then begin
            FComServer := CreateOleObject('SQLAcc.BizApp');
          end;
          Result := FComServer;
        end;

        var
          lBizObj,S,S2 : Variant;
          lSQL    : String;
          lCdsDataList : TClientDataSet;
          D : TDataSource;

        begin
          FComServer   := null;
          lCdsDataList := TClientDataSet.Create(nil);
          D := TDataSource(Self.FindComponent('dsDocDetail'));
          try
            lSQL                 := 'Code='+ QuotedStr(D.DataSet.FindField('ItemCode').AsString);
            lBizObj              := ComServer.BizObjects.Find('ST_ITEM');

            lCdsDataList.XMLData := lBizObj.Select('UDF_GSM, UDF_Width, UDF_Length, UDF_PKT, UDF_Weight_KG, UDF_Weight_MT',lSQL,'','SX',',','');
            if SameText(EditingField, 'ItemCode') or
            SameText(EditingField, 'Qty') then begin
                D.DataSet.edit;
                D.DataSet.FindField('UDF_GSM').Value := lCdsDataList.FindField('UDF_GSM').Value;
                D.DataSet.FindField('UDF_Width').Value := lCdsDataList.FindField('UDF_Width').Value;
                D.DataSet.FindField('UDF_Length').Value := lCdsDataList.FindField('UDF_Length').Value;
                D.DataSet.FindField('UDF_PKT').Value := lCdsDataList.FindField('UDF_PKT').Value;
                D.DataSet.FindField('UDF_Weight_KG').Value := lCdsDataList.FindField('UDF_Weight_KG').Value;
                D.DataSet.FindField('UDF_Weight_MT').Value := lCdsDataList.FindField('UDF_Weight_MT').Value;  
                D.DataSet.FindField('UDF_TotWeight_KG').value := D.DataSet.FindField('UDF_Weight_KG').AsFloat*
                                                                D.DataSet.FindField('Qty').Value;
                D.DataSet.FindField('UDF_TotWeight_MT').value := D.DataSet.FindField('UDF_Weight_MT').AsFloat*
                                                                D.DataSet.FindField('Qty').Value; 
            end;

          finally
            lBizObj    := null;
            FComServer := null;
            lCdsDataList.Free;
          end;
        end.
        ```
