---
sidebar_position: 20
id: lazada
title: Lazada
description: A guide on Lazada for SQL Account
slug: /ecommerce/lazada
tags: ["SQL Account", "Lazada"]
---

<!-- **Table of Contents**

1. [Lazada](#1-lazada)
   1. [Maintain Cloud Account](#11-maintain-cloud-account)
   2. [Configure E Commerce Setting](#12-configure-e-commerce-setting)
   3. [Account Tab](#13-account-tab)
   4. [Product Tab](#14-product-tab)
      1. [Step to Download Product List from Lazada](#141-step-to-download-product-list-from-lazada)
      2. [Fetch Product](#142-fetch-product)
   5. [Orders Tab](#15-orders-tab)
      1. [Status – Default Post Action](#151-status-default-post-action)
      2. [Fetch Order](#152-fetch-order)
      3. [Post Order](#153-post-order)
      4. [Verify Status](#154-verify-status)
      5. [Sales Invoice](#155-sales-invoice)
      6. [Sales Credit Note](#156-sales-credit-note)
      7. [Status – Others than Default POST Action](#157-status-others-than-default-post-action)
   6. [Payment Tab](#16-payment-tab)
      1. [Step to Download Statement from Lazada](#161-step-to-download-statement-from-lazada)
      2. [Posting Payment](#162-posting-payment)
      3. [Verify Status](#163-verify-status)
   7. [FAQ](#17-faq)
      1. [How to do if I have multiple locations for each store?](#171-how-to-do-if-have-multiple-location-for-each-store)
      2. [How to do if I want to split Lazada and Shopee Sales?](#172-how-to-do-if-i-want-to-split-lazada-and-shopee-sales)
      3. [How system handle Lazada Marketing Fees?](#173-how-system-handle-lazada-marketing-fees)
      4. [Error sending data: (12002) The operation timed out.](#174-error-sending-data-12002-the-operation-timed-out)
      5. [How system handle Reversal Item Price and Adjustment Item Charge?](#175-how-system-handle-reversal-item-price-and-adjustment-item-charge)
      6. [How system handle Opening Invoice?](#176-how-system-handle-opening-invoice)
      7. [Order Not Post when load in payment, how do I know the Order Date?](#177-order-not-post-when-load-in-payment-how-do-i-know-the-order-date)
      8. [How system handle for the scenario when first release payment in negative due to overcharge on shipping fees](#178-how-system-handle-for-the-scenario-when-first-release-payment-in-negative-due-to-overcharge-on-shipping-fees)
      9. [Fetch Order raise error: E097: Offset and limit sum 5100 must be less than 5000, request id: 2101235d16xxxx](#179-fetch-order-raise-error-e097-offset-and-limit-sum-5100-must-be-less-than-5000-request-id-2101235d16xxxx)
      10. [The specified access token is invalid or expired.](#180-the-specified-access-token-is-invalid-or-expired)
      11. [API access frequently exceeds the limit. This ban will last 1 second.](#181-api-access-frequently-exceeds-the-limit-this-ban-will-last-1-seconds)
      12. [How system handle “Failed Delivery" in SQL?](#182-how-system-handle-failed-delivery-in-sql) -->

<!-- ## 1. Lazada -->

## 1. Maintain Cloud Account

  1. Select - > **Maintain Cloud Account (One Time Setting)**

      ![1](/img/e-commerce/easyStore/1.png)

  2. Click on NEW

      ![1](/img/e-commerce/lazada/1.png)

      1. Enter **Description**

      2. Select **Platform**

      3. Click on **Link** Button

  3. Select Platform

      ![2](/img/e-commerce/lazada/2.png)

  4. Login with your credentials

      ![3](/img/e-commerce/lazada/3.png)

  5. Press on SAVE

      ![4](/img/e-commerce/lazada/4.png)

      - Once linking Successful, system will be returned status Linking Success Message.

## 2. Configure E Commerce Setting

    1. GL -> Maintain Account

        1. Create Lazada Voucher / Discount Account Under Sales Adjustment

            ![5](/img/e-commerce/lazada/5.png)

        2. Create Shipping and Transaction Fee under Expenses

            ![6](/img/e-commerce/lazada/6.png)

            :::info

            It is up to company want to create under which category. Some of the Company will create under Cost of Goods Sold.

            :::

    2. Customer -> Maintain Customer

        ![7](/img/e-commerce/lazada/7.png)

    3. Stock -> Maintain Stock Group

        Create Lazada Shipping / Transaction / Voucher / Discount Stock Group

        1. Create Discount Stock Group

            ![8](/img/e-commerce/lazada/8.png)

        2. Create Voucher Stock Group

            ![9](/img/e-commerce/lazada/9.png)

            - Repeat same step to create for Shipping and Transaction Fees Stock Group

    4. Stock -> Stock Item

        1. Create Discount Stock Item

            ![10](/img/e-commerce/lazada/10.png)

        2. Create Voucher Item Code

            ![11](/img/e-commerce/lazada/11.png)

            - Repeat same step to create for Shipping and Transaction Fees Item Code

## 3. Account Tab

  1. Click on -> Lazada

  2. Click on Account Tab -> Double click on your account

      ![12](/img/e-commerce/lazada/12.png)

      1. Mapping Code

          ![13](/img/e-commerce/lazada/13.png)

      2. Expiry Date

          - Is the linking expired with both parties given by Lazada platform for security policy, once expired must relink with Lazada account to fetch the order.

          [Youtube Video Link](https://www.youtube.com/watch?v=B9UmhTYjFHM)

## 4. Product Tab

  1. Step to download Product list from Lazada

      1. Click on “**Products**” Tab, then click on “**Manage Products**” and then click “**Bulk Manage**”

          ![14](/img/e-commerce/lazada/14.png)

      2. Select “Bulk Edit” option

          ![15](/img/e-commerce/lazada/15.png)

      3. Press “**Export Excel Template**” and save it to your computer location.

          ![16](/img/e-commerce/lazada/16.png)

          You can choose to have Lazada SKU as SQL Item Code by import to SQL. May contact your service agent to assist on this product import.

  2. Fetch Product

      1. Click on Product Tab -> Click on Fetch Button -> System will return the message when fetching done.

          ![17](/img/e-commerce/lazada/17.png)

      2. Verify Status: Exist in Stock Item are meaning SQL and Seller SKU are having the same Item Code.

          ![18](/img/e-commerce/lazada/18.png)

          :::info
          If you decide to use the same item code as Seller Sku, click on select All records -> press on Post button for the first time so system will remember the settings.
          :::

          ![19](/img/e-commerce/lazada/19.png)

      3. Verified Status: Success when posting done

          ![20](/img/e-commerce/lazada/20.png)

          :::note
          Once you post successful, system will keep the Shop SKU in Stock Item as Alternative Item
          :::

          ![21](/img/e-commerce/lazada/21.png)

      4. You can still decide to map to different item code (system will auto ticked the record you change the item code), once done all, click on POST button.

          ![22](/img/e-commerce/lazada/22.png)

          [Youtube Video Link](https://www.youtube.com/watch?v=B9UmhTYjFHM)

## 5. Orders Tab

    - Click on Orders Tab

      ![23](/img/e-commerce/lazada/23.png)

  1. Status – Default Post Action

      ![24](/img/e-commerce/lazada/24.png)

      ![25](/img/e-commerce/lazada/25.png)

      Remark: Each order number will be posted once. You can delete the Invoice if you want to repost.

  2. Fetch Order

      1. Select Date Range -> Click on Refresh Order

          ![26](/img/e-commerce/lazada/26.png)

          Please be patient, system is on the way to fetch the order from Lazada

          ![27](/img/e-commerce/lazada/27.png)

          ![28](/img/e-commerce/lazada/28.png)

          System will return the message when Fetching Done, Press OK.

  3. Post Order

      1. Click on the status you want to post the order, let us take an example on Delivered Status -> Ticked all -> Click on Post

          ![29](/img/e-commerce/lazada/29.png)

      2. If you did not tick on any order when do the posting, system will raise a message: You have not selected any order. Would you like to select all? If you would like to post all -> Press Yes

          ![30](/img/e-commerce/lazada/30.png)

          Please be patient to wait for the order posting.

          ![31](/img/e-commerce/lazada/31.png)

      3. Click on OK when done posting

          ![32](/img/e-commerce/lazada/32.png)

  4. Verify Status

      ![33](/img/e-commerce/lazada/33.png)

      1. Posted

          - Earlier Order posted before, system will ignore.

      2. Success

          - Order had been successfully Posting.

      3. Failed – Missing Dataset Property

          - Normally repost will be fine.

          ![34](/img/e-commerce/lazada/34.png)

      4. Failed – Missing Item Code

          - Is due to Lazada have inactive item code, user can manually map in orders.

          Step 1: Click on Item Code Drop Down, user can manually map the item code

            ![35](/img/e-commerce/lazada/35.png)

          Step 2: Ticked on the record you want to post

          Step 3: Click on Post

  5. Sales Invoice

      - Example of Sales Invoice posted from Lazada | Orders.

        ![36](/img/e-commerce/lazada/36.png)

        ![37](/img/e-commerce/lazada/37.png)

  6. Sales Credit Note

      - Example of Sales Credit Note posted from Lazada | Orders.

        ![38](/img/e-commerce/lazada/38.png)

        Returned Sales will be posted to 1 document only.

        In this scenario it is posted to Sales Invoice.

        Select **“Post”** to post it to sales invoice.

          ![39](/img/e-commerce/lazada/39.png)

          ![40](/img/e-commerce/lazada/40.png)

        [Youtube Video Link](https://www.youtube.com/watch?v=jrts5wSRecA)

  7. Status – Others than Default POST Action

      - Beside the post button, press the black triangle, and select ”Post” to post it to sales invoice.

        ![41](/img/e-commerce/lazada/41.png)

        ![42](/img/e-commerce/lazada/42.png)

## 6. Payment Tab

  1. Step to Download statement from Lazada

      1. Click on Seller Center -> Finance Tab on left menu -> Account Statement - > Statement Period

          :::note
          The new version of Lazada Seller Center, has changed the settlement period from weekly to daily.
          :::

          ![43](/img/e-commerce/lazada/43.png)

      2. At your Statement Overview, go to Settlement Report to see the weekly statement.

          ![44](/img/e-commerce/lazada/44.png)

      3. Click “Download” and download the file of the weekly statement that contains the payments that you want to export.

          ![45](/img/e-commerce/lazada/45.png)

  2. Posting Payment

      1. Select Account (Only if you have more than 1 store)

      2. Click Load CSV (Statement downloaded from Step 1.6)

          ![46](/img/e-commerce/lazada/46.png)

      3. Select the statement download from Lazada

          ![47](/img/e-commerce/lazada/47.png)

      4. Click on Post

          ![48](/img/e-commerce/lazada/48.png)

      5. Error in Red: Please sync all orders before posting payment.

          - Due to some order yet posting to Invoice. Before you do the posting, you can check on Invoice No column, post the orders with empty Invoice No.

          ![49](/img/e-commerce/lazada/49.png)

          :::info
          Lazada required you to sync all order before can posting payment due to have to tally with bank recon.
          :::

      6. Once you check all the order have been posting (without empty Invoice No), click on Post

          ![50](/img/e-commerce/lazada/50.png)

      7. Posting Payment / Editing Invoice for Lazada Fees, please be patient

          ![51](/img/e-commerce/lazada/51.png)

      8. Cheque number already exists

          - Press **Yes**, system capture Lazada Payment ref ID as Cheque number.

          ![52](/img/e-commerce/lazada/52.png)

          User can choose to turn off prompt duplicate cheque number at Tools -> Option -> Miscellaneous -> Unticked Prompt Duplicate Cheque Number.

          ![53](/img/e-commerce/lazada/53.png)

      9. Posting done

          ![54](/img/e-commerce/lazada/54.png)

      10. System will skip posting when Item Price is 0

          ![55](/img/e-commerce/lazada/55.png)

      11. Example of Sales Invoice with added in Transaction Fees Posted from Lazada | Payment

          ![56](/img/e-commerce/lazada/56.png)

          :::note
          Version 794 – 801 will post to Sales CN

          Version 802 & above is Edit Sales Invoice and added in
          :::

      12. Example of Customer Payment posted from Lazada | Payment

          - System will auto do the knockoff
            ![57](/img/e-commerce/lazada/57.png)

            :::note
            Same Transaction Date will be posting as 1 Customer Payment.
            :::

      13. Example of Bank Deposit posted from Lazada | Payment

          - 7 Days of payment will group as 1 row in bank recon for easier bank recon.

            ![58](/img/e-commerce/lazada/58.png)

            :::note
            Bank Slip No is Lazada Payment Ref ID
            :::

            Example of Bank Recon

            ![59](/img/e-commerce/lazada/59.png)

            [Youtube Video Link](https://www.youtube.com/watch?v=PloG3CeHA1w)

  3. Verify Status

      1. Not Paid

          - Paid Status is status for user to know the order have or have not pay to seller.

          - Not paid status will not posting to Customer payment.

            ![60](/img/e-commerce/lazada/60.png)

      2. Payment ref id not found

          - Lazada allows seller to forward date download finance statement, without Payment ref ID which mean Lazada yet release payment to Seller, SQL will not posting without payment ref ID.
            ![61](/img/e-commerce/lazada/61.png)

## 7. FAQ

  1. How to do if have multiple location for each store?

      - It is advisable user to create one Location called Ecommerce, use the stock transfer from location A to Ecommerce, Location B to Ecommerce, in Ecommerce | Shopee | Account | Location set to Ecommerce.

  2. How to do if I want to split Lazada and Shopee Sales?

      - Can separate by Project

      - Tools -> Maintain Project

  3. How system handle Lazada Marketing Fees?

      When load in Payment file(.csv) file in **Payment Tab** with marketing fees, if the amount is in positive, system will raise IV and payment, else system will post to Sales CN and Customer Refund.

      Marketing Fees will post to Transaction Item Code.

  4. Error sending data : (12002) The operation timed out

      1. User Internet unstable. Please check your internet connection. May try on others wifi or using mobile data.

      2. Lazada server down, please try again later.

  5. How system handle Reversal Item Price and Adjustment Item Charge?

      - When load payment file, once the lazada payment release more than Outstanding Invoice amount, will deleted CN.

  6. How system handle Opening Invoice?

      - Load in payment, when order date before system conversion date, right click Select Check Past Invoice, Click on Post Past Invoice

        ![62](/img/e-commerce/lazada/62.png)

      - User required to post the past invoice in Order

  7. Order Not Post when load in payment, how do I know the Order Date?

      - Make sure in payment choose the correct **store name**, right click select **Check Past Invoice**

      - Look for Order Date, system will show the Order Date on Verify Status with Order Not Posted

        ![63](/img/e-commerce/lazada/63.png)

  8. How system handle for the scenario when first release payment in negative due to overcharge on shipping fees

      - When load payment, once release amount is in negative, system will delete earlier Invoice, and raise CN(amount will be exactly same as Payment file) and Refund.

      - When 2nd payment(Adjustment), if the amount is in negative, append to CN and Refund, if in positive, will raise Invoice(Adjustment value) and Payment.

  9. Fetch Order raise error : E097 : Offset and limit sum 5100 must less than 5000, request id : 2101235d16xxxx

      ![64](/img/e-commerce/lazada/64.png)

      - Lazada API Returned error as too huge transaction being fetched, the only way is to shorten the date period.

  10. The specified access token is invalid or expired

      ![65](/img/e-commerce/lazada/65.png)

      - Lazada API link expired, you are required to go back maintain cloud and link again with Lazada platform (Refer Step 1.1.3 – 1.1.5)

  11. API access frequently exceeds the limit. This ban will last 1 seconds

      ![66](/img/e-commerce/lazada/66.png)

      - Error appears after click Fetch. Solution, close your Lazada tab in SQL Account -> re-open it -> click “Fetch” button again

  12. How system handle “Failed Delivery" in SQL?

      ![67](/img/e-commerce/lazada/67.png)

      Orders with “Failed Delivery” in Lazada will be fetch into SQL with the status as **canceled**.

      If the order has transaction fees to offset, the canceled order can be posted as
      Cancelled Sales Invoice.

      ![68](/img/e-commerce/lazada/68.png)

      To post as invoice, click the black arrow beside the “Post” button and select “Post as
      Cancelled Sales Invoice”.
