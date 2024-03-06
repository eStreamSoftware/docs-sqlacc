---
sidebar_position: 13
id: crtSUMforTaxCol
title: Guideline to Create SUM Variable for TAX Column
description: Guild on creating variable of SUM Amount, Local Amt and Amt Include Tax
slug: /report/crtSUMforTaxCol
tags: ["Report", "ReportBuilder"]
---

## Steps & Instructions

![1](/img/report/crtSUMforTaxCol/1.png)

1. Click on the variable icon

2. Click on where you want to create a new variable, right click on the variable created > go calculations , Insert the [QUERY](#query) below accordingly

3. Click on the variable created, and make sure choose it to **DOUBLE**.

## Query

:::info[note]
Refer to the [IMAGE](#steps--instructions) above on how to check the variable field name and replace it accordingly
:::

- **Formula for Sub Total**

    >**Variable1**.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');
    >
    >Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'Amount');
    >

- **Formula for Total Exclude GST (RM)**

    >**Variable2**.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');
    >
    >Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalAmount');
    >

- **Formula for Total of Tax Amt (RM)**

    >**Variable5**.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');
    >
    >Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalTaxAmt');

- **Formula for Total Include GST (RM)**

    >**Variable6**.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');
    >
    >Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalAmountWithTax');
