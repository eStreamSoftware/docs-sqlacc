---
sidebar_position: 11
id: fastReport-stpPos
title: Fast Report - Stop Position
description: A guide to set stop position 
slug: /fastReport-stpPos
tags: ["Fast Report", "Stop Position"]
---

# Fast Report - Stop Position
Stop Position is set when you want to stop print the  detail record. This way will be better compare set by record count. It will get more accurate output.

**Example set the Stop Position with 912 :**
![1](/img/report/fastReport-stpPos/1.png)
1. Go into Report Design
2. Click on DetailData1
3. Click on Events
4. Double Click on AfterCalcHeight. (Refer **Pic1**)

   **Pic1:**
   ![2](/img/report/fastReport-stpPos/2.png)

5. System will auto go to Code Page  
   :::tip[TIPS]
   If you want to stop on 9 Inch, then you have to convert to Pixel.  
   1 Inch = 96 Pixel, So if you want stop on 9 Inch, then use 9 *96 = 864 Pixel.
   :::
   **Pic2:**
   ![3](/img/report/fastReport-stpPos/3.png)

   Coding :

   if TfrxDetailData(Sender).Visible and (Engine.CurY + DetailData1.Height >= 864) then Engine.NewPage;

6. File |save as | Enter New Report Name

7. Preview with new report name to see the result.

**Example Result after set to 864 Pixel :** 
![4](/img/report/fastReport-stpPos/4.png)