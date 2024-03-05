---
sidebar_position: 4
id: customer-payment-guide
title: Customer Payment Guide
description: A guide on Customer Payment Guide for SQL Account
slug: /customer/customer-payment-guide
tags: ["SQL Account", "Customer", "Payment"]
---

1. Customer Payment combination

    1. Customer currency (RM), receive payment in (RM)

    2. Customer currency (USD), receive payment in (RM)

    3. Customer currency (USD), receive payment in (USD)

    4. Customer currency (USD), receive payment in (SGD)

## 1. Customer in RM currency & payment received in RM

    ![1](/img/customer/payment-guide/1.png)

    1. First step to know the customer for currency RM by default is with “----“ sign.

    2. Customer order and proceed to Invoice

        ![2](/img/customer/payment-guide/2.png)
    3. Lets proceed to Payment

        ![3](/img/customer/payment-guide/3.png)

    Make sure the above step for Customer in RM currency, payment in default is RM currency also.

## 2. Customer currency (USD), receive payment in (RM)

    1. Lets check on the current Customer with different Currency, 
    
        **Check on step 1.1.1 and proceed to customer with different currency**

        ![4](/img/customer/payment-guide/4.png)


    2. check the local amount and net total. Is it different with the previous one? If yes, proved that the document amount is in USD currency.

    Now, lets proceed to customer payment.

        ![5](/img/customer/payment-guide/5.png)

    2A – Currency rate for knocking off the payment (System auto calculate)

    2B – Payment Amount made in RM (Note: This payment amount is based on Bank payment method currency) **[check on Tools >     Maintain payment method to know more!]**

    2C – Bank payment method, make sure you choose the correct bank.

    2D – This pay amount you can either put it on your desire amount and check on the 2A, you’ll notice that currency rate will change once you try to knock off the amount.

## 3. Customer currency (USD), receive payment in (USD)

    1. For this case where customer currency is USD and payment also in USD, there’ll be a few more step to do.

        1 st – you have to maintain a USD Bank in GL Account where this will be the bank you’ll be getting your
        payment in.

        2 nd – after maintain the GL Account, go to tools, Maintain Payment method to assign the currency of the
        payment method in the particular bank.

    ![6](/img/customer/payment-guide/6.png)

    After maintain this payment method, we can proceed to do transaction for cases similar.

        ![7](/img/customer/payment-guide/7.png)

    USD Currency on Invoice. Now let’s proceed to Payment!

:::info

Only Customer currency that is same with payment currency will enable the editing of Rate for currency on top right corner

:::

    ![8](/img/customer/payment-guide/8.png)

    1. Now, this rate can be changed as the currency rate change according to the currency rate

    2. Select the correct payment method in order to allow USD payment knocking off USD Invoice

    3. Paid amount will be the amount of USD you receive

    4. Local amount is the amount of conversion of (paid amount x currency rate at the moment)

    5. This IV amount will always be following the currency amount not local amount.

    After confirming all the related info is correct may save it. If your currency rate is different from the one stated in the Invoice, a message should prompt out defining your gain/loss on foreign exchange.

        ![9](/img/customer/payment-guide/9.png)

    If your Invoice currency is stated 3.5 at the moment, and when your customer pay to you on 3.6 rate, the system will auto calculate the amount of gain/loss you actually got from this transaction and show to you the amount when you click save. Above prompt dialog will appear.

## 4. Customer currency (USD), receive payment in (SGD)

    For customer on USD and receiving payment on different currency you just need to main the payment method. How to maintain payment method? – Refer points [3](#3-customer-currency-usd-receive-payment-in-usd)

        ![10](/img/customer/payment-guide/10.png)

:::note

Only Customer currency that is same with payment currency will enable the editing of Rate for currency on top right corner

:::

    1. Select for the payment method ( Bank account in SGD )

    2. Put in the payment amount and change the currency rate of SGD, check the l amount for confirma

    3. Put in the payment amount on Pay column/tick on the payment knocking invoices check for the USD rate as it change

    The knock-off amount will auto calculate itself and if there’s any gain/loss on for exchange, simple click on the save button and you’ll be notify about the amount of gain/on foreign currency exchange

    <!-- So, that’s all for customer payment! Easy right? May try for yourself to know better. -->
