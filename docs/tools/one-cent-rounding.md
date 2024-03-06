---
sidebar_position: 8
id: one-cent-rounding
title: Customer One Cent Rounding
description: A guide to one cent rounding for SQL Account
slug: /tools/one-cent-rounding
tags: ["SQL Account", "Tools", "Rounding"]
---

:::note
 Once Cent different Rounding(Local Currency Fields) for all AR/SL Documents **(Recommended)**
:::

## 1. Tools | Option | Customer

![1](/img/tools/one-cent-rounding/1.png)

1. Tick One Cent Different Rounding (Local Currency Fields) for all /AR/SL Documents **(Recommend)**

2. Press OK

## 2. Sales Invoice | New | Refer below screen

![2](/img/tools/one-cent-rounding/2.png)

:::caution
But once you save you will notice the first line of the Tax Amount will be different, this is because system
using Total Amount of IV to calculate 6%. Refer below Screen:
:::

![3](/img/tools/one-cent-rounding/3.png)

Formula: Sum up SubTotal with Tax, Multiple with 6% **(Note : system will exclude the Subtotal if the Tax Rate is 0%)**

Tax Amount Calc = RM 15.54 * 6% = 0.93, mostly system will reverse on first line of the Item.

:::note
If you don’t want system to help you to do the One Cent Rounding, please refer Step 1 to un-tick the option will do.
:::
