---
sidebar_position: 4
id: bounce-payment
title: Bounce Payment for different currency
description: A guide on Bounce Payment for different currency for SQL Account
slug: /customer/bounce-payment
tags: ["SQL Account", "Bounce", "Payment", "Currency"]
---

## HOW TO DO BOUNCE PAYMENT FOR DIFFERENT CURRENCY

Invoice with amount USD100 | Rate 3.00 | Local net total = RM300

![1](/img/customer/bounce-payment/1.png)

### Situation 1: Received payment RM330, so Gain RM30.

![2](/img/customer/bounce-payment/2.png)

Please follow the steps below to do the bounce payment:

**STEP 1: Issue a Customer Debit Note as the previous invoice that had issue.**

![3](/img/customer/bounce-payment/3.png)

**STEP 2: Issue a payment voucher to credit out the amount that already knock off.**

![4](/img/customer/bounce-payment/4.png)

### Situation 2: Received payment RM270, so Loss RM30.

![5](/img/customer/bounce-payment/5.png)

Please follow the steps below to do the bounce payment:

**STEP 1: Issue a Customer Debit Note as the previous invoice that had issue.**

![6](/img/customer/bounce-payment/6.png)

**STEP 2: Issue a payment voucher to credit out the amount that already knock off.**

![7](/img/customer/bounce-payment/7.png)

## For the supplier side:

Supplier Invoice with amount USD100 | Rate 3.00 | Local net total = RM300

![8](/img/customer/bounce-payment/8.png)

### Situation 1: Make payment RM330, so Loss RM30.

![9](/img/customer/bounce-payment/9.png)

Please follow the steps below to do the bounce payment:

**STEP 1: Issue a Supplier Debit Note as the previous invoice that had issue.**

![10](/img/customer/bounce-payment/10.png)

**STEP 2: Issue an Official receipt to debit the amount that already knock off.**

***Put USD30 into loss GL account because we need to paid more USD30 to supplier,but we loss USD**.

![11](/img/customer/bounce-payment/11.png)

### Situation 2: Make payment RM270, so Gain RM30

![12](/img/customer/bounce-payment/12.png)

Please follow the steps below to do the bounce payment:

**STEP 1: Issue a Supplier Debit Note as the previous invoice that had issue.**

![13](/img/customer/bounce-payment/13.png)

**STEP 2: Issue an Official receipt to debit the amount that already knock off.**

**\*Put USD -30 into gain GL account because we pay less USD30 to supplier,but we gain USD30.**

![14](/img/customer/bounce-payment/14.png)
