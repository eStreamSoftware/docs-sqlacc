---
sidebar_position: 1
title: Cross Checking Reports
description: A guide about Cross Checking Reports
slug: /usage/general/others/cross-checking-reports
tags: ["SQL Account", "Others", "Cross Checking"]
---

## Introduction

Sometimes we want to ensure all data is correctly posted/recorded, so we need some **extra** reports to check before submitting or reporting to:

- Top Management
- Auditors
- Customs (Kastam)

## Reports

### GL Ledger

| Report Name | Description |
|--------------|-------------|
| **GST-Ledger-GST-Output Tax Prepaid** | Lists transactions still outstanding for GST-Output Tax Prepaid. |
| **GST-Ledger-Vs-GST-03_5b** | Checks consistency between GST PAYABLE account & GST-03 5b transactions. |
| **GST-Ledger-Vs-GST-03_6b** | Checks consistency between GST CLAIMABLE account & GST-03 6b transactions. |
| **GL Journal of Transaction - Inbalance** | Ensures that total local DR & total local CR for each transaction are balanced. |
| **GL Cash Book Listing - GST Review** | Ensures local amount & local tax amount are correctly calculated for all Official Receipts & Payment Vouchers. |

### Sales Listing

| Report Name | Description |
|--------------|-------------|
| **Sales Local - Invoice Listing (GST 1) - SLvsAR** | Checks consistency between Sales Invoice & Customer Invoice transactions. |
| **Sales Local - Cash Sales Listing (GST 1) - SLvsAR** | Checks consistency between Sales Cash Sales & Customer Invoice transactions. |
| **Sales Local - Debit Note Listing (GST 1) - SLvsAR** | Checks consistency between Sales Debit Note & Customer Debit Note transactions. |
| **Sales Local - Credit Note Listing (GST 1) - SLvsAR** | Checks consistency between Sales Credit Note & Customer Credit Note transactions. |
| **Sales Customer Price History (GST 1) - Review** | Ensures the local amount & local tax amount are correctly calculated. |

### Purchase Listing

| Report Name | Description |
|--------------|-------------|
| **Purchase Local - Purchase Invoice Listing (GST 1) - PHvsAP** | Checks consistency between Purchase Invoice & Supplier Invoice transactions. |
| **Purchase Local - Cash Purchase Listing (GST 1) - PHvsAP** | Checks consistency between Purchase Cash Purchase & Supplier Invoice transactions. |
| **Purchase Local - Debit Note Listing (GST 1) - PHvsAP** | Checks consistency between Purchase Debit Note & Supplier Debit Note transactions. |
| **Purchase Local - Purchase Return Listing (GST 1) - PHvsAP** | Checks consistency between Purchase Return & Supplier Credit Note transactions. |
| **Purchase Supplier Price History (GST 1) - Review** | Ensures the local amount & local tax amount are correctly calculated. |

### Customer Listing

| Report Name | Description |
|--------------|-------------|
| **Customer - GST Review** | Ensures the local amount & local tax amount are correctly calculated for all Customer Invoices, Debit Notes, & Credit Notes. |
| **Cust Local - Payment Listing (GST 1) - Opening Bad Debts** | Ensures past payments with GST are properly recorded. |
| **Cust Local - Credit Note Listing (GST 1) - Opening Bad Debts** | Ensures past credit notes with GST are properly recorded. |

### Supplier Listing

| Report Name | Description |
|--------------|-------------|
| **Supplier - GST Review** | Ensures the local amount & local tax amount are correctly calculated for all Supplier Invoices, Debit Notes, & Credit Notes. |
| **Supp Local - Payment Listing (GST 1) - Opening Bad Debts** | Ensures past payments with GST are properly recorded. |
| **Supp Local - Credit Note Listing (GST 1) - Opening Bad Debts** | Ensures past credit notes with GST are properly recorded. |
