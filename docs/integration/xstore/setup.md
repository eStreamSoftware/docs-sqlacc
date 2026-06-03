---
sidebar_position: 2
title: Setup
description: Guide to setting up the SQL X-Store App
slug: /integration/xstore/setup
tags: ["e-Commerce", "X-Store", "Setup"]
---

## Configurations

This guide walks you through the complete setup of the **SQL X-Store** App — from creating a company to syncing data from **E-commerce platforms** and **SQL Account**.

### Step 1: Create Company

1. Click **Create Company** on the Company List page

    ![create-company](../../../static/img/xstore/setup/create-company.png)

2. Enter the **Company Name**, **Email**, and **Phone Number**

3. Click **Create Company**

    ![input-company-info](../../../static/img/xstore/setup/input-company-info.png)

4. Select the newly created company

    ![select-company](../../../static/img/xstore/setup/select-company.png)

5. The system will navigate to the **Company Profile** page

    ![company-profile](../../../static/img/xstore/setup/company-profile.png)

### Step 2: Link Store

Connect E-commerce stores to sync **store**, **product**, **order**, and **payment** data.

1. Click **Stores** in the sidebar

    ![store-sidebar](../../../static/img/xstore/setup/store-sidebar.png)

2. Click **Link Store**

    ![link-store](../../../static/img/xstore/setup/link-store.png)

> 📌 For detailed instructions on linking a store, navigate to **Integration > XStore > [Stores](./stores.md)**

**Auto-Sync Behavior**

- After linking, the system **automatically syncs the past 3 days** of product, order, and payment data.
- Sync actions are locked for **10 minutes** to prevent overload.
- After 10 minutes, manual sync becomes available.

### Step 3: Configure Company Settings

1. Click **Settings > Company** from the sidebar

    ![company-sidebar](../../../static/img/xstore/setup/company-sidebar.png)

2. Click **Edit**

    ![add-key](../../../static/img/xstore/setup/add-key.png)

3. Copy the **Access Key** and **Secret Key** from SQL Account and fill in both fields to enable SQL sync

4. Click **Save**

    ![input-key](../../../static/img/xstore/setup/input-key.png)

### Step 4: Code Mapping

Sync **Stock**, **Customer**, **Location**, and **Payment** codes from SQL Account to map codes such as **Location**, **Project**, **Voucher**, **Discount**, **Shipping**, **Transaction**, **Payment**, and **Customer** codes for invoice posting to SQL Account.

1. Click **Stores** in the sidebar

    ![store-sidebar](../../../static/img/xstore/setup/store-sidebar.png)

2. Click the **Config** (⚙️) icon of any store

    ![store-config](../../../static/img/xstore/setup/store-config.png)

3. A dialog will open:

    1. Select the **code type** from the dropdown

    2. Click **Map Codes**

        ![map-codes](../../../static/img/xstore/setup/map-codes.png)

4. A success message will appear once mapping is completed

    ![map-code-success](../../../static/img/xstore/setup/map-success.png)

### Step 5: Sync Stock Items from SQL Account

Sync stock items from SQL Account for **product mapping** and **quantity control**.

:::info
   If an item has been mapped in the **SQL Account E-Commerce module** (using an **Alternative Code**), the mapping information will be used to auto match with the corresponding SKU in X-Store. You do not need to perform the mapping action again in **[Stock](./inventory/stocks.md#map-products)**.
:::

:::warning
   Ensure your store is mapped to the correct stock item location, or mapped items won't appear.
:::

1. Click **Inventory > Stocks** in the sidebar

    ![stock-sidebar](../../../static/img/xstore/setup/stock-sidebar.png)

2. Click **Sync Stock**

    ![sync-stock](../../../static/img/xstore/setup/sync-stock.png)

3. Choose sync method:

    1. **Sync All**, or

    2. Tick checkboxes and click **Sync Selected**

        ![select-stockSync](../../../static/img/xstore/setup/select-stock-sync.png)

4. Synced stock items will appear in the Data Table

    ![stock-items](../../../static/img/xstore/setup/stock-items.png)

## Manual Sync

If platform data failed to sync during store linking, you can sync manually.

### Sync Product Data

1. Click **Inventory > Products** in the sidebar

    ![product-sidebar](../../../static/img/xstore/setup/product-sidebar.png)

2. Click (**⟲**) icon

    ![sync-product](../../../static/img/xstore/setup/sync-product.png)

3. A dialog will open:

    1. Tick checkboxes to select stores

    2. Click **Sync Selected**

        ![select-productSync](../../../static/img/xstore/setup/select-product-sync.png)

### Sync Order Data

1. Click **Orders** in the sidebar

    ![order-sidebar](../../../static/img/xstore/setup/order-sidebar.png)

2. Click (**⟲**) icon

    ![sync-order](../../../static/img/xstore/setup/sync-order.png)

3. A dialog will open:

    1. Select **Sync Mode** and **Date** (default sync data from past 3 days)

        ![select-sync-date](../../../static/img/xstore/setup/select-sync-date.png)

    2. Tick checkboxes to select stores

    3. Click **Sync Selected**

        ![sync-selected](../../../static/img/xstore/setup/sync-selected.png)

### Sync Payment Data

1. Click **Payments** in the sidebar

    ![payment-sidebar](../../../static/img/xstore/setup/payment-sidebar.png)

2. Click (**⟲**) icon

    ![sync-payment](../../../static/img/xstore/setup/sync-payment.png)

3. A dialog will open:

    1. Select **Sync Mode** and **Date** (default sync data from past 3 days)

        ![select-sync-date](../../../static/img/xstore/setup/select-sync-date.png)

    2. Tick checkboxes to select stores

    3. Click **Sync Selected**

        ![sync-selected](../../../static/img/xstore/setup/sync-selected.png)
