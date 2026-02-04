---
sidebar_position: 5
title: Stores
description: A guide on Store
slug: /integration/xstore/stores
tags: ["e-Commerce", "X-Store", "Stores"]
---

## Linking Stores

1. Click **Stores** in the sidebar

    ![store-sidebar](../../../static/img/xstore/stores/store-sidebar.png)

2. Click **Link Store**

    ![link-store](../../../static/img/xstore/stores/link-store.png)

### Lazada

1. Select **Lazada** from dropdown

    ![select-lazada](../../../static/img/xstore/stores/select-lazada.png)

2. Select Region

3. Click **Use Seller Login**

    ![lazada-login](../../../static/img/xstore/stores/lazada-login.png)

4. Login using Lazada credentials

    ![input-lazada-credentials](../../../static/img/xstore/stores/lazada-credentials.png)

5. Click **Authorize**

    ![lazada-authorize](../../../static/img/xstore/stores/lazada-authorize.png)

6. After successful linking

    - A success message will appear

    - The linked store will be added to the data table.

        ![link-lazada](../../../static/img/xstore/stores/link-lazada.png)

### Shopee

1. Select **Shopee** from dropdown

    ![select-shopee](../../../static/img/xstore/stores/select-shopee.png)

2. Select Region

3. Click the **Link Store** button

    ![select-shopee-region](../../../static/img/xstore/stores/select-shopee-region.png)

4. If Linking a **Shop Account**

    1. Enter shop account credentials

        ![shopee-shop-acc](../../../static/img/xstore/stores/shopee-shopAcc.png)

    2. Click **Confirm Authorization**

        ![shopee-shopAuth](../../../static/img/xstore/stores/shopee-shopAuth.png)

    3. Select the Authorization Period

    4. Click **Confirm Authorization**

        ![shopee-storeAuthPeriod](../../../static/img/xstore/stores/shopee-storeAuthPeriod.png)

5. If Linking a **Main Account**

    1. Click **Switch to Main Account**

        ![switch-main-acc](../../../static/img/xstore/stores/switch-mainAcc.png)

    2. Enter Main Account credentials

        ![shopee-mainAcc](../../../static/img/xstore/stores/shopee-mainAcc.png)

    3. Select the Shop and Merchant authorized for your App

    4. Click **Confirm Authorization**

        ![shopee-mainAccAuth](../../../static/img/xstore/stores/shopee-mainAccAuth.png)

    5. Select the Authorization Period

    6. Click **Confirm Authorization**

        ![shopee-mainAuthPeriod](../../../static/img/xstore/stores/shopee-mainAuthPeriod.png)

6. After successful linking

    - A success message will appear

    - The linked store will be added to the data table.

        ![link-shopeeMain](../../../static/img/xstore/stores/link-shopeeMain.png)

### Tiktok

1. Select **Tiktok** from dropdown

    ![select-tiktok](../../../static/img/xstore/stores/select-tiktok.png)

2. Select your account type to start the authorization process

    ![tiktok-selectAcc](../../../static/img/xstore/stores/tiktok-selectAcc.png)

3. Select and input tiktok account credentials

4. Click **Confirm to Install**

    ![tiktok-login](../../../static/img/xstore/stores/tiktok-login.png)

5. Review the data-sharing permissions and tick the checkbox to acknowledge

6. Click **Authorize**

    ![input-tiktok-credentials](../../../static/img/xstore/stores/tiktok-credentials.png)

7. Click **Done** to complete the setup

    ![tiktok-auth](../../../static/img/xstore/stores/tiktok-auth.png)

8. After successful linking

    - A success message will appear

    - The linked store will be added to the data table.

        ![link-tiktok](../../../static/img/xstore/stores/link-tiktok.png)

### Shopify

1. Select **Shopify** from dropdown

    ![select-shopify](../../../static/img/xstore/stores/select-shopify.png)

2. A dialog will open, allowing user to enter store credentials.

3. Enter **Shop Domain** and click **Link Store**

    ![shopify-shopname](../../../static/img/xstore/stores/shopify-shopname.png)

4. User can obtain domain via store dashboard

    ![shopify-domain](../../../static/img/xstore/stores/shopify-domain.png)

5. Shopify authorization page will open, where the user can enter their account credentials or select an existing account to log in

    ![shopify-selectAcc](../../../static/img/xstore/stores/shopify-selectAcc.png)

6. After successful linking

    - A success message will appear

    - The linked store will be added to the data table.

        ![shopify-link](../../../static/img/xstore/stores/shopify-link.png)

### WooCommerce

1. Select **WooCommerce** from dropdown

    ![select-woo](../../../static/img/xstore/stores/select-woo.png)

2. A dialog will open, allowing user to enter store credentials.

    ![woo-details](../../../static/img/xstore/stores/woo-details.png)

3. There are two ways to link a store:

    1. Link via Authorization Page

        - Enter the **shop name**

            ![woo-shopName](../../../static/img/xstore/stores/woo-shopName.png)

        - Obtain the **shop domain**:

            a. If you are on the admin site, copy the site URL and remove /wp-admin or any additional path.

                ![woo-domainAdmin](../../../static/img/xstore/stores/woo-domainAdmin.png)

            b. If you are on the shop front page, simply copy the URL directly.

                ![woo-domainShop](../../../static/img/xstore/stores/woo-domainShop.png)

        - Paste the domain into the Domain field

        - Click **Link Store**

            ![woo-link1](../../../static/img/xstore/stores/woo-link1.png)

        - The app will redirect you to the WooCommerce authorization page

        - Click **Approve** to grant access

            ![woo-approve](../../../static/img/xstore/stores/woo-approve.png)

        - After successful linking

            a. A success message will appear

                ![woo-success](../../../static/img/xstore/stores/woo-success.png)

    2. Link via Manual API Key Entry

        - Enter the **shop name** and **shop domain** (use the same method described above).

        - Access the admin site

        - In the sidebar, click **WooCommerce → Settings**

            ![woo-settings](../../../static/img/xstore/stores/woo-settings.png)

        - Go to **Advanced**, then select **REST API**

            ![woo-advanced](../../../static/img/xstore/stores/woo-advanced.png)

        - Click **Add Key**

            ![woo-addKey](../../../static/img/xstore/stores/woo-addKey.png)

        - Enter a meaningful **description** and select **Read/Write** as the permission

        - Click **Generate API Key**

            ![woo-keyDetails](../../../static/img/xstore/stores/woo-keyDetails.png)

        - After the API key is generated, copy **Consumer Key** and **Consumer Secret**

            ![woo-keyCopy](../../../static/img/xstore/stores/woo-keyCopy.png)

        - Paste them into the dialog and click **Link Store**

            ![woo-link2](../../../static/img/xstore/stores/woo-link2.png)

        - After successful linking

            a. A success message will appear

            b. The linked store will be added to the data table.

            ![woo-linkSuccess](../../../static/img/xstore/stores/woo-linkSuccess.png)

4. If you want to **upload images** when creating products later, you must also provide a **Username** and **Application Password**

    - Access the admin site

    - Click **Users** in the sidebar

    - Copy the username and paste it into the Username field

    - Click the username to open the user profile

        ![woo-username](../../../static/img/xstore/stores/woo-username.png)

    - Enter a **name** for the application password and click **Add Application Password**

        ![woo-appPass](../../../static/img/xstore/stores/woo-appPass.png)

    - **Copy** the newly generated application password and paste it into the Application Password field

        ![woo-passCopy](../../../static/img/xstore/stores/woo-passCopy.png)

    - Once all fields are completed, click **Link Store**

        ![woo-completeInfo](../../../static/img/xstore/stores/woo-completeInfo.png)

> 📌**If store authorization expires, click the link icon (🔗) to re-link the store or click Link Store**

![store-expired](../../../static/img/xstore/stores/store-expired.png)

## General Features

![general-features](../../../static/img/xstore/stores/general-features.png)

| Features                    | Description                                                                            |
| ----------------------------| -------------------------------------------------------------------------------------- |
| **1. Search**               | Search for stores by **store name** or **region**.                                     |
| **2. Pagination**           | Choose to display **50, 100, 150, or 200** records per page.                           |
| **3. Collapse All**         | **Hide all** child-level details.                                                      |
| **4. Expand All**           | **Expand all** child-level details to view complete information at once.               |
| **5. Sorting**              | Sort data in **ascending** or **descending** order.                                    |
| **6. Column Visibility**    | **Show or hide** specific columns to customize the table view according to preference. |
