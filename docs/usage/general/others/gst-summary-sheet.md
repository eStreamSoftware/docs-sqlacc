---
sidebar_position: 8
title: GST Summary Sheet - MY - Detail
description: A guide about GST Summary Sheet - MY - Detail
slug: /usage/general/others/gst-summary-sheet
tags: ["SQL Account", "Others", "GST", "Summary"]
---

## Introduction

This report has been available since April 1, 2015. It provides a summary by tax and transaction type. However, this report is not included in the latest GST Accounting Guidelines (March 2, 2017). The Customs (Kastam) website does not provide details about how amounts should be displayed.

## Column Detail

The following details explain how amounts are calculated, based on user and accountant feedback:

### Input Tax

| Types of Acquisition | Value of Acquisition Excluding GST (RM) | Input Tax 6% (Claimable) | Input Tax 6% (Non-Claimable) |
|------------------------|------------------------------------------|----------------------------|-------------------------------|
| 1. Normal Purchase – to make standard rated supply | TX Amount | TX TaxAmount | NIL |
| Normal Purchase – to make Exempt supply | TXRE + EP Amount | TXRE + EP TaxAmount | TXRE with DocType _B |
| Normal Purchase – to make incidental Exempt Supply (Reg. 43 & 44A) | TXIES Amount | TXIES TaxAmount | TXIES with DocType _A |
