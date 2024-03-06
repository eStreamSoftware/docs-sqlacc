---
sidebar_position: 3
id: posting-date
title: Posting Date
description: A guide about posting date for SQL Account
slug: /additional-module/posting-date
tags: ["SQL Account", "Additional Module"]
---

## Double Date

SQL has a double date module that you can use to set a separate posting date for your document date. In order to using this feature, you need to make sure you have the module.

### How to check if you have Post Date Module?

1) Go to **File**

2) **Customize SQL Account Modules.**

3) “Document Date, Posting Date” should be ticked

   ![1](/img/additional-module/posting-date/1.png)

### How to set posting date?

1) For example, we can go to **Sales invoice**

   ![2](/img/additional-module/posting-date/2.png)

2) Right click on the word Invoice and select “**Set Posting Date**”

3) Key in your desired posting date. For example, we set the posting date as 30/09/2021 for this invoice

   ![3](/img/additional-module/posting-date/3.png)

4) Press **OK** and then Save once you have keyed in the date. You will be able to see the posting date on the top left of your invoice

   ![4](/img/additional-module/posting-date/4.png)

### Effects of Post Date in Customer Aging Report

The customer’s invoice aging will be based on the posting date. For example. If you view the aging based on the document date, it will not be displayed.

1) Invoice IV-00136 is **not displayed** in **August 2021 Customer Aging**

   ![5](/img/additional-module/posting-date/5.png)

2) Invoice IV-00136 is only **displayed** in **September 2021 Customer Aging**

   ![6](/img/additional-module/posting-date/6.png)
