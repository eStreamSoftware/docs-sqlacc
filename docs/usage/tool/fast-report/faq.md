---
sidebar_position: 2
title: FAQ
description: Frequently Asked Questions in fast report
slug: /usage/tools/fast-report/faq
tags: ["SQL Account", "Usage", "Tools"]
---

## 1. When Unit price is 0, how to display it as Free of Charge (FOC) ?

In Memo, enter the following syntax :

    ```pascal
    [FormatFloat(',0.00;-,0.00;FOC ',<Document_Detail."UnitPrice">)]
    ```

    ![0-foc-insert-code-memo](../../../../static/img/usage/tools/fast-report-faq/0-foc-insert-code-memo.png)

## 2. How to change Cents to Sens in Document Currency Description ?

    Syntax:

    ```pascal
    [Document_Currency."Description"] : [StringReplace(CurrencyToLangWord(<Main."DocAmt">,<Profile."CurrencyLang">), 'CENTS', 'SENS', TRUE)]
    ```

    ![46](../../../../static/img/usage/tools/fast-report-faq/46.png)

## 3. How to convert More Description into RichTextToPlainText ?

    Syntax :

    ```pascal
    [RichTextToPlaintext(<Document_Detail."Description3">)]
    ```

    ![47](../../../../static/img/usage/tools/fast-report-faq/47.png)

    ![48](../../../../static/img/usage/tools/fast-report-faq/48.png)

## 4. How to change report paper size?

File -> Page Setting ->

    ![49](../../../../static/img/usage/tools/fast-report-faq/49.png)

## 5. if Qty > 10, how to change text color to red and bold?

1. Double Click on Memo

2. Click on **Highlight Tab**

3. Click on **Add Button**

4. Expression value > 10

   ![50](../../../../static/img/usage/tools/fast-report-faq/50.png)

5. Click on Font

   Can set for Font Type, Font Style, Size, Color or Effects

   ![51](../../../../static/img/usage/tools/fast-report-faq/51.png)

6. Press **OK**

7. Right Click on Memo, **Ticked Allow Expression**

**Result** :

![52](../../../../static/img/usage/tools/fast-report-faq/52.png)

## 6. Why in Report I have placed at the position I want, but when preview it will show at bottom?

Right click on Memo, **unticked Shift** and **Unticked Shift when Overlapped**

## 7. How to Export PDF Logo that is blur ?

![53](../../../../static/img/usage/tools/fast-report-faq/53.png)

## 8. How to capture remark1 as a url path?

In Memo properties :

Hyperlink Expression added in the Data Field Name

  ![54](../../../../static/img/usage/tools/fast-report-faq/54.png)

Result :

  ![55](../../../../static/img/usage/tools/fast-report-faq/55.png)

## 9. How to print Payslip to show AL or MC only ?

1. Click on **SubReport3**

2. Right click on **Leave MasterData Band**

   ![56](../../../../static/img/usage/tools/fast-report-faq/56.png)

3. Click on Filter button

4. Enter the expression :

         ```pascal
     (<Leave."LeaveType"> ='AL') OR (<Leave."LeaveType"> ='MC')
         ```

5. Press OK

6. Press OK

    ![57](../../../../static/img/usage/tools/fast-report-faq/57.png)

## 10. How to get Net Unit Price ?

 1. Click on **Memo Text**

 2. Place on **Document Detail Band**

 3. Drag data field from right to left box :

            ```pascal
     [<Document_Detail."Amount"> / <Document_Detail."Qty">]
             ```

 4. Press OK

 5. Adjust the position

 6. Preview and see the result

    ![58](../../../../static/img/usage/tools/fast-report-faq/58.png)

## 11. How to do if UOM = UNIT, Qty display without Decimal Point, else with 2 Decimal Point ?

 1. Click On Memo Text

 2. Copy the below syntax and Paste into Memo:

            ```pascal
     [IIF(<Document_Detail."UOM"> = 'UNIT'>,
     FormatFloat('#,0;-#,0 ', <Document_Detail."Qty">) ,
     FormatFloat('#,0.00;-#,0.00 ', <Document_Detail."Qty">))]
            ```

    ![59](../../../../static/img/usage/tools/fast-report-faq/59.png)

 3. Press **OK**

 4. Result After Preview :

    ![60](../../../../static/img/usage/tools/fast-report-faq/60.png)

## 12. How to Get Supplier Bank in Payment Voucher?

 1. Click on Memo

 2. Paste this syntax inside Memo

            ```pascal
     [<GetbankName(pl_SUPPLIERBANKACC."Bank">)]
            ```

    ![61](../../../../static/img/usage/tools/fast-report-faq/61.png)

## 13. How to change the Amount in Word to First Character to Upper Case only?

Can use function NameCase

![62](../../../../static/img/usage/tools/fast-report-faq/62.png)

Before :

![63](../../../../static/img/usage/tools/fast-report-faq/63.png)

After :

![64](../../../../static/img/usage/tools/fast-report-faq/64.png)

## 14. Why is it not the same when preview?

![stacked-content-when-preview](../../../../static/img/usage/tools/fast-report-faq/stacked-content-when-preview.jpg)

 Try Untick the Option **Shift** by right click the Memo

![right-click-untick-shift](../../../../static/img/usage/tools/fast-report-faq/right-click-untick-shift.jpg)

## 16. How to rename the component I use?

![rename-memo](../../../../static/img/usage/tools/fast-report-faq/rename-memo.jpg)

01. Click the Red A Icon.
02. Click on the place to be print/shown
03. At the **Object Inspector**, look for **Name** & change the Name as you like (Only Alphanumeric & no spacing)

## 17. How to draw line for whole report?

![draw-line](../../../../static/img/usage/tools/fast-report-faq/draw-line.jpg)

01. Click an empty place of outer report.
02. At the **Object Inspector**, look for Frame & click the + sign
03. Under the **Frame**, look for **Typ** & set to True for ftLeft, ftRight, ftTop & ftBottom.

![draw-line-output](../../../../static/img/usage/tools/fast-report-faq/draw-line-output.jpg)

:::warning
Make sure the **Paper Margin** for Top, Bottom, Left & Right not set to 0
:::

## 18. How to add spacing between 2 records?

![spacing-2reports-height](../../../../static/img/usage/tools/fast-report-faq/spacing-2reports-height.jpg)

1. Right Click on **DetailData**.

    ![add-child-band](../../../../static/img/usage/tools/fast-report-faq/add-child-band.jpg)

2. Select **Add child band**.
3. At the **Object Inspector**, look for **Height** & set the gap Height you want

## 19. My More Description is very long & it shown page 1 empty & shown in page 2

![grp-footer-issue](../../../../static/img/usage/tools/fast-report-faq/grp-footer-issue.jpg)

1. Right Click on **DetailData**.

    ![right-click-allow-split](../../../../static/img/usage/tools/fast-report-faq/right-click-allow-split.jpg)

2. Select **Allow Split**.
3. Click on **GroupFooter:GroupFooter1**.
4. Double Click **OnBeforePrint**

    ![on-before-print-remove-height-60](../../../../static/img/usage/tools/fast-report-faq/on-before-print-remove-height-60.jpg)

5. Remove **- 60**

    ![navigate-to-onaftercalcheight](../../../../static/img/usage/tools/fast-report-faq/navigate-to-onaftercalcheight.jpg)

6. Click on **DetailData:DetailData1**.
7. Double Click **OnAfterCalcHeight**

    ![comment-if-tfrxdetaildata](../../../../static/img/usage/tools/fast-report-faq/comment-if-tfrxdetaildata.jpg)

8. Enter //

## 20. Show Note at Header

    ![show-note-at-header](../../../../static/img/usage/tools/fast-report-faq/show-note-at-header.jpg)

1. Right Click on **GroupHeader:GroupHeader1**.

    ![add-child-band-right-click](../../../../static/img/usage/tools/fast-report-faq/add-child-band-right-click.jpg)

2. Select **Add Child Band** & Select **Stretch**
3. Adjust the Child band Height as you want
4. Right click on Child Band & Select **Stretch**
5. Move all the Title to **Child:Child1**
6. Click the Blue A icon (RichText Object)
7. Click on the place to be print/shown & set as below setting in Right Click

    - Stretch = True
    - Shift = False
    - Allow Expression = False

8. At the **Object Inspector**, Look for & set as below

- DataSet ==> Main
- DataField ==> Note

## 21. Show Total Qty Excluding Item Code RTN5Cents

1. Click the Red A Icon.
2. Click on the place to be print/shown
3. Enter the below code (make sure in the report had the **AdjRound** pipeline & **GetTotal** function (refer to Sales Invoice 7 (GST 1))

            ```sql
        [FormatFloat(<Option."StockQuantityDisplayFormat">,
        IIF(Trim(<AdjRound."LocalAmount">)<>'0', 
              GetTotal('Qty')-1,
              GetTotal('Qty'))
        )]
            ```

## 22. How to print 2 pages in 1 A4?

![print-2page-in-a4](../../../../static/img/usage/tools/fast-report-faq/print-2page-in-a4.jpg)

01. Click Margin Icon
02. Adjust the **Height** to fit in 1 page
03. Select **Apply to all pages**
04. Click Ok
05. Set the **Zoom** to 100% and/or Page Within
06. Click Print Icon
07. Set **Print Mode** to Scale & **Print on Sheet** to A4
08. Click Ok to print

## 23. How to Load Notes/More Description to TfrRichView using script?

Just add below script on the TfrRichView OnBeforePrint

    ```sql
    procedure Rich1OnBeforePrint(Sender: TfrxComponent);
    var slOutput : TStringList;
        M: TMemoryStream;    
    begin
      slOutput := TStringList.Create;
      M := TMemoryStream.Create;
      try
        slOutput.Text := <plST_Item."Note">; //The Note/More Description field
        slOutput.SaveToStream(M);
        M.Position := 0;
        Rich1.RichEdit.Lines.LoadFromStream(M); //eg The TfrRichView name is Rich1 
      finally
        slOutput.Free;
        M.Free;  
      end;
    end;
    ```

## 24. How to reduce the Column use when Export to Excel?

Try use **Export to Excel Table (XML)** option & untick the Option **WYSIWYG**

## 25. Special Display Format

### How if data is Zero(0) and I wanted to be printed as - and some space on the back?

A  : Just Enter as Follow code:-

    ```pascal
    [FormatFloat(',0.00;-,0.00;-   ',<Main."Amount">)]
    ```

### How to set a given string as this 123456121234 to show as 123456-12-1234?

A  : Just Enter as Follow code:-

    ```pascal
    [FormatMaskText('000000-00-0000;0;',<Employee."NewIC">)]
    ```

### How to set displayformat follow the option for Grand Total?

A  : Just Enter as Follow code:-

    ```pascal
    [FormatFloat(<Option."StockQuantityDisplayFormat">, SUM(<Main."TotalQty">,MasterData1))]
    ```

OR

    ```pascal
    [FormatFloat(<Option."AccountingValueDisplayFormat">, SUM(<Main."TotalAmt">,MasterData1))]
    ```

### How to set displayformat BlankWhenZero or Hide Zeros if using FormatFloat function?

A  : Just set the display format at Tools | Options | Misc to

    ```pascal
    #,0.00;-#,0.00; ;
    ```

OR

A  : Just Enter as Follow code :-

    ```pascal
    [IIF(SimpleRoundTo(<Document_Detail."Qty">*<Document_Detail."UnitPrice">,-2) <> 0, 
        FormatFloat(<Option."AccountingValueDisplayFormat">, 
        SimpleRoundTo(<Document_Detail."Qty">*<Document_Detail."UnitPrice">,-2)), '')]
    ```

### How to Set Current Date Time plus/minus N?

    ```sql
    procedure DBTxtTimeOnBeforePrint(Sender: TfrxComponent);
    var lDT : variant;
    begin
      //Example deduct 1.5 hours
      lDT := FormatDateTime('dd/MM/yyyy hh:mm AM/PM', Now - 0.0625); //(1.5/24)
      DBTxtTime.Text := lDT;
    end;
    ```

### Page print count base on qty

    ```pascal
    procedure Page1OnBeforePrint(Sender: TfrxComponent);
    begin
        Page1.PageCount := <DocDetail."Qty">;
    end;
    ```

## 26. How to use Line function?

By default system will use **Line#** this will result as

    ```pascal
    Group 1
    1
    2
    3
    Group 2
    4
    5
    6
    ```

Use Line will result in

    ```pascal
    Group 1
    1
    2
    3
    Group 2
    1
    2
    3
    ```

01. Select **System Text**
02. Enter as **Line** in the Text field

## 27. Can I do a running Total for each footer?

Yes just add , 2 in the SUM formula

:::warning
It can't batch Printing (i.e. will keep increasing)
:::

    ```pascal
    [SUM(<Document_Detail."Amount">,DetailData1,2)]
    ```

## 28. How to combine each string lines from detail without line break added?

For example,

| Items   | Qty | Unit Price | Amount |
|---------|-----|------------|--------|
| RM-001  | 20  | 100        | 2000   |
| RM-002  | 40  | 200        | 8000   |

Expected result:

    ```pascal
    RM-001,20,100,2000|RM-002,40,200,8000|
    ```

    ```sql
    var s: string;
    Begin
      s := Items + ',' + VarToStr(Qty) + ',' + VarToStr(Amount) +'|';
      Memo1.Text := '''Copy(Memo1.Text,1,Length(Memo1.Text)-2)''' + s;
    End;
    ```

## 29. How to make sure my report export to Excel as less column usage as possible?

- Below is the guideline

![less-column-usage-1](../../../../static/img/usage/tools/fast-report-faq/less-column-usage-1.jpg)

- Use align to Grid button

![align-to-grid](../../../../static/img/usage/tools/fast-report-faq/align-to-grid.jpg)

- No gap between two component
- Must Align between top & Bottom of component

![diagonal-false](../../../../static/img/usage/tools/fast-report-faq/diagonal-false.jpg)

- Untick **Diagonal** when using Line
- Avoid using Rich Text (TfrRichView)
- Untick **Auto Width**
- Tick **Stretch to Max Height** (for Detail)

## 30. Why when I export to PDF with Chinese Word become "tofu" or box box?

This is because default Font is Tahoma is not support Unicode Font

- Solution : Change the Font To **Microsft YaHei** in Report Designer

![microsoft-yahei-font](../../../../static/img/usage/tools/fast-report-faq/microsoft-yahei-font.jpg)

## 31. How to Maintain the QR Code Size with large Data?

:::note  NOTE: It might be unable to scan if size too small & data too large
:::

![untick-auto-size](../../../../static/img/usage/tools/fast-report-faq/untick-auto-size.jpg)

## 32. How to Show Even Row with Color?

![even-row-with-color-insert-code](../../../../static/img/usage/tools/fast-report-faq/even-row-with-color-insert-code.jpg)

    ```sql
    if <Line#> mod 2 = 1 then
        TfrxBrushFill(DetailData1.Fill).BackColor := clNone else
        TfrxBrushFill(DetailData1.Fill).BackColor := clSilver;
    ```

## 33. How to Add QR Code for E-Invoicing?

:::note Note :
Only Available in Version 852 & above
:::

- [Video](https://download.sql.com.my/customer/Fairy/Steps-FR-FAQ-26.gif)

![barcode-qrcode](../../../../static/img/usage/tools/fast-report-faq/barcode-qrcode.jpg)

![barcode-editor](../../../../static/img/usage/tools/fast-report-faq/barcode-editor.jpg)

![dclick-onbeforeprint](../../../../static/img/usage/tools/fast-report-faq/dclick-onbeforeprint.jpg)

![qrcode-insert-code](../../../../static/img/usage/tools/fast-report-faq/qrcode-insert-code.jpg)

    ```sql
    procedure IRBM_QROnBeforePrint(Sender: TfrxComponent);
    var B : Boolean;
    begin
      B := Trim(<Main."IRBM_ValidationLink">) <> '';
      IRBM_QR.Visible   := B;
      IRBM_QR.Printable := B;
      IRBM_QR.Hyperlink.Value := Trim(<Main."IRBM_ValidationLink">);
    end;
    ```

:::success

- The measurement is in Inch
- This guide is designed for for Laser Printer only
- For Dot Matrix Printer make sure set to 1 for Height

:::

## 34. How to show Document Number at every Page Footer?

- Just add the script on procedure GroupHeader2OnBeforePrint

         ```sql
    procedure GroupHeader2OnBeforePrint(Sender: TfrxComponent);
    begin
    ...
      Memo69.Text := <Main."DocNo">; //Add your script
    end;
         ```

## 35. How to set A5 size to print on A4 paper?

![dclick-onbeforeprint-settings](../../../../static/img/usage/tools/fast-report-faq/dclick-onbeforeprint-settings.jpg)

1. Change paper size to A4
2. Set the Margin
3. Click ok **GroupFooter**: GroupFooter1
4. Double Click **OnBeforePrint** Script

    ![change-onbeforeprint-values](../../../../static/img/usage/tools/fast-report-faq/change-onbeforeprint-values.jpg)

5. Add the value

:::warning
Might have problem if too many knock off which more then 1 page
Height
:::

## 36. Customise Sales Debit Note Prompt Error after upgrade

- Error

![error-assertion-failure](../../../../static/img/usage/tools/fast-report-faq/error-assertion-failure.jpg)

- Solution

![disable-code-using-curlybracket](../../../../static/img/usage/tools/fast-report-faq/disable-code-using-curlybracket.jpg)

## 37. How to Fix Report Tax Rate show A instead of 6% ?

![1](../../../../static/img/usage/tools/fast-report-faq/1.png)

1. Preview the Report format, Click on blue color link and enter into Report Design.

   ![2](../../../../static/img/usage/tools/fast-report-faq/2.png)

2. Check GST Summary using which Pipeline | This Report using plSQL_7.

   ![3](../../../../static/img/usage/tools/fast-report-faq/3.png)

3. Click on Calc Tab.

   ![4](../../../../static/img/usage/tools/fast-report-faq/4.png)

4. Click on Menu View | Select Module

   ![5](../../../../static/img/usage/tools/fast-report-faq/5.png)

5. Click on Events | Click on Main:plSQL_0 | Look for SQL_7(Refer Step 2 to see which pipeline) | Insert TaxRate

   ![6](../../../../static/img/usage/tools/fast-report-faq/6.png)

   Query:

            ```sql
        SQL_7 := 'SELECT DocKey, Tax, TaxRate, Sum(LocalAmount) LocalAmount, Sum(Qty) Qty, Sum(LocalTaxAmt) localTaxAmt, Description '+
            'FROM Document_Detail ' +
            'Where Tax &lt;> ''''' +
            'GROUP BY Dockey, Tax, TaxRate';
            ```

6. Click on Event Handler | Select Procedure ReportBeforePrint | Look for Pipeline SQL_7 | Insert TaxRate

    ![7](../../../../static/img/usage/tools/fast-report-faq/7.png)

    Query:

        ```pascal
        LocalSQL_SELECT(plSQL_7, SQL_7, 'Dockey;Tax;TaxRate');
        ```

7. Click on SubReport1:plSQL_7 Tab

    ![8](../../../../static/img/usage/tools/fast-report-faq/8.png)

8. Click on VarTax | Right Click | Select Calculation

   ![9](../../../../static/img/usage/tools/fast-report-faq/9.png)

9. Amend the Query | Press OK

   - Before Amend:

        ![10](../../../../static/img/usage/tools/fast-report-faq/10.png)

   - After Amend:

        ![11](../../../../static/img/usage/tools/fast-report-faq/11.png)

   Query:

        ```pascal
        Value := plsql_7.getfieldvalue('Tax') + ' @ ' + plsql_7.getfieldvalue('TaxRate');
        ```

10. File | Save

    ![12](../../../../static/img/usage/tools/fast-report-faq/12.png)

11. Close the report builder

12. Preview again the same report format.

    ![13](../../../../static/img/usage/tools/fast-report-faq/13.png)
