---
sidebar_position: 4
title: E-Invoice Operation
description: A guide on E-Invoice Operation
slug: /usage/myinvois/e-invoice-operation
tags: ["SQL Account", "Usage", "MyInvois", "E-Invoice", "Submission"]
---

## Submission

In the E-Invoice system, there are few types of documents that can be submitted. The table below shows how each document type in SQL Account is mapped to its corresponding E-Invoice document type. Refer to each section for more detailed information on the specific document types.

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

    ![sales-invoice-submit-eiv](../../../static/img/myinvois/einvoice/sales-invoice-submit-eiv.png)

2. If the submission is valid, you will see the screen below, where you can see the validated Invoice info from LHDN directly.

    :::info[NOTE]
    Ensure that all required fields are correctly filled before submission to avoid errors. If the submission is invalid, you will need to correct the issues and resubmit.
    :::

    ![sales-invoice-valid](../../../static/img/myinvois/einvoice/sales-invoice-valid.png)

### Batch Submission

In the scenario where you already issued a lot of invoices but yet to submit E-Invoice, you can utilize the `Batch Submission` feature to submit them in single operation.

1. Click on **MyInvois** > **Batch Submit E-Invoice**

    ![batch-submission-button](../../../static/img/myinvois/einvoice/batch-submission-button.png)

2. Apply the desired date range and untick any invoices that you do not wish to submit yet, then proceed to **Submit**.

    ![batch-submission-filter](../../../static/img/myinvois/einvoice/batch-submission-filter.png)

3. Refer to **Status** column for each E-Invoice status. If there's any errors, go to the specific invoice and update the incorrect details then retry submission again.

    ![batch-submission-status](../../../static/img/myinvois/einvoice/batch-submission-status.png)

4. Go back to browse screen, click **Refresh** to see the updated status.

    ![batch-submission-refresh](../../../static/img/myinvois/einvoice/batch-submission-refresh.png)

## Test E-Invoice Validation

:::important
The validation process utilizes the MyInvois Sandbox environment, meaning the documents will appear in your MyInvois Portal (Sandbox/Pre-production).

To use this feature, you must complete the [Sandbox Credential Setup](onboarding#e-invoice-validation-setup) beforehand.
:::

If you do not have the necessary permissions to submit an E-Invoice, you can now validate the E-Invoice during the issuance process.

This ensures that the invoice can be successfully submitted at a later stage.

1. After issuing an invoice, click **MyInvois** > **Test E-Invoice Validation**

    ![test-einvoice-validation](../../../static/img/myinvois/einvoice/test-einvoice-validation-button.png)

2. If there's some missing data, error list or dialog will be shown, you can update the incorrect data and try validate again.

    Example error dialog:

    ![test-einvoice-error](../../../static/img/myinvois/einvoice/test-einvoice-validation-error.png)

3. If the validation is successful, you will see the following confirmation screen:

    ![test-einvoice-result](../../../static/img/myinvois/einvoice/test-einvoice-validation-result.png)

## Consolidate

When the buyer does not require an e-Invoice, the supplier will issue a regular receipt, which does not need to be submitted for IRBM validation.

However, you are required to aggregate these transactions monthly and submit a consolidated e-Invoice to IRBM within **seven calendar days after the month's end**.

1. Click on **MyInvois** > **Consolidate E-Invoice**

    ![consolidate-button](../../../static/img/myinvois/einvoice/consolidate-button.png)

2. Select the documents to consolidate:
   1. Choose the desired date range
   2. Tick **Include unsubmitted E-Invoices** if you want to include invoices with **E-Invoice** submission type. Refer to [Step 4](e-invoice#sales-invoice--cash-sales)
   3. Click **Apply**

    ![consolidate-filter](../../../static/img/myinvois/einvoice/consolidate-filter.png)

3. Review the aggregated invoice details and click **Submit**

    ![consolidate-review](../../../static/img/myinvois/einvoice/consolidate-review.png)

4. If the consolidated E-Invoice is submitted successfully, you will see the following confirmation screen:

    ![consolidate-success](../../../static/img/myinvois/einvoice/consolidate-success.png)

## Cancellation

At the **first 72 hours** of an submitted invoice, you are able to **cancel** the e-invoice, then re-submit the same invoice again without issuing CN/DN.

In the first 72 hours period, you shall cancel the invoice and resubmit when:

 1. There is a mistake in the submitted e-invoice.
 2. Buyer rejected the invoice and you agreed with the rejection.

To cancel a submitted e-invoice:

1. Go to **MyInvois** > **Cancel Validated E-Invoice**.

    ![sales-invoice-cancel-button](../../../static/img/myinvois/einvoice/sales-invoice-cancel-button.png)

2. Enter the reason for cancellation then Click **Initiate Cancellation**. To dismiss the dialog, Click **Keep Document**.

    ![sales-invoice-cancel-reason](../../../static/img/myinvois/einvoice/sales-invoice-cancel-reason.png)

3. To verify the latest status, go to **MyInvois** > **Check E-Invoice Status**.

    ![sales-invoice-cancelled](../../../static/img/myinvois/einvoice/sales-invoice-cancelled.png)

## Report

Preview the report and you can see the E-Invoice validation QR code is embedded in the invoice.

![sales-invoice-preview](../../../static/img/myinvois/einvoice/sales-invoice-preview.png)

## Check Status

You can easily check the latest status of an invoice in SQL Account to ensure it has been submitted and processed correctly.

### Check Status (Single Document)

1. Click on **MyInvois** > **Check E-Invoice Status**

    ![sales-invoice-check-status-button](../../../static/img/myinvois/einvoice/sales-invoice-check-status-button.png)

2. You will be able to see the current status of the submitted invoice, along with the QR code and a validation page.

    ![sales-invoice-check-status-valid](../../../static/img/myinvois/einvoice/sales-invoice-check-status-valid.png)

    :::info[NOTE]
    If the invoice status is marked as invalid, a list of errors will be displayed. You can use this information to correct the invoice and resubmit it.
    :::

    ![sales-invoice-check-status-invalid](../../../static/img/myinvois/einvoice/sales-invoice-check-status-invalid.png)

### Batch Check Status

In certain situations, the status of your E-Invoices may not reflect the latest updates due to various factors such as:

- Slow or unstable internet connectivity
- Manual cancellation of an E-Invoice within the MyInvois Portal
- E-Invoice status showing as Submitted without further updates

To ensure that you are viewing the most up-to-date status of your E-Invoices, follow these steps:

   1. Click the **MyInvois** button.
   2. Select **Batch Check E-Invoice Status**.

This process will retrieve the latest status for all submitted documents, ensuring that your records are accurate and up to date.

    ![batch-check-status](../../../static/img/myinvois/einvoice/batch-check-status.png)

## Submission Log

You can view all past submission and cancellation log of an invoice.

1. Click on **MyInvois** > **MyInvois Log**

    ![sales-invoice-log-button](../../../static/img/myinvois/einvoice/sales-invoice-log-button.png)

    ![sales-invoice-log](../../../static/img/myinvois/einvoice/sales-invoice-log.png)

## Purchase Documents Import

SQL Account offers two methods for importing purchase documents from the E-Invoice system:

- [Single Import](#single-import): Enables you to import individual documents.
- [Batch Import](#batch-import): Allows you to import multiple documents at once.

To ensure proper import, it's important to understand how the document types in SQL Account are mapped to those received from the E-Invoice system. The table below shows how the document types in the SQL Account are mapped to those received from the E-Invoice system:

| SQL Account Document Type | E-Invoice Document Type |
| ------------------------- | ----------------------- |
| Purchase Invoice          | Invoice                 |
| Cash Purchase             | Invoice                 |
| Purchase Returned         | Credit Note             |
| Purchase Debit Note       | Debit Note              |

### Single Import

You can view all received documents and single import into SQL Account.

1. Go to document detail screen and click on **MyInvois** > **Single import E-Invoice**

    ![purchase-invoice-single-import-button](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-button.png)

    ![purchase-invoice-single-import-form](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-form.png)

2. Choose the desired date range and press the **Apply** button to filter the documents

    ![purchase-invoice-single-import-form-daterange](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-form-daterange.png)

3. The table will display the list of E-Invoice documents your company has received

    ![purchase-invoice-single-import-form-apply](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-form-apply.png)

4. SQL Account will auto-map the supplier code if the supplier's TIN matches the TIN in Maintain Supplier

    :::info[NOTE]
    We suggest adding the TIN for existing suppliers or creating a new supplier record
    :::

    :::info[NOTE]
    A supplier code is required. An error message will appear if you attempt to import a document without a supplier code
    :::

    ![purchase-invoice-single-import-form-select-supplier](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-form-select-supplier.png)

    ![purchase-invoice-single-import-form-select-supplier-error](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-form-select-supplier-error.png)

5. Once you have selected the desired documents, click on the **Import** button to proceed with the single import

    ![purchase-invoice-single-import](../../../static/img/myinvois/einvoice/purchase-invoice-single-import.png)

    ![purchase-invoice-single-import-details](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-details.png)

6. After reviewing the document details, click **Save** to complete the process

    ![purchase-invoice-single-import-success](../../../static/img/myinvois/einvoice/purchase-invoice-single-import-success.png)

### Batch Import

You can view all received documents and batch import into SQL Account.

1. Click on **MyInvois** > **Batch import E-Invoice**

    ![purchase-invoice-batch-import-button](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-button.png)

    ![purchase-invoice-batch-import-form](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-form.png)

2. Choose the desired date range and press the **Apply** button to filter the documents

    ![purchase-invoice-batch-import-form-daterange](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-form-daterange.png)

3. There are two tables inside the form:

    - The upper table will display the list of E-Invoice documents your company has received
    - The lower table will show the item details for the document you have selected

    ![purchase-invoice-batch-import-form-apply](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-form-apply.png)

4. You can select multiple documents using the checkboxes provided
5. SQL Account will auto-map the supplier code if the supplier's TIN matches the TIN in Maintain Supplier

    :::info[NOTE]
    We suggest adding the TIN for existing suppliers or creating a new supplier record
    :::

    ![purchase-invoice-batch-import-form-select-supplier](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-form-select-supplier.png)

6. A tax code is required for an item if the tax amount is greater than 0

    :::info[NOTE]
    The document will displayed in **red font** if the tax code is missing when it is required
    :::

    ![purchase-invoice-batch-import-form-select-tax](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-form-select-tax.png)

    ![purchase-invoice-batch-import-form-tax](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-form-tax.png)

7. Once you have selected the desired documents, click on the **Import** button to proceed with the batch import

    ![purchase-invoice-batch-import](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import.png)

    ![purchase-invoice-batch-import-success](../../../static/img/myinvois/einvoice/purchase-invoice-batch-import-success.png)

## Rejection (Imported Documents)

At the **first 72 hours** of an received invoice, you are able to **reject** the e-invoice.

In the first 72 hours period, you shall reject the invoice when there is a mistake in the received e-invoice.

To reject a received e-invoice:

1. Go to **MyInvois** > **Reject Validated E-Invoice**.

    ![purchase-invoice-reject-button](../../../static/img/myinvois/einvoice/purchase-invoice-reject-button.png)

2. Enter the reason for rejection then click **Initiate Rejection**. To dismiss the dialog, Click **Keep Document**.

    ![purchase-invoice-reject-reason](../../../static/img/myinvois/einvoice/purchase-invoice-reject-reason.png)

## Share PDF (Experimental)

You can share invoice PDF to SQL buyer.

1. Click on **MyInvois** > **Check E-Invoice Status**

    ![sales-invoice-check-status-button](../../../static/img/myinvois/einvoice/sales-invoice-check-status-button.png)

2. Click on **Share** to share the invoice PDF with SQL buyer

    ![sales-invoice-share-pdf-button](../../../static/img/myinvois/einvoice/sales-invoice-share-pdf-button.png)

3. Continue to choose the report format to share with SQL buyer

    ![sales-invoice-share-pdf-select-report](../../../static/img/myinvois/einvoice/sales-invoice-share-pdf-select-report.png)

    ![sales-invoice-share-pdf-success](../../../static/img/myinvois/einvoice/sales-invoice-share-pdf-success.png)

## Download PDF (Experimental)

You can download the shared invoice PDF from SQL supplier.

1. Click on **MyInvois** > **Download PDF from SQL Supplier (Experimental)**

    :::info[NOTE]
    The option will be enabled if the supplier uploaded the PDF
    :::

    ![purchase-invoice-download-pdf-button](../../../static/img/myinvois/einvoice/purchase-invoice-download-pdf-button.png)

    ![purchase-invoice-download-pdf](../../../static/img/myinvois/einvoice/purchase-invoice-download-pdf.png)

## TIN Info Link

The TIN Info Link feature streamlines the process of collecting buyer information for E-Invoice submission. By providing a link, buyers can easily submit their personal or company details, ensuring accurate and real-time invoice creation with a validated LHDN QR code.

:::warning[IMPORTANT]
The invoice will auto submit to LHDN once the buyer has submitted the required information
:::

### Create TIN Info Link

To create TIN Info link that allows buyers to fill in their personal or company information and submit it for E-Invoice

1. Click on **MyInvois** > **Create TIN Info Link** in detail mode

    ![create-link](../../../static/img/myinvois/tininfo/create-link.png)

2. Select the desired report from the report list

    ![report-list](../../../static/img/myinvois/tininfo/report-list.png)

3. Download the report and share it with the buyer

4. The buyer can scan the QR code included in the report to fill in their personal or company information and submit it for E-Invoice

5. An hourglass icon will appear next to the invoice with the TIN Info Link

    :::info[NOTE]
    When clicked, the icon will open the link shared with the buyer
    :::

    ![hourglass](../../../static/img/myinvois/tininfo/hourglass.png)

    ![eivrequest-form-pending](../../../static/img/myinvois/tininfo/eivrequest-form-pending.png)

6. A filled hourglass icon indicates that the buyer has completed and submitted the required information for E-Invoice

    :::info[NOTE]
    When clicked, the icon updates the invoice with the submitted details and opens the link shared with the buyer
    :::

    ![filled-hourglass](../../../static/img/myinvois/tininfo/filled-hourglass.png)

    ![eivrequest-form-valid](../../../static/img/myinvois/tininfo/eivrequest-form-valid.png)

### Cancel TIN Info Link

To cancel the TIN Info Link and prevent the buyer from submitting information for E-Invoice

1. Click on **MyInvois** > **Cancel TIN Info Link** in detail mode

    ![cancel-link](../../../static/img/myinvois/tininfo/cancel-link.png)

### Refresh TIN Info status

To check if the buyer has submitted information for E-Invoice and update the invoice with the submitted details

1. Click on **MyInvois** > **Refresh TIN Info status** in detail mode

    ![refresh-status](../../../static/img/myinvois/tininfo/refresh-status.png)

2. If the buyer has submitted the required information, the status icon will change to "Valid" and the invoice will be updated with the submitted details

    ![refresh-status-valid](../../../static/img/myinvois/tininfo/refresh-status-valid.png)

### Batch Refresh TIN Info status

To check if buyers have submitted information for E-Invoice and update the status for multiple invoices

1. Click on **MyInvois** > **Batch Refresh TIN Info status** in browse mode

    ![batch-refresh-status](../../../static/img/myinvois/tininfo/batch-refresh-status.png)

2. A progress dialog will appear and retrieve the latest status for all invoices with TIN Info Links

    ![batch-refresh-status-progress](../../../static/img/myinvois/tininfo/batch-refresh-status-progress.png)

### Batch Submit E-Invoice & Consolidate E-Invoice

When selected invoices include those with TIN Info Links (Hourglass icon), the following options will appear in the Batch Submit E-Invoice and Consolidate E-Invoice forms:

- Refresh - Verify that the selected invoices have been submitted for E-Invoice by the buyers and update the information
- Cancel - Cancel the TIN Info Links for the selected invoices to prevent buyers from submitting information for E-Invoice

    ![batch-submit](../../../static/img/myinvois/tininfo/batch-submit.png)

    :::info[NOTE]
    You may click the Valid icon to perform check status
    :::

    ![batch-submit-valid](../../../static/img/myinvois/tininfo/batch-submit-valid.png)

    ![batch-submit-check-status](../../../static/img/myinvois/tininfo/batch-submit-check-status.png)
