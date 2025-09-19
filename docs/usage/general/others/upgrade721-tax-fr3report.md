---
sidebar_position: 4
title: Upgrade to 721 TaxRate Show A - Fast Report
description: A guide about Upgrade to 721 TaxRate Show A - Fast Report
slug: /usage/general/others/upgrade721-tax-fr3report
tags: ["SQL Account", "Others", "Upgrade", "Report"]
---

## Introduction

This happen if you had write script to get the **TaxRate** from Maintain Tax in the report.

This due to changing SQLAccounting Coding Structure to cater future Changes in Tax Rate.

## Problem

You will get below error when you preview the report.

![fr3-report-problem](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-problem.jpg)

## Solution

1. Click **Code** Tab
2. Scroll down & look for **procedure SetUp;**
3. Replace this script with below script

![fr3-report-solution1](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-solution1.jpg)

```pascal
SQL := 'SELECT Dockey, Tax, TaxRate, Sum(CAST(LocalTaxAmt AS REAL)) LocalTaxAmt, Sum(CAST(LocalAmount AS REAL)) LocalAmount '+
       'FROM Document_Detail ' +
       'WHERE Tax <> '''' ' +
       'GROUP BY Dockey, Tax, TaxRate';
AddDataSet('GSTAmt', ['Tax', 'TaxRate', 'LocalTaxAmt', 'LocalAmount'])
```

4. Click on **Subreport1** tab

![fr3-report-solution2](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-solution2.jpg)

5. Double Click the Tax Rate memo
6. Replace this script with below script

![fr3-report-solution3](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-solution3.jpg)

```pascal
[IIF(Trim(<GSTAmt."TaxRate">)='',<GSTAmt."Tax">,<GSTAmt."Tax"> +' @ ' + <GSTAmt."TaxRate">)]
```

7. Click **OK** button
8. **Save** the report