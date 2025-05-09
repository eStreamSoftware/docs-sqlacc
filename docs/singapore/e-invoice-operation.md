---
sidebar_position: 3
title: InvoiceNow GST Operation
description: A guide for E-Invoicing Operation for Singapore SQL User
slug: /singapore/c5
tags: ["SQL Account", "Singapore", "InvoiceNow", "Activation"]
---

## Activation of InvoiceNow GST Submission

To activate InvoiceNow GST submission for GST-registered Businesses, navigate to **File** > **Company Profile** > **Peppol** and perform the actions below:

![c5](../../static/img/singapore-gst/c5/c5.png)

### Activate

To initiate InvoiceNow GST activation for specified participants and organizations. Activation requires signing with Corppass.

1. Click on **InvoiceNow GST** > **Activate**

    ![c5_activate](../../static/img/singapore-gst/c5/c5_activate.png)

### Get Status

To check the InvoiceNow GST activation status for a specific participant and organization.

1. Click on **InvoiceNow GST** > **Get status**

    ![c5_status](../../static/img/singapore-gst/c5/c5_status.png)

### Cancel Activation

To cancel an initiated InvoiceNow GST activation, a KYC pending InvoiceNow GST activation or a InvoiceNow GST deactivation.

1. Click on **InvoiceNow GST** > **Cancel Activation**

    ![c5_cancel](../../static/img/singapore-gst/c5/c5_cancel.png)

### Deactivate

To deactivate an existing InvoiceNow GST activation. Deactivation requires signing with Corppass.

1. Click on **InvoiceNow GST** > **Deactivate**

    ![c5_deactivate](../../static/img/singapore-gst/c5/c5_deactivate.png)

## Extraction and Packaging of Invoice Data

### Type 1A (Peppol)

This type will submits documents to the Peppol network and automatically forwards them to IRAS. You may use this type when the customer is on Peppol.

:::info[NOTE]

- Supported format: PINT (Default), BIS
- Supported document types: Sales Invoice, Credit Notes

:::

1. Click on **Peppol** > **Peppol (PINT)** or **Peppol (BIS)**

    ![A](../../static/img/singapore-gst/c5/A.png)

### Type 2A (Non Peppol)

This type will submits documents directly to IRAS.

:::info[NOTE]

- Supported format: PINT
- Supported document types: Sales Invoice, Credit Notes

:::

1. Click on **Peppol** > **IRAS**

    ![B](../../static/img/singapore-gst/c5/B.png)

### Type 2B (POS or STI)

This type will groups items by tax code and submits documents to IRAS. You may use this type for cash register sales or sales made via point-of-sale systems (POS) or simplified tax invoices issued (STI).

:::info[NOTE]

- Supported format: PINT
- Supported document types: Cash Sales

:::

1. Click on **Peppol** > **IRAS**

    ![C](../../static/img/singapore-gst/c5/C.png)

### Type 1B (Peppol Received)

This type will submits received documents via the Peppol network and forwards them to IRAS. You may use this type for documents imported using Peppol.

:::info[NOTE]

- Supported format: PINT (Default), BIS
- Supported document types: Purchase Invoice, Purchase Returned

:::

1. Click on **Peppol** > **Peppol (PINT)** or **Peppol (BIS)**

    ![D](../../static/img/singapore-gst/c5/D.png)

### Type 3A (Non Peppol Received)

This type will submits received documents directly to IRAS.

:::info[NOTE]

- Supported format: PINT
- Supported document types: Purchase Invoice, Purchase Returned

:::

1. Click on **Peppol** > **IRAS**

    ![E](../../static/img/singapore-gst/c5/E.png)

### Type 3B (PCP)

This type will groups items by tax code and submits documents to IRAS. You may use this type for petty cash purchases (PCP).

:::info[NOTE]

- Supported format: PINT
- Supported document types: Cash Purchase

:::

1. Click on **Peppol** > **IRAS**

    ![F](../../static/img/singapore-gst/c5/F.png)

## Reporting & Reconciliation

### Log

To check the Peppol log of a document.

:::info[NOTE]
The Remark column stores the IRAS Acknowledgement ID
:::

![log](../../static/img/singapore-gst/c5/log.png)

### Reconciliation

To compare document submissions in SQL Account and the Peppol network.

:::info[NOTE]
The record highlighted in red color indicate missing document submissions in SQL Account
:::

![recon](../../static/img/singapore-gst/c5/recon.png)
