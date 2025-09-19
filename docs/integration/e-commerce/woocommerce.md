---
title: WooCommerce
description: A guide on WooCommerce for SQL Account
slug: /integration/ecommerce/woocommerce
tags: ["SQL Account", "Integration", "e-Commerce", "WooCommerce"]
---

## Maintain Cloud Account

1. Select **![39](../../../static/img/integration/banks/cloud-icon.png) > Maintain Cloud Account** (One Time Setting)

    ![1](../../../static/img/integration/e-commerce/easyStore/1.png)

2. Click on NEW

    ![1](../../../static/img/integration/e-commerce/woo/1.png)

    1. Enter **Description**

    2. Select **Platform**

    3. Click on **Link** Button

        ![2](../../../static/img/integration/e-commerce/woo/2.png)

    4. Enter store URL

        ![3](../../../static/img/integration/e-commerce/woo/3.png)

    5. Go to your shop website and copy this first part of the URL:

        ![4](../../../static/img/integration/e-commerce/woo/4.png)

    6. Paste in you SQL Account and press GO

        ![5](../../../static/img/integration/e-commerce/woo/5.png)

    7. Login to your Woocommerce account.

3. Press on SAVE

    ![6](../../../static/img/integration/e-commerce/woo/6.png)

    - Once linking Successful, system will be returned status Linking Success Message.

## Configure E Commerce Setting

1. GL > Maintain Account

   1. Create Voucher / Discount Account Under Sales Adjustment

       ![7](../../../static/img/integration/e-commerce/tiktok/6.png)

   2. Create Shipping and Transaction Fee under Expenses

       ![8](../../../static/img/integration/e-commerce/easyStore/8.png)

       - It is up to company want to create under which category. Some of the Company will create under Cost of Goods Sold.

2. Customer > Maintain Customer

   ![9](../../../static/img/integration/e-commerce/woo/9.png)

3. Stock > Maintain Stock Group

   Create Shipping / Transaction / Voucher / Discount Stock Group

   1. Create Discount Stock Group

       ![10](../../../static/img/integration/e-commerce/woo/10.png)

   2. Create Voucher Stock Group

       ![11](../../../static/img/integration/e-commerce/woo/11.png)

       - Repeat same step to create for Shipping, Transaction Fees and Claim Stock Group

4. Stock > Stock Item

   1. Create Discount Stock Item

       ![12](../../../static/img/integration/e-commerce/woo/12.png)

   2. Create Voucher Item Code

       ![13](../../../static/img/integration/e-commerce/woo/13.png)

       - Repeat same step to create for Shipping, Transaction Fees and Claim Item Code

## Account Tab

 1. Click on ![39](../../../static/img/integration/banks/cloud-icon.png) - > Woocommerce

 2. Click on Account Tab > Double click on your account

     ![14](../../../static/img/integration/e-commerce/woo/14.png)

     1. Mapping Code

         ![15](../../../static/img/integration/e-commerce/woo/15.png)

     2. Expiry Date

         - Is the linking expired with both parties given by Woocommerce platform for
         security policy, once expired must relink with Woocommerce account to fetch
         the order.

## Product Tab

 1. Step to download Product list from WooCommerce

     1. Click on “Products” Tab, then click on “All Products”

         ![16](../../../static/img/integration/e-commerce/woo/16.png)

     2. Click on the “Export” button

         ![17](../../../static/img/integration/e-commerce/woo/17.png)

     3. Click “Generate CSV” once the export file has been generated. You will receive a file in .csv format.

         ![18](../../../static/img/integration/e-commerce/woo/18.png)

     4. Load the file into Microsoft Office. Then you can edit the details you need.

         - You can choose to have WooCommerce SKU as SQL Item Code by import to SQL, may contact your service agent to assist on this product import.

 2. Fetch Product

     1. Click on Product Tab > Click on Fetch Button > System will return the message when fetching done.

         ![19](../../../static/img/integration/e-commerce/woo/19.png)

         ![20](../../../static/img/integration/e-commerce/woo/20.png)

     2. Verify Status: Exist in Stock Item are meaning SQL and Seller SKU are having the same Item Code.

         ![21](../../../static/img/integration/e-commerce/woo/21.png)

         If you decide to use the same item code as Seller SKU, click on select All records > press on Post button for the first time so system will remember the settings.

         ![22](../../../static/img/integration/e-commerce/woo/22.png)

     3. Verified Status: Success when posting done

         ![23](../../../static/img/integration/e-commerce/woo/23.png)

         :::note
         Once you post successful, system will keep the Shop SKU in Stock Item as Alternative Item
         :::

         ![24](../../../static/img/integration/e-commerce/woo/24.png)

     4. You can still decide to map to different item code (system will auto ticked the record you change the item code), once done all, click on POST button.

         ![25](../../../static/img/integration/e-commerce/woo/25.png)

## Orders Tab

1. Click on Orders Tab

     ![26](../../../static/img/integration/e-commerce/woo/26.png)

2. Status

     ![27](../../../static/img/integration/e-commerce/woo/27.png)

     ![28](../../../static/img/integration/e-commerce/woo/28.png)

     :::tip
     Each order number will be posted once. You can delete the Invoice if you want to repost.
     :::

3. Fetch Order

     1. Select Date Range > Click on Refresh Order

         ![29](../../../static/img/integration/e-commerce/woo/29.png)

         Please be patient, system is on the way to fetch the order from WooCommerce

         ![30](../../../static/img/integration/e-commerce/woo/30.png)

         System will return the message when Fetching Done, Press OK.

         ![31](../../../static/img/integration/e-commerce/woo/31.png)

4. Post Order

     1. Click on the status you want to post the order, let us take an example on Completed - > Ticked all > Click on Post

         ![32](../../../static/img/integration/e-commerce/woo/32.png)

     2. If you did not tick on any order when do the posting, system will raise a message: You have not selected any order. Would you like to select all? If you would like to post all > Press Yes

         ![33](../../../static/img/integration/e-commerce/woo/33.png)

         Please be patient to wait for the order posting.

         ![34](../../../static/img/integration/e-commerce/woo/34.png)

     3. Click on OK when done posting

         ![35](../../../static/img/integration/e-commerce/woo/35.png)

5. Verify Status

     ![36](../../../static/img/integration/e-commerce/woo/36.png)

     1. Posted

         - Earlier Order posted before, system will ignore.

     2. Success

         - Order had been successfully Posting.

     3. Failed – Missing Dataset Property

         - Normally repost will be fine.

     4. Failed – Missing Item Code

         - Is due to WooCommerce have inactive item code, user can manually map in orders.

         1. Click on Item Code Drop Down, user can manually map the item code

             ![37](../../../static/img/integration/e-commerce/woo/37.png)

         2. Ticked on the record you want to post

         3. Click on Post

6. Sales Invoice

     - Example of Sales Invoice posted from WooCommerce | Orders.

         ![38](../../../static/img/integration/e-commerce/woo/38.png)

         ![39](../../../static/img/integration/e-commerce/woo/39.png)

         ![40](../../../static/img/integration/e-commerce/woo/40.png)

7. Sales Credit Note (Refund)

     - Refunds in WooCommerce are posted as sales credit notes in SQL Account.

     1. Example of Sales Credit Note posted from WooCommerce | Orders.

         ![41](../../../static/img/integration/e-commerce/woo/41.png)

     2. Tick which orders key you want to post to sales credit note. If post is successful, the verify status should show “Success”. You can see a Sales credit Note has been created in Sales | Credit Note

         ![42](../../../static/img/integration/e-commerce/woo/42.png)

     3. For a refund voucher, a sales credit note will be created as well as a sales invoice.

         ![43](../../../static/img/integration/e-commerce/woo/43.png)

         ![44](../../../static/img/integration/e-commerce/woo/44.png)

     4. In the customer credit note, The CN knocks off the outstanding amount of the Invoice.

     5. Meaning the invoice has been cancelled off and there is not outstanding payment.
