---
sidebar_position: 6
id: fastReport-6to0TaxRate
title: Fast Report - How to Change 6% to 0% (show zero instead of blank)
description: A guide to change the tax percentage to 0% instead of leaving it blank
slug: /report/fastReport-6to0TaxRate
tags: ["Fast Report", "Tax Amount"]
---

SQL Account system build in report format will automatic detect your Tax Rate based on your invoice issued.

- If invoice issued on May, it will show GST @ 6%, while invoice issued on June, it will display GST @ 0%.
- If your Delivery Order (D/O) is issued on May, transferred to Invoice and invoice date on June, the system will automatic detect and set your GST rate correctly.
- However, if your format customized previously, you can refer this guideline on how to change the script from GST @ 6% to GST 0%.

## Steps & Instructions

1. Click on your report name to enter into report designer page.

    ![1](/img/report/fastReport-6to0TaxRate/1.png)

2. Refer to the image below for the follow instructions,

   1. Click on this field, you can double check on left panel, the field name is **MmGST2**

   2. go **Event**

   3. double click the empty area beside **OnBeforePrint**, system will bring you to step iv as below

        ![2](/img/report/fastReport-6to0TaxRate/2.png)

   4. **replace to this script**

        ![3](/img/report/fastReport-6to0TaxRate/3.png)

        ![4](/img/report/fastReport-6to0TaxRate/4.png)

3. Once you complete the steps above, Click file > **save as**, enter a new report name and exit, then you may preview again your format outcome.
