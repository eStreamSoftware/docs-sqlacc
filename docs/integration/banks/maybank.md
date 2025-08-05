---
title: Maybank
description: Maybank2u linking integration
slug: /integration/banks/maybank
tags: ["SQL Account", "Linking", "Bank", "Maybank", "Bank Reconciliation"]
---

## Update BRN Number

Navigate to `File` > `Company Profile`

![1](../../../static/img/banking/maybank/company-profile.png)


On **Company Profile**, update `Reg. No (New)` or `(Old)` same with maybank account to be linking.

![2](../../../static/img/banking/maybank/brn.png)

## Maybank Linking

Select ![39](../../../static/img/banking/cloud-icon.png) > `Maintain Cloud Banking` > `Maybank`

![3](../../../static/img/banking/maybank/linking-1.png)

On **Maybank linking dialog**, click on `Connect` to link with Maybank account

![4](../../../static/img/banking/maybank/linking-2.png)


Maybank login screen will show up, **login** to your `Maybank account`, **select** `account` to link and **authorize**.

![5](../../../static/img/banking/maybank/maybank-ui.png)


After linking successful, account linking with payment method dialog will show up, then select the payment method to map.

1. **Click** on `Payment Method` dropdown
2. **Select** `MAYBANK` payment method to map

    ![6](../../../static/img/banking/maybank/linking-3.png)

    :::tip[Hints]
    Maybank allow **up to 3 bank account** to linking at the same time.
    :::

3. **Click** `Link`

    ![7](../../../static/img/banking/maybank/linking-4.png)

4. **Account linking successful** message will show up

    ![8](../../../static/img/banking/maybank/linking-5.png)

5. **Connected** status will display

    ![9](../../../static/img/banking/maybank/linking-6.png)


### Disconnect Maybank Linking

1. On Maybank linking dialog, **Click** on `Disconnect`

    ![10](../../../static/img/banking/maybank/disconnect-1.png)

2. A confirm dialog will prompt, **Click** `Yes` to disconnect

    ![11](../../../static/img/banking/maybank/disconnect-2.png)

3. **Disconnected** message will shhow up

    ![12](../../../static/img/banking/maybank/disconnect-3.png)


## Bank Reconciliation

1. `General Ledger` > `Bank Reconciliation`

    ![13](../../../static/img/banking/maybank/bank-recon-1.png)

2. Select `Bank Statement Date` and select `Maybank` payment method that linked to Mayabank account

    ![14](../../../static/img/banking/maybank/bank-recon-2.png)

3. Select `Date Between` of transactions to load **(up to 60 days of transaction history)** and click `Load Statement`

    ![15](../../../static/img/banking/maybank/bank-recon-3.png)

4. All transaction loaded from Maybank API and mapped transactions will auto match with SQL Account transaction

    ![16](../../../static/img/banking/maybank/bank-recon-4.png)