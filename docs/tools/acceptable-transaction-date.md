---
sidebar_position: 8
id: acceptable-transaction-date
title: Maintain Acceptable Transaction Date
description: A guide to Maintain Acceptable Transaction Date for SQL Account
slug: /tools/acceptable-transaction-date
tags: ["SQL Account", "Tools", "Transaction Date","Maintain"]
---

:::info
SQL can no need perform year end, it will auto doing cut off. Once account closed, if you wish to
block the period to avoid your users changed the account figure, you may do this setting.
:::

Date that sets between allowed transaction date are **ALLOWING** the document to be edited in
between the dates. Vice-versa, date that falls outside the transaction period are not allowed to be
edit or created.

:::note Scenario A
My Financial Period is on (1/1/20XX – 31/12/20XX), I have close the financial year for 2019, I wish to
block the period to avoid user edit or created, what should I do?
:::

## Set Acceptable Transaction Date

1. Tools > Maintain Acceptable Transaction Date

    ![1](/img/tools/acceptable-transaction-date/1.png)

2. Click on Append (Icon with + symbol) then select the date from and date to

    ![2](/img/tools/acceptable-transaction-date/2.png)

3. After selecting date from and date to, Save it

    ![3](/img/tools/acceptable-transaction-date/3.png)

4. After do the setting, This is the results: It will show the message that shows out if users try to save a document that are not in acceptable transaction period

    ![4](/img/tools/acceptable-transaction-date/4.png)

Thus, you are not allowed to edit the document which is fall outside of the period…

## Maintain Access Rights

:::info
TIPS: Please maintain access rights before allowing any user to override the acceptable transaction date.
:::

1. Tools > Maintain User

    ![5](/img/tools/acceptable-transaction-date/5.png)

2. Edit the user > Click on more > Access Control

    ![6](/img/tools/acceptable-transaction-date/6.png)

3. Go to Group : Tools > Untick Maintain Acceptable Transaction Date and Override Acceptable Transaction Date > Save

    ![7](/img/tools/acceptable-transaction-date/7.png)
