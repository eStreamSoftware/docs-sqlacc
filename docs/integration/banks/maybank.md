---
title: Maybank
description: Maybank2u linking integration
slug: /integration/banks/maybank
tags: ["Bank", "Maybank", "Bank Reconciliation"]
---

## Update BRN Number

Navigate to `File` > `Company Profile`

![1](../../../static/img/integration/banks/maybank/company-profile.png)

On **Company Profile**, update `Reg. No (New)` or `(Old)` same with maybank account to be linking.

![2](../../../static/img/integration/banks/maybank/brn.png)

## Maybank Linking

Select ![39](../../../static/img/integration/banks/cloud-icon.png) > `Maintain Cloud Banking` > `Maybank`

![3](../../../static/img/integration/banks/maybank/linking-1.png)

On **Maybank linking dialog**, click on `Connect` to link with Maybank account

![4](../../../static/img/integration/banks/maybank/linking-2.png)

### For Sole Prop

Maybank2u login screen will show up, **login** to your `Maybank account`, **select** `account` to link and **authorize**.

![5](../../../static/img/integration/banks/maybank/maybank-ui-1.png)

### For Non-Sole Prop Account

1. **Maker Account**
    - Maybank2u Biz login screen will show up, **login** to your `Maker` account, **select** `account` to link and **authorize**.

    ![6](../../../static/img/integration/banks/maybank/maybank-ui-2.png)

    - After authorize sucessfull, `Pending` status will show on **Maybank linking dialog**.

    ![7](../../../static/img/integration/banks/maybank/linking-7.png)

2. **Checker Account**
    - The `Checker` account will receive a notification for linking approval.

    - Login to the `Checker` account.

    - Review and approve the linking request to complete the account linking process.

    ![8](../../../static/img/integration/banks/maybank/maybank-ui-3.png)

    - After the linking request has been approved, reopen the **Maybank linking dialog**. `Account approved` message will shown.

    ![9](../../../static/img/integration/banks/maybank/linking-8.png)

### Mapping Payment Method

After linking successful, account linking with payment method dialog will show up, then select the payment method to map.

1. **Click** on `Payment Method` dropdown
2. **Select** `MAYBANK` payment method to map

    ![10](../../../static/img/integration/banks/maybank/linking-3.png)

    :::tip[Hints]
    Maybank allow **up to 3 bank account** to linking at the same time.
    :::

3. **Click** `Link`

    ![11](../../../static/img/integration/banks/maybank/linking-4.png)

4. **Account linking successful** message will show up

    ![12](../../../static/img/integration/banks/maybank/linking-5.png)

5. **Connected** status will display

    ![13](../../../static/img/integration/banks/maybank/linking-6.png)

## Disconnect Maybank Linking

1. On Maybank linking dialog, **Click** on `Disconnect`

    ![14](../../../static/img/integration/banks/maybank/disconnect-1.png)

2. A confirm dialog will prompt, **Click** `Yes` to disconnect

    ![15](../../../static/img/integration/banks/maybank/disconnect-2.png)

3. **Disconnected** message will shhow up

    ![16](../../../static/img/integration/banks/maybank/disconnect-3.png)

## Bank Reconciliation

1. `General Ledger` > `Bank Reconciliation`

    ![17](../../../static/img/integration/banks/maybank/bank-recon-1.png)

2. Select `Bank Statement Date` and select `Maybank` payment method that linked to Mayabank account

    ![18](../../../static/img/integration/banks/maybank/bank-recon-2.png)

3. Select `Date Between` of transactions to load **(up to 60 days of transaction history)** and click `Load Statement`

    ![19](../../../static/img/integration/banks/maybank/bank-recon-3.png)

4. All transaction loaded from Maybank API and mapped transactions will auto match with SQL Account transaction

    ![20](../../../static/img/integration/banks/maybank/bank-recon-4.png)
