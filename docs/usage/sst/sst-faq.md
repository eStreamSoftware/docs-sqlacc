---
sidebar_position: 9
title: FAQ
description: Solutions for SST
slug: /usage/sst/faq
tags: ["SQL Account", "SST", "FAQ"]
---

## Can I Change the Service Tax Type to Accrual Basis?

### Setup

By Default System will use as Payment Basis for Service Tax Type.

To change to **Accrual Basis** (i.e. pay Customs even if payment hasn't been received), just set as below

![des-sstfaq-change-the-service-tax-type-to-accrual-basis-1](../../../static/img/usage/gst-and-sst/sst/sstfaq-change-the-service-tax-type-to-accrual-basis-1.jpg)

## Why does my SST-02 report preview show no value even though the screen display an amount?

**Solution:**

Make sure you have entered your **Service Tax** and/or **Sales Tax No.** in File | Company Profile

## Why does the tax code (ST5) used in my sales invoices not appear in SST-02, but it shows up in the SST-02 listing?

**Solution:**

Make sure you have entered your **Sales Tax no** instead of **Service Tax** no in File | Company Profile

## Why Some Service Tax Transaction not shown in SST-02 even the document is fully paid?

**Solution:**

Make sure you had select correct **Knock Off Date** in the Customer Payment

![des-sstfaq-service-tax-transaction-not-shown-in-sst02-1](../../../static/img/usage/gst-and-sst/sst/sstfaq-service-tax-transaction-not-shown-in-sst02-1.jpg)

## Why does the service invoice that was knocked off (paid) in Sept 2018 not appear in SST-02 for the period Sept–Oct 2018?

**Issue:**

Knock-off tax date will follow the customer payment date if user has tick on an invoice.
Change the customer payment date (eg. from 29/05/2019 to 29/09/2018), the knock-off date will remains unchanged.

![des-sstfaq-service-invoice-knockoff-not-appear-in-sst02-1](../../../static/img/usage/gst-and-sst/sst/sstfaq-service-invoice-knockoff-not-appear-in-sst02-1.jpg)

**Solution:**

Change the **Knock-off Tax Date** (follow the payment date)

![des-sstfaq-service-invoice-knockoff-not-appear-in-sst02-2](../../../static/img/usage/gst-and-sst/sst/sstfaq-service-invoice-knockoff-not-appear-in-sst02-2.jpg)

## Can I mix sales tax and service tax in a single invoice?

**Solution:**

1. Customs officer has recommended the company should raise the invoice, debit note and credit note separately for sales and service invoice.
2. Indicate the sales and service tax registration no on the invoice letter head separately as well.
3. This is to ease the Customs audit operation purpose.

Sales tax and service tax having different accounting basis as explained below.

1. **SALES TAX**
    - Billing / accrual basis
    - Sales Tax required to be accounted at the time when the goods are sold, disposed of, or first used

2. **SERVICE TAX**
    - Payment basis
    - Service Tax required to be accounted at the time when the payments is received.
    - On the day following period of twelve month when any whole or part of the payment is not received from the date of the invoice for the taxable service provided

## What circumstances to use tax code SV and SVA for Credit Note?

Service tax is based on payment basis. There will be 2 cases of service tax where credit note has taken in place:

1. **Unpaid service tax**

    - Cancellation of service **before any payment**.
    - Use tax code: **SV** (follow the invoice tax code, eg. SV)
    - System will **auto reverse the unpaid service tax amount** in the **SST - Deferred Tax (SST-203)**.

2. **Paid service tax**

    - Cancellation of service **after payment and service tax has been paid** to RMCD.
    - Adjustment tax deduction for refund of service tax approved by RMCD.
    - Use tax code: **SVA**
    - System will reduce the service tax payable to RMCD

## What invoice format should I use for service tax exempted services?

**Solution:**

1. Download the invoice format by clicking [Sales Invoice 8 SST 1 (Exempted Taxable Service)](https://www.sql.com.my/webstore/templates/template-detail/?id=4769)
2. Go to **Tools | Report Designer**...
3. Click import the invoice format file.

## How should the double entry be recorded for a service tax invoice and CN issued under the SV tax code?

### Case 1: Full Service Tax Invoice issue

   | GL Acc   | Description        | Tax | DR     | CR     |
   |----------|--------------------|-----|--------|--------|
   | 300-A0001| Customer ABC       |     | 1060.00|        |
   | 500-000  | Service Sales      | SV  |        | 1000.00|
   | SST-203  | SST - Deferred Tax | SV  |        | 60.00  |

### Case 2: Partial Payment knock-off with invoice

   | GL Acc   | Description   | Tax | DR   | CR   |
   |----------|---------------|-----|------|------|
   | 330-000  | BANK          |     |530.00|      |
   | 300-A0001| Customer ABC  |     |      |530.00|

   System auto reverse the SST-Deferred Tax after knock-off

   | GL Acc  | Description        | Tax | DR   | CR   |
   |---------|--------------------|-----|------|------|
   | SST-203 | SST - Deferred Tax |     | 30.00|      |
   | SST-202 | SST - Service Tax  |     |      | 30.00|

### Case 3: Reduce/cancel partly of the service amount. Issue CN using tax code: SV

   | GL Acc   | Description        | Tax | DR    | CR    |
   |----------|--------------------|-----|-------|-------|
   | 500-000  | Service Sales      | SV  | 500.00|       |
   | SST-203  | SST - Deferred Tax | SV  | 30.00 |       |
   | 300-A0001| Customer ABC       |     |       | 530.00|

**Conclusion:**

SST Deferred Tax account `=` **ZERO** if the **Full Service Tax Invoice** (eg. SV only) outstanding is **ZERO**.

SST Deferred Tax account `<` or `>` **ZERO** if the service tax invoice has **mixed tax type** (eg. ST, SV and empty tax code).
