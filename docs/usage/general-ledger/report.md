---
sidebar_position: 2
title: Reports
description: General Ledger Report Info
slug: /usage/general-ledger/report
tags: ["SQL Account", "Usage"]
---

## Ledger Report

1. Go to **GL** > **Print Ledger Report** > Select your date
2. Filter by account, project, area, agent (optional)
3. Tick whether you want to view General Ledger, Sales Ledger(Customer) or Purchase Ledger (Supplier)
4. System can generate by group and give you a summary of each group (group/sort by)
5. In Option Upper Level
    1. **Merge GL Code for same document** – if you have the same account in one single transaction, the system will automatically merge, if you want to separate the account code for the same document, please un-tick.
    2. **Exclude Project when merging** – exclude project when merge GL Account.
    3. **Use second description** – use second description which is maintained under GL > Maintain Chart of Account
    4. **Include Zero Closing Balance** – choose to show accounts in the report even if their amount is 0
    5. **Include Zero Transaction** – choose to show accounts in the report even if there are 0 transactions.
    6. **Local Currency & Foreign Currency** – If you have foreign currency transactions, you can tick the foreign currency so that the system will show the figures in foreign currency compare versus local currency.
    7. **Apply**
![1](../../../static/img/usage/general-ledger/glreport/ledge-rpt.png)

### Balance Sheet

1. Go to **GL** > **Print Balance Sheet** > Select your date

2. Choose your preferred format

3. “Show Up to Level” under Option refer to the depth of sub-accounts in your Maintain Chart of Account, the higher the value, the more level of detail will be shown.

4. In Option Upper Level

    1. **Use second description** – use second description which is controlled at GL > Maintain Chart of Account

    2. **Zero Balance Account** – choose to show accounts in the report even if their amount is 0.

    3. **Display Trade Debtor/Creditor in Details** – show per customer account in detail

5. In Option Bottom Level

    1. **Print Sub Account Only** – Select a certain account to view

    2. **Print Project Comparison** – you are allowed to view your report by project (project module requested)

    3. **Show Column Options** – you can preset setting as attached

6. **Apply**

![2](../../../static/img/usage/general-ledger/glreport/bal-sheet.png)

### Profit & Loss Statement

1. Go to **GL** > **Print Profit and Loss Statement** > Select your date

2. Choose your preferred format

3. In Option Upper Level

   1. **Use second description** – use second description which is maintained under GL > Maintain Chart of Account

   2. **Zero Balance Account** – choose to show accounts in the report even if their amount is 0

4. In Option Upper Level

   1. **Print Sub Account Only** – Select a certain account to view

   2. **Print Manufacturing Account** – you are only allowed to view manufacturing account if you have set it up under Maintain Chart of Account

   3. **Print Project Comparison** – you are allowed to view your report by project (project module requested)

   4. **Show Column Options** – refer Balance Sheet

5. **Apply**

   ![3](../../../static/img/usage/general-ledger/glreport/pnl-state.png)

### Trial Balance

1. Go to **GL** > **Print Trial Balance** > Select your date

2. Filter by project, area, agent (optional)

3. Tick whether you want to view General Ledger, Sales Ledger(Customer) or Purchase Ledger (Supplier)

4. In Option Upper Level

   1. **Use second description** – use second description is which maintained under GL > Maintain Chart of Account

   2. **Zero Balance Account** – choose to show accounts in the report even if their amount is 0

5. **Apply**

   ![4](../../../static/img/usage/general-ledger/glreport/trial-bal.png)
