---
sidebar_position: 2
title: Reports
description: Stock Report
slug: /usage/stock/stock-report
tags: ["SQL Account", "Usage", "Inventory", "Stock","Report"]
---

## Print Stock Document Listing

- Print Stock Document Listing can be used for you to see all the stock adjustment documents that you have issued.
- You can see Stock Received Listing, Stock Issue Listing, Stock Transfer Listing, Stock Adjustment Listing.

### How to Print Stock Document Listing

1. **Stock** > **Print Stock Document Listing**

    ![print-stock-document-listing](../../../static/img/usage/stock/stock-report/print-stock-document-listing.png)

2. Select which Document listing you want to see. Follow the image

    ![print-stock-document-listing1](../../../static/img/usage/stock/stock-report/print-stock-document-listing1.png)

3. Press Apply Button

    ![print-stock-document-listing2](../../../static/img/usage/stock/stock-report/print-stock-document-listing2.png)

4. Click Preveiw & Listing Report
5. Example of stock document listing report

    ![print-stock-document-listing3](../../../static/img/usage/stock/stock-report/print-stock-document-listing3.png)

### Print Document Style

1. Tick relevant check boxes

    ![print-stock-document-listing4](../../../static/img/usage/stock/stock-report/print-stock-document-listing4.png)

| **Field Name** | **Explanation** |
|----------------|----------------|
| **Print Document Style** | Tick this checkbox to print out bulk report or send batch email |
| **Include Cancelled Documents** | Tick this checkbox to include cancelled documents in the listing |

2. If you Tick Print Document Style , you will see that you will able able to choose purchase document report format.

    ![print-stock-document-listing5](../../../static/img/usage/stock/stock-report/print-stock-document-listing5.png)

### Group/Sort By

1. You can filter your documents based on Project, location and Company Category

    ![print-stock-document-listing6](../../../static/img/usage/stock/stock-report/print-stock-document-listing6.png)

2. You can use the Group by/Sort by table to choose how you want to group your report listing

    ![print-stock-document-listing7](../../../static/img/usage/stock/stock-report/print-stock-document-listing7.png)

3. Here is an example of the report

    ![print-stock-document-listing8](../../../static/img/usage/stock/stock-report/print-stock-document-listing8.png)

## Print Stock Reorder Advice

- Print Stock Reorder Advice can be used for you to check which items have quantities below the set reorder level (set in maintain stock item)

### How to Print Stock Reorder Advice

1. **Stock** > **Print Stock Reorder Advice**

    ![print-stock-reorder-advice](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice.png)

    ![print-stock-reorder-advice1](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice1.png)

    ![print-stock-reorder-advice2](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice2.png)

2. Press Apply Button

3. Click Preveiw & Listing Report
4. Example of stock reorder report

![print-stock-reorder-advice3](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice3.png)

### Setting

1. Select what quantities you wish to compare against

    ![print-stock-reorder-advice4](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice4.png)

| **Field Name** | **Explanation** |
|----------------|----------------|
| **On Hand Qty** | Stock balance quantity |
| **On Hand + PO Qty & SO Qty** | Stock balance quantity plus Purchase Order Quantity or Sales Order Quantity |
| **On Hand + PO Qty - SO Qty** | Stock balance quantity plus Purchase Order Quantity minus Sales Order Quantity |
| **On Hand + PO Qty (+/-) JO Qty** | Stock balance quantity plus Purchase Order Quantity plus Job Order Quantity |
| **On Hand - SO Qty (+/-) JO Qty** | Stock balance quantity minus Sales Order Quantity plus Job Order Quantity |
| **On Hand + PO Qty - SO Qty (+/-) JO Qty** | Stock balance quantity plus Purchase Order Quantity minus Sales Order Quantity minus Job Order Quantity |

2. After that, select the type of comparison. Will the balance quantities be compared to the Max Value, Min Value or the Reorder level . All set in Maintain Stock Item .

###  Group/Sort By

1. You can filter your documents based on Item, Batch and Company Category

    ![print-stock-reorder-advice5](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice5.png)

2. You can use the Group by/Sort by table to choose how you want to group your report listing

![print-stock-reorder-advice6](../../../static/img/usage/stock/stock-report/print-stock-reorder-advice6.png)

## Print Stock Physical Worksheet

1. Click on **Stock**

2. Choose **Print Stock Physical Worksheet**

3. **Filter** by date, stock group or others **information** that you want to do for the stock take, please **make sure that you choose the correct location and batch if you have these two modules**.

   ![70](../../../static/img/usage/stock/stock-report/69.png)

4. lick on Preview & choose your report format.

   ![71](../../../static/img/usage/stock/stock-report/70.png)

5. **Print out the “Stock Take Sheet”** for stock keeper.

   The stock keeper should manually **fill in the actual quantity into the “physical qty” column**.

   ![72](../../../static/img/usage/stock/stock-report/71.png)

6. After complete updating the stock take report by your stock-keeper, do your stock adjustment in system from **Stock** > **Stock Adjustment** > **and drag out Book Qty and Physical Qty**.

   ![73](../../../static/img/usage/stock/stock-report/72.png)

   ![74](../../../static/img/usage/stock/stock-report/73.png)

7. Click on the first item in **Stock Physical Worksheet**, press on **Ctrl + A** on the keyboard to select all items.

   **Then Drag & Drop into Stock Adjustment**.

   ![75](../../../static/img/usage/stock/stock-report/74.png)

8. Based on the stock keeper’s Stock Take Report, **fill in the actual physical quantity** in your warehouse into the Stock Adjustment **Physical Qty column**, the system will calculate the variance based on the Book Qty and apply a correction to the Qty column.

   :::note

   **Book Qty** = Quantity that is recorded in system.

   **Physical Qty** = Actual Quantity at your warehouse.

   **Qty** = Variance between Physical and Book Quantity, system will auto-adjust then update accordingly. (Physical Qty – Book Qty)

   :::

## Print Stock Card & Print Stock Card Qty

- Print Card can be used to see your stock movement and stock cost during a certain period of time.
- You can see your stock movement based on location and batch.

### How to Print Stock Card

1. **Stock** > **Print Stock Document Listing**
print-stock-card
    ![print-stock-card](../../../static/img/usage/stock/stock-report/print-stock-card.png)

    ![print-stock-card1](../../../static/img/usage/stock/stock-report/print-stock-card1.png)

2. Press Apply Button
3. Click Preview & Listing Report
4. Example of stock card report

![print-stock-card2](../../../static/img/usage/stock/stock-report/print-stock-card2.png)

### How to Print Stock Card Qty

- Same as Print Stock Card the different is this report is just shown Qty

## Print Stock Month End Balance

- Print Stock Month End Balance can be used to see your month end stock quantity and total cost .

### How to Print Stock Month End Balance

1. **Stock** > **Print Stock Month End Balance**

    ![print-stock-month-end-balance](../../../static/img/usage/stock/stock-report/print-stock-month-end-balance.png)

2. Set the date and press the Apply button.

    ![print-stock-month-end-balance1](../../../static/img/usage/stock/stock-report/print-stock-month-end-balance1.png)

3. You can set your filters, you can filter yout stock month end by location, and stock group and item

    ![print-stock-month-end-balance2](../../../static/img/usage/stock/stock-report/print-stock-month-end-balance2.png)

4. Press Preview button
5. Click Preview& Listing Report
6. Example of stock month end report

    ![print-stock-month-end-balance3](../../../static/img/usage/stock/stock-report/print-stock-month-end-balance3.png)

## Print Stock Aging

- Print Stock Aging is used to see how many quantities of a certain stock that you have on hand and how much quantity of that stock is sold
print-stock-aging
   ![print-stock-aging](../../../static/img/usage/stock/stock-report/print-stock-aging.png)

### How to Print Stock Aging

1. **Stock** > **Print Stock Aging**
2. Set your filter option and group by options

    ![print-stock-aging1](../../../static/img/usage/stock/stock-report/print-stock-aging1.png)

    ![print-stock-aging2](../../../static/img/usage/stock/stock-report/print-stock-aging2.png)

3. Tick Qty and/or Cost if you want to see the aging for both or either

    ![print-stock-aging3](../../../static/img/usage/stock/stock-report/print-stock-aging3.png)

4. set stock aging type

    ![print-stock-aging4](../../../static/img/usage/stock/stock-report/print-stock-aging4.png)

5. Months = aging calculated by every 1 months
6. Months + 5 Years = aging calculated for every month and also above 5 years
7. 3 motnhs = aging calculated every 3 months
8. Press Apply Button
9. Click Preview

![print-stock-aging5](../../../static/img/usage/stock/stock-report/print-stock-aging5.png)

## Print Stock Analysis By Document

- Print Stock Analysis By Document can be used to see your stock movement quantity for each document type like Invoice, Cash sales, purchase invoice etc.

### How to Print Stock Analysis By Document

1. **Stock** > **Print Stock Analysis By Document**

    ![print-stock-analysis-by-document](../../../static/img/usage/stock/stock-report/print-stock-analysis-by-document.png)

    ![print-stock-analysis-by-document1](../../../static/img/usage/stock/stock-report/print-stock-analysis-by-document1.png)

2. Press Apply Button
3. Click Preview
4. Example of stock analysis by document report

    ![print-stock-analysis-by-document2](../../../static/img/usage/stock/stock-report/print-stock-analysis-by-document2.png)

## Print Stock Batch Expiry

- Print Stock Batch Expiry to see all the items in your batches along with their manufacturing dates and expiry dates.

### How to Print Stock Batch Expiry

1. **Stock** > **Print Stock Batch Expiry**

    ![print-stock-batch-expiry](../../../static/img/usage/stock/stock-report/print-stock-batch-expiry.png)

2. Press Apply Button

    ![print-stock-batch-expiry1](../../../static/img/usage/stock/stock-report/print-stock-batch-expiry1.png)

3. Click Preview
4. Example of stock batch expiry report

    ![print-stock-batch-expiry2](../../../static/img/usage/stock/stock-report/print-stock-batch-expiry2.png)

### How to Assign Batch to Your Stock Item

- For example, After you have created your batch codes and assigned the items at "Maintain Batch" go to Sales Invoice. Select the stock item and slect the batch

![print-stock-batch-expiry3](../../../static/img/usage/stock/stock-report/print-stock-batch-expiry3.png)

![print-stock-batch-expiry4](../../../static/img/usage/stock/stock-report/print-stock-batch-expiry4.png)

## Print Stock Serial Number Conflict

- Print Stock Serial Number Conflict to see
- SN item issue out with SN without receiving SN
- Duplicate SN received at same location and batch

![print-stock-serial-number-conflict](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict.png)

### How to Print Stock Serial Number Conflict

1. **Stock** > **Print Stock Serial Number Conflict**

    ![print-stock-serial-number-conflict1](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict1.png)

2. Press Apply Button

    ![print-stock-serial-number-conflict2](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict2.png)

3. Click Preview
4. Example of stock batch expiry report

    ![print-stock-serial-number-conflict3](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict3.png)

### How to Assign Serial to Your Stock Item

1. First go to Maintain Stock Item an tick the serial number check box

    ![print-stock-serial-number-conflict4](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict4.png)

2. At your purchases, assign Serial number to your stock item, you can key it in, import it in from a text file, or automatically generate it .

![print-stock-serial-number-conflict5](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict5.png)

### How to Automatically Generate Serial Number for Your Stock Item

1. Click the generator button, set your number format, and press OK.

![print-stock-serial-number-conflict6](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict6.png)

### How to Import Serial Number for Text File for Your Stock Item

1. Click the import button, select your text file, and press OK.

    ![print-stock-serial-number-conflict7](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict7.png)

2. Your serial number has been successfully imported

![print-stock-serial-number-conflict8](../../../static/img/usage/stock/stock-report/print-stock-serial-number-conflict8.png)

## Print Stock Serial Number Outstanding

- Print Stock Serial Number Outstanding to see if you did not assign any serial number to you purchase stock items.
- Example of missing out a serial number can be seen in this purchase invoice.
print-stock-serial-number-outstanding
![print-stock-serial-number-outstanding](../../../static/img/usage/stock/stock-report/print-stock-serial-number-outstanding.png)

### How to Print Stock Serial Number Outstanding

1. **Stock** > **Print Stock Serial Number Outstanding**

    ![print-stock-serial-number-outstanding1](../../../static/img/usage/stock/stock-report/print-stock-serial-number-outstanding1.png)

2. Press Apply Button

    ![print-stock-serial-number-outstanding2](../../../static/img/usage/stock/stock-report/print-stock-serial-number-outstanding2.png)

3. Click Preview

    ![print-stock-serial-number-outstanding3](../../../static/img/usage/stock/stock-report/print-stock-serial-number-outstanding3.png)
