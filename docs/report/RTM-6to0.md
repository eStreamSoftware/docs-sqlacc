---
sidebar_position: 20
id: RTM-6to0
title: RTM Report - How to Change 6% to 0% (show zero instead of blank)
description: A guide to change RTM Report tax rate and show 0% instead of blank
slug: /report/RTM-6to0
tags: ["Report", "ReportBuilder"]
---

SQL Account system build in report format will automatic detect your Tax Rate based on your invoice issued.

- if invoice issued on May it will show GST @ 6%, while invoice issued on June will display GST @ 0%.
- D/O issued on May, transferred to Invoice and invoice date is in June, then system will automatic detect it and set the GST rate correctly.
- However, if your format is customized previously, you can refer this guideline on how to change the script from GST @ 6% to GST 0% .

## Steps & Instructions

1. Click on your report name to enter into report designer page.

   ![1](/img/report/RTM-6to0/1.png)

2. Follow the steps below:

   1. Go to **Calc**, click on **View** > select **Module**

      ![2](/img/report/RTM-6to0/2.png)

   2. Go **Event Handlers**

   3. Go **Procedure lbTaxAmtOnGetText(var Text:String);**

   4. Replace to this script:

      >var s : string;
      >
      >begin
      >
      >if (plSQL_0.GetFieldValue('TaxDate') < '01 Jun >2018') or
      >
      >>(VarToCurr(plSQL_1.GetFieldValue('TaxAmt')) &lt;> 0) then
      >>
      >>s := 'GST Amt @ 6% ' else
      >>
      >>s := 'GST Amt @ 0% ';
      >
      >if plSQL_2.GetFieldValue('Code') &lt;> '----' >then
      >
      >>Text := s + '(RM) :' else
      >>
      >>Text := s + ':';
      >
      >end;

   ![3](/img/report/RTM-6to0/3.png)

## Display Tax as 0.00 Instead of Blank

1. Click on your report name to enter into report designer page.

   ![4](/img/report/RTM-6to0/4.png)

2. Go to **Calc**, click on **View** and select **Events**

   ![5](/img/report/RTM-6to0/5.png)

3. Find **DBTxtTax**and select **OnGetText**, then paste the script as below:

   >begin
   >
   >if Trim(plSQL_1.GetFieldValue('TaxAmt')) = '' then
   >
   >>Text := '0.00' ;
   >
   >end;

   ![6](/img/report/RTM-6to0/6.png)

Once you completed, save the report and exit, then you may preview again your format outcome.
