---
sidebar_position: 20
id: RTM-6to0
title: RTM Report - How to Change 6% to 0% (show zero instead of blank)
description: A guide to change RTM Report tax rate and show 0% instead of blank
slug: /RTM-6to0
tags: ["Report", "ReportBuilder"]
---

# RTM Report - How to Change 6% to 0% (show zero instead of blank)

SQL Account system build in report format will automatic detect your Tax Rate based on your invoice issued.

- if invoice issued on May it will be show GST @ 6%, invoice issued on June, it will be display GST @ 0%.
- D/O issue on May, transferred to Invoice and invoice date on June, then system will automatic detect and set your GST rate correctly.
- However, if your format customized previously, you can refer this guideline on how to change the script from GST @ 6% to GST 0% .

1. Click on your report name to enter into report designer page. 

   ![1](/img/report/RTM-6to0/1.png)

2. 1. Go to <mark>Calc</mark>, click on <mark>View</mark> > select <mark>Module</mark>

   ![2](/img/report/RTM-6to0/2.png)

   2. Go <mark>Event Handlers</mark>
   3. Go <mark>Procedure lbTaxAmtOnGetText(var Text:String);</mark>
   4. Replace to this script: 

      *var s : string;  
      begin   
      if (plSQL_0.GetFieldValue('TaxDate') < '01 Jun 2018') or   
      &emsp;(VarToCurr(plSQL_1.GetFieldValue('TaxAmt')) &lt;> 0) then  
      &emsp;s := 'GST Amt @ 6% ' else  
      &emsp;s := 'GST Amt @ 0% ';  
      if plSQL_2.GetFieldValue('Code') &lt;> '----' then  
      &emsp;Text := s + '(RM) :' else  
      &emsp;Text := s + ':';   
      end;*

   ![3](/img/report/RTM-6to0/3.png)

## Want to display it to 0.00 instead blank? 

1. Click on your report name to enter into report designer page.

   ![4](/img/report/RTM-6to0/4.png)

2. Go to <mark>Calc</mark>, click on <mark>View</mark> and select <mark>Events</mark>

   ![5](/img/report/RTM-6to0/5.png)

3. Find <mark>DBTxtTax</mark> and select <mark>OnGetText</mark>, then paste the script as below:

   *begin  
   if Trim(plSQL_1.GetFieldValue('TaxAmt')) = '' then  
   &emsp;Text := '0.00' ;  
   end;*

   ![6](/img/report/RTM-6to0/6.png)

Once you completed, save the report and exit, then you may preview again your format outcome.