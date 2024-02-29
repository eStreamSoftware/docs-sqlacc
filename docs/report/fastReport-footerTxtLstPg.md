---
sidebar_position: 5
id: fastReport-footerTxtLstPg
title: Fast Report - Guide In Page Footer only display the Text Object in Last Page
description: How to display only text object in the page footer of the last page
slug: /fastReport-footerTxtLstPg
tags: ["Fast Report", "Footer"]
---

# Fast Report - Guide In Page Footer only display the Text Object in Last Page
1. Click on the object you want to show only in Last Page   
![1](/img/report/fastReport-footerTxtLstPg/1.png) 
   Step 1.1 : Click on your Object  
   Step 1.2 : Click on Events Tab  
   Step 1.3 : Click on OnbeforePrint | Double Click it  
   Step 1.4 : Place this query inside the Code page. (Refer Pic2)  
   
   Pic2 :
   ![2](/img/report/fastReport-footerTxtLstPg/2.png) 

Coding :  
&nbsp;&nbsp;&nbsp;&nbsp;if &lt;page#&gt; = &lt;totalpages#&gt; then  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shape3.visible := true  
&nbsp;&nbsp;&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shape3.Visible := false;