---
sidebar_position: 16
id: import-export-guide
title: Import Export Guide
description: A quick guide on Import and Export for SQL Account
slug: /miscellaneous/import-export-guide
tags: ["SQL Account", "Export", "Import"]
---

<!-- # Topic : Export and Import Module -->

## Download path

1. [Export Utility](http://www.sql.com.my/utility/SQLAccExportV4-setup.exe)

2. [Import Utility](http://www.sql.com.my/utility/SQLAccImportV4-setup.exe)

   User Name & Password = **`sqlutility`**

   After download, please install accordingly.

## Step 1 : Export Module

   1. Logon to the company which you want to export out the data.(Make sure logon only 1 database.)

   2. Launch SQL Export Module.

      ![1](/img/miscellaneous/import-export-guide/1.png)

      1. Click on Fast Export

      2. Tick Date

      3. Select the Date Period.

      4. Click Change

      5. Click on Export | Select the Place you want to export out | Enter the Export File name | Press Save | Exporting the Data

      6.

      ![2](/img/miscellaneous/import-export-guide/2.png)

      Done

## Step 2 : Import Module

   1. Logon to the database you want to import the data.(Make sure logon 1 Database only)

   2.

   ![3](/img/miscellaneous/import-export-guide/3.png)

      1. Click on the Folder | Select the Export File you have export just now(Refer Step 1.2.5)

      2. Tick at the area to import.

      Import Seq :

         1. Tick all the Maintenance Item First.
      3. Click Verify Button | Once pop message : Verify Done | Press OK
      4. Click On Import Button | Once Pop Message : Import Done | Press Ok

      Import Sequence :
         1. Sales DN

            Cash Sales

            Sales IV

            Sales DO

            Sales SO

            Sales QT

            Sales CN \*Same as Purchase Side

            :::note
            Import DO and Import IV will cause stock deduct twice. Same to Purchase GRN and Purchase IV will added 2 times.
            :::
            Customer IV

            Customer DN

         2. Customer Payment

            Customer CN

            Customer Refund

            Customer Contra & Supplier Contra

         3. GL Official Receipt

:::note

1. If duplicate transaction, you may choose to replace, below is the step to replace the transaction:

   ![4](/img/miscellaneous/import-export-guide/4.png)

   1. Press Verify Button

   2. Click on first transaction, press the shift key, click on last item

   3. Click on the arrow down beside Action | Select Replace |

   4. Press Import Button

2. Error : Invalid Callee
   Solution : Logon to the database | Tools | Option | Press Register | Done | Exit SQL and Logon again.
3. Error : Field currency rate
   Reason : Due to replace the IV, and this document already been knockoff.
4. Error : Attempt to import EX15 failed
   Error : Access violation at address 0043B65F in module 'Import.exe'. Read of address 0000000
   Reason : Please check have any DIY Field for the export account book, make sure import account book
   have same Field.
5. Error : The server threw an Exception :
   Solution : This is due to open wrong version of SQL. V3 must use v3 import and Export. V4 must use V
   Import and Export.

   - Export Maintain Tax with error : MainDataset : Type Mismatch for field Is Active, expecting String Actual Smallnt.

:::
