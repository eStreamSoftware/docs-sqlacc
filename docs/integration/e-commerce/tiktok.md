---
title: Tiktok
description: A guide on Tiktok for SQL Account
slug: /integration/ecommerce/tiktok
tags: ["SQL Account", "Integration", "e-Commerce", "Tiktok"]
---


## Maintain Cloud Account

1. Select **![39](../../../static/img/integration/banks/cloud-icon.png) > Maintain Cloud Account** (One Time Setting)

    ![1](../../../static/img/integration/e-commerce/easyStore/1.png)

2. Click on NEW

    ![1](../../../static/img/integration/e-commerce/tiktok/1.png)

    1. Enter **Description “Tik Tok”**

    2. Select **Platform**

    3. Click on **Link** Button

3. Select Platform

    ![2](../../../static/img/integration/e-commerce/tiktok/2.png)

    Select your account type to start the authorization process

    ![3](../../../static/img/integration/e-commerce/tiktok/3.png)

4. Login with your credentials

    ![4](../../../static/img/integration/e-commerce/tiktok/4.png)

5. Press SAVE

    ![5](../../../static/img/integration/e-commerce/tiktok/5.png)

    - Once linking Successful, system will be returned status Linking Success Message.

## Configure E Commerce Setting

1. GL -> Maintain Account

   1. Create TikTok Voucher / Discount Account Under Sales Adjustment

       ![6](../../../static/img/integration/e-commerce/tiktok/6.png)

   2. Create Shipping and Transaction Fee under Expenses

       ![7](../../../static/img/integration/e-commerce/easyStore/8.png)

       - It is up to company want to create under which category. Some of the Company will create under Cost of Goods Sold.

2. Customer -> Maintain Customer

   ![8](../../../static/img/integration/e-commerce/tiktok/8.png)

3. Stock -> Maintain Stock Group

   Create TikTok Shipping / Transaction / Voucher / Discount Stock Group

   1. Create Discount Stock Group

       ![9](../../../static/img/integration/e-commerce/tiktok/9.png)
   2. Create Voucher Stock Group

       ![10](../../../static/img/integration/e-commerce/tiktok/10.png)

       - Repeat same step to create for Shipping and Transaction Fees Stock Group

4. Stock -> Stock Item

   1. Create Discount Stock Item

       ![11](../../../static/img/integration/e-commerce/tiktok/11.png)

   2. Create Voucher Item Code

       ![12](../../../static/img/integration/e-commerce/tiktok/12.png)

       - Repeat same step to create for Shipping and Transaction Fees Item Code

## Account Tab

1. Click on - > TikTok

    ![13](../../../static/img/integration/e-commerce/tiktok/13.png)

2. Click on Account Tab -> Double click on your account

   1. Mapping Code

    ![14](../../../static/img/integration/e-commerce/tiktok/14.png)

## Product Tab : Fetch Product

 1. Click on Product Tab -> Click on Fetch Button -> System will return the message when fetching done.

     ![15](../../../static/img/integration/e-commerce/tiktok/15.png)

 2. Verify Status: Exist in Stock Item are meaning SQL and TikTok Shop SKU are having the same Item Code.

     ![16](../../../static/img/integration/e-commerce/tiktok/16.png)

     If you decide to use the same item code as Tiktok Shop Sku, click on select All records -> press on Post button for the first time so system will remember the settings.

     ![17](../../../static/img/integration/e-commerce/tiktok/17.png)

 3. Verified Status: Success when posting done

     ![18](../../../static/img/integration/e-commerce/tiktok/18.png)

     :::note
     Once you post successful, system will keep the ID in Stock Item as Alternative Item
     :::

     ![19](../../../static/img/integration/e-commerce/tiktok/19.png)

 4. You can still decide to map to different item code (system will auto ticked the record you change the item code), once done all, click on POST button.

     ![20](../../../static/img/integration/e-commerce/tiktok/20.png)

## Orders Tab

1. Click on Orders Tab

    ![21](../../../static/img/integration/e-commerce/tiktok/21.png)

2. Status – Default Post Action

    ![22](../../../static/img/integration/e-commerce/tiktok/22.png)

    :::info
    Each order number will be posted once. You can delete the Invoice if you want to repost.
    :::

3. Fetch Order

   1. Select Date Range -> Click on Refresh Order

       ![23](../../../static/img/integration/e-commerce/tiktok/23.png)

       Please be patient, system is on the way to fetch the order from TikTok

       ![24](../../../static/img/integration/e-commerce/tiktok/24.png)

       System will return the message when Fetching Done, Press OK.

4. Post Order

     1. Click on the status you want to post the order, let us take an example on Delivered Status -> Ticked all -> Click on Post

         ![25](../../../static/img/integration/e-commerce/tiktok/25.png)

     2. If you did not tick on any order when do the posting, system will raise a message: You have not selected any order. Would you like to select all? If you would like to post all -> Press Yes

         ![26](../../../static/img/integration/e-commerce/tiktok/26.png)

         Please be patient to wait for the order posting.

         ![27](../../../static/img/integration/e-commerce/tiktok/27.png)

     3. Click on OK when done posting

         ![28](../../../static/img/integration/e-commerce/tiktok/28.png)

5. Verify Status

     ![29](../../../static/img/integration/e-commerce/tiktok/29.png)

     1. Posted

         - Earlier Order posted before, system will ignore.

     2. Success

         - Order had been successfully Posting.

     3. Failed – Missing Dataset Property

         - Normally repost will be fine.

     4. Failed – Missing Item Code

         - Is due to TikTok have inactive item code, user can manually map in orders.

         1. Click on Item Code Drop Down, user can manually map the item code

             ![30](../../../static/img/integration/e-commerce/tiktok/30.png)

         2. Ticked on the record you want to post

         3. Click on Post

6. Sales Invoice

     - Example of Sales Invoice posted from TikTok | Orders.

         ![31](../../../static/img/integration/e-commerce/tiktok/31.png)

         ![32](../../../static/img/integration/e-commerce/tiktok/32.png)

7. Status – Others than Default POST Action

     - Beside the post button, press the black triangle, and select “Post” to post it to sales invoice.

         ![33](../../../static/img/integration/e-commerce/tiktok/33.png)

         ![34](../../../static/img/integration/e-commerce/tiktok/34.png)

## Payment Tab

1. Step to Download statement from TikTok

     1. Click on Seller Center -> Finance Tab on left menu -> Settled Records -> Export

         ![35](../../../static/img/integration/e-commerce/tiktok/35.png)

2. Posting Payment

     1. Select Account (Only if you have more than 1 store)

     2. Click Load CSV (Statement downloaded from Step 1.6)

         ![36](../../../static/img/integration/e-commerce/tiktok/36.png)

     3. Select the statement download from TikTok

         ![37](../../../static/img/integration/e-commerce/tiktok/37.png)

     4. Click on Post

         ![38](../../../static/img/integration/e-commerce/tiktok/38.png)

     5. Error in Red: Please sync all orders before posting payment.

         - Due to some order yet posting to Invoice. Before you do the posting, you can check on Invoice No column, post the orders with empty Invoice No.

             ![39](../../../static/img/integration/e-commerce/tiktok/39.png)

             :::note

             TikTok required you to sync all order before can posting payment due to have to tally with bank recon.

             :::

     6. Once you check all the order have been posting (without empty Invoice No), click on Post

         ![40](../../../static/img/integration/e-commerce/tiktok/40.png)

     7. Posting Payment / Editing Invoice for TikTok Fees, please be patient

         ![41](../../../static/img/integration/e-commerce/tiktok/41.png)

     8. Posting done

         ![42](../../../static/img/integration/e-commerce/tiktok/42.png)

     9. Example of Customer Payment posted from TikTok | Payment

         - System will auto do the knockoff

             :::note
             Same Payment Transaction Date will be posting as 1 Customer Payment.
             :::

         ![43](../../../static/img/integration/e-commerce/tiktok/43.png)

         ![44](../../../static/img/integration/e-commerce/tiktok/44.png)

     10. If the Order No starts with “ 7 ”, it is an adjustment, SQL System will combine the transactions that start with number “ 7 ” of the same date and post into 1 invoice (description : Tiktok Adjustment) using the SQL Systems current running number.

         ![45](../../../static/img/integration/e-commerce/tiktok/45.png)

         ![46](../../../static/img/integration/e-commerce/tiktok/46.png)

         ![47](../../../static/img/integration/e-commerce/tiktok/47.png)

## FAQ

1. How to do if have multiple location for each store?

    - It is advisable user to create one Location called Ecommerce, use the stock transfer from location A to Ecommerce, Location B to Ecommerce, in Ecommerce | Shopee | Account | Location set to Ecommerce.

2. Error sending data : (12002) The operation timed out.

    1. User Internet unstable. Please check your internet connection. May try on others wifi or using mobile data.

    2. TikTok server down, please try again later.

3. Fetch Order raise error : E097 : Offset and limit sum 5100 must less than 5000, request id : 2101235d16xxxx

    ![48](../../../static/img/integration/e-commerce/tiktok/48.png)

    - TikTok API Returned error as too huge transaction being fetched, the only way is to shorten the date period.

4. The specified access token is invalid or expired.

    ![49](../../../static/img/integration/e-commerce/tiktok/49.png)

    - TikTok API link expired, you are required to go back maintain cloud and link again with TikTok platform (Refer Step 1.1.3 – 1.1.5)

5. API access frequently exceeds the limit. This ban will last 1 seconds.

    ![50](../../../static/img/integration/e-commerce/tiktok/50.png)

    - Error appears after click Fetch. Solution, close your TikTok tab in SQL Account -> re-open it -> click “Fetch” button again
