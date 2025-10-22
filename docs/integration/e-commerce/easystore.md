---
title: EasyStore
description: A guide on EasyStore for SQL Account
slug: /integration/ecommerce/easystore
tags: ["SQL Account", "Integration", "e-Commerce", "EasyStore"]
---


## Maintain Cloud Account

1. Select **![39](../../../static/img/integration/banks/cloud-icon.png) > Maintain Cloud Account** (One Time Setting)

    ![1](../../../static/img/integration/e-commerce/easyStore/1.png)

2. Click on NEW

    ![2](../../../static/img/integration/e-commerce/easyStore/2.png)

    1. Enter Description "**EasyStore**"

    2. Select **Platform**

    3. Click on **Link** Button

3. Paste your Easy Store URL and press **GO**

    ![3](../../../static/img/integration/e-commerce/easyStore/3.png)

4. **Login** with your credentials and then press **Install**

    ![4](../../../static/img/integration/e-commerce/easyStore/4.png)

    ![5](../../../static/img/integration/e-commerce/easyStore/5.png)

5. Press SAVE

    ![6](../../../static/img/integration/e-commerce/easyStore/6.png)

    - Once linking Successful, system will be returned status Linking Success Message.

## Configure E Commerce Setting

1. GL > Maintain Account

   1. Create EasyStore Voucher / Discount Account Under Sales Adjustment

        ![7](../../../static/img/integration/e-commerce/easyStore/7.png)

   2. Create Shipping and Transaction Fee under Expenses

    ![8](../../../static/img/integration/e-commerce/easyStore/8.png)

    :::info
    It is up to company want to create under which category. Some of the Company will create under Cost of Goods Sold.
    :::

2. Customer > Maintain Customer

    ![9](../../../static/img/integration/e-commerce/easyStore/9.png)

3. Stock > Maintain Stock Group

    Create EasyStore Shipping / Transaction / Voucher / Discount Stock Group

   1. Create Discount Stock Group

       ![10](../../../static/img/integration/e-commerce/easyStore/10.png)

   2. Create Voucher Stock Group

       ![11](../../../static/img/integration/e-commerce/easyStore/11.png)

       - Repeat same step to create for Shipping and Transaction Fees Stock Group

4. Stock > Stock Item

   1. Create Discount Stock Item

       ![12](../../../static/img/integration/e-commerce/easyStore/12.png)

   2. Create Voucher Item Code

       ![13](../../../static/img/integration/e-commerce/easyStore/13.png)

       - Repeat same step to create for Shipping and Transaction Fees Item Code

## Account Tab

1. Click on - >Easy Store

    ![14](../../../static/img/integration/e-commerce/easyStore/14.png)

    ![15](../../../static/img/integration/e-commerce/easyStore/15.png)

2. Click on Account Tab > Double click on your account

     1. Mapping Code

        ![16](../../../static/img/integration/e-commerce/easyStore/16.png)

## Product Tab

1. Fetch Product

     1. Click on Product Tab > Click on Fetch Button > System will return the message when fetching done.

        ![17](../../../static/img/integration/e-commerce/easyStore/17.png)

2. Verify Status: Exist in Stock Item are meaning SQL and EasyStore Shop SKU are having the same Item Code.

    ![18](../../../static/img/integration/e-commerce/easyStore/18.png)

    If you decide to use the same item code as EasyStore Shop SKU, click on select All records > press on Post button for the first time so system will remember the settings.

    ![19](../../../static/img/integration/e-commerce/easyStore/19.png)

3. Verify Status: Success when posting done

    ![20](../../../static/img/integration/e-commerce/easyStore/20.png)

    :::note
    Once you post successful, system will keep the ID in Stock Item as Alternative Item
    :::

    ![21](../../../static/img/integration/e-commerce/easyStore/21.png)

4. You can still decide to map to different item code (system will auto ticked the record you change the item code), once done all, click on POST button.

    ![22](../../../static/img/integration/e-commerce/easyStore/22.png)

## Orders Tab

1. Click on Orders Tab

    ![23](../../../static/img/integration/e-commerce/easyStore/23.png)

2. Status – Default Post Action

    ![24](../../../static/img/integration/e-commerce/easyStore/24.png)

    |Status|Posting To Sales Quotation|Posting to Sales Invoice|
    |---|---|---|
    |Unpaid|✔️|❌|
    |Partially Paid|✔️|✔️|
    |Paid|✔️|✔️|

    :::tip
    Each order number will be posted once. You can delete the Invoice if you want to repost.
    :::

3. Fetch Order

    1. Select Date Range > Click on Refresh Order

        ![26](../../../static/img/integration/e-commerce/easyStore/26.png)

        Please be patient, system is on the way to fetch the order from EasyStore

        ![27](../../../static/img/integration/e-commerce/easyStore/27.png)

        System will return the message when Fetching Done, Press OK.

4. Post Order

     1. Click on the status you want to post the order, let us take an example on Paid Status > Ticked all > Click on Post

         ![28](../../../static/img/integration/e-commerce/easyStore/28.png)

     2. If you did not tick on any order when do the posting, system will raise a message: You have not selected any order. Would you like to select all? If you would like to post all > Press Yes

         ![29](../../../static/img/integration/e-commerce/easyStore/29.png)

         Please be patient to wait for the order posting.

         ![30](../../../static/img/integration/e-commerce/easyStore/30.png)

     3. Click on OK when done posting

         ![31](../../../static/img/integration/e-commerce/easyStore/31.png)

5. Verify Status

     ![32](../../../static/img/integration/e-commerce/easyStore/32.png)

     1. Posted
        - Earlier Order posted before, system will ignore.
     2. Success
        - Order had been successfully Posting.
     3. Failed – Missing Dataset Property
        - Normally repost will be fine.
     4. Failed – Missing Item Code

         - Is due to EasyStore have inactive item code, user can manually map in orders.

         1. Click on Item Code Drop Down, user can manually map the item code

         2. Ticked on the record you want to post

         3. Click on Post

             ![33](../../../static/img/integration/e-commerce/easyStore/33.png)

6. Sales Invoice

     - Example of Sales Invoice posted from EasyStore | Orders.

     ![34](../../../static/img/integration/e-commerce/easyStore/34.png)

     ![35](../../../static/img/integration/e-commerce/easyStore/35.png)

7. Status – Others than Default POST Action

     - Beside the post button, press the black triangle, and select “Post” to post it to sales invoice.

     ![36](../../../static/img/integration/e-commerce/easyStore/36.png)

     ![37](../../../static/img/integration/e-commerce/easyStore/37.png)

## FAQ

 1. How to get my EasyStore domain?

     1. Login to your EasyStore account and go to Channls > and click Online Store

         ![38](../../../static/img/integration/e-commerce/easyStore/38.png)

     2. Then click Domains and copy the “easy.co” domain.

         ![39](../../../static/img/integration/e-commerce/easyStore/39.png)

         ![40](../../../static/img/integration/e-commerce/easyStore/40.png)

 2. How to do if have multiple location for each store?

     - It is advisable user to create one Location called Ecommerce, use the stock transfer from location A to Ecommerce, Location B to Ecommerce, in Ecommerce | Shopee | Account | Location set to Ecommerce.

 3. Error sending data : (12002) The operation timed out.

     1. User Internet unstable. Please check your internet connection. May try on others wifi or using mobile data.

     2. EasyStore server down, please try again later.

 4. Fetch Order raise error : E097 : Offset and limit sum 5100 must less than 5000, request id : 2101235d16xxxx

     ![41](../../../static/img/integration/e-commerce/easyStore/41.png)

     - EasyStore API Returned error as too huge transaction being fetched, the only way is to shorten the date period.

 5. The specified access token is invalid or expired.

     ![42](../../../static/img/integration/e-commerce/easyStore/42.png)

     - EasyStore API link expired, you are required to go back maintain cloud and link again with EasyStore platform (Refer Step 1.1.3 – 1.1.5)

 6. API access frequently exceeds the limit. This ban will last 1 seconds.

     ![43](../../../static/img/integration/e-commerce/easyStore/43.png)

     - Error appears after click Fetch. Solution, close your EasyStore tab in SQL Account > re-open it > click “Fetch” button again
