---
sidebar_position: 5
id: fastReport-footerTxtLstPg
title: Fast Report - Guide In Page Footer only display the Text Object in Last Page
description: How to display only text object in the page footer of the last page
slug: /report/fastReport-footerTxtLstPg
tags: ["Fast Report", "Footer"]
---

## Steps & Instruction

1. Click on the object you want to show only in Last Page

   ![1](/img/report/fastReport-footerTxtLstPg/1.png)

   1. Click on your Object
   2. Click on Events Tab
   3. Click on OnbeforePrint | Double Click it
   4. Place this query inside the Code page.

      ![2](/img/report/fastReport-footerTxtLstPg/2.png)

   Coding :

   >if &lt;page#&gt; = &lt;totalpages#&gt; then
   >
   >>shape3.visible := true
   >
   >else
   >
   >>shape3.Visible := false;
