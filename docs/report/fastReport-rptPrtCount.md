---
sidebar_position: 9
id: fastReport-rptPrtCount
title: Fast Report - Report Print Count
description: Teach on how to set the report print count (records per page)
slug: /fastReport-rptPrtCount
tags: ["Fast Report", "Print Count"]
---

# Fast Report - Report Print Count
This Topic will teach you how to set the record count to 20 Records, but there was the disadvantage if having the Item with long description, will cause the record count result no correct.

**Report Before Set Report Count :**  
![1](/img/report/fastReport-rptPrtCount/1.png)
   
**Step to do :**
   1. Go into Report Design
   2. Click on DetailData1 
   3. Click On Events Tab
   4. Double Click on OnBeforePrint. (Refer Pic2)  
   **Pic2 :**
   ![2](/img/report/fastReport-rptPrtCount/2.png)
   5. System will auto bring you to the code page. Insert the Query as Below :  
      &nbsp;&nbsp;&nbsp;&nbsp;if TfrxDetailData(Sender).Visible and (&lt;Line#> mod <mark>20</mark> = 1) and (&lt;Line#> > 1) then Engine.NewPage;  

:::tip[Note]
If you want to change the Record Count to 15, just change the digit I highlight on Yellow :  
      &nbsp;&nbsp;&nbsp;&nbsp;if TfrxDetailData(Sender).Visible and (&lt;Line#> mod <mark>15</mark>= 1) and (&lt;Line#> > 1) then Engine.NewPage;
:::

6. Go to File | Save As | Insert New Report Name 
7. Preview with New Report Name.  
![3](/img/report/fastReport-rptPrtCount/3.png)
8. Done.
