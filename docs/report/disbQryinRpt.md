---
sidebar_position: 14
id: disbQryinRpt
title: How to Disable Query in Report
description: Steps to disable query for deleted field in report designer
slug: /disbQryinRpt
tags: ["Report", "ReportBuilder"]
---

# How to Disable Query in Report
![1](/img/report/disbQryinRpt/1.png) 

1. If you had deleted any field in report designer with Query, then u will get above message, click Ok 

![2](/img/report/disbQryinRpt/2.png) 

2. Click on the blue colour report name to enter in report designer page

![3](/img/report/disbQryinRpt/3.png) 

3. Before delete the field, click on the field and see left bottom, you can see the field name or if you had deleted the field refer step 4.

![4](/img/report/disbQryinRpt/4.png) 

4. Click on CALC, go View > Modules 

![5](/img/report/disbQryinRpt/5.png) 

5. 1. Click on Event Handlers
   2. go procedure DetailBeforePrint
   3. you will see the error on bottom , u have to just double click on it .. and system will bring you to the row with 
error 
6) Enter <mark>//</mark> as above screen 

![6](/img/report/disbQryinRpt/6.png) 

7) Right click and compile , make sure no error > save > close the preview screen and try preview again. 

:::info[Note]
You can also refer video at www.sql.com.my on above issue.
:::