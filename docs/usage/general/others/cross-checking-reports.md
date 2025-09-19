---
sidebar_position: 1
title: Cross Checking Reports
description: A guide about Cross Checking Reports
slug: /usage/general/others/cross-checking-reports
tags: ["SQL Account", "Others", "Cross Checking"]
---

## Introduction

Sometime we wanted to make sure all the data is corrected posted/Records so we need some **Extra** report(s) to check before we can submit/report to

- Top Management
- Auditor
- Kastam

## Reports

### GL Ledger

1. **GST-Ledger-GST-Output Tax Prepaid**: To list out which Transactions still Outstanding for GST-Output Tax Prepaid
2. **GST-Ledger-Vs-GST-03_5b**: Check between GST PAYABLE account & the GST-03 5b Transactions
3. **GST-Ledger-Vs-GST-03_6b**: Check between GST CLAIMABLE account & the GST-03 6b Transactions
4. **GL Journal of Transaction - Inbalance**: Make sure Total Local DR & Total Local CR for each transaction is balance
5. **GL Cash Book Listing - GST Review**: Make sure Local Amount & Local Tax amount is correctly calculated for ALL Official Receipt & Payment Voucher

### Sales Listing

1. **Sales Local - Invoice Listing (GST 1) - SLvsAR**: Check between Sales Invoice & Customer Invoice Transactions
2. **Sales Local - Cash Sales Listing (GST 1) - SLvsAR**: Check between Sales Cash Sales & Customer Invoice Transactions
3. **Sales Local - Debit Note Listing (GST 1) - SLvsAR**: Check between Sales Debit Note & Customer Debit Note Transactions
4. **Sales Local - Credit Note Listing (GST 1) - SLvsAR**: Check between Sales Credit Note & Customer Credit Note Transactions
5. **Sales Customer Price History (GST 1) - Review**: Make sure Local Amount & Local Tax amount is correctly calculated

### Purchase Listing

1. **Purchase Local - Purchase Invoice Listing (GST 1) - PHvsAP**: Check between Purchase Invoice & Supplier Invoice Transactions
2. **Purchase Local - Cash Purchase Listing (GST 1) - PHvsAP**: Check between Purchase Cash Purchase & Supplier Invoice Transactions
3. **Purchase Local - Debit Note Listing (GST 1) - PHvsAP**: Check between Purchase Debit Note & Supplier Debit Note Transactions
4. **Purchase Local - Purchase Return Listing (GST 1) - PHvsAP**: Check between Purchase Return & Supplier Credit Note Transactions
5. **Purchase Supplier Price History (GST 1) - Review**: Make sure Local Amount & Local Tax amount is correctly calculated

### Customer Listing

1. **Customer - GST Review**: Make sure Local Amount & Local Tax amount is correctly calculated for ALL Customer Invoice, Debit Note & Credit Note
2. **Cust Local - Payment Listing (GST 1) - Opening Bad Debts**: Make sure Past Payment with GST is properly recorded
3. **Cust Local - Credit Note Listing (GST 1) - Opening Bad Debts**: Make sure Past Credit Note with GST is properly recorded

### Supplier Listing

1. **Suppplier - GST Review**: Make sure Local Amount & Local Tax amount is correctly calculated for ALL Supplier Invoice, Debit Note & Credit Note
2. **Supp Local - Payment Listing (GST 1) - Opening Bad Debts**: Make sure Past Payment with GST is properly recorded
3. **Supp Local - Credit Note Listing (GST 1) - Opening Bad Debts**: Make sure Past Credit Note with GST is properly recorded