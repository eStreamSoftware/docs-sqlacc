---
sidebar_position: 6
id: fastReport-6to0TaxRate
title: Fast Report - How to Change 6% to 0% (show zero instead of blank)
description: A guide to change the tax percentage to 0% instead of leaving it blank
slug: /fastReport-6to0TaxRate
tags: ["Fast Report", "Tax Amount"]
---

# Fast Report - How to Change 6% to 0% (show zero instead of blank)
SQL Account system build in report format will automatic detect your Tax Rate based on your invoice issued.  
- if invoice issued on May it will be show GST @ 6%, invoice issued on June, it will be display GST @ 0%.  
- D/O issue on May, transferred to Invoice and invoice date on June, then system will automatic detect and set your GST rate correctly.  
- However, if your format customized previously, you can refer this guideline on how to change the script from GST @ 6% to GST 0%.  

1. Click on your report name to enter into report designer page.  
![1](/img/report/fastReport-6to0TaxRate/1.png) 

2. 1. Click on this field, you can double check on left panel this field name is MmGST2
    2. go <mark>Event</mark>
    3. double click the empty area beside OnBeforePrint, system will bring you to part D as below

    ![2](/img/report/fastReport-6to0TaxRate/2.png) 

    4. <mark>replace to this script</mark>  
    ![3](/img/report/fastReport-6to0TaxRate/3.png)  
    ![4](/img/report/fastReport-6to0TaxRate/4.png)  

3. Once you complete above step, Click file > <mark>save as</mark>, enter a new report name and exit, then you may preview again your format outcome.