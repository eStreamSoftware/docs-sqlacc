---
sidebar_position: 2
title: Stocks
description: A guide on stocks
slug: /integration/xstore/stocks
tags: ["e-Commerce", "X-Store", "Inventory", "Stocks"]
---

## Overview

The **Stocks** module allows you to view and manage stock items synced from SQL Account.

:::info
For more information regarding **Sync Stock Item**, please refer to **[Setup](../setup.md#step-5-sync-stock-items-from-sql-account)**
:::

![stock-overview](../../../../static/img/xstore/stocks/stock-overview.png)

## Map Products

Mapping platform products to stock items allows you to manage stock and quantity using the main stock item, improving stock quantity accuracy. There are two ways to map products:

### Map Multiple Stock Items

1. Go to **Inventory > Stocks**

2. Click the **Map Product** button

   ![multi-stock-item-map](../../../../static/img/xstore/stocks/multi-stock-item-map.png)

3. Select the **Platform Products** and then a **Stock Item** to map them together

   ![multi-stock-item-dialog](../../../../static/img/xstore/stocks/multi-stock-item-dialog.png)

   :::info
   Use the **Filter Button** to narrow your **Platform Products** view, or use the **Search Bar** to find specific e-commerce products and stock items.
   :::

### Map Single Stock Item

1. Go to **Inventory > Stocks**

2. Click the icon to view stock details

   ![single-stock-item-map](../../../../static/img/xstore/stocks/single-stock-item-map.png)

   :::info
   **Location Description** and **Code** are fetched from SQL Account
   :::

3. Click the **Map Product** button

   ![stock-details](../../../../static/img/xstore/stocks/stock-details.png)

4. Select the **Platform Products** and click **Map Product** to map them directly to this **Stock Item UOM**

   ![single-stock-item-dialog](../../../../static/img/xstore/stocks/single-stock-item-dialog.png)

   :::info
   Ensure your store is mapped to the correct stock item location, or mapped items won't appear.
   To map the location code, please refer to **[Setup](../setup.md#step-4-code-mapping)**
   :::

## Update Quantity

1. Go to **Inventory > Stocks**

2. Click the icon to view stock details

   ![single-stock-item-map](../../../../static/img/xstore/stocks/single-stock-item-map.png)

3. Click the **+/-** icon

   ![update-quantity](../../../../static/img/xstore/stocks/update-quantity.png)

4. Click the **Update** button to update the mapped products' quantity with the stock item's quantity

   ![update-quantity-dialog](../../../../static/img/xstore/stocks/update-quantity-dialog.png)