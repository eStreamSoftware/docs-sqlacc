---
sidebar_position: 11
id: fastReport-stpPos
title: Fast Report - Stop Position
description: A guide to set stop position
slug: /report/fastReport-stpPos
tags: ["Fast Report", "Stop Position"]
---

Stop Position is set to stop printing the detail record. This way will be better as compared of setting record count. It will get more accurate output.

## Steps & Instructions

**Example of setting the Stop Position with 912 Pixel :**

![1](/img/report/fastReport-stpPos/1.png)

1. Go into Report Design

2. Click on **DetailData1**

3. Click on **Events**

4. Double Click **onAfterCalcHeight**.

   ![2](/img/report/fastReport-stpPos/2.png)

5. The system will redirect to Code Page

   :::tip[TIPS]
   If you want to stop on 9 Inch, then you have to convert to Pixel.

   1 Inch = 96 Pixel, So if you want stop on 9 Inch, then use 9 *96 = 864 Pixel.
   :::

   ![3](/img/report/fastReport-stpPos/3.png)

   Coding :

   > if TfrxDetailData(Sender).Visible and (Engine.CurY + DetailData1.Height >= 864) then Engine.NewPage;

6. File | save as | Enter New Report Name

7. Preview with new report name to see the result.

**Example Result after set to 864 Pixel :**

![4](/img/report/fastReport-stpPos/4.png)