---
sidebar_position: 2
title: FAQ
description: Frequently Asked Questions in report builder
slug: /usage/tools/rtm/faq
tags: ["SQL Account", "Usage", "Tools"]
---

## How to rename the component I use?

![rename-component](../../../../static/img/usage/tools/rtm-faq/rename-component.jpg)

1. Click the icon here (eg DBText)
2. Click on the place to be print/shown
3. At the Properties for XXXXXX, look for Identity | UserName & change the Name as you like (Only Alphanumeric & no spacing)

## Why when Export to PDF format the Company Logo looks "ugly"?

![image-compression-level-1](../../../../static/img/usage/tools/rtm-faq/image-compression-level-1.jpg)

1. In the report designer set the setting

    - ImageCompressionLevel to 1
    - Untick ScaleImages

2. At the Company Logo Right Click
    - Tick DirectDraw
    - Untick Stretch

3. Resize your Jpeg Logo to smaller dimension
4. Resize the Company Logo (Report Builder component) to the same dimension of your Jpeg Logo

## Why when Export to PDF format the the file size so large?

![compression-level-clmax](../../../../static/img/usage/tools/rtm-faq/compression-level-clmax.jpg)

1. In the report designer set the setting look for PDFSettings
    - CompressionLevel to clMax

2. In the report designer set the setting look for PDFSettings | EmbedFontOptions
    - efUseSubset to True (checked)

## Special DisplayFormat

### 1. How if data is PI-12345 but I wanted to be printed as 12345?

Just Enter as Follow code:-

<details>
    <summary>Code</summary>

```vb
Procedure DBTxtDocNoOnGetText(var Text: String);

begin

  Delete(Text, 1, 3);

  Text := Text;

end;
```

</details>

### 2. How if data is PI-12345 but I wanted to be printed as PI12345?

Just Enter as Follow code:-

<details>
    <summary>Code</summary>

```pascal
        Procedure DBTxtDocNoOnGetText(var Text: String);

        begin

        Delete(Text, 3, 1);

        Text := Text;

        end;
```

</details>

### 3. How if data is 17-08-2005 but I wanted to be printed as 17 hb?

Just Enter as Follow code in the DisplayFormat:-

**dd 'hb'** *

### 4. How if data is 1234-001 but I wanted to be printed as 1234 & the value is not fixed (i.e may 12345-001, 1234-001)?

 Just Enter as Follow code:-

<details>
    <summary>Code</summary>

```pascal
Procedure DBTxtDocNoOnGetText(var Text: String);

begin

  Text := SubStrOfDelimitedStr(Text, 0, 1, '-');

end;
```

</details>

### 5. How if data is 1234-001 but I wanted to be printed as 001 & the value is not fixed (i.e may 12345-001, 1234-32)?

 Just Enter as Follow code:-

<details>
    <summary>Code</summary>

```pascal
Procedure DBTxtDocNoOnGetText(var Text: String);

begin

  Text := SubStrOfDelimitedStr(Text, 1, 1, '-');

end;
```

</details>

### 6. How to reverse this #,0.00;-#,0.00 to this -#,0.00;#,0.00?

 Just Enter as Follow code:-

<details>
    <summary>Code</summary>

```pascal
procedure DetailBeforePrint;

var d, s : string;

begin

  s := Option.GetFieldValue('AccountingValueDisplayFormat');

  d := ValueOfSemiColonStr(s, 1)+';'+ ValueOfSemiColonStr(s, 0);

  DBTxtC4.DisplayFormat := d;

end;
```

</details>

### 7. How to set 0 when empty?

Below is Example :

<details>
    <summary>Code</summary>

```pascal
procedure DBTxtTaxOnGetText(var Text:String);

begin

  if Trim(plSQL_1.GetFieldValue('TaxAmt')) = '' then

    Text := '0.00' ;

end;
```

</details>

### 8. How to Combine Currency Symbol with DocAmt or DBCalc.Value using TppVariable?

<details>
    <summary>Code</summary>

```pascal
procedure VarSumDROnCalc(var Value : Variant);

var V : string;

begin

  V := FormatFloat(Option.GetFieldValue('AccountingValueDisplayFormat'), DBCalcSCR.Value);

  Value := Option.GetFieldValue('LocalCurrencySymbol') + ' ' + V;

end;
```

</details>

## How to Set Current Date Time plus/minus N?

<details>
  <summary>Code</summary>

```pascal
procedure Variable1OnCalc(var Value : Variant);

var lDT : Variant;

begin

  //Example deduct 1.5 hrs

  lDT := CurrentDateTime-0.0625; //(1.5/24)

  Value := FormatDateTime('dd/MM/yyyy hh:mm AM/PM', lDT);

end;
```

</details>

## How to Maintain the QR Code Size with large Data?

:::note
It might be unable to scan if the size is too small & the data is too large
:::

![qrcode-autosize](../../../../static/img/usage/tools/rtm-faq/qrcode-autosize.jpg)

## How to Add QR Code for E-Invoicing?

:::note
Only Available in Version 852 & above
:::

![qrcode-settings](../../../../static/img/usage/tools/rtm-faq/qrcode-settings.jpg)

- The measurement is in Inch
- This guide is designed for Laser Printer only
- For Dot Matrix Printer make sure set to 1 for Height & Width

## How to Add FromDocNo and FromDocDate Variable in Report Design ?

1. Go in Report Design | Click on ![1](../../../../static/img/usage/tools/rtm-faq/1.png) then place at the grid – refer below Pic

   ![2](../../../../static/img/usage/tools/rtm-faq/2.png)

   1. Right Click on Variable2 | Select Calculation |

    ![3](../../../../static/img/usage/tools/rtm-faq/3.png)

      After Done press OK

2. If the date is not appearing in report preview

   ![4](../../../../static/img/usage/tools/rtm-faq/4.png)

   1. Click on **Calc Tab**

   2. **Menu bar** | click **View** | Select **Events**

   3. Look for ***Variable***

   4. Click on **OnPrint**

   5. Click on **Document_Detail**

   6. Click on **FromDocNo**

   7. Drag from **FromDocNo** to the query box.

## How to Create SUM Variable for TAX Column ?

![1](../../../../static/img/usage/tools/rtm-faq/11.png)

1. Click on the variable icon

2. Click on where you want to create a new variable, right click on the variable created > go calculations , Insert the query in the next section accordingly

3. Click on the variable created, and make sure choose it to `DOUBLE`.

**Query:**

1. **Formula for Sub Total**

    ```pascal
    Variable1.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');

    Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'Amount');
    ```

2. **Formula for Total Exclude GST (RM)**

    ```pascal
    Variable2.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');

    Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalAmount');
    ```

3. **Formula for Total of Tax Amt (RM)**

    ```pascal
    Variable5.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');

    Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalTaxAmt');
    ```

4. **Formula for Total Include GST (RM)**

    ```pascal
    Variable6.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');

    Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalAmountWithTax');
    ```

## How to Disable Query for Deleted Field ?

1. If you had deleted any field in report designer with Query, then u will get the below message, click **OK**

   ![1](../../../../static/img/usage/tools/rtm-faq/111.png)

2. Click on the blue colour report name to enter in report designer page

   ![2](../../../../static/img/usage/tools/rtm-faq/22.png)

3. Click on the field, the field name will be shown at the left bottom of the application as shown below. If you had deleted the field, refer to step 4.

   ![3](../../../../static/img/usage/tools/rtm-faq/33.png)

4. Click on **CALC**, go View > Modules

   ![4](../../../../static/img/usage/tools/rtm-faq/44.png)

5. Follow the steps below:

   1. Click on **Event Handlers**

   2. Go to **procedure DetailBeforePrint**

   3. An error will be shown at the bottom, double click on it, and the system will redirect to the row with the error

   ![5](../../../../static/img/usage/tools/rtm-faq/5.png)

6. Enter '//' as in the image below :

   ![6](../../../../static/img/usage/tools/rtm-faq/6.png)

7. Right click and compile , make sure no error > save > close the preview screen and try preview again.

## Display Exemption Number & Expiry Date in Invoice Template

### Part A : Custom | Maintain Customer

![1](../../../../static/img/usage/tools/rtm-faq/1111.png)

### Part B : Report Format add customer exemption Number

1. Go to Sales | Sales Invoice | Select any of your invoice | Preview | choose your invoice format template | click on the bottom blue color report name to go into report designer page

   ![2](../../../../static/img/usage/tools/rtm-faq/2222.png)

2. Insert **Exemption Number** label

   1. click on the A label icon
   2. click on the area that you want to locate the field
   3. rename the label

   ![3](../../../../static/img/usage/tools/rtm-faq/3333.png)

3. Insert **Tax Exemption Number** DBText

   1. click on the DBText field
   2. click on the are that you want to located the field
   3. select Document Company & TaxExemptNo

   ![4](../../../../static/img/usage/tools/rtm-faq/4444.png)

4. Insert **Expiry Date** label

   1. click on the A label icon
   2. click on the area that you want to locate the field
   3. rename the label

   ![5](../../../../static/img/usage/tools/rtm-faq/5555.png)

5. Insert **Tax Expiry Date** DBText

   1. click on the DBText field
   2. click on the are that you want to located the field
   3. select Document Company & TaxExpDate

   ![6](../../../../static/img/usage/tools/rtm-faq/6666.png)

### Part C: Save as a new report name & preview the new format

1. Once you complete, go file | save as | enter a new report name | Save

   ![7](../../../../static/img/usage/tools/rtm-faq/7777.png)

2. Preview your new report

   ![8](../../../../static/img/usage/tools/rtm-faq/8888.png)

3. The exemption number & expiry date added

   ![9](../../../../static/img/usage/tools/rtm-faq/9999.png)

## How to Drag XML Report into SQL ?

:::info[note]
If this XML Report is for Customer Aging, go to Customer Aging to drag the XML Report

If this XML report is Supplier Aging Report, go to Supplier Aging to drag the XML Report
:::

1. Open the XML Report & also Customer Aging, drag the XML Report into the Report Name field

   ![1](../../../../static/img/usage/tools/rtm-faq/12.png)

2. Double Click on the new report template in blue color.

   ![2](../../../../static/img/usage/tools/rtm-faq/21.png)

3. Click on the arrow down key to choose the right template

   - Eg : If the report Name is Cust-Local-**L0**-06 Month

      - L0 = no special grouping, the template you have to choose eg Cust 06 Month Aging
      - L1 = Grouping by 1 level, the template you have to choose eg Cust 06 Month Aging – Level 1
      - L2 =Grouping by 2 level, the template you have to choose eg Cust 06 Month Aging – Level 2

   - Eg : If the report Name is Cust-Local-L0-**06** Month

     - 04 = 04 Month
     - 06 = 06 Month
     - 12 = 12 Month

## How to Make Official Receipt Format Set Knock Off Grid to Show Full Width ?

1. Go to **subreport1 : Document_KnockOff**

    ![1](../../../../static/img/usage/tools/rtm-faq/11111.png)

2. Go to **Report**, click on **Title**

    ![2](../../../../static/img/usage/tools/rtm-faq/22222.png)

3. Move all field in Column Header to **Title**

    ![3](../../../../static/img/usage/tools/rtm-faq/33333.png)

4. Go to **File** > **Page Setup...**

    ![4](../../../../static/img/usage/tools/rtm-faq/44444.png)

5. Go to **Layout**, change the **column** to ***1***

    ![5](../../../../static/img/usage/tools/rtm-faq/55555.png)

6. Now, it expands to full page, you can adjust all your column as your wish.

    ![6](../../../../static/img/usage/tools/rtm-faq/66666.png)

7. Once you done adjust, go file > save as, key a new report name.

8. Close the preview, and preview your new report name.

## How to do Rounding of Figure in Report ?

**Sample Invoice with Rounding RM0.02 :**

![1](../../../../static/img/usage/tools/rtm-faq/1a.png)

1. Using Tax Invoice format 06-Tax-Invoice
   ![2](../../../../static/img/usage/tools/rtm-faq/2a.png)

   :::info[note]
   Click on blue color link - **06-Tax-Invoice**
   :::

2. Click on **Calc** Tab

   ![3](../../../../static/img/usage/tools/rtm-faq/3a.png)

3. Right Click select **Module**

   ![4](../../../../static/img/usage/tools/rtm-faq/4a.png)

4. Click on **Declarations**

   ![5](../../../../static/img/usage/tools/rtm-faq/5a.png)

5. Declare **SQL_Rounding** under **Variable**

   ![6](../../../../static/img/usage/tools/rtm-faq/6a.png)

6. Click on Events | On Create | Procedure GlobalOnCreate insert syntax as below :

    ```pascal
    SQL_Rounding := 'SELECT DocKey, Sum(Amount) Amount, Description '+
    'FROM Document_Detail ' +
    'WHERE ItemCode=''RTN5Cents'' '+
    'GROUP BY DocKey';
    ```

    **Refer Picture below :**

   ![7](../../../../static/img/usage/tools/rtm-faq/7a.png)

    :::info[Optional]
    Add additional syntax in plSQL_4 – Refer below, only if Total Amount beforeGST you want to exclude rounding amount.

   ![8](../../../../static/img/usage/tools/rtm-faq/8a.png)

    ```pascal
    SQL_4 := 'SELECT DocKey, Sum(Amount) Amount, Description '+
    'FROM Document_Detail ' +
    'WHERE ItemCode <> ''DISC'' '+
    'or Itemcode is null ' +
    'and ItemCode <> ''RTN5Cents'' ' +
    'GROUP BY DocKey';
    ```

   :::

7. Click on Event Handlers | Click on procedure Report BeforePrint, insert syntax as below :

    ```pascal
    LocalSQL_SELECT(plSQL_Rounding, SQL_Rounding, 'DocKey');
    SetDataPipelineFieldLink(Main, plSQL_Rounding, 'DocKey', 'DocKey');
    ```

   ![9](../../../../static/img/usage/tools/rtm-faq/9a.png)

8. File | Save | Exit from report design and go in to Report Design again.

9. Insert DBText | and place at the place you want.

   ![10](../../../../static/img/usage/tools/rtm-faq/10a.png)

   1. Click on DBText

   2. Place at the Group Footer area

   3. Select plSQL_Rounding

   4. Manually type in Amount

   Here is the output :

   ![11](../../../../static/img/usage/tools/rtm-faq/11a.png)

   After adjust the position :

   ![12](../../../../static/img/usage/tools/rtm-faq/12a.png)

    **Item Detail hide Item Code RTN5Cents to be appearing, refer step as below :**

10. Click on Document_Detail Tab as below | Click on Calc | Event Handlers | Procedure RdiscOnPrint

    ![13](../../../../static/img/usage/tools/rtm-faq/13a.png)

    - Syntax:

        ```pascal
        RDisc.Visible := (Document_Detail.getfieldvalue('Itemcode') <> 'DISC')
        and (Document_Detail.getfieldvalue('Itemcode') <> 'RTN5Cents');
        ```

    - Output :

     ![14](../../../../static/img/usage/tools/rtm-faq/14a.png)

     **How to do if the report never create the region before?**

11. Right click tick all the Toolbars

    ![15](../../../../static/img/usage/tools/rtm-faq/15a.png)

12. Click on Region component

    ![16](../../../../static/img/usage/tools/rtm-faq/16a.png)

13. Place at the design grid | Click at the region | Select no Fill

    ![17](../../../../static/img/usage/tools/rtm-faq/17a.png)

14. Select No Line

    ![18](../../../../static/img/usage/tools/rtm-faq/18a.png)

15. Place all the DBtext/DBRichText inside the Region.

    ![19](../../../../static/img/usage/tools/rtm-faq/19a.png)

16. Click on Region to check the object name :

    ![20](../../../../static/img/usage/tools/rtm-faq/20a.png)

17. Click on Calc tab | Right Click select Events

    ![21](../../../../static/img/usage/tools/rtm-faq/21a.png)

18. Look for RDisc | Select OnOnPrint | Place the syntax inside bottom box

    ![22](../../../../static/img/usage/tools/rtm-faq/22a.png)

    Syntax :

    ```pascal
    RDisc.Visible := (Document_Detail.getfieldvalue('Itemcode') <> 'DISC')
    and (Document_Detail.getfieldvalue('Itemcode') <> 'RTN5Cents');
    ```

    :::info[note]
    **RDisc** is your object name, if you object name is **Region1**, then have to change as below :

    ```pascal
    Region1.Visible := (Document_Detail.getfieldvalue('Itemcode') <> 'DISC')
    and (Document_Detail.getfieldvalue('Itemcode') <> 'RTN5Cents');
    ```

    :::

## How to Update GST from 6% to 0% (show zero instead of blank) ?

SQL Account system build in report format will automatic detect your Tax Rate based on your invoice issued.

- if invoice issued on May it will show GST @ 6%, while invoice issued on June will display GST @ 0%.
- D/O issued on May, transferred to Invoice and invoice date is in June, then system will automatic detect it and set the GST rate correctly.
- However, if your format is customized previously, you can refer this guideline on how to change the script from GST @ 6% to GST 0% .

1. Click on your report name to enter into report designer page.

   ![1](../../../../static/img/usage/tools/rtm-faq/1b.png)

2. Follow the steps below:

   1. Go to **Calc**, click on **View** > select **Module**

      ![2](../../../../static/img/usage/tools/rtm-faq/2b.png)

   2. Go **Event Handlers**

   3. Go **Procedure lbTaxAmtOnGetText(var Text:String);**

   4. Replace to this script:

    ```pascal
    var s : string;
    begin
        if (plSQL_0.GetFieldValue('TaxDate') < '01 Jun >2018') or
            VarToCurr(plSQL_1.GetFieldValue('TaxAmt')) <> 0) then

            s := 'GST Amt @ 6% ' else
            s := 'GST Amt @ 0% ';
        if plSQL_2.GetFieldValue('Code') &lt;> '----' >then
            Text := s + '(RM) :' else
            Text := s + ':';
    end;
    ```

   ![3](../../../../static/img/usage/tools/rtm-faq/3b.png)

To Display Tax as 0.00 Instead of Blank:

   1. Click on your report name to enter into report designer page.

      ![4](../../../../static/img/usage/tools/rtm-faq/4b.png)

   2. Go to **Calc**, click on **View** and select **Events**

      ![5](../../../../static/img/usage/tools/rtm-faq/5b.png)

   3. Find **DBTxtTax**and select **OnGetText**, then paste the script as below:

       ```pascal
       begin
           if Trim(plSQL_1.GetFieldValue('TaxAmt')) = '' then
               Text := '0.00' ;
       end;
       ```

      ![6](../../../../static/img/usage/tools/rtm-faq/6b.png)

   Once you completed, save the report and exit, then you may preview again your format outcome.
