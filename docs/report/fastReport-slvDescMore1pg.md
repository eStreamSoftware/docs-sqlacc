---
sidebar_position: 10
id: fastReport-slvDescMore1pg
title: Fast Report – Solving More Description more than 1 page
description: A guide to solve the problem of long description which causes the first page to be blank
slug: /fastReport-slvDescMore1pg
tags: ["Fast Report"]
---

# Fast Report – Solving More Description more than 1 page

If More Description more than 1 page, first page will show blank.

Example Problem Report :  
![1](/img/report/fastReport-slvDescMore1pg/1.png)

**Step to Solve :**   
1. Click on Blue Color Report Name in bottom. 

   1.1 Click on DetailData1  

   1.2 Click on Events  

   1.3 Double Click on OnAfterCalc Script (Refer **Pic 2**)  

   **Pic 2:**
   ![2](/img/report/fastReport-slvDescMore1pg/2.png)  

   1.4 System will bring you to Code Page, then just have to disable the Script, just added symbol // infront of the script. (Refer **Pic 3**)  

   **Pic 3:**  
   ![3](/img/report/fastReport-slvDescMore1pg/3.png)

   1.5 Go back to Page1 Tab  
   ![4](/img/report/fastReport-slvDescMore1pg/4.png)  

   1.6 Right Click on DetailData1 | Tick Allow Split.(Refer **Pic 4**)   

   **Pic 4:**  
   ![5](/img/report/fastReport-slvDescMore1pg/5.png)  

   1.7 Right Click on Qty DBText | Untick Auto Width. (Refer **Pic5**) 

   **Pic 5:**  
   ![6](/img/report/fastReport-slvDescMore1pg/6.png)  

   1.8 Do the same Step 1.7 for UnitPrice, SubTotal, Total Exc GST, GST Amt, Total Inc GST and Tax.(Refer **Pic6**) 

   **Pic 6:**   
   ![7](/img/report/fastReport-slvDescMore1pg/7.png)  

   1.9 Click on Group Footer1  

   1.10 Click on Events   

   1.11 Double Click on OnBefore. (Print.Refer **Pic 7**)  

   **Pic 7:**  
   ![8](/img/report/fastReport-slvDescMore1pg/8.png)

   1.12 In Code Page, Remove the – 60

   **Before:**
      ![9](/img/report/fastReport-slvDescMore1pg/9.png)

   **After Amend:**
      ![10](/img/report/fastReport-slvDescMore1pg/10.png)
   
   1.13 Go Back to Page1 Tab | Page footer1 make it closer. (Refer **Pic 8**)

   **Pic 8:**  
   ![11](/img/report/fastReport-slvDescMore1pg/11.png)

   1.14 Go to File | Page Setting | Bottom Set to 2.5  
   ![12](/img/report/fastReport-slvDescMore1pg/12.png)

   1.15 File | Save As | Input New Report Name 

   1.16 Preview again 

   1.17 Problem Solved
   ![13](/img/report/fastReport-slvDescMore1pg/13.png)

   1.18 Done