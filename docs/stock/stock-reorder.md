---
sidebar_position: 7
id: stock-reorder
title: Maintain Stock Item - Reorder Lvl & Qty
description: A guide to stock reorder for SQL Account
slug: /stock/stock-reorder
tags: ["SQL Account", "Stock", "Reorder"]
---

## Maintain Stock Item

![1](/img/stock/stock-reorder/1.png)

### A: Reorder Level

:::info Definition
Reorder level (or reorder point) is the inventory level at which a company would place a new order or start a new manufacturing run.
:::

**Give an example how it work in SQL ?**

![2](/img/stock/stock-reorder/2.png)

- For this item, Reorder Qty = 5, when Bal Qty less than 5 unit(Which is 9-5 = 4), saving document will prompt(Dialog : Stock Quatity Control) to remind you should place an order.

:::tip
Stock Quality Control dialog can choose to Turn On (Tools | Option | Miscellaneous | Prompt Negative Stock Quantity Dialog Box | Checked it)
:::

### B: Reorder Qty

:::info Definition
Reorder quantity is the point at which a business must buy more inventory as to not run out of inventory.
:::

**How to check the stock is running out of reorder level ?**

1. Stock | Print Stock Reorder Advise | Select any criteria if have | Apply

![3](/img/stock/stock-reorder/3.png)

:::note
Criteria A : There have option :

1. On Hand Qty
2. On Hand Qty + PO
3. On Hand Qty – SO
4. On Hand Qty + PO – SO

VS

 1. Reorder Level
 2. Min Level
 3. Max Level

:::

There have fast way to create PO with Reoder QTY. Please see below Screen :

![4](/img/stock/stock-reorder/4.png)

Step :

1. After get the appropriate result of Reoder Advise | Click on First Item | Press Shift Key(Keyboard) | Click on Last Item
2. New PO | Select Supplier | Drag from Reorder Advise to PO Itemize (As per picture). PO Qty = Reorder Qty
