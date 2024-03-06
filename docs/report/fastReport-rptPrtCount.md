---
sidebar_position: 9
id: fastReport-rptPrtCount
title: Fast Report - Report Print Count
description: Teach on how to set the report print count (records per page)
slug: /report/fastReport-rptPrtCount
tags: ["Fast Report", "Print Count"]
---

## Steps & Instructions

**Report Before Set Report Count :**

![1](/img/report/fastReport-rptPrtCount/1.png)

**Step to do :**

1. Go into Report Design

2. Click on DetailData1

3. Click On Events Tab

4. Double Click on OnBeforePrint.

      ![2](/img/report/fastReport-rptPrtCount/2.png)

5. System will auto bring you to the code page. Insert the Query as Below :

      >if TfrxDetailData(Sender).Visible and (&lt;Line#> mod **20** = 1) and (&lt;Line#> > 1) then Engine.NewPage;

      :::tip[Note]
      If you want to change the Record Count to 15, just change the bolded digit:

            >if TfrxDetailData(Sender).Visible and (&lt;Line#> mod **15** = 1) and (&lt;Line#> > 1) then Engine.NewPage;
      :::

6. Go to File | Save As | Insert New Report Name

7. Preview with New Report Name.

      ![3](/img/report/fastReport-rptPrtCount/3.png)
