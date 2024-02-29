---
sidebar_position: 1
id: photocopier-meter
title: Photocopier Meter
description: A guide to get price of photocopier meter in quotation
slug: /photocopier-meter
tags: ["Photocopier Meter"]
---

# Photocopier Meter

:::info[note]
Make Sure Document number must use format = <mark>S-%.5d</mark>, else system unable to get price.
:::

1. Create new QT, each Customer creates 1 QT, have to enter all product info inside.

    ![1](/img/business-nature-industries/photocopier-meter/1.png)

2. Tools | Option | Unitprice | Last Quotation Selling Price place at first place.

    ![2](/img/business-nature-industries/photocopier-meter/2.png)

3. Sales Invoice | Create new | Select Customer First

    ![3](/img/business-nature-industries/photocopier-meter/3.png)

    3.1 Click on Get Price  
    3.2 Enter Current Meter. 0 reading will not append to this IV  
    3.3 After done, Press POST Button  

    &emsp;Result after Press Post :
    ![4](/img/business-nature-industries/photocopier-meter/4.png)

4. After Save the IV, system will append the info to QT.  

    &emsp;Rebate = can be in % or Qty  
    &emsp;No. Of Copies = (UDF_CMR-UDF_PMR)  
    &emsp;UDF_Qty (Rebate in %) = No. Of Copies - UDF_FreeQty- (No. Of Copies * Rebate%)  
    &emsp;UDF_Qty (Rebate in Qty) = No. Of Copies - UDF_FreeQty- Rebate in Pcs  
    &emsp;<ins>Amount Calc if No. of Copies > FOC Qty</ins>  
    &emsp;Amount = (UDF_Qty * UDF_UnitPrice) + UDF_AddFees + UDF_MthlyCharges  
    &emsp;<ins>Amount Calc if No. of Copies &lt;= FOC Qty</ins>  
    &emsp;Amount = UDF_AddFees + UDF_MthlyCharges  

    After that system will auto update the info to QT.
    ![5](/img/business-nature-industries/photocopier-meter/5.png)