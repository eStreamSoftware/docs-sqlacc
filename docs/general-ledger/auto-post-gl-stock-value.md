---
sidebar_position: 3
id: auto-post-gl-stock-value
title: Auto Post GL Stock Value by Project
description: A guide to  Auto Post GL Stock Value With Project for SQL Account
slug: /general-ledger/auto-post-gl-stock-value
tags: ["SQL Account", "Auto Post","General Ledger", "Stock Value"]
---

:::caution
**Auto Maintain Stock Value with Project** is supported in Version 839 and Above.
:::

## 1: Turn on Auto Post GL Stock Value Option

1. Click on **Tools**

2. Click on **Option**

    ![1](/img/general-ledger/auto-post-gl-stock-value/1.png)

3. Click on **Miscellaneous**

4. Tick on **Auto Post GL Stock Value**

    ![2](/img/general-ledger/auto-post-gl-stock-value/2.png)

## 2 : Map Balance Sheet Stock Account in Maintain Stock Group

1. Click on **Stock**

2. Click on **Maintain Stock Group**

    ![3](/img/general-ledger/auto-post-gl-stock-value/3.png)

3. Click on **Edit**

4. **Choose** the Account Code for your Stock Value Posting

5. Click on **Save**

    ![4](/img/general-ledger/auto-post-gl-stock-value/4.png)

    :::note
    Ensure that all Stock Groups are mapped to the **Balance Sheet Account Code (A)**
    :::

    ![5](/img/general-ledger/auto-post-gl-stock-value/5.png)

## 3 : Map Project Code in Maintain Location

1. Click on **Stock**

2. Click on **Maintain Location**

    ![6](/img/general-ledger/auto-post-gl-stock-value/6.png)

3. Click on **Edit**

4. You can set your stock project for each location

5. **Save**

    ![7](/img/general-ledger/auto-post-gl-stock-value/7.png)

    :::info
    Ensure that all Location are mapped to the **Project Code (A)**
    :::

    ![8](/img/general-ledger/auto-post-gl-stock-value/8.png)

    :::info
    Note : May ignore this step if you have **only 1** Project.
    :::

## 4 : Maintain Stock Month End, to show the total Stock Value for default project and P1

:::info Example A
Project Code : ----

Closing Stock : 308534.22
:::

![9](/img/general-ledger/auto-post-gl-stock-value/9.png)

:::info Example B
Project Code : P1

Closing Stock : 3560.00
:::

![10](/img/general-ledger/auto-post-gl-stock-value/10.png)

## 5 : Apply Financial Report will auto update Stock value

:::note
When you apply **Profit & Loss Statement, Balance Sheet or Trial Balance Report**,
system will automatically retrieve the Stock value from Stock Month End
Balance and present it in financial report. Additionally, the system will update
closing Stock value to **Maintain Stock Value**.
:::

1. This is a sample of a Balance Sheet Statement report to show a **Closing Stock Value**.

    ![11](/img/general-ledger/auto-post-gl-stock-value/11.png)

:::info
Note : When Fall Outside Maintain Acceptable Trans Date range, the system will no longer retrieve the Stock
Value from the Stock Month End Balance and will silently bypass the update.
:::
