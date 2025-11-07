---
sidebar_position: 7
title: GST Gain Loss - Manual
description: A guide about GST Gain Loss - Manual
slug: /usage/general/others/gst-gain-loss
tags: ["SQL Account", "Others", "GST", "Gain Loss"]
---

## Scenario

1. Foreign Customer/Supplier accounts set in local currency in SQL Accounting
2. Using local currency for Foreign Customer/Supplier accounts without the Currency Module in SQL Accounting

## Solution

Use the following documents for Customer/Supplier transactions:

1. Debit Notes
2. Credit Notes
3. GL Journal Vouchers
4. Foreign Gain/Loss Account (with Tax Code IES, replacing ES43)

### Customer Side

1. **Debit Note (Gain)**
    - DR Debtor
    - CR Foreign Gain Account (IES (Replace for ES43))
2. **Credit Note (Loss)**
    - DR Foreign Loss Account (IES (Replace for ES43))
    - CR Debtor

### Supplier Side

#### Gain

1. **Supplier Credit Note**
    - DR Supplier
    - CR Contra
2. **GL Journal Voucher**
    - DR Contra
    - CR Foreign Gain Account (IES (Replace for ES43))

#### Loss

1. **Supplier Debit Note**
    - DR Contra
    - CR Supplier
2. **GL Journal Voucher**
    - DR Foreign Loss Account (IES (Replace for ES43))
    - CR Contra
