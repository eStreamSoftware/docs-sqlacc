---
sidebar_position: 2
title: Mandatory Fields
description: update fields for e-invoice usage
slug: /usage/myinvois/mandatory-fields
tags: ["SQL Account", "Usage", "MyInvois", "E-Invoice", "Customer", "Stock"]
---

Before issuing an E-Invoice or self-billed E-Invoice, you need to make sure some mandatory fields are updated correctly.

## Update Customer Info

Customer info will be used for issuing E-Invoice.

1. Go to **Customer** > **Maintain Customer** > **New** or **Edit** an existing customer.
2. Fill in the mandatory fields as shown below.

    ![maintain-customer-general](../../../static/img/usage/myinvois/guide/maintain-customer-general.png)

3. Select the default **submission type** to be used when issuing a document. This can be modified at the time of document creation if needed.

    :::info[SUBMISSION]
    - None – Documents created for this customer will be excluded from E-Invoice submission by default.
    - E-Invoice – Documents created for this customer will be submitted as E-Invoice by default.
    - Consolidate – Documents created for this customer will be submitted as consolidated E-Invoice by default.
    :::

    ![maintain-customer-submission-type](../../../static/img/usage/myinvois/guide/maintain-customer-submission-type.png)

4. Click on **Tax** tab, and fill in the customer tax info according to [guide](#customer--supplier-tax-info).

## Update Supplier Info

Supplier info will be used for issuing self-billed E-Invoice.

1. Go to **Supplier** > **Maintain Supplier** > **New** or **Edit** an existing supplier.
2. Fill in the mandatory fields as shown below.

    ![maintain-supplier-general](../../../static/img/usage/myinvois/guide/maintain-supplier-general.png)

3. Select the default **submission type** to be used when issuing a document. This can be modified at the time of document creation if needed.

    :::info[SUBMISSION]
    - None – Documents created for this customer will be excluded from self-billed E-Invoice submission by default.
    - Self-billed – Documents created for this customer will be submitted as self-billed E-Invoice by default.
    - Consolidate – Documents created for this customer will be submitted as consolidated self-billed E-Invoice by default.
    :::

    ![maintain-supplier-submission-type](../../../static/img/usage/myinvois/guide/maintain-supplier-submission-type.png)

4. Select the default **classification** to be used for item detail when issuing a document.

    ![maintain-supplier-classification](../../../static/img/usage/myinvois/guide/maintain-supplier-classification.png)

5. Click on **Tax** tab, and fill in the supplier tax info according to [customer/supplier tax info](#customer--supplier-tax-info).

## Info Request in Maintain Customer/Supplier

The Info Request feature makes it easy to collect accurate company details from customers or suppliers, especially for E-Invoice submissions. It generates a secure link you can share by email, allowing recipients to enter their information directly.

### Create Info Request

To generate an Info Request that allows customers or suppliers to submit their company information

1. Go to detail mode for the selected customer or supplier

2. Right click on an empty space, click on **Create Info Request**

    ![create-info-request](../../../static/img/usage/myinvois/guide/create-info-request.png)

3. A dialog will appear showing a unique link. You can copy the link and share it manually or email it directly to the customer/supplier

    :::info[NOTE]
    An email address is required to use the email option
    :::

    ![info-request-pending](../../../static/img/usage/myinvois/guide/info-request-pending.png)

### Retrieve Info

To collect the submitted data and update the customer's or supplier’s record

1. Go to detail mode for the selected customer or supplier

2. Right click on an empty space, click on **Retrieve Info**

    ![retrieve-info](../../../static/img/usage/myinvois/guide/retrieve-info.png)

3. A dialog will display the submitted details along with the original request link

    ![info-request-valid](../../../static/img/usage/myinvois/guide/info-request-valid.png)

4. Once you close the dialog, the record will be updated automatically with the new information

    ![maintain-customer-retrieve-info](../../../static/img/usage/myinvois/guide/maintain-customer-retrieve-info.png)

### Batch Retrieve Info

To retrieve and update information for multiple customers or suppliers at once

:::info[NOTE]
An hourglass icon will appear next to customers or suppliers who has created an Info Request
![maintain-customer-info-request](../../../static/img/usage/myinvois/guide/maintain-customer-info-request.png)
:::

1. In the browse screen, right-click on the button panel, click on **Batch Retrieve Info**

    ![batch-retrieve-info](../../../static/img/usage/myinvois/guide/batch-retrieve-info.png)

2. A progress dialog will appear and automatically fetch the submitted data for all customers/suppliers

    ![batch-retrieve-info-progress](../../../static/img/usage/myinvois/guide/batch-retrieve-info-progress.png)

## Taxpayer's QR Code

This feature allows you to upload a customer's or supplier's MyInvois Taxpayer QR Code to automatically retrieve and update their information.

### Maintain Customer / Supplier

1. Enter detail mode for a new or existing customer or supplier

2. Go to the **Tax** tab and click on the **Upload File** button

    ![taxpayers-qr-maintain-customer](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-maintain-customer.png)

3. Click the **Open File** icon to select a QR code image from your device or click the **Paste** icon to paste a QR code image from your clipboard

    ![taxpayers-qr-form](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-form.png)

4. Once the QR code is uploaded, SQL Account will automatically retrieve and display the taxpayer's information in the memo field

    :::info[NOTE]
    Upload Production Taxpayer's QR Code only
    :::

    ![taxpayers-qr-form-info](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-form-info.png)

5. Click the **OK** button to update the selected customer or supplier with the retrieved data

    ![taxpayers-qr-form-ok](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-form-ok.png)

### Sales / Purchase / Cashbook document

1. Enter detail mode for a new or existing document

2. Go to the **More** panel and click on the **QR Code** icon in MyInvois header

    ![taxpayers-qr-sales-invoice](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-sales-invoice.png)

3. Click the **Open File** icon to select a QR code image from your device or click the **Paste** icon to paste a QR code image from your clipboard

    ![taxpayers-qr-form](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-form.png)

4. Once the QR code is uploaded, SQL Account will automatically retrieve and display the taxpayer's information in the memo field

    :::info[NOTE]
    Upload Production Taxpayer's QR Code only
    :::

    ![taxpayers-qr-form-info](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-form-info.png)

5. Click the **OK** button to update the selected document with the retrieved data

    ![taxpayers-qr-form-ok](../../../static/img/usage/myinvois/einvoice/taxpayers-qr-form-ok.png)

## Customer / Supplier Tax Info

### Local Business (Companies registered with local authorities)

If your customers / suppliers are a registered entity in Malaysia (e.g.: SSM registered), you must fill in the BRN & TIN of the customer in order to issue an E-Invoice / self-billed E-Invoice to the buyer / supplier.

    ![maintain-customer-tax](../../../static/img/usage/myinvois/guide/maintain-customer-tax.png)

### Individual / Foreign Buyer

In facilitating a more efficient E-Invoice issuance process as well as to ease the burden of individuals in providing their Tax Identification Number (TIN) and identification number details, IRBM provides the following concession to individuals:

1. For Malaysian Individuals to provide either:
   1. TIN only
   2. MyKad / MyTentera identification number only
   3. Both TIN and MyKad / MyTentera identification number
2. For non-Malaysian individuals to provide either:
   1. TIN only (TIN assigned by IRBM or use General TIN **EI00000000020**)
   2. Both TIN and BRN of foreign company
   3. Both TIN and passport number / MyPR / MKAS identification number

For Malaysian Individuals:

|Scenario|In SQL Account|
|---|---|
|TIN only|**ID Type**: NRIC, **ID Value**: Leave Empty, **TIN**: Buyer / Supplier TIN|
|MyKad only|**ID Type**: NRIC, **ID Value**: Buyer / Supplier NRIC, **TIN**: General Public **EI00000000010** |
|Both TIN & MyKad|**ID Type**: NRIC, **ID Value**: Buyer / Supplier NRIC, **TIN**: Buyer / Supplier TIN|

For non-Malaysian Individuals:

|Scenario|In SQL Account|
|---|---|
|TIN only|**ID Type**: Passport, **ID Value**: Leave Empty, **TIN**: Buyer / Supplier TIN or General TIN **EI00000000020**|
|Both TIN & BRN of Foreign Company|**ID Type**: BRN, **ID Value**: Buyer / Supplier BRN, **TIN**: Buyer / Supplier TIN or General TIN **EI00000000020**|
|Both TIN & Passport|**ID Type**: Passport, **ID Value**: Buyer / Supplier Passport Number, **TIN**: Buyer / Supplier TIN or General TIN **EI00000000020**|

**Reference:**

1. List of ID Type in Maintain Customer / Supplier:

    ![maintain-customer-tax-idtype](../../../static/img/usage/myinvois/guide/maintain-customer-tax-idtype.png)

2. List of General TIN in Maintain Customer / Supplier:

    ![maintain-customer-tax-tin](../../../static/img/usage/myinvois/guide/maintain-customer-tax-tin.png)

### Batch TIN Lookup

:::info
This feature enables users to **quickly look up missing New BRN/TIN information for customers** and is exclusively available to those with an active SQL Account license
:::

1. Navigate to **Customer** > **Maintain Customer** or **Supplier** > **Maintain Supplier**.

    ![batch-tin-lookup-1](../../../static/img/usage/myinvois/guide/batch-tin-lookup-1.png)

2. Right click on the menu bar (located at the right side of the window), select **TIN Lookup**.

    ![batch-tin-lookup-2](../../../static/img/usage/myinvois/guide/batch-tin-lookup-2.png)

3. In the **Tin Lookup** window, you will be able to view all of your customers / suppliers details such as *Old BRN, New BRN, TIN* and etc. Click on the **🔍** to do a quick lookup on the missing fields, when you are done, click **Save** to apply.

    ![batch-tin-lookup-3](../../../static/img/usage/myinvois/guide/batch-tin-lookup-3.png)

## Update Stock Item

IRBM (LHDN) has introduced [Classification Codes](https://sdk.myinvois.hasil.gov.my/codes/classification-codes/) to define the category of products or services being billed as a result of a commercial transaction.

1. Go to **Stock** > **Maintain Stock Item** > **Edit** stock
2. Update the classification accordingly.

    ![maintain-stock-classification](../../../static/img/usage/myinvois/guide/maintain-stock-classification.png)

3. Repeat Step 1-2 for all stocks.

:::info
You can also override the stock item classification codes during sales invoice entry.

![sales-invoice-classification](../../../static/img/usage/myinvois/guide/sales-invoice-classification.png)
:::
