---
sidebar_position: 7
id: costing-method
title: Costing Method
description: A guide to assign or change costing method for SQL Account
slug: /costing-method
tags: ["SQL Account", "Stock", "Costing Method"]
---

# How to assign or change Costing Method in SQL?

1. You can go to Stock | Maintain Stock Group

![1](/img/stock/costing-method/1.png)

2. There have 3 method let you to assign <br />
    a. FIFO - cost flow assumption that the first goods purchased are also the first goods sold.<br />
    b. Fixed Costing –fixed cost where had maintain under maintain stock item<br />
    c. Weighted Average -average cost of production to a product<br /><br />
3. If you **change** your costing method (previously with transaction existing), please remember
must run **analyse data integrity** (tools | analyse data integrity) before you check the costing
report again.

![2](/img/stock/costing-method/2.png)

:::tip
System will auto update from first date until current date transaction with new costing
method cost….
:::