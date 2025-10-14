---
sidebar_position: 1
title: Guide
description: A guideline for Purchase Data Entry
slug: /usage/purchase/guide
tags: ["SQL Account", "Usage", "Purchase", "Guide"]
---

## Purchase Work Flow

Example of sales process work flow aligned with SQL Account flow:

![1](../../../static/img/usage/purchase/guide/sales-process-workflow.png)

## Purchase Request

Purchase Request is an internal document used within a company between departments to request for purchase or a product.

For example, you want to purchase more office supplies. You have to submit a purchase request to the purchasing department.

![2](../../../static/img/usage/purchase/guide/purchase-request.png)

![3](../../../static/img/usage/purchase/guide/purchase-request-details.png)

1. **Purchase | Purchase Request | New**

2. **Select Supplier Code**

3. **Insert Item Code and details** (e.g. Qty, Unit Cost)

4. **Write a description to explain your purchase request**

   ![4](../../../static/img/usage/purchase/guide/purchase-request-data-entry.png)

5. **Click the Save button once you are done. Below is the example of the entry created.**

   ![5](../../../static/img/usage/purchase/guide/purchase-request-example-entry.png)

## Purchase Order

Purchase Order is a document that is issued by the purchasing department when placing an order with their supplier.

A purchase order document contains the details (quantity, unit price) of the items that want to be purchased.

![6](../../../static/img/usage/purchase/guide/purchase-order.png)

![7](../../../static/img/usage/purchase/guide/purchase-order-details.png)

1. **Purchase | Purchase Order | New**

2. **Select Supplier Code**

3. **Insert Item**

   3a. **Insert Item Code and details** (e.g. Qty, Unit Cost)

      :::note

      You can navigate the search column by using the “TAB” button on your keyboard. It will apply to all drop down tables.

      :::

   3b. **Click on the show/hide/move column icon to customize your column layout**.

   3c. If you want to key in for a discount amount, you may tick the discount field by following step 3b and update the discount field. You can key in multiple levels of discount as shown by the picture attached.

4. **Write a description to explain your purchase order**

   ![8](../../../static/img/usage/purchase/guide/purchase-order-data-entry.png)

5. **Click the Save button once you are done. Below is the example of the entry created:**

   ![9](../../../static/img/usage/purchase/guide/purchase-order-example-entry.png)

### More : Project

There are 2 types of project you need to be take note:

1.Document Project

2.Detail Project

For **document project**, you need to point to **MORE** section **(on the left side bar)**.

For **detail project**, you have to insert the **project** column out from Field Chooser.

![10](../../../static/img/usage/purchase/guide/detail-project.png)

### Attachment

You can use this feature to attach external PDF, excel, word documents and image files.

![11](../../../static/img/usage/purchase/guide/attachment.png)

1. Go to the left of the screen and click "Attachment"

2. Click the small black arrow at the link icon

3. Select ‘Attach files to Local Drive’, and choose the file from your computer that you want to attach

### Note

1. Click on the Note section (on the LEFT side bar).

2. RIGHT click it, you will see the Rich Text Editor pop-up.

3. You can start key-in the note. See the example screenshot below.

4. Click on the X button to save and exit the Rich Text Editor.

5. You will get prompted the ‘Save changes?’ message. Click YES to save it.

![12](../../../static/img/usage/purchase/guide/note.png)

### How to preview report

To preview the report, you may click on the preview button and select the format you wish to print.

![13](../../../static/img/usage/purchase/guide/select-report.png)

### How to send report via Whatsapp

![14](../../../static/img/usage/purchase/guide/send-report-via-whatsapp.png)

A QR code will appear on the screen. Scan the QR code with your Whatsapp's Whatsapp Web function.

## Goods Received

Goods Received is a document that is issued after receiving the delivery as proof of the order receipt.

![15](../../../static/img/usage/purchase/guide/goods-received.png)

![16](../../../static/img/usage/purchase/guide/goods-received-details.png)

1. **Purchase | Goods Receive | New**

2. **Select Supplier Code**

3. **Insert Item Code and details (e.g. Qty, Unit Cost)**

4. **Write a description to explain your goods receive**

   ![17](../../../static/img/usage/purchase/guide/goods-received-data-entry.png)

5. **Click the Save button once you are done. Below is the example of the entry created:**

![18](../../../static/img/usage/purchase/guide/goods-received-example-entry.png)

### Transfer From PO To DO

1. **Purchase | Goods Receive | New**

2. **Select Supplier Code**

3. **Right Click on G/R Note title**, select **Transfer from Purchase Order**, tick the document that you wish to transfer

4. **Save** the Goods Received Note

![19](../../../static/img/usage/purchase/guide/goods-received-transfer-from-po.png)

### Notes - Landing Cost

Landing Cost is to handle the cost to the warehouse that is not billed by the same supplier. In other words, it is an additional cost to increase your stock cost. This cost is depending on the company whether they want to add in or not. For Instant, I buy the product from Supplier A, but ship by Transport company B, this transport charges you may enter at landing cost to increase your product cost.

![20](../../../static/img/usage/purchase/guide/landing-cost-1.png)

How to set Landing Cost?

Follow the below image:

![21](../../../static/img/usage/purchase/guide/landing-cost-2.png)

1. **Landing Cost 1** = Key your Landing Cost to this column.(This cost will not take into the account.)
2. **Landing Cost 2** = If you have a different calculation than Landing Cost 1, you may enter your value to this column.
3. Click on + Button to select the cost allocated.

![22](../../../static/img/usage/purchase/guide/cost-allocated-by-subtotal.png)

***Formula for Cost Allocated By SubTotal***

- Formula : Item Subtotal / Document Subtotal * Landing Cost1

![23](../../../static/img/usage/purchase/guide/formula-subtotal.png)

:::note

   Item 1 = A/B * C

   Landing Cost1 (D) = 50.00 / 1949.00 * 200 = 5.13

   Item 2

   Landing Cost (D) = 1899.00 / 1949.00 * 200 = 194.87

:::

![24](../../../static/img/usage/purchase/guide/stock-card-check-cost.png)

:::note

   How to get unit cost = 5.51?

   Formula : Product Unit Cost + Item Landing Cost1 / Item Qty

   Formula : 5 + (5.13 / 10) = 5.51

:::

***Formula for Cost Allocated By Qty***

- Formula : Item Qty / Document Qty * Landing Cost1

![25](../../../static/img/usage/purchase/guide/cost-allocated-by-quantity.png)

![26](../../../static/img/usage/purchase/guide/formula-quantity.png)

:::note

   Item 1 : 10 / 11 * 200 = 181.81

   Item 2 : 1 / 11 * 200 = 18.18

:::

***Stock Card Report Outcome:***

:::note

   *Item ANT : unit cost will be 23.18, how to get 23.18 ?

   Unit Cost + (Landing Cost1 / Qty) = 5 + (181.82 / 10) = 23.18

   *Item LCLIP : Unit Cost will be 1917.18

   Unit Cost + (Landing Cost1 / Qty) = 1899 + (18.18 / 1) = 1917.18

:::

***Formula for Cost Allocated By Smallest Qty***

- Formula : Item Qty *Rate/ Sum(Qty* Rate) * Landing Cost1

![27](../../../static/img/usage/purchase/guide/cost-allocated-by-smallest-quantity.png)

![28](../../../static/img/usage/purchase/guide/formula-smallest-quantity.png)

:::note

   Item 1 : 10 * 12 = 120 / 121 = 198.35

   Item 2 : 1 * 1 = 1 / 121 = 1.65

:::

***Stock Card Report Outcome***

:::note

   Item 1 : Unit cost for ANT = [Unit Price + (Item Landing Cost1 / Item Qty)] / ItemRate = [30 + (198.35 / 10)] / 12 = 4.15

   Item 2 : Unit cost for LCLIP = [Unit Price + (Item Landing Cost1 / Item Qty)] / ItemRate = 1899 + 1.65 = 1900.65

:::

That seed will grow to be a peach tree. You may wish for an apple or an orange, but you will get a peach.

## Purchase Invoice

You can key in the purchase invoice after your purchase order has been approved and after you have received your goods.

![29](../../../static/img/usage/purchase/guide/purchase-invoice.png)

1. **Purchase | Purchase Invoice | New**

   ![30](../../../static/img/usage/purchase/guide/purchase-invoice-data-entry.png)

2. **Select Supplier Code**

3. **Insert Item**

   3a. **Insert Item Code and details** (e.g. Qty, Unit Cost)

   :::note

      You can navigate the search column by using the "TAB" button on your keyboard. It will apply to all drop down tables.

   :::

   ![31](../../../static/img/usage/purchase/guide/search-supplier-column.png)

4. **Write a description to explain your purchase invoice**

5. **Click the Save button once you are done.  Below is the example of the entry created:**

***Double Entry will be:-***

| Account            | DR (RM) | CR (RM) |
|--------------------|---------|---------|
| Purchase Account   | 500.00  |         |
| Supplier Account   |         | 500.00  |

### Transfer From DO

1. **Purchase | Purchase Invoice | New**

2. **Select Supplier Code**

3. **Right Click on Purchase Invoice title**, select Transfer from Goods Received, tick the document that you wish to transfer

4. **Save** the Purchase Invoice

![32](../../../static/img/usage/purchase/guide/purchase-invoice-transfer-from-do.png)

## Cash Purchase

You can key in cash purchase after your purchase order has been approved and after you have received your goods.

Cash purchases are used for purchases that are paid for with cash and have no outstanding payment.

![33](../../../static/img/usage/purchase/guide/cash-purchase.png)

1. **Purchase | Cash Purchase | New**

   ![34](../../../static/img/usage/purchase/guide/cash-purchase-data-entry.png)

2. **Select Supplier Code**

3. **Insert Item**

   3a. **Insert Item Code and details** (e.g. Qty, Unit Cost)

   :::note

      You can navigate the search column by using the "TAB" button on your keyboard. It will apply to all drop down tables.

   :::

   ![35](../../../static/img/usage/purchase/guide/search-supplier-column-2.png)

4. Write a description to explain your cash purchase

5. Click the **Save** button once you are done.

![36](../../../static/img/usage/purchase/guide/cash-purchase-example-entry.png)

### Transfer From

You can transfer your existing Purchase Order, Goods Receive Note, or Purchase Request to your Cash Sales.

All you have to do is RIGHT-CLICK at the "Cash Purchase" title

![37](../../../static/img/usage/purchase/guide/cash-purchase-transfer-from.png)

### Payment Paid

For cash purchases, you can select the payment method. and key in the payment amount.

![38](../../../static/img/usage/purchase/guide/cash-purchase-payment-paid-details.png)

![39](../../../static/img/usage/purchase/guide/cash-purchase-payment-paid-payment-by.png)

You can also key in the Cheque No. and Bank Charges if there are any .

Once you have **SAVED** your "Cash Purchase", The system will have created a Supplier payment document for you.

![40](../../../static/img/usage/purchase/guide/cash-purchase-generate-pv-number.png)

## Extra Goods Received

Extra Goods received is usually used by businesses where Invoices are issued before Goods Received.

You would need an Invoice -> DO module in order to issue Extra Goods Received Note.

![41](../../../static/img/usage/purchase/guide/navigate-extra-goods-received.png)

1. **Purchase | Extra Goods Receive | New**

2. **Select Supplier Code**

3. **Insert Item Code and details** (e.g. Qty, Unit Cost)

4. **Write a description to explain your extra goods receive**

   ![42](../../../static/img/usage/purchase/guide/extra-goods-received-data-entry.png)

5. **Click the Save button once you are done.**

### Transfer From PI To EGR

You can transfer your existing Purchase invoice or Cash Purchase.

All you have to do is RIGHT-CLICK at the "Extra Goods Received" title.

![43](../../../static/img/usage/purchase/guide/extra-goods-received-transfer-from.png)

## Purchase Debit Note

Purchase Debit note is used to increase your expense amount.

Or to increase the amount of credit that you owe your supplier.

![44](../../../static/img/usage/purchase/guide/purchase-debit-note.png)

1. **Purchase | Purchase Debit Note | New**

2. **Select Supplier Code**

3. **Insert Item Code and details** (e.g. Qty, Unit Cost)

4. **Write a description to explain your purchase debit note**

   ![45](../../../static/img/usage/purchase/guide/purchase-debit-note-data-entry.png)

5. **Click the Save button once you are done. Below is the example of the entry created:**

![46](../../../static/img/usage/purchase/guide/purchase-debit-note-example-entry.png)

### Transfer From PI

Instead of keying in a new document, you can transfer it from an existing Purchase Request or Purchase Order or Goods Received document.

All you have to do is RIGHT-CLICK at the "Purchase Debit Note" title.

![47](../../../static/img/usage/purchase/guide/purchase-debit-note-transfer-from.png)

## Purchase Returned

Purchase return document is created when you return purchased goods back to the supplier.

![48](../../../static/img/usage/purchase/guide/purchase-returned.png)

1. **Purchase | Purchase Returned | New**

2. **Select Supplier Code**

3. **Insert Item Code and details** (e.g. Qty, Unit Cost)

4. **Write a description to explain your purchase debit note**

   ![49](../../../static/img/usage/purchase/guide/purchase-returned-data-entry.png)

5. **Click the Save button once you are done. Below is the example of the entry created:**

![50](../../../static/img/usage/purchase/guide/purchase-returned-example-entry.png)

### Transfer From PI To PDN

Instead of keying in a new document, you can transfer it from an existing Purchase Invoice or Cash Purchase document.

All you have to do is RIGHT-CLICK at the "Purchase Return" title.

![51](../../../static/img/usage/purchase/guide/purchase-returned-transfer-from.png)

## Purchase Cancelled Note

You can key in the purchase cancelled note to remove any outstanding documents at purchase order.

![52](../../../static/img/usage/purchase/guide/purchase-cancelled-note.png)

1. **Purchase | Purchase Cancelled Note | New**

2. **Select Supplier Code**

3. **Insert Item Code and details** (e.g. Qty, Unit Cost)

4. **Write a description to explain your purchase debit note**

   ![53](../../../static/img/usage/purchase/guide/purchase-cancelled-note-data-entry.png)

5. **Click the Save button once you are done.**

### Transfer From PO To PCN

Instead of keying in a new document, you can transfer it from an existing Purchase Invoice or Cash Purchase document.

All you have to do is RIGHT-CLICK at the "Purchase Cancelled Note" title.

![54](../../../static/img/usage/purchase/guide/purchase-cancelled-note-transfer-from.png)
