---
sidebar_position: 1
title: Onboarding
description: MyInvois onboarding process
slug: /usage/myinvois/onboarding
tags: ["SQL Account", "Usage", "MyInvois", "E-Invoice", "Onboarding"]
---

To streamline e-invoice submission through SQL Account, you need to go through a simple onboarding process.

## Company Profile Setup

1. Go to **File** > **Company Profile** > **General** and make sure the country has been set to **Malaysia** to enable the E-Invoice feature.

    ![company-profile-country](../../../static/img/usage/myinvois/onboarding/company-profile-country.png)

2. Go to **File** > **Company Profile** > **MyInvois**.
   1. Make sure your company registration number (BRN) is filled in correctly. (Click on the magnifying glass to utilize our auto BRN lookup feature)
   2. Make sure the TIN number has been filled in correctly.
   3. Click on 💾 **Save**.

        ![company-profile](../../../static/img/usage/myinvois/onboarding/company-profile-myinvois-1.png)

3. Click on **Connect MyInvois** to setup your **LHDN MyInvois** credential.

    ![company-profile-myinvois-button](../../../static/img/usage/myinvois/onboarding/company-profile-myinvois-2.png)

## MyInvois Integration

1. The onboarding process consists of 3 steps:
    1. [E-Invoice Start Date](#e-invoice-start-date)
    2. [Production Credentials & Intermediary](#production-credentials--intermediary)
    3. [Sandbox Credentials & Intermediary](#sandbox-credentials--intermediary)

:::danger[Note]
You can skip 1 & 2 entirely and setup **[Sandbox credentials & Intermediary](#sandbox-credentials--intermediary)** alone for **Testing/Training** purposes.
:::

![company-profile-myinvois-sandbox](../../../static/img/usage/myinvois/onboarding/company-profile-myinvois-connect.png)

### MyInvois Environment (Production/Sandbox)

**Production**: All your submitted E-Invoices will be acknowledged by LHDN directly.

**Sandbox**: Information sent to the Sandbox (testing environment) will be solely for testing purposes and no penalty will be imposed.

Follow the table below to setup your desired Environment:

|Start Date| Production Credentials | Sandbox Credentials| Your Environment|
|-|-|-|-|
|Current Date (e.g. Today)|❌|✅|Sandbox|
|Future Date (e.g. 1/7/2025)|❌|✅|Sandbox|
|Current Date (e.g. Today)|✅|❌|Production|
|Future Date (e.g. 1/7/2025)|✅|❌|Production after 1/7/2025|
|Current Date (e.g. Today)|✅|✅|Production with Test Validation enabled|
|Future Date (e.g. 1/7/2025)|✅|✅|Sandbox first, Production after 1/7/2025|

### E-Invoice Start Date

Purpose of the **E-Invoice Start Date**:

- Manage the ability to submit e-invoices in the **Production** environment. (You will only be able to start submitting e-invoices **after** the selected start date.)
- If you begin with the **Sandbox (Testing)** environment and have completed setting up your **Production** credentials, you will be prompted to activate your Production environment 7 days before the chosen start date.

    ![myinvois-start-date](../../../static/img/usage/myinvois/onboarding/myinvois-start-date.png)

:::info[Note]
The E-Invoice Start Date is not limited to the three provided options. You can set it to any date, such as **1/6/2025**, as per your preference.
:::

### Production Credentials & Intermediary

:::info[Note]
You may skip this part if you only intend to try out e-invoice features using a demo database.
:::

1. Login to MyInvois Portal on the right side.

    ![myinvois-production-login](../../../static/img/usage/myinvois/onboarding/myinvois-production-login.png)

2. Click on **MyInvois**.

    ![myinvois-production-mytax](../../../static/img/usage/myinvois/onboarding/myinvois-production-mytax.png)

3. Click on top right, and click on **View Taxpayer Profile**.

    ![myinvois-production-view-taxpayer-profile](../../../static/img/usage/myinvois/onboarding/myinvois-production-view-taxpayer-profile.png)

4. Scroll to the bottom and click on **Add Intermediary**.

    ![myinvois-production-add-intermediary-1](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-intermediary-1.png)

5. Fill in the TIN, BRN, and Name using the provided info on the left. Enter the captcha and click on **Search** then **Continue**.

    :::info[Help]
    If you are unable to see the **Continue** button, try either one of these:

    1. hold CTRL then hit "-" (minus) key multiple times to zoom out
    2. hold CTRL then scroll down to zoom out
    3. maximize the onboarding window

    :::

    ![myinvois-production-add-intermediary-2](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-intermediary-2.png)

6. Setup the **Representation From**, **Representantion To** (leave empty to avoid expiry), and make sure all permissions have been enabled. Click on **Add Intermediary** to finish.

    ![myinvois-production-add-intermediary-3](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-intermediary-3.png)

7. Click on **Test Intermediary** and you should see that all permissions can be retrieved successfully.

    ![myinvois-production-add-intermediary-4](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-intermediary-4.png)

8. Click on **Register ERP**.

    ![myinvois-production-add-erp-1](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-erp-1.png)

9. Fill in the **ERP Name** & **Client Secret expiration** as below:

    ![myinvois-production-add-erp-2](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-erp-2.png)

10. Click on the copy button in sequence as shown below and you should see the client id & secrets are automatically filled on the left. Tick the **checkbox** & click on **Done**.

    ![myinvois-production-add-erp-3](../../../static/img/usage/myinvois/onboarding/myinvois-production-add-erp-3.png)

11. If you do not wish to utilize the Test Validation using sandbox feature, click on **Register ERP** and you're done! You can now start submitting E-Invoice in **Production** mode.

### Sandbox Credentials & Intermediary

:::info[Note]
You will need to setup Sandbox Credentials if you wish to:

1. Utilize **Test E-Invoice Validation** Feature.
2. Training / Testing.

Follow this [guide](https://preprod-mytax.hasil.gov.my/assets/pdf/usermanualweb(en).pdf) to register for Preprod (Sandbox) MyInvois Portal.

:::

1. Click on the empty Client ID input and you will see that the right panel now switched to **Sandbox MyInvois Portal**. Proceed to login.

    ![myinvois-sandbox-login](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-login.png)

2. Click on **MyInvois9**.

    ![myinvois-sandbox-mytax](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-mytax.png)

3. Click on top right, and click on **View Taxpayer Profile**.

    ![myinvois-sandbox-view-taxpayer-profile](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-view-taxpayer-profile.png)

4. Scroll to the bottom and click on **Add Intermediary**.

    ![myinvois-sandbox-add-intermediary-1](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-intermediary-1.png)

5. Fill in the TIN, BRN, and Name using the provided info on the left. Enter the captcha and click on **Search** then **Continue**.

    :::info[Help]
    If you are unable to see the **Continue** button, try either one of these:

    1. hold CTRL then hit "-" (minus) key multiple times to zoom out
    2. hold CTRL then scroll down to zoom out
    3. maximize the onboarding window

    :::

    ![myinvois-sandbox-add-intermediary-2](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-intermediary-2.png)

6. Setup the **Representation From**, **Representantion To** (leave empty to avoid expiry), and make sure all permissions have been enabled. Click on **Add Intermediary** to finish.

    ![myinvois-sandbox-add-intermediary-3](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-intermediary-3.png)

7. Click on **Test Intermediary** and you should see that all permissions can be retrieved successfully and remained valid (**green**).

    ![myinvois-sandbox-add-intermediary-4](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-intermediary-4.png)

8. Click on **Register ERP**.

    ![myinvois-sandbox-add-erp-1](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-erp-1.png)

9. Fill in the **ERP Name** & **Client Secret expiration** as below:

    ![myinvois-sandbox-add-erp-2](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-erp-2.png)

10. Click on the copy button in sequence as shown below and you should see the client id & secrets are automatically filled on the left. Tick the **checkbox** & click on **Done**.

    ![myinvois-sandbox-add-erp-3](../../../static/img/usage/myinvois/onboarding/myinvois-sandbox-add-erp-3.png)

11. Click on **Register ERP** and you're done.
