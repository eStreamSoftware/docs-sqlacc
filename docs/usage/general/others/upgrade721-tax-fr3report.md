---
sidebar_position: 4
title: Upgrade to 721 TaxRate Show A - Fast Report
description: A guide about Upgrade to 721 TaxRate Show A - Fast Report
slug: /usage/general/others/upgrade721-tax-fr3report
tags: ["SQL Account", "Others", "Upgrade", "Report"]
---

## Introduction

This issue occurs when a report contains a script that retrieves the **TaxRate** from Maintain Tax.

The error is caused by changes in SQL Accounting's coding structure that affect how tax rates are provided to reports.

## Problem

You will see the following error when previewing the report:

![fr3-report-problem](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-problem.jpg)

## Solution

1. Click the **Code** tab.
2. Scroll down and locate `procedure SetUp;`.
3. Replace the existing code with the following:

    ![fr3-report-solution1](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-solution1.jpg)

    ```pascal
    SQL := 'SELECT Dockey, Tax, TaxRate, Sum(CAST(LocalTaxAmt AS REAL)) LocalTaxAmt, Sum(CAST(LocalAmount AS REAL)) LocalAmount '+
           'FROM Document_Detail ' +
           'WHERE Tax <> '''' ' +
           'GROUP BY Dockey, Tax, TaxRate';
    AddDataSet('GSTAmt', ['Tax', 'TaxRate', 'LocalTaxAmt', 'LocalAmount'])
    ```

4. Click the **Subreport1** tab.

    ![fr3-report-solution2](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-solution2.jpg)

5. Double-click the Tax Rate memo.
6. Replace its expression with the following:

    ![fr3-report-solution3](../../../../static/img/usage/general/others/upgrade721-tax-fr3report/fr3-report-solution3.jpg)

    ```pascal
    [IIF(Trim(<GSTAmt."TaxRate">)='',<GSTAmt."Tax">,<GSTAmt."Tax"> +' @ ' + <GSTAmt."TaxRate">)]
    ```

7. Click **OK**.
8. Save the report.
