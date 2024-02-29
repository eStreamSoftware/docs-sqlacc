---
sidebar_position: 13
id: crtSUMforTaxCol
title: Guideline to Create SUM Variable for TAX Column
description: Guild on creating variable of SUM Amount, Local Amt and Amt Include Tax
slug: /crtSUMforTaxCol
tags: ["Report", "ReportBuilder"]
---

# Guideline to Create SUM Variable for TAX Column
![1](/img/report/crtSUMforTaxCol/1.png)

1. Click on the variable icon 
2. Click on where you want to create a new variable, right click on the variable created > go calculations , Insert the Query below accordingly 
3. Click on the variable created, and make sure choose it to DOUBLE.

**<ins>Formula for Sub Total</ins>**

<mark>Variable1</mark>.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');  
Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'Amount');   
<mark>*** Refer above picture on how to Check the variable field name and replace it accordingly</mark>


**<ins>Formula for Total Exclude GST (RM)</ins>**

<mark>Variable2</mark>.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');  
Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalAmount');   
<mark>*** Refer above picture on how to Check the variable field name and replace it accordingly</mark>

**<ins>Formula for Total of Tax Amt (RM)</ins>**

<mark>Variable5</mark>.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');  
Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalTaxAmt');  
<mark>*** Refer above picture on how to Check the variable field name and replace it accordingly</mark>

**<ins>Formula for Total Include GST (RM)</ins>**

<mark>Variable6</mark>.DisplayFormat := Option.GetFieldValue('AccountingValueDisplayFormat');  
Value := GetAggregateValue(agSUM, Document_Detail, 'DocKey', 'LocalAmountWithTax');  
<mark>*** Refer above picture on how to Check the variable field name and replace it accordingly</mark>