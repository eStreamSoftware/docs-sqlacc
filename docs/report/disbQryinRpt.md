---
sidebar_position: 14
id: disbQryinRpt
title: How to Disable Query in Report
description: Steps to disable query for deleted field in report designer
slug: /report/disbQryinRpt
tags: ["Report", "ReportBuilder", "Query"]
---

## Steps & Instructions

1. If you had deleted any field in report designer with Query, then u will get the below message, click **OK**

   ![1](/img/report/disbQryinRpt/1.png)

2. Click on the blue colour report name to enter in report designer page

   ![2](/img/report/disbQryinRpt/2.png)

3. Click on the field, the field name will be shown at the left bottom of the application as shown below. If you had deleted the field, refer to step 4.

   ![3](/img/report/disbQryinRpt/3.png)

4. Click on **CALC**, go View > Modules

   ![4](/img/report/disbQryinRpt/4.png)

5. Follow the steps below:

   1. Click on **Event Handlers**

   2. Go to **procedure DetailBeforePrint**

   3. An error will be shown at the bottom, double click on it, and the system will redirect to the row with the error

   ![5](/img/report/disbQryinRpt/5.png)

6. Enter '//' as in the image below :

   ![6](/img/report/disbQryinRpt/6.png)

7. Right click and compile , make sure no error > save > close the preview screen and try preview again.

:::info[Note]
You can also refer to the guidance video at [HERE](https://www.sql.com.my/) regarding the above issue.
:::
