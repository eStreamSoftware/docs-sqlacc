---
title: Shopee
description: A guide on Shopee for SQL Account
slug: /integration//ecommerce/shopee
tags: ["SQL Account", "Integration", "e-Commerce", "Shopee"]
---

## Maintain Cloud Account

1. Select **![39](../../../static/img/integration/banks/cloud-icon.png) > Maintain Cloud Account** (One Time Setting)

    ![1](../../../static/img/integration/e-commerce/easyStore/1.png)

2. Click on NEW

    ![1](../../../static/img/integration/e-commerce/shopee/1.png)

    1. Enter **Description**

    2. Select **Platform**

    3. Click on **Link** Button

3. Login Shopee Credential

    ![2](../../../static/img/integration/e-commerce/shopee/2.png)

4. Click on Confirm Authorization

    ![3](../../../static/img/integration/e-commerce/shopee/3.png)

5. Press SAVE

    ![4](../../../static/img/integration/e-commerce/shopee/4.png)

    - Once linking Successful, system will be returned status Linking Success Message.

## Configure E Commerce Setting

1. GL -> Maintain Account

   1. Create Shopee Payment Method

       ![5](../../../static/img/integration/e-commerce/shopee/5.png)

   2. Create Shopee Voucher / Discount Account Under Sales Adjustment

       ![6](../../../static/img/integration/e-commerce/lazada/5.png)

   3. Create Shipping and Transaction Fee under Expenses

       ![7](../../../static/img/integration/e-commerce/easyStore/8.png)

       - It is up to company want to create under which category. Some of the Company will create under Cost of Goods Sold.

2. Customer -> Maintain Customer

   ![8](../../../static/img/integration/e-commerce/shopee/8.png)

3. Stock -> Maintain Stock Group

   Create Lazada Shipping / Transaction / Voucher / Discount Stock Group

   1. Create Discount Stock Group

       ![9](../../../static/img/integration/e-commerce/shopee/9.png)

   2. Create Voucher Stock Group

       ![10](../../../static/img/integration/e-commerce/shopee/10.png)

       - Repeat same step to create for Shipping and Transaction Fees Stock Group

4. Stock -> Stock Item

   1. Create Discount Stock Item

       ![11](../../../static/img/integration/e-commerce/shopee/11.png)

       :::note
       Unticked Stock Control
       :::

   2. Create Voucher Item Code

       ![12](../../../static/img/integration/e-commerce/shopee/12.png)

       - Repeat same step to create for Shipping and Transaction Fees Item Code

## Account Tab

1. Click on '![39](../../../static/img/integration/banks/cloud-icon.png)'- > Shopee

2. Click on Account Tab -> Double click on your account

    ![13](../../../static/img/integration/e-commerce/shopee/13.png)

    1. Mapping Code

        ![14](../../../static/img/integration/e-commerce/shopee/14.png)

    2. Expiry Date

    - Is the linking expired with both parties given by Shopee platform for security
    policy, once expired must relink with Shopee account to fetch the order.

    [Youtube](https://www.youtube.com/watch?v=B9UmhTYjFHM)

## Product Tab

1. Step to download product list from Shopee

   1. Navigate to “My Products” under “Product” category.

   2. Click on “Batch Tools” and select “Mass Update”

       ![15](../../../static/img/integration/e-commerce/shopee/15.png)

   3. Click on “Generate” to generate the product list.

   4. Click on “Download” to get the generated product list.

       ![16](../../../static/img/integration/e-commerce/shopee/16.png)

   You can choose to have Shopee SKU as SQL Item Code by import to SQL, may contact your service agent to assist on this product import.

2. Fetch product

   1. Click on Product Tab -> Click on Fetch Button -> System will return the message when fetching done.

       ![17](../../../static/img/integration/e-commerce/shopee/17.png)

   2. Verify Status: Exist in Stock Item are meaning SQL and Seller SKU are having the same Item Code.

       ![18](../../../static/img/integration/e-commerce/shopee/18.png)

       If you decide to use the same item code as Seller Sku, ticked on select All records -> press on Post button for the first time so system will remember the settings.

       ![19](../../../static/img/integration/e-commerce/shopee/19.png)

   3. Verified Status: Success when posting done

       ![20](../../../static/img/integration/e-commerce/shopee/20.png)

       :::note
       Once you post successful, system will keep the Shop SKU in Stock Item as Alternative Item
       :::

       ![21](../../../static/img/integration/e-commerce/shopee/21.png)

   4. You can still manually do the mapping on the item code (system will auto ticked the record you have change the item code), once done all, click on POST button.

       ![22](../../../static/img/integration/e-commerce/shopee/22.png)

   [Youtube](https://www.youtube.com/watch?v=B9UmhTYjFHM)

## Orders Tab

1. Click on Orders Tab

     ![23](../../../static/img/integration/e-commerce/shopee/23.png)

2. Status

     ![24](../../../static/img/integration/e-commerce/shopee/24.png)

     ![25](../../../static/img/integration/e-commerce/shopee/25.png)

     :::tip
     Each order number will be posted once. You can delete the Invoice if you want to repost.
     :::

3. Fetch Order

     1. Select Date Range -> Click on Refresh Order

         ![26](../../../static/img/integration/e-commerce/shopee/26.png)

         Please be patient, system is on the way to fetch the order from Shopee

         ![27](../../../static/img/integration/e-commerce/shopee/27.png)

         System will return the message when Fetching Done, Press OK.

         ![28](../../../static/img/integration/e-commerce/shopee/28.png)

4. Post Order

     1. Click on the status you want to post the order, let us take an example on Completed Status -> Ticked all -> Click on Post

         ![29](../../../static/img/integration/e-commerce/shopee/29.png)

     2. If you did not tick on any order when do the posting, system will raise a message: You have not selected any order. Would you like to select all? If you would like to post all -> Press Yes

         ![30](../../../static/img/integration/e-commerce/shopee/30.png)

         Please be patient to wait for the order posting.

         ![30](../../../static/img/integration/e-commerce/shopee/30.png)

     3. Click on OK when done posting

         ![31](../../../static/img/integration/e-commerce/shopee/31.png)

5. Verify Status

     ![32](../../../static/img/integration/e-commerce/shopee/32.png)

     1. Posted

         - Earlier Order posted before, system will ignore.

     2. Success

         - Order had been successfully Posting.

     3. Failed – Missing Dataset Property

         - Normally repost will be fine.

     4. Catastrophic Failure

         - Normally repost will be fine (Can restart SQL if unable to post)

     5. Failed – Missing Item Code - Is due to Shopee have inactive item code, user can manually map in orders.

         1. Ticked on the order

             ![33](../../../static/img/integration/e-commerce/shopee/33.png)

         2. Click on Item Code Drop Down, user can manually map the item code

         3. Click on Post

6. Order Details

     1. Double click on the order which you want to view the detail.

         ![34](../../../static/img/integration/e-commerce/shopee/34.png)

     2. Order details will be displayed.

         ![35](../../../static/img/integration/e-commerce/shopee/35.png)

7. Sales Invoice

     - Example of Sales Invoice posted from Shopee | Orders.

         ![36](../../../static/img/integration/e-commerce/shopee/36.png)

     1. Formula to calc Shipping Fees:

         Escrow Amount - ((Discounted Price \*Qty)- Other Fee - Discount - Voucher)

         = RM 76.97 - (RM 87.60 - RM 5.63 - RM 0 - RM 5)

         = RM 0

         :::note
         Escrow Amount will be Shopee release amount.
         :::

         ![37](../../../static/img/integration/e-commerce/shopee/37.png)

         :::note
         Missing no 10 Discount Item Code?

         - No, is due to Disc is 0, system will not be posting over.

         Missing no 12 Shipping Item Code?

         - No, is due to Shipping Fees is 0, system will not be posting over.
         :::

8. Sales Credit Note

     1. Example of Sales Credit Note posted from Shopee | Orders.

         ![38](../../../static/img/integration/e-commerce/shopee/38.png)

     2. Sales -> Invoice

         ![39](../../../static/img/integration/e-commerce/shopee/39.png)

     3. Escrow = RM 10.25(Escrow Amt) + 23.50(Product) = RM 33.75

         Product = RM 23.50

         Others = RM 1.50

         Shipping Fees calc on CN will be different when have return refund amount.

         = RM 33.75 – (RM23.50 – RM 1.50 – RM 0 – RM 0)

         = RM 11.75

     4. Sales -> Credit Note

        CN will be posting return product without Shipping and Transaction fees.

        ![40](../../../static/img/integration/e-commerce/shopee/40.png)

        **Customer -> Customer Credit Note**

        ![41](../../../static/img/integration/e-commerce/shopee/41.png)

        :::note
        System will auto knockoff the Invoice.
        :::

        **Customer -> Customer Invoice**

        ![42](../../../static/img/integration/e-commerce/shopee/42.png)

        - Outstanding Amount will be Shopee Release Amount

9. Replace

     1. Select the order that need to be replaced and click on Replace.

         ![43](../../../static/img/integration/e-commerce/shopee/43.png)

         ![44](../../../static/img/integration/e-commerce/shopee/44.png)

     2. The order selected will be replaced.

         ![45](../../../static/img/integration/e-commerce/shopee/45.png)

10. Print

     1. Click on Order No -> Print

         ![46](../../../static/img/integration/e-commerce/shopee/46.png)

     2. Select Report -> Press OK

         ![47](../../../static/img/integration/e-commerce/shopee/47.png)

     3. Sample Report

         ![48](../../../static/img/integration/e-commerce/shopee/48.png)

     [Youtube](https://www.youtube.com/watch?v=jrts5wSRecA)

## Payment Tab

1. Step to download statement from Shopee

    1. Navigate to “My Income” under “Finance” category.

    2. Switch to “Released” tab under “Income Details”

    3. Click on “Export” button and finally “Download” the file.

        ![49](../../../static/img/integration/e-commerce/shopee/49.png)

2. Posting Payment

    1. Select Payment Tab -> Select Account (Only if you have more than 1 store)

    2. Click Load Excel

        ![50](../../../static/img/integration/e-commerce/shopee/50.png)

    3. Select the statement download from Shopee

        ![51](../../../static/img/integration/e-commerce/shopee/51.png)

    4. Check on Invoice No Column, make sure no blank Invoice No. It is advisable to post all the order first before do payment. Once done, click on Post

        ![52](../../../static/img/integration/e-commerce/shopee/52.png)

        Blank Invoice No mean order yet do the posting.

    5. Posting Payment, please be patient

        ![53](../../../static/img/integration/e-commerce/shopee/53.png)

    6. Payment Posting done

        ![54](../../../static/img/integration/e-commerce/shopee/54.png)

    7. Example of Customer Payment posted from Shopee | Payment

        System will group same payment date as 1 payment.

        Release Amount will be Shopee release amount.

        Example: On 7/12/2020, total payment received RM 1424.71

        ![55](../../../static/img/integration/e-commerce/shopee/55.png)

        **Customer -> Customer Payment**

            ![56](../../../static/img/integration/e-commerce/shopee/56.png)

        System will auto do the knockoff.

            ![57](../../../static/img/integration/e-commerce/shopee/57.png)

3. Withdrawal

    > Shopee will release to Seller Wallet and will be released to your bank account through automated / manual withdrawal.

    1. Manual withdrawal

    2. [Automate Withdrawal](https://help.shopee.com.my/my/s/article/How-do-I-get-my-payment-1542969807960#:~:text=Orders%20can%20be%20completed%20by,account%20through%20automated%20%2F%20manual%20withdrawal)

        Both way had to manually reverse out from Shopee Bank Account.

    3. GL -> Cash Book Entry -> New OR

        ![58](../../../static/img/integration/e-commerce/shopee/58.png)

    [Youtube](https://www.youtube.com/watch?v=PloG3CeHA1w)

## FAQ

1. How to do if have multiple location for each store?

    - It is advisable user to create one Location called Ecommerce, use the stock transfer from location A to Ecommerce, Location B to Ecommerce, in Ecommerce | Shopee | Account | Location set to Ecommerce.

2. How to do if i want to split Lazada and Shopee Sales?

    - Can set by project under Tools -> Maintain Project.

3. How to handle Serial Number?

    1. Use **To Ship Status** Post to Quotation first, then manually transfer to Invoice, fill Invoice Doc No = Order No and Serial Number as well.

    2. When post Payment in **Payment Tab**, system will auto edit Invoice and fill in Transaction Fees in order tally with Shopee Escrow Amount.

4. How system handle the situation when Shipping Fees charges Seller Paid Amount cause escrow amount in negative?

    ![59](../../../static/img/integration/e-commerce/shopee/59.png)

    1. This scenario system will post to **Sales CN** and **Customer Refund**.

    2. In **Order Tab**, system will Post to Sales CN and set Qty in Negative.

    3. When Load in Income statement(.xls) files into **Payment Tab**, system will auto post to Customer Refund.

5. How to handle the order in Cancelled Status but earlier user in Shipped Status already post the Invoice?

    1. It is due to seller sending few times to buyer. But nobody at home, so seller
    decided to cancel the order.

    2. Solution: Shopee will not handle any action in Cancelled Status, in this case
    user can either cancelled the invoice or transfer to CN.

    3. It is advise for user to post when order completed.
