---
sidebar_position: 3
id: solution-gl-report-ref1-as-new
title: General Ledger Report Ref1(DocNo) appear as <<New>>
description: A Solution for General Ledger Report Ref1(DocNo) appear as <<New>> for SQL Account
slug: /general-ledger/solution-gl-report-ref1-as-new
tags: ["SQL Account", "Report", "General Ledger", "Doc No", "Solution"]
---

![1](/img/general-ledger/solution-gl-report-ref1-as-new/1.png)

## Method 1

1. Drill down the document to check the source for this document. **(Refer Pic2)**

    ![2](/img/general-ledger/solution-gl-report-ref1-as-new/2.png)

2. Drill down to Journal Entry, look for the Date 31/03/2015(Because Ledger Date is 31/03/15)

    ![3](/img/general-ledger/solution-gl-report-ref1-as-new/3.png)

3. Press Edit and Save Button for all the Date is 31/03/2015.

4. After Edit and Save, apply the Ledger to see the result. **(Refer Pic4)**

    ![4](/img/general-ledger/solution-gl-report-ref1-as-new/4.png)

5. Done

## Method 2

:::danger
Only to use if have a lot of transaction need Edit and Save.
:::

1. Download &lt;SQL Accounting Diagnosis> from [here](http://www.sql.com.my/utility) , After download, please install.

2. You can see on desktop there is new icon &lt;SQLAcc Diagnosis> , activate it.**(Refer Pic 5)**

    ![5](/img/general-ledger/solution-gl-report-ref1-as-new/5.png)

3. Must Logon ONLY the **problem Database**, no matter in server or workstation also can run.

4. In SQLAcc Diagnosis | Menu Bar - Diagnosis 2 | Click on Reposting **(Refer Pic6)**

    ![6](/img/general-ledger/solution-gl-report-ref1-as-new/6.png)

5. When error prompt, press ok will do. **(Refer Pic7)**

    ![7](/img/general-ledger/solution-gl-report-ref1-as-new/7.png)

6. Set the Date Range and choose which Area to Repost. **(Refer Pic8)**

    ![8](/img/general-ledger/solution-gl-report-ref1-as-new/8.png)

7. Press OK when repost Done.

    ![9](/img/general-ledger/solution-gl-report-ref1-as-new/9.png)

8. Apply the Ledger to see the result.

9. Done
