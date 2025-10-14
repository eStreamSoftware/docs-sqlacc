---
sidebar_position: 7
title: GST Gain Loss - Manual
description: A guide about GST Gain Loss - Manual
slug: /usage/general/others/gst-gain-loss
tags: ["SQL Account", "Others", "GST", "Gain Loss"]
---

## Scenario

1. Foreign Customer/Supplier but set In Local Currency in SQL Accounting.
2. Not buying the Currency Module & force to set Foreign Customer/Supplier to Local Currency in SQL Accounting.

## Solution

By using Customer/Supplier

1. Debit Note
2. Credit Note
3. GL Journal Voucher
4. Foreign Gain/Loss Account (Set Tax Code to IES (Replace for ES43))

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
