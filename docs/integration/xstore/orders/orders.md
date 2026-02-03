---
sidebar_position: 1
title: Order
description: Guide to managing orders in XStore
slug: /integration/xstore/orders
tags: ["e-Commerce", "X-Store", "Orders"]
---

## Overview

The **Order** module allows you to view, process, and manage orders from all your connected e-commerce platforms (Lazada, Shopee, TikTok, etc.) in one centralized location.

![order-management-page](../../../../static/img/xstore/orders/order-page.png)

To access this page, navigate to **Orders** in the sidebar menu.

The Order Management interface is organized into tabs representing each stage of the order lifecycle. You can:

- Filter orders by date range
- Search by Order ID or Store Name
- Perform bulk actions (packing, shipping, printing)
- Track order status across all platforms

## Order Statuses

![order-status-tabs](../../../../static/img/xstore/orders/order-statuses.png)

Orders are categorized into the following status tabs:

| Status         | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| **Unpaid**     | Orders placed but not yet paid by the customer                |
| **New Order**  | Paid orders ready to be processed                             |
| **To Process** | Packed orders waiting to be shipped                           |
| **To Ship**    | Orders ready for courier handover                             |
| **Shipped**    | Orders currently in transit                                   |
| **Delivered**  | Orders successfully delivered to the customer                 |
| **Completed**  | Orders finalized and closed                                   |
| **To Cancel**  | Buyer-initiated cancellation requests pending seller approval |
| **To Return**  | Buyer-initiated return requests pending seller approval       |
| **Others**     | Orders with special or exceptional statuses                   |

## Order Processing Workflow

The order processing flow moves through several stages. Different actions are available at each stage.

### Step 1: Pack New Orders

![pack-orders](../../../../static/img/xstore/orders/pack-order.png)

1. Select orders by clicking the checkbox next to each order
2. Click the **Pack** button
3. Packed orders will move to the **To Process** tab

### Step 2: Process Orders for Shipping

![to-process-tab](../../../../static/img/xstore/orders/to-process.png)

1. Select orders by clicking the checkbox next to each order
2. Click the **To Ship** button
3. Orders will move to the **To Ship** tab
4. (Optional) Click the **Scan** icon to use the **Scan To Ship** feature for faster processing.

#### Print Picking Document

![picking-list-options](../../../../static/img/xstore/orders/pickinglist-doc.png)

1. Click the **Print Picking List** button o generate the following:
   - **Picking List Summary:** A consolidated list of all order items for batch picking
   - **Picking List:** Individual picking lists generated per order, including barcodes 
2. The printed picking list can be used together with the **Scan To Ship** feature to speed up order fulfillment

### Step 3: Scan to Ship (Optional)

![scan-to-ship-interface](../../../../static/img/xstore/orders/scan-to-ship-empty.png)

1. Click on the screen and scan the barcode from the picking list
2. **Alternative:** Type the barcode number manually and press Enter

![scanned-orders](../../../../static/img/xstore/orders/scan-to-ship.png)

| Action                     | Description                            |
| -------------------------- | -------------------------------------- |
| **Print AWB**              | Print Air Waybills for selected orders |
| **Print Courier Manifest** | Generate a manifest for courier pickup |

### Step 4: To Ship

![to-ship-tab](../../../../static/img/xstore/orders/to-ship.png)

| Action                     | Description                            |
| -------------------------- | -------------------------------------- |
| **Print AWB**              | Print Air Waybills for selected orders |
| **Print Courier Manifest** | Generate a manifest for courier pickup |

### Step 5: Self Deliver

![self-deliver-tab](../../../../static/img/xstore/orders/self-deliver.png)

| Action                     | Description                            |
| -------------------------- | -------------------------------------- |
| **Mark as Delivered**      | Mark the order as delivered            |

### Step 6: Post Orders to SQL Account

![completed-orders](../../../../static/img/xstore/orders/completed.png)

Once orders reach **Shipped**, **Delivered**, or **Completed** status:

1. **Post Order:** Click to post orders to **SQL Account**
   > The orders posted will match the current tab's status. For example, clicking **Post Order** on the Shipped tab posts only shipped orders.

2. **Status:** Click the **icon next to the Post Order button** to view order posting history and status
   - **🔵 Blue:** Posting in progress
   - **🟢 Green:** Posting completed and available to check post order status
   - **🔴 Red:** Posting failed

3. **Archived Orders:** Turn on the switch to view orders that have been posted to SQL Account.  
   > Note: If orders are updated after posting, they will be moved back to the **non-archived** page.

## General Features

| Feature               | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| **Search**            | Find orders by **Order ID** or **Store Name** using the search bar |
| **Date Range**        | Filter orders by creation date using the date picker               |
| **Column Visibility** | Click the column icon to show/hide specific table columns          |
