---
sidebar_position: 10
id: fastReport-MoreDescMultipage.md
title: Fast Report – Display More Description in Multiple Page
description: A guide to solve the problem of long description which causes the first page to be blank
slug: /report/fastReport-MoreDescMultipage.md
tags: ["Fast Report", "Description"]
---

## Steps & Problems

### Problem

- If More Description more than 1 page, first page will show blank.

- Example Problem Report :

   ![1](../../static/img/report/fastReport-MoreDescMultipage/1.png)

### Steps to Solve

1. Click on ***Blue Color Report Name*** in bottom.

   1. Click on **DetailData1**

   2. Click on **Events**

   3. Double Click on **OnAfterCalc Script**

      ![2](../../static/img/report/fastReport-MoreDescMultipage/2.png)

   4. The system will redirect to Code Page, then disable the script by adding the symbol '**//**' infront of the script.

      ![3](../../static/img/report/fastReport-MoreDescMultipage/3.png)

   5. Go back to **Page1 Tab**

      ![4](../../static/img/report/fastReport-MoreDescMultipage/4.png)

   6. Right Click on **DetailData1** | Tick **Allow Split**.

      ![5](../../static/img/report/fastReport-MoreDescMultipage/5.png)

   7. Right Click on **Qty DBText** | Untick **Auto Width**.

      ![6](../../static/img/report/fastReport-MoreDescMultipage/6.png)

   8. Do the same Step 7 for **UnitPrice**, **SubTotal**, **Total Exc GST**, **GST Amt**, **Total Inc GST** and **Tax**

      ![7](../../static/img/report/fastReport-MoreDescMultipage/7.png)

   9. Click on **Group Footer1**

   10. Click on **Events**

   11. Double Click on **OnBeforePrint**.

         ![8](../../static/img/report/fastReport-MoreDescMultipage/8.png)

   12. In Code Page, Remove the "**– 60**" from the code

         **Before:**

            ![9](../../static/img/report/fastReport-MoreDescMultipage/9.png)

         **After Amend:**

            ![10](../../static/img/report/fastReport-MoreDescMultipage/10.png)

   13. Go Back to **Page1 Tab** | make **Page footer1** closer.

         ![11](../../static/img/report/fastReport-MoreDescMultipage/11.png)

   14. Go to File | Page Setting | Bottom set to 2.5

         ![12](../../static/img/report/fastReport-MoreDescMultipage/12.png)

   15. File | Save As | Input New Report Name

   16. Preview again

   17. Problem Solved

         ![13](../../static/img/report/fastReport-MoreDescMultipage/13.png)
