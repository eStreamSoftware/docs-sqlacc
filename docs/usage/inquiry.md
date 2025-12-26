---
sidebar_position: 13
title: Inquiry
description: Inquiry guideline
slug: /usage/inquiry
tags: ["SQL Account", "Usage", "Inquiry"]
---

## Account Inquiry

Perform a quick inquiry into the ledger transactions for the General Ledger, Sales Ledger (Customer), and Purchase Ledger (Supplier).

![account-inquiry](../../static/img/usage/inquiry/account-inquiry.jpg)

### General Ledger

1. Select the date range.

2. Select a GL account code.

3. Click on **Apply**.

    ![general-ledger](../../static/img/usage/inquiry/general-ledger.jpg)

### Sales Ledger (Customer)

1. Select the date range.

2. Select a Customer account code.

3. Click on **Apply**.

    ![sales-ledger](../../static/img/usage/inquiry/sales-ledger.jpg)

### Purchase Ledger (Supplier)

1. Select the date range.

2. Select a Supplier account code.

3. Click on **Apply**.

    ![purchase-ledger](../../static/img/usage/inquiry/purchase-ledger.jpg)

### Access Control in Account Inquiry

Go to **Tools** → **Maintain User...**

1. You can set the access control for General, Sales, and Purchase Ledgers.

2. Check or uncheck the **Execute** permission to control access:

    | Access Control | Explanation |
    | -------------- | ----------- |
    | Account Inquiry - Inquire G/L Account | Allows inquiry of G/L Account. |
    | Account Inquiry - Inquire Customer Account | Allows inquiry of Customer Account (Sales Ledger). |
    | Account Inquiry - Inquire Supplier Account | Allows inquiry of Supplier Account (Purchase Ledger). |
    | Account Inquiry | Allows use of Account Inquiry feature. |

    ![account-inquiry-access-control](../../static/img/usage/inquiry/account-inquiry-access-control.jpg)

## Cash Flow Inquiry

Perform a quick inquiry into the Cash Flow for all **bank** and **cash** account types.

![cash-flow-inquiry](../../static/img/usage/inquiry/cash-flow-inquiry.jpg)

## Cash Flow Forecast

1. This feature forecasts cash flow based on the likelihood of converting assets to cash from **Trader Debtors (Customers)** and **Trade Creditors (Suppliers)**.

2. The criteria for defining the cash flow forecast are:

    1. Customer Due Documents
    2. PD Cheque Received
    3. Supplier Due Documents
    4. PD Cheques Issue

:::info
    1. The Balance b/d represents the total of all Payment Methods as of the day before the selected 'From Date'.
    2. The example above shows data as of 05 Feb 2016 in the GL Ledger.
:::

![cash-flow-forecast](../../static/img/usage/inquiry/cash-flow-forecast.jpg)

### Summary

1. You can select different **intervals** to analyze the cash flow forecast.

2. Interval selections are:

    1. Daily
    2. Weekly
    3. Monthly
    4. Quarterly
    5. Half-Yearly
    6. Yearly

![cash-flow-forecast-summary](../../static/img/usage/inquiry/cash-flow-forecast-summary.jpg)

### Detail

1. Highlight the **interval**.

    ![cash-flow-forecast-detail-1](../../static/img/usage/inquiry/cash-flow-forecast-detail-1.jpg)

2. To check the details for the interval, click on **Detail**.

    ![cash-flow-forecast-detail-2](../../static/img/usage/inquiry/cash-flow-forecast-detail-2.jpg)

### Graph

1. Highlight the **interval**.

    ![cash-flow-forecast-graph-1](../../static/img/usage/inquiry/cash-flow-forecast-graph-1.jpg)

2. To view the graph for the interval, click on **Graph**.

    ![cash-flow-forecast-graph-2](../../static/img/usage/inquiry/cash-flow-forecast-graph-2.jpg)

## Customer Pricing Inquiry

Inquire about item pricing for a customer.

![customer-pricing-inquiry](../../static/img/usage/inquiry/customer-pricing-inquiry.jpg)

### Customer Price Inquiry

1. Select the **item code** to check the price.

    ![customer-price-inquiry-1](../../static/img/usage/inquiry/customer-price-inquiry-1.jpg)

2. Select the **customer** to check the price.

    ![customer-price-inquiry-2](../../static/img/usage/inquiry/customer-price-inquiry-2.jpg)

### Customer Profit Estimator

Enter values (e.g., quantity, UOM, Price Tag, unit price, discount, sales tax (GST), and ref. cost) to calculate the estimated profit based on the item's cost.

![customer-profit-estimator](../../static/img/usage/inquiry/customer-profit-estimator.jpg)

### Customer Price Book Reference

Check the **reference price** for different UOMs as set in **Maintain Stock Item**.

![customer-price-book-reference](../../static/img/usage/inquiry/customer-price-book-reference.jpg)

### Your SQL Sales Assistant

Quick access to:
    1. **Price History Inquiry** - Sales | Print Sales Price History...
    2. **Stock Status/Back Order** - Sales | Print Outstanding Sales Document Listing...(Outstanding Sales Order)
    3. **Cost of Stock in Hand** - Stock | Print Stock Month End Balance...
    4. **Customer Aging Details** - Customer | Print Customer Aging Report...
    5. **Sales & Collection Analysis** - Customer | Print Customer Sales & Collection Analysis...

![sql-sales-assistant](../../static/img/usage/inquiry/sql-sales-assistant.jpg)

## Supplier Pricing Inquiry

Inquire about item pricing for a supplier.

![supplier-pricing-inquiry](../../static/img/usage/inquiry/supplier-pricing-inquiry.jpg)

### Supplier Price Inquiry

1. Select the **item code** to check the purchase price.

    ![supplier-price-inquiry-1](../../static/img/usage/inquiry/supplier-price-inquiry-1.jpg)

2. Select the **supplier** to check the purchase price.

    ![supplier-price-inquiry-2](../../static/img/usage/inquiry/supplier-price-inquiry-2.jpg)

### Supplier Profit Estimator

Enter values (e.g., quantity, UOM, Price Tag, unit price, discount, sales tax (GST), and ref. cost) to calculate the estimated profit based on the item's reference cost.

![supplier-profit-estimator](../../static/img/usage/inquiry/supplier-profit-estimator.jpg)

### Supplier Price Book Reference

Check the **reference cost** for different UOMs as set in **Maintain Stock Item**.

![supplier-price-book-reference](../../static/img/usage/inquiry/supplier-price-book-reference.jpg)

### Your SQL Purchase Assistant

Quick access to:
    1. **Price History Inquiry** - Purchase | Print Purchase Price History...
    2. **Stock Status/Back Order** - Purchase | Print Outstanding Purchase Document Listing...(Outstanding Purchase Order)
    3. **Cost of Stock in Hand** - Stock | Print Stock Month End Balance...
    4. **Supplier Aging Details** - Supplier | Print Supplier Aging Report...
    5. **Purchase & Collection Analysis** - Supplier | Print Supplier Purchase & Payment Analysis...

![sql-purchase-assistant](../../static/img/usage/inquiry/sql-purchase-assistant.jpg)

## SQL Power Search

Go to **Inquiry** → **SQL Power Search**

A powerful keyword search tool for the company database.

![sql-power-search](../../static/img/usage/inquiry/sql-power-search.jpg)

### Find What

**Modify** the search conditions.

![find-what](../../static/img/usage/inquiry/find-what.jpg)

### Where

1. Select the modules to search.

    ![where-1](../../static/img/usage/inquiry/where-1.jpg)

2. Click on **Advance** to expand more areas in search.

    ![where-2](../../static/img/usage/inquiry/where-2.jpg)

3. Click on **Find**.

    ![where-3](../../static/img/usage/inquiry/where-3.jpg)

### Search Example

1. Let's try searching for the word **Apple** in an invoice. See the screenshot below.

    ![sql-search-example-1](../../static/img/usage/inquiry/sql-search-example-1.jpg)

2. In the SQL Power Search Engine, check **Invoice** in the **Where** section.

    ![sql-search-example-2](../../static/img/usage/inquiry/sql-search-example-2.jpg)

3. To ensure the search covers **More Description**, click on **Advance**. See the screenshot below.

    ![sql-search-example-3](../../static/img/usage/inquiry/sql-search-example-3.jpg)

4. Type the keyword **Apple** in **Find What**.

    ![sql-search-example-4](../../static/img/usage/inquiry/sql-search-example-4.jpg)

5. Click on the **Find** button.

6. The search results will appear below.

    ![sql-search-example-5](../../static/img/usage/inquiry/sql-search-example-5.jpg)
