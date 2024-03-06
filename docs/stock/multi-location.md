---
sidebar_position: 7
id: multi-location
title: Multi Location Module
description: A guide to multi location module for SQL Account
slug: /stock/multi-location
tags: ["SQL Account", "Stock", "Multi Location","Warehouse"]
---

:::info
It is use for warehouse, inter-branch transfer, consignment, van-sales, etc.
:::

## Multiple Warehouse

:::note Case studies
HQ is helping the KL branch to order goods and goods shall be sending to KL branch warehouse.
:::

1. When purchase the item from supplier, you may choose your branch warehouse (KL) as your location in purchase invoice.

    ![1](/img/stock/multi-location/1.png)

2. When you sell out the item, you may choose the location to be sell out from branch warehouse (KL).

    ![2](/img/stock/multi-location/2.png)

3. You will see stock in to branch warehouse (KL) and stock out from branch warehouse (KL) as well when you check your stock card report

    ![3](/img/stock/multi-location/3.png)

From the stock card report, you can see the item is store in two locations, one is default, one is KL, the stock in and out that previously u did will be in location KL.

## Consignment

:::note Case studies
A batch of goods is consigned to your customer side for selling without billing first, will only bill after they sell out the goods.
:::

1. Open a stock transfer documents to transfer the goods from your warehouse (Default) to customer warehouse (Batu Caves).

2. Customer received 1 box of goods (20 units) and sold out 15 units. Then you can bill customer 15 units in where the goods out from customer location (Batu Caves).

    ![4](/img/stock/multi-location/4.png)

3. You will see stock transfer out from your warehouse (Default), and stock will transfer into customer warehouse (Batu Caves).

    ![5](/img/stock/multi-location/5.png)

From the stock card report, you can see the item is sold out from your customer location (Batu Caves) after you make the billing.
