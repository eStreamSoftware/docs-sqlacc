---
sidebar_position: 2
id: landing-cost
title: Landing Cost
description: A guide about landing cost for SQL Account
slug: /additional-module/landing-cost
tags: ["SQL Account", "Additional Module"]
---

## Introduction

Landing Cost handles the cost to the warehouse that is not billed by the same supplier. In other words, it is the additional cost to increase your stock cost. This cost depends on the company's decision whether to add it or not. For instance, I buy the product from Supplier A but ship it through Transport company B. The transport charges may be entered as landing cost to increase the product cost.

![1](/img/additional-module/landing-cost/1.png)

1. Landing Cost 1 = Key your Landing Cost to this column. (This cost will not be taken into account.)

2. Landing Cost 2 = If you have a different calculation than Landing Cost 1, you may enter your value in this column.

3. Click on the + Button to select the cost allocated.

   ![2](/img/additional-module/landing-cost/2.png)

## Cost Allocated By : SubTotal

Formula : **Item Subtotal / Document Subtotal * Landing Cost1**

![3](/img/additional-module/landing-cost/3.png)

:::info

Item 1 = A/B * C

Landing Cost1 (D) = 50.00 / 1949.00 * 200 = **5.13**

:::

:::info

Item 2

Landing Cost1 (D) = 1899.00/1949.00 * 200 = **194.87**

:::

Let me show you the Stock Card result:

![4](/img/additional-module/landing-cost/4.png)

:::info

How to get unit cost = 5.51?

Formula : Product Unit Cost + Item Landing Cost1/Item Qty

5 + (5.13/10) = **5.51**

:::

## Cost Allocated by : Qty

![5](/img/additional-module/landing-cost/5.png)

Formula : **Item Qty / Document Qty * Landing Cost1**

![6](/img/additional-module/landing-cost/6.png)

:::info

Item 1 : 10/11 * 200 = **181.81**

Item 2 : 1/11 * 200 = **18.18**

:::

:::info

Stock Card Report for

Item 1 : Ant unit cost will be 23.18, how to get 23.18?

Unit Cost + (Landing Cost1/ Qty) = 5 + (181.82/10) = **23.18**

Item 2 : IP6 Unit Cost will be 1917.18

Unit Cost + (Landing Cost1/ Qty) = 1899 + (18.18/1) = **1917.18**

:::

## Cost Allocated by : Smallest Qty

![7](/img/additional-module/landing-cost/7.png)

Formula : **Item Qty * Rate/ Sum(Qty * Rate) * Landing Cost1**

![8](/img/additional-module/landing-cost/8.png)

Item 1 : 10 * 12 = 120/121 = **198.35**

Item 2 : 1*1 = 1/121 = **1.65**

Stock Card Report for

Item 1 : Unit cost for **Ant** = [Unit Price + (Item Landing Cost1/Item Qty)] / ItemRate

 = [30 + (198.35/10)]/12 = **4.15**

Item 2 : Unit Cost for **IP6** = [Unit Price + (Item Landing Cost1/Item Qty)] / ItemRate

 = 1899 + 1.65 = **1900.65**
