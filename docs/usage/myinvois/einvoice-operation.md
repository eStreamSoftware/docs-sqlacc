---
sidebar_position: 4
title: E-Invoice Operation
description: A guide on E-Invoice Operation
slug: /usage/myinvois/e-invoice-operation
tags: ["SQL Account", "Usage", "MyInvois", "E-Invoice", "Submission"]
---

## Submission

In the E-Invoice system, there are a few types of documents that can be submitted. The table below shows how each document type in SQL Account is mapped to its corresponding E-Invoice document type. Refer to each section for more detailed information on the specific document types.

| SQL Account Document Type                                     | E-Invoice Document Type           |
| ------------------------------------------------------------- | --------------------------------- |
| [Sales Invoice](e-invoice#sales-invoice--cash-sales)          | Invoice                           |
| [Cash Sales](e-invoice#sales-invoice--cash-sales)             | Invoice                           |
| [Credit Note](e-invoice#credit-note)                          | Credit Note                       |
| [Debit Note](e-invoice#debit-note)                            | Debit Note                        |
| [Payment Voucher](e-invoice#payment-voucher)                  | Self-Billed Invoice / Refund Note |
| [Purchase Invoice](e-invoice#purchase-invoice--cash-purchase) | Self-Billed Invoice               |
| [Cash Purchase](e-invoice#purchase-invoice--cash-purchase)    | Self-Billed Invoice               |
| [Purchase Returned](e-invoice#purchase-returned)              | Self-Billed Credit Note           |
| [Purchase Debit Note](e-invoice#purchase-debit-note)          | Self-Billed Debit Note            |
| [Receipt Voucher](e-invoice#receipt-voucher)                  | Self-Billed Refund Note / Invoice |

### Single Submission

1. Click on **MyInvois** > **Submit E-Invoice**

    ![sales-invoice-submit-eiv](../../../static/img/usage/myinvois/einvoice/sales-invoice-submit-eiv.png)

2. If the submission is valid, you will see the screen below, where you can see the validated Invoice info from LHDN directly.

    :::info[NOTE]
    Ensure that all required fields are correctly filled before submission to avoid errors. If the submission is invalid, you will need to correct the issues and resubmit.
    :::

    ![sales-invoice-valid](../../../static/img/usage/myinvois/einvoice/sales-invoice-valid.png)

### Batch Submission

In the scenario where you already issued a lot of invoices but yet to submit E-Invoice, you can utilize the `Batch Submission` feature to submit them in single operation.

1. Click on **MyInvois** > **Batch Submit E-Invoice**

    ![batch-submission-button](../../../static/img/usage/myinvois/einvoice/batch-submission-button.png)

2. Apply the desired date range and untick any invoices that you do not wish to submit yet, then proceed to **Submit**.

    ![batch-submission-filter](../../../static/img/usage/myinvois/einvoice/batch-submission-filter.png)

3. Refer to **Status** column for each E-Invoice status. If there's any errors, go to the specific invoice and update the incorrect details then retry submission again.

    ![batch-submission-status](../../../static/img/usage/myinvois/einvoice/batch-submission-status.png)

4. Go back to browse screen, click **Refresh** to see the updated status.

    ![batch-submission-refresh](../../../static/img/usage/myinvois/einvoice/batch-submission-refresh.png)

### Resolving Submitting Status

Submitting status is not a common status you will encounter. It will only be stuck at submitting status during the event SQL Account fails to receive response from MyInvois Portal when the document may or may not be submitted. This mechanism is to **prevent double submission**.

Below show the icon for submitting status, it is a **red** submitted icon.

    ![submitting-status-detail](../../../static/img/usage/myinvois/einvoice/submitting-status-detail.png)

    ![submitting-status-browse](../../../static/img/usage/myinvois/einvoice/submitting-status-browse.png)

There are 2 way to resolve submitting status.

    - Using [refresh status (Single Document)](#refresh-status-single-document).
    - Using [batch refresh status](#batch-refresh-status).

1. After refresh status is clicked, SQL Account will automatically check if the document was submitted successfully to the MyInvois Portal. In the event that:

    1. Document is **successfully found** in MyInvois Portal. Confirmation dialog will be prompted. (1) show the current document number that is being resolved. Select the correct document and click **OK** (2) to complete resolving submitting status.

        ![submitting-status-resolving](../../../static/img/usage/myinvois/einvoice/submitting-status-resolving.png)

    2. Document is **not found** in MyInvois Portal. Action dialog will be prompted.

        ![submitting-status-resolving-error](../../../static/img/usage/myinvois/einvoice/submitting-status-resolving-error.png)

        :::warning
        Sometimes it take a long time for the submitted document to appear in the MyInvois Portal. Please ensure it has not been submitted before Reset E-Invoice status to avoid double submission.
        :::

        - Click **Search again** to retry find from MyInvois Portal again.
        - Click **Reset E-Invoice status** to remove submitting status, so you are able to resubmit the document again (This may lead to duplicate submission).

## Test E-Invoice Validation

:::important
The validation process utilizes the MyInvois Sandbox environment, meaning the documents will appear in your MyInvois Portal (Sandbox/Pre-production).

To use this feature, you must complete the [Sandbox Credential Setup](onboarding#sandbox-credentials--intermediary) beforehand.
:::

If you do not have the necessary permissions to submit an E-Invoice, you can now validate the E-Invoice during the issuance process.

This ensures that the invoice can be successfully submitted at a later stage.

1. After issuing an invoice, click **MyInvois** > **Test E-Invoice Validation**

    ![test-einvoice-validation](../../../static/img/usage/myinvois/einvoice/test-einvoice-validation-button.png)

2. If there's some missing data, an error list or dialog will be shown, you can update the incorrect data and try validate again.

    Example error dialog:

    ![test-einvoice-error](../../../static/img/usage/myinvois/einvoice/test-einvoice-validation-error.png)

3. If the validation is successful, you will see the following confirmation screen:

    ![test-einvoice-result](../../../static/img/usage/myinvois/einvoice/test-einvoice-validation-result.png)

## Consolidate

When the buyer does not require an e-Invoice, the supplier will issue a regular receipt, which does not need to be submitted for IRBM validation.

However, you are required to aggregate these transactions monthly and submit a consolidated e-Invoice to IRBM within **seven calendar days after the month's end**.

1. Click on **MyInvois** > **Consolidate E-Invoice**

    ![consolidate-button](../../../static/img/usage/myinvois/einvoice/consolidate-button.png)

2. Select the documents to consolidate:
   1. Choose the desired date range
   2. Tick **Include unsubmitted E-Invoices** if you want to include invoices with **E-Invoice** submission type. Refer to [Step 4](e-invoice#sales-invoice--cash-sales)
   3. Click **Apply**

    ![consolidate-filter](../../../static/img/usage/myinvois/einvoice/consolidate-filter.png)

3. Review the aggregated invoice details and click **Submit**

    ![consolidate-review](../../../static/img/usage/myinvois/einvoice/consolidate-review.png)

4. If the consolidated E-Invoice is submitted successfully, you will see the following confirmation screen:

    ![consolidate-success](../../../static/img/usage/myinvois/einvoice/consolidate-success.png)

## Cancellation

At the **first 72 hours** of an submitted invoice, you are able to **cancel** the e-invoice, then re-submit the same invoice again without issuing CN/DN.

In the first 72 hours period, you shall cancel the invoice and resubmit when:

 1. There is a mistake in the submitted e-invoice.
 2. Buyer rejected the invoice and you agreed with the rejection.

To cancel a submitted e-invoice:

1. Go to **MyInvois** > **Cancel Validated E-Invoice**.

    ![sales-invoice-cancel-button](../../../static/img/usage/myinvois/einvoice/sales-invoice-cancel-button.png)

2. Enter the reason for cancellation then Click **Initiate Cancellation**. To dismiss the dialog, Click **Keep Document**.

    ![sales-invoice-cancel-reason](../../../static/img/usage/myinvois/einvoice/sales-invoice-cancel-reason.png)

3. To verify the latest status, go to **MyInvois** > **Check E-Invoice Status**.

    ![sales-invoice-cancelled](../../../static/img/usage/myinvois/einvoice/sales-invoice-cancelled.png)

## Report

Preview the report and you can see the E-Invoice validation QR code is embedded in the invoice.

![sales-invoice-preview](../../../static/img/usage/myinvois/einvoice/sales-invoice-preview.png)

## Refresh Status

You can easily check the latest status of an invoice in SQL Account to ensure it has been submitted and processed correctly.

### Refresh Status (Single Document)

1. Click on **MyInvois** > **Check E-Invoice Status** (1) or **Icon** (2).

    ![sales-invoice-refresh-status-button](../../../static/img/usage/myinvois/einvoice/sales-invoice-refresh-status-button.png)

2. You will be able to see the current status of the submitted invoice, along with the QR code and a validation page.

    ![sales-invoice-refresh-status-valid](../../../static/img/usage/myinvois/einvoice/sales-invoice-refresh-status-valid.png)

    :::info[NOTE]
    If the invoice status is marked as invalid, a list of errors will be displayed. You can use this information to correct the invoice and resubmit it.
    :::

    ![sales-invoice-refresh-status-invalid](../../../static/img/usage/myinvois/einvoice/sales-invoice-refresh-status-invalid.png)

### Batch Refresh Status

In certain situations, the status of your E-Invoices may not reflect the latest updates due to various factors such as:

- Slow or unstable internet connectivity
- Manual cancellation of an E-Invoice within the MyInvois Portal
- E-Invoice status showing as Submitted without further updates

To ensure that you are viewing the most up-to-date status of your E-Invoices, follow these steps:

   1. Click the **MyInvois** button.
   2. Select **Batch Check E-Invoice Status**.

This process will retrieve the latest status for all submitted documents, ensuring that your records are accurate and up to date.

    ![batch-refresh-status](../../../static/img/usage/myinvois/einvoice/batch-refresh-status.png)

## Submission Log

You can view all past submission and cancellation logs of an invoice.

1. Click on **MyInvois** > **MyInvois Log**

    ![sales-invoice-log-button](../../../static/img/usage/myinvois/einvoice/sales-invoice-log-button.png)

    ![sales-invoice-log](../../../static/img/usage/myinvois/einvoice/sales-invoice-log.png)

## Transaction

MyInvois Transaction is a feature that list all MyInvois documents.

You can access MyInvois Transaction from cloud category in the menu bar.

![myinvois-trans-location](../../../static/img/usage/myinvois/einvoice/myinvois-trans-location.png)

Below show the MyInvois Transaction form with 3 tabs.

![myinvois-trans-overview](../../../static/img/usage/myinvois/einvoice/myinvois-trans-overview.png)

1. All - List all MyInvois documents.
2. Submitted - E-Invoices submitted to your customers / suppliers
3. Received - E-Invoices received from your customers / suppliers

MyInvois Transaction feature:

1. ### Sync MyInvois documents

    ![myinvois-trans-sync](../../../static/img/usage/myinvois/einvoice/myinvois-trans-sync.png)

    - SQL Account will help sync MyInvois documents from the MyInvois portal in background when **MyInvois Transaction** or [**Import**](#import) form is opened.
    - There are 2 kinds of sync task:
        - **Loading all documents** - Sync all MyInvois documents starting from the latest and going back to 1 Aug 2024 for first time only, it may takes a long time to complete.
        - **Syncing recent documents** - Sync recent documents only.
    - After sync task is completed, it will show **Last Sync**.
    - SQL Account will resync after 30 minutes or you can force resync instantly by clicking resync button.

        ![myinvois-trans-resync](../../../static/img/usage/myinvois/einvoice/myinvois-trans-resync.png)

    - Click refresh button to query MyInvois documents synced from the MyInvois portal into your database.

        ![myinvois-trans-refresh](../../../static/img/usage/myinvois/einvoice/myinvois-trans-refresh.png)

    :::info[NOTE]
    You may leave MyInvois Transaction or Import form open in the background to sync documents as you carry on with other tasks.
    :::

2. ### Check Invoice State

    You can find the **Invoice state** column in field chooser.

        ![myinvois-trans-state](../../../static/img/usage/myinvois/einvoice/myinvois-trans-state.png)

    There are 3 Invoice states:

        - **None** - The document has no issues.
        - **Missing** (Highlighted in **red** for submitted documents) - The document exists in MyInvois portal, but does not exists in your accounting document entry.
        - **Duplicate** (Highlighted in **orange** for submitted documents) - The document is a duplicate submissions.

    :::info[NOTE]
    You may double click to drill down to your accounting document entry.
    :::

3. ### Cancel / Reject

    - Click cancel to initiate document cancellation on a submitted document.

        ![myinvois-trans-cancel](../../../static/img/usage/myinvois/einvoice/myinvois-trans-cancel.png)

    - Click reject to inititate document rejection on received document

        ![myinvois-trans-reject](../../../static/img/usage/myinvois/einvoice/myinvois-trans-reject.png)

    :::info[NOTE]
    You can batch cancel or reject by selecting multiple documents.
    :::

4. ### Print

    Click the **print / preview** to print report using field value from MyInvois document.

        ![myinvois-trans-print](../../../static/img/usage/myinvois/einvoice/myinvois-trans-print.png)

## Import

SQL Account offers two methods for importing sales or purchase documents from the E-Invoice system:

- [Batch Import](#batch-import): Allows you to import multiple documents at once.
- [Linking](#linking): Allows you to link the existing document with received E-Invoice document.

To ensure proper import, it's important to understand how the document types in SQL Account are mapped to those received from the E-Invoice system. The table below shows how the document types in the SQL Account are mapped to those received from the E-Invoice system:

| SQL Account Document Type | E-Invoice Document Type |
| ------------------------- | ----------------------- |
| Sales Invoice             | Self-Billed Invoice     |
| Cash Sales                | Self-Billed Invoice     |
| Credit Note               | Self-Billed Credit Note |
| Debit Note                | Self-Billed Debit Note  |
| Receipt Voucher           | Self-Billed Invoice     |
| Purchase Invoice          | Invoice                 |
| Cash Purchase             | Invoice                 |
| Purchase Returned         | Credit Note             |
| Purchase Debit Note       | Debit Note              |
| Payment Voucher           | Invoice                 |

### Batch Import

You can view all received documents and batch import them into SQL Account.

1. Click on **MyInvois** > **Batch import E-Invoice**

    ![purchase-invoice-batch-import-button](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-button.png)

    ![purchase-invoice-batch-import-form](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-form.png)

2. Opening Import form will also start [Sync MyInvois documents](#sync-myinvois-documents). The first sync may take longer as it syncs documents from the latest to the oldest. Please wait if you need to import older documents.

    ![purchase-invoice-batch-import-sync](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-sync.png)

3. Choose the desired date range and click the **Apply** to query documents already synced to your database. Unsynced documents will not appear.

    ![purchase-invoice-batch-import-form-daterange](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-form-daterange.png)

4. There are two tables inside the form:

    - The upper table will display the list of E-Invoice documents your company has received
    - The lower table will show the item details for the document you have selected

    ![purchase-invoice-batch-import-form-apply](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-form-apply.png)

5. Each document will display a status in the **Status** column. Below is the description and import action of each status:

    | Status         | Description                                         | Action                          |
    | -------------- | --------------------------------------------------- | ------------------------------- |
    | (Blank)        | Not yet imported                                    | Create new document             |
    | Doc Exists     | Document already exists in the system               | Update E-Invoice related fields |
    | Different UUID | Document exists but with a different E-Invoice UUID | Create new document             |
    | Done           | Successfully imported                               | -                               |

    :::info[NOTE]
    Double-clicking a row will drill down into the existing document, while double-clicking the **E-Invoice Status** column will open the validation link
    :::

6. SQL Account will auto-map the Customer/Supplier Code using the following conditions:

    - Same **TIN** (prioritized)
    - Same **ID Number** or similar **Company Name**

    ![purchase-invoice-batch-import-form-select-supplier](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-form-select-supplier.png)

7. A tax code is required for an item if the tax amount is greater than 0

    ![purchase-invoice-batch-import-form-select-tax](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-form-select-tax.png)

8. You may click on the **Import** button to proceed with the import

    ![purchase-invoice-batch-import](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import.png)

9. A message dialog  will indicate success or display an error, if any

    ![purchase-invoice-batch-import-success](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-success.png)

    ![purchase-invoice-batch-import-error](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-error.png)

### Linking

You can view and link the received E-Invoice documents associated with the TIN of the selected document to update its E-Invoice related fields.

1. Click on **🔍** of MyInvois UUID field in more panel

    ![purchase-invoice-linking](../../../static/img/usage/myinvois/einvoice/purchase-invoice-linking.png)

2. The form will display only documents related to the same TIN as the selected record

    ![purchase-invoice-linking-form](../../../static/img/usage/myinvois/einvoice/purchase-invoice-linking-form.png)

3. Select the appropriate document and click on the **Update** button to link it

### Create / Update Customer or Supplier

To create or update a customer or supplier from the import form, follow these steps:

1. Click on the **Company Name** column

    :::info[NOTE]
    If the Customer/Supplier Code has value, SQL Account will update the existing record. If it is empty, a new customer/supplier will be created.
    :::

    ![purchase-invoice-batch-import-update-supplier](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-update-supplier.png)

2. A comparison view will appear showing fields from the existing record in Maintain Customer/Supplier and the E-Invoice document

    :::info[NOTE]
    - The selected value will appear in **bold**
    - The unselected value will be shown with a ~~strikethrough~~
    - If both values (from E-Invoice and existing record) are identical, the cell will be merged
    :::

    ![purchase-invoice-batch-import-supplier-form](../../../static/img/usage/myinvois/einvoice/purchase-invoice-batch-import-supplier-form.png)

3. Click the **Create** or **Update** button to apply the changes to the customer or supplier record

## Rejection (Imported Documents)

At the **first 72 hours** of an received invoice, you are able to **reject** the e-invoice.

In the first 72 hours period, you shall reject the invoice when there is a mistake in the received e-invoice.

To reject a received e-invoice:

1. Go to **MyInvois** > **Reject Validated E-Invoice**.

    ![purchase-invoice-reject-button](../../../static/img/usage/myinvois/einvoice/purchase-invoice-reject-button.png)

2. Enter the reason for rejection then click **Initiate Rejection**. To dismiss the dialog, Click **Keep Document**.

    ![purchase-invoice-reject-reason](../../../static/img/usage/myinvois/einvoice/purchase-invoice-reject-reason.png)

## Share PDF (Experimental)

You can share invoice PDF to SQL buyer.

1. Click on **MyInvois** > **Check E-Invoice Status**

    ![sales-invoice-refresh-status-button](../../../static/img/usage/myinvois/einvoice/sales-invoice-refresh-status-button.png)

2. Click on **Share** to share the invoice PDF with SQL buyer

    ![sales-invoice-share-pdf-button](../../../static/img/usage/myinvois/einvoice/sales-invoice-share-pdf-button.png)

3. Continue to choose the report format to share with SQL buyer

    ![sales-invoice-share-pdf-select-report](../../../static/img/usage/myinvois/einvoice/sales-invoice-share-pdf-select-report.png)

    ![sales-invoice-share-pdf-success](../../../static/img/usage/myinvois/einvoice/sales-invoice-share-pdf-success.png)

## Download PDF (Experimental)

You can download the shared invoice PDF from SQL supplier.

1. Click on **MyInvois** > **Download PDF from SQL Supplier (Experimental)**

    :::info[NOTE]
    The option will be enabled if the supplier has uploaded the PDF
    :::

    ![purchase-invoice-download-pdf-button](../../../static/img/usage/myinvois/einvoice/purchase-invoice-download-pdf-button.png)

    ![purchase-invoice-download-pdf](../../../static/img/usage/myinvois/einvoice/purchase-invoice-download-pdf.png)

## E-Invoice Request

The E-Invoice Request feature streamlines the process of collecting buyer information for E-Invoice submission. By providing a link, buyers can easily submit their personal or company details, ensuring accurate and real-time invoice creation with a validated LHDN QR code.

:::warning[IMPORTANT]
The invoice will auto submit to LHDN once the buyer has submitted the required information
:::

### Create E-Invoice Request

To create E-Invoice Request that allows buyers to fill in their personal or company information and submit it for E-Invoice

1. Click on **MyInvois** > **E-Invoice Request** in detail mode

    ![create-request](../../../static/img/usage/myinvois/einvoice-request/create-request.png)

2. Select the desired report from the report list

    ![report-list](../../../static/img/usage/myinvois/einvoice-request/report-list.png)

3. Share the report with the buyer

4. The buyer can scan the QR code included in the report to fill in their personal or company information and submit it for E-Invoice

5. An hourglass icon will appear next to the invoice with the E-Invoice Request

    :::info[NOTE]
    When clicked, the icon will open the link shared with the buyer
    :::

    ![hourglass](../../../static/img/usage/myinvois/einvoice-request/hourglass.png)

    ![eivrequest-form-pending](../../../static/img/usage/myinvois/einvoice-request/eivrequest-form-pending.png)

6. A filled hourglass icon indicates that the buyer has completed and submitted the required information for E-Invoice

    :::info[NOTE]
    When clicked, the icon updates the invoice with the submitted details and opens the link shared with the buyer
    :::

    ![filled-hourglass](../../../static/img/usage/myinvois/einvoice-request/filled-hourglass.png)

    ![eivrequest-form-valid](../../../static/img/usage/myinvois/einvoice-request/eivrequest-form-valid.png)

### Cancel E-Invoice Request

To cancel the E-Invoice Request and prevent the buyer from submitting information for E-Invoice

1. Click on **MyInvois** > **Cancel E-Invoice Request** in detail mode

    ![cancel-request](../../../static/img/usage/myinvois/einvoice-request/cancel-request.png)

### Refresh E-Invoice Request status

To check if the buyer has submitted information for E-Invoice and update the invoice with the submitted details

1. Click on **MyInvois** > **Refresh E-Invoice Request status** in detail mode

    ![refresh-status](../../../static/img/usage/myinvois/einvoice-request/refresh-status.png)

2. If the buyer has submitted the required information, the status icon will change to "Valid" and the invoice will be updated with the submitted details

    ![refresh-status-valid](../../../static/img/usage/myinvois/einvoice-request/refresh-status-valid.png)

### Batch Refresh E-Invoice Request status

To check if buyers have submitted information for E-Invoice and update the status for multiple invoices

1. Click on **MyInvois** > **Batch Refresh E-Invoice Request status** in browse mode

    ![batch-refresh-status](../../../static/img/usage/myinvois/einvoice-request/batch-refresh-status.png)

2. A progress dialog will appear and retrieve the latest status for all invoices with E-Invoice Request

    ![batch-refresh-status-progress](../../../static/img/usage/myinvois/einvoice-request/batch-refresh-status-progress.png)

### Batch Submit E-Invoice & Consolidate E-Invoice

When selected invoices include those with E-Invoice Request (Hourglass icon), the following options will appear in the Batch Submit E-Invoice and Consolidate E-Invoice forms:

- Refresh - Verify that the selected invoices have been submitted for E-Invoice by the buyers and update the information
- Cancel - Cancel the E-Invoice Request for the selected invoices to prevent buyers from submitting information for E-Invoice

    ![batch-submit](../../../static/img/usage/myinvois/einvoice-request/batch-submit.png)

    :::info[NOTE]
    You may click the Valid icon to perform refresh the status
    :::

    ![batch-submit-valid](../../../static/img/usage/myinvois/einvoice-request/batch-submit-valid.png)

    ![batch-submit-refresh-status](../../../static/img/usage/myinvois/einvoice-request/batch-submit-refresh-status.png)
