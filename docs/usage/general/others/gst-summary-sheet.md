---
sidebar_position: 8
title: GST Summary Sheet - MY - Detail
description: A guide about GST Summary Sheet - MY - Detail
slug: /usage/general/others/gst-summary-sheet
tags: ["SQL Account", "Others", "GST", "Summary"]
---

## Introduction

This report is available since 01 Apr 2015. It shown summary by the tax and transaction type. But this report unavailable in the latest GST Accounting Guidelines (02 Mar 2017). They is no detail on what to shown the amount from the Kastam web.

## Column Detail

Below is the column detail on how the amount is arrive from base on Users and Accountant Feedback:

### Input Tax

| Types of Acquisition | Value of Acquisition Excluding GST (RM) | Input Tax 6% (Claimable) | Input Tax 6% (Non-Claimable) |
|------------------------|------------------------------------------|----------------------------|-------------------------------|
| 1. Normal Purchase – to make standard rated supply | TX Amount | TX TaxAmount | NIL |
| Normal Purchase – to make Exempt supply | TXRE + EP Amount | TXRE + EP TaxAmount | TXRE with DocType _B |
| Normal Purchase – to make incidental Exempt Supply (Reg. 43 & 44A) | TXIES Amount | TXIES TaxAmount | TXIES with DocType _A |
