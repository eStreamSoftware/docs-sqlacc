---
sidebar_position: 4
id: customer-supplier-contra
title: Customer contra and Supplier contra
description: A guide on Customer contra ans Supplier contra for SQL Account
slug: /customer/customer-supplier-contra
tags: ["SQL Account", "Customer contra", "Supplier contra"]
---

If you have a customer who is also a supplier, you may want to offset the outstanding customer
and supplier invoices. This is known as making a contra entry. You can offset the two invoices by
using Customer Contra and Supplier Contra. This means when you record the invoices as being
paid, it doesn’t affect your current bank account balance.

For example:

If you have an outstanding sales invoice for RM200 and a purchase invoice for RM150 for the
same person or company, the actual amount owed to you is RM 50 and the contra entry amount
is RM150.

## Setting step

![1](/img/customer/contra/1.png)

1. Tools | Options

   ![2](/img/customer/contra/2.png)

2. General Ledger | make sure you had chosen a valid Contra Account

   **Step :**

   ![3](/img/customer/contra/3.png)

   1. Go Customer | Customer Contra

      ![4](/img/customer/contra/4.png)

   2. Press on NEW

      ![5](/img/customer/contra/5.png)

      1. Select your Customer Code

      2. Enter your Contra Amount

      3. Knock off your Invoice

      4. Press on SAVE Button

      5. System will auto generated a Contra Number, jot down the number and go **Supplier contra** to edit it.

      ![6](/img/customer/contra/6.png)

   3. Go Supplier | Supplier Contra

      ![7](/img/customer/contra/7.png)

   4. Look for the Same Contra Number (refer step 3e), EDIT it.

      ![8](/img/customer/contra/8.png)
      1. Select your Supplier

      2. Enter Contra Amount (Must be same as Customer Contra Amount)

      3. Knock off your Supplier Invoice

      4. Press on SAVE Button

After you post the contra entry:

- The outstanding amount on the sales invoice is RM50.

- The purchase invoice is fully knock off.

- When you receive the RM50, you can record this against the sales invoice using your normal Customer Payment entry.
