---
sidebar_position: 1
id: photocopier-meter
title: Photocopier Meter
description: A guide to get price of photocopier meter in quotation
slug: /business-nature-industries/photocopier-meter
tags: ["Photocopier Meter"]
---

## Steps & Instruction

:::info[note]
The document number must be in the format = `S-%.5d` to allow the system to get the price.
:::

1. Create a new quatation (QT), and enter all product info inside.

    ![1](/img/business-nature-industries/photocopier-meter/1.png)

2. Tools | Option | Unitprice, place Last Quotation Selling Price at first place.

    ![2](/img/business-nature-industries/photocopier-meter/2.png)

3. Create a new sales invoice and select a customer

    1. Click on Get Price
    2. Enter Current Reading (Meter reading). 0 reading will not append to this invoice
    3. After done, Press **POST** Button

    ![3](/img/business-nature-industries/photocopier-meter/3.png)

    Result after done:

    ![4](/img/business-nature-industries/photocopier-meter/4.png)

4. After saving the invoice, system will append the info to QT.

    - Rebate = can be in % or Qty
    - No. Of Copies = (UDF_CMR-UDF_PMR)
    - UDF_Qty (Rebate in %) = No. Of Copies - UDF_FreeQty- (No. Of Copies * Rebate%)
    - UDF_Qty (Rebate in Qty) = No. Of Copies - UDF_FreeQty- Rebate in Pcs
    - Amount Calc if No. of Copies > FOC Qty
    - Amount = (UDF_Qty * UDF_UnitPrice) + UDF_AddFees + UDF_MthlyCharges
    - Amount Calc if No. of Copies &lt;= FOC Qty
    - Amount = UDF_AddFees + UDF_MthlyCharges
    - After that system will auto update the info to QT.

    ![5](/img/business-nature-industries/photocopier-meter/5.png)