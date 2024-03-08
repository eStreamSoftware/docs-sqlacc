---
sidebar_position: 3
id: auto-recon
title: Auto Bank Reconciliation
description: A guide to Auto Bank Reconciliation for SQL Account
slug: /general-ledger/auto-recon
tags: ["SQL Account", "Bank Reconciliation", "General Ledger","Auto"]
---

## Steps and Instructions

### 1. In SQL General Ledger, go to **Bank Reconciliation** -> **Create New**

1. Select the **Bank Statement Date**

2. Select the **Account**

3. Tick **“Show Current Recon Transactions”**

4. Click **Apply**

   ![1](/img/general-ledger/auto-recon/1.png)

5. Click Load Statement

   ![2](/img/general-ledger/auto-recon/2.png)

6. Select your Bank Statement (pdf / csv)

   ![3](/img/general-ledger/auto-recon/3.png)

7. System loading

   ![4](/img/general-ledger/auto-recon/4.png)

8. System will detect the Name of your Bank and prompt message below, Click **Yes** if it is **correct**.

   ![5](/img/general-ledger/auto-recon/5.png)

9. Once you have loaded in your bank statement, bank closing amount will be automatically filled.

   ![6](/img/general-ledger/auto-recon/6.png)

   :::info
   Criteria to Match:

   1. Cheque number + Amount

   2. Description + Amount
   :::

10. System will auto match the transactions with the bank statement and auto ticked. **(yellow highlighted)**

   But some transactions may not be able to auto match **[red box]**

   ![7](/img/general-ledger/auto-recon/7.png)

### 2. Step to match on unmatched transactions with bank statement

1. Click on the untick transaction.

   At the bottom, search for **SAME DR/CR AMOUNT**, you will find that is a **“Match”** button or few “Match” button…(if there are few same amount, eg. 50.00)

   ![8](/img/general-ledger/auto-recon/8.png)

2. Click on “Match” when this is the correct bank transactions for **[Salary for Ali]**

   ![9](/img/general-ledger/auto-recon/9.png)

   After click “Match”, system will auto tick the transactions and show the date and bank description at Bank Statement (Match) Column
