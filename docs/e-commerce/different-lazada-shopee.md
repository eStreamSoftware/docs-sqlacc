---
sidebar_position: 20
id: different-lazada-shopee
title: Difference between Shopee and Lazada posting order
description: A guide on the difference between Shopee and Lazada posting order for SQL Account
slug: /ecommerce/different-lazada-shopee
tags: ["SQL Account", "Posting order", "Shopee", "Lazada"]
---

<!-- # Difference between Shopee and Lazada posting order -->

## Shopee

### Posting Order

   1. When you post order in Shopee, all transaction fee / shipping fees are finalised when post order to invoice. SQL captures the **escrow amount** as the **Net Total**

      ![1](/img/e-commerce/different/1.png)

   2. When post payment, the payment amount will tally with the invoice amount. No adjustment
      is made.

      ![2](/img/e-commerce/different/2.png)

### Shopee Order Returned

   1. When a returned order is posted into SQL, it will be posted into SQL Invoice and will be transferred to Credit Note.

      ![3](/img/e-commerce/different/3.png)

      ![4](/img/e-commerce/different/4.png)

         :::note
         There are small no of cases where the escrow amount and the posted order amount is different. For such cases, SQL system will make the adjustment either editing on invoice or CN when payment is posted to make it tally.
         :::

## Lazada

### Posting Order

   1. When you post your order, the system has not finalized the transaction, shipping, marketing fees. You will only see the stock item in the invoice.

      ![5](/img/e-commerce/different/5.png)

      ![6](/img/e-commerce/different/6.png)

   2. The shipping fees and transaction fees will be added after posting payment.

   3. Load the payment file, and post

      ![7](/img/e-commerce/different/7.png)

      Payment has been created

      ![8](/img/e-commerce/different/8.png)

   4. After posting, you will notice that the invoice has been edited and the additional fees has been added. The Delivery Date is the posting date of the transaction entries.

      ![9](/img/e-commerce/different/9.png)

### Lazada Multiple Payment files

   1. For Lazada, 1 order can have multiple payment files. SQL system will adjust the Invoice / CN accordingly based on the amount of payment released by Lazada

      1. If order is a returned, and the first payment file has a **negative payment amount** , the invoice will be deleted.

      2. If order is a returned, and the first payment file has a **positive payment amount** , the returned order will be posted into Invoice first. The invoice **Net Total will be 0** value.

      3. Order and Payment Posting for Lazada:
         ![19](/img/e-commerce/different/19.png)

            - Positive Amount / Negative Amount = SUM Total Amount for same Order as per Payment File

   Example :

      Order 338719603950977 is posted as invoice :

         ![10](/img/e-commerce/different/10.png)

         ![11](/img/e-commerce/different/11.png)

      Payment file 1 (positive amount) :

   :::note

   Payment file must be loaded in sequence according to the payment statement date.

   :::

      ![12](/img/e-commerce/different/12.png)

      Payment File 2 (negative amount):

      ![13](/img/e-commerce/different/13.png)

      Payment File 3 (negative amount):

      ![14](/img/e-commerce/different/14.png)

      Invoice :

      ![15](/img/e-commerce/different/15.png)

      Payment:

      ![16](/img/e-commerce/different/16.png)

      Credit Note :

      ![17](/img/e-commerce/different/17.png)

      Customer Refund:

      ![18](/img/e-commerce/different/18.png)
