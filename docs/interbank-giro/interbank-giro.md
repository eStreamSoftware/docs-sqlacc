---
sidebar_position: 21
id: interbank giro
title: Interbank GIRO
description: A guide to interbank GIRO for SQL Account
slug: /interbank-giro
tags: ["SQL Account", "GIRO", "IBM"]
---

<!-- # Interbank GIRO -->

<!-- **Tonny/sandbox/supplier-payment-IBG** -->

<!-- From eStream Software
< Tonny/sandbox
![13](/img/interbank-giro/13.png) -->

## How to use Interbank GIRO

:::info
To use **Interbank GIRO** feature, you must have **Interbank GIRO** module enabled in SQL Account.
![1](/img/interbank-giro/1.png)
:::

:::note
**Bank File Format**
The following shows list of banks file format that are currently supported.
![2](/img/interbank-giro/2.png)
:::

### Maintain Payment Method

   1. Click **Bank Info** button.

      ![3](/img/interbank-giro/3.png)

   2. Choose a **bank**.

      ![4](/img/interbank-giro/4.png)

   3. Click **OK** button.

      ![5](/img/interbank-giro/5.png)

   4. The bank you've chosen may have **more than one file format**, please ensure you've chosen the **right file format**

      ![6](/img/interbank-giro/6.png)

   5. Enter **bank information** | Click **OK** button | Save.

      ![7](/img/interbank-giro/7.png)

### Maintain Supplier Bank Account

   1. Add **bank account** | Save.

      ![8](/img/interbank-giro/8.png)

### Supplier Payment Method

   1. Select **Supplier Bank** from drop down list.

      ![9](/img/interbank-giro/9.png)

   2. Choose the **payment method** that contains **bank information** | **Save**.

      ![10](/img/interbank-giro/10.png)

### Print Supplier Document (Interbank GIRO) Listing

   1. Click **Giro** button.

      ![11](/img/interbank-giro/11.png)

   2. Enter additional information | Click **Save** button

      ![12](/img/interbank-giro/12.png)

   3. You can now **upload bank instruction file** to bank host.

## Excel Format

By default, system automatically save an Excel file in **XLSX** format. There are banks (**Alliance Bank, Public Bank, RHB**) require bank instruction file in **XLS** format. First, you must have **Microsoft Excel 2007** or above version installed on your machine. Then, **open** the Excel file and **save as XLS** format.
