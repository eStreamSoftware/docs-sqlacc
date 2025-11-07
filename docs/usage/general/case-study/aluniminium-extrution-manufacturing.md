---
sidebar_position: 2
title: Aluminium Extrution Manufactoring
description: A guide for Aluminium Extrution Manufactoring
slug: /usage/myinvois/aluminium-extrution-manufactoring
tags: ["SQL Account", "Usage"]
---

## Introduction

Aluminium Extrusion manufacturing usually will based on a variable length and a fixed linear weight to determine the price before quote to customer.

## Updates

Last Customisation Update : 06 Nov 2015

## Criterias

### Maintain Stock Group

[Stock | Maintain Stock Group...]

Stock group will be used as the Product Grade to categorise the stock items list.

### Maintain Stock Item

[Stock | Maintain Stock Item...]

1. Stock Master Data.

| Types | Field Name | Data Types | Length | Usage |
| --- | --- | --- | --- | --- |
| STD | Code | String | 30  | Product Code, eg. EA 6035 (NA) |
| STD | Description | String | 200 | Product Name |
| STD | 2nd Description | String | 200 | Aluminium size to be display in sales tax invoice, eg. 38.10 x 1.80 thk |
| STD | Base UOM | String | 10  | stock unit of measurement, usually either enter as PCS or KG or Roll |
| DIY | Linear Weight (Kg/M) | Float | Size :10, SubSize: 4 | Linear Weight (Kg/M) value |

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
        | DIY-F | Length | Float | Size: 10, SubSize: 4 |
        | DIY-F | LinearWeight | Float | Size: 10, SubSize: 4 |
        | DIY-F | UnitPrice_Kg | Float | Size: 10, SubSize: 4 |
        | DIY-F | UnitPrice_Pcs | Float | Size: 10, SubSize: 4 |
        | DIY-F | Qty_Kg | Float | Size: 10, SubSize: 4 |
        | DIY-F | Qty_Pcs | Float | Size: 10, SubSize: 4 |

    2. DIY Script: OnGridColumnValueChange event

      ```sql
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
      lSQL, lCode : String;
      cdsTemp : TClientDataSet;
      D : TDataSource;

      begin
      FComServer   := null;
      D := TDataSource(Self.FindComponent('dsDocDetail'));

      cdsTemp := TClientDataSet.Create(nil);
      lCode := D.DataSet.FindField('ItemCode').AsString;
      lSQL := Format('SELECT UDF_LinearWeight FROM ST_ITEM WHERE Code=%s ',[QuotedStr(lCode)]);
      cdsTemp.Data := ComServer.DBManager.Execute(lSQL);

      //select item and batch to retrieve the linear weight from item master
      if SameText(editingfield,'ItemCode') or
      SameText(editingfield,'Batch') then begin
            D.DataSet.FindField('UDF_LinearWeight').Value := cdsTemp.FindField('UDF_LinearWeight').Value;
            D.DataSet.FindField('UDF_Length').Value := 0;
      end;

      //select batch as "Length value"
      if SameText(editingfield,'Batch') then begin
            D.DataSet.FindField('UDF_Length').Value := D.DataSet.FindField('Batch').Value;
      end;

      //key-in unit price per kg to convert into unit price per pcs
      if SameText(editingfield,'UDF_UnitPrice_Kg') or
      SameText(editingfield,'Batch') then begin
            D.DataSet.FindField('UDF_UnitPrice_Pcs').AsFloat := (D.DataSet.FindField('UDF_UnitPrice_Kg').AsFloat*
                                                                  D.DataSet.FindField('UDF_Length').AsFloat*
                                                                  D.DataSet.FindField('UDF_LinearWeight').AsFloat);
      end;

      //key-in unit price per pcs to convert into unit price per kg
      if SameText(editingfield,'UDF_UnitPrice_Pcs') or
      SameText(editingfield,'Batch') then begin
            D.DataSet.FindField('UDF_UnitPrice_Kg').AsFloat := (D.DataSet.FindField('UDF_UnitPrice_Pcs').AsFloat/
                                                                  D.DataSet.FindField('UDF_Length').AsFloat/
                                                                  D.DataSet.FindField('UDF_LinearWeight').AsFloat);
      end;

      //to compute the subtotal either based on unit price per pcs or per kg
      if (D.DataSet.FindField('UDF_Length').Value <> 0.0000) or
      (D.DataSet.FindField('UDF_LinearWeight').Value <> 0.000) or
      (D.DataSet.FindField('UDF_Qty_Pcs').Value <> 0.0000) or
      (D.DataSet.FindField('UDF_UnitPrice_Pcs').Value <> 0.0000) then begin
            D.DataSet.FindField('Qty').Value := D.DataSet.FindField('UDF_Qty_Pcs').AsFloat;
            D.DataSet.FindField('UnitPrice').Value := D.DataSet.FindField('UDF_UnitPrice_Pcs').AsFloat;
            D.DataSet.FindField('UDF_Qty_Kg').AsFloat := (D.DataSet.FindField('UDF_Length').AsFloat*
                                                            D.DataSet.FindField('UDF_LinearWeight').AsFloat*
                                                            D.DataSet.FindField('UDF_Qty_Pcs').AsFloat);
      end;

      FComServer := null;
      cdsTemp.Free;

      end.
      ```

      ```pascal
      Formula:

      1. Unit price per Pcs = Unit price per Kg x Length x Linear Weight
      2. Unit price per Kg = Unit price per Pcs / Length / Linear Weight
      3. Total Weight = Length x Linear Weight x No of Pcs


      Both formula results are rounding up to 4 decimals.
      ```
