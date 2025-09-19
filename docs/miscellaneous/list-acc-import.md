---
sidebar_position: 16
id: import-list
title: List of Accounting can be import to SQL Accounting
description: List of Accounting can be import to SQL Accounting 
slug: /miscellaneous/list-acc-import
tags: ["SQL Account", "Export", "Import"]
---

| Product | File Type | File/Table Name | File Type Extension | Master File 90% Accurate | Opening Balance 70%-80% Accurate | Current Transactions 70%~80% Accurate |
|---------|----------|-----------------|---------------------|--------------------------|-----------------------------------|----------------------------------------|
| Autocount Enterprise 2005 | MSSQL | AutoCount Backup | A06 | Y | Y | Y (Except Sales & Purchase Outstanding) |
| UBS Accounting | Foxpro | UBS Backup | ACC | Y | Y | N |
| UBS Stock | Foxpro | UBS Backup | STK | Y | Y | N |
| QnE | Firebird | <details><summary>Tables</summary>Creditor<br/>CreditorArea<br/>CreditorCategory<br/>Currency<br/>Debtor<br/>DebtorArea<br/>DebtorCategory<br/>GLACCOUNT (WHERE SPECIALACCOUNTCODE NOT IN ('AP','AR'))<br/>Stock<br/>StockCategory<br/>StockGroup<br/>StockLocation<br/>Term</details> | GDB<br/>QZB<br/>QIB | Y (Except GL Maintain Account) | N | N |
| QnE (MSSQL) | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>GLAccounts WHERE SPECIALACCOUNTID NOT IN (14,15) OR SPECIALACCOUNTID IS NULL<br/>Debtors<br/>Creditors<br/>stocks<br/>StockCategory<br/>StockGroup<br/>StockLocation<br/>Term</details> | BAK | Y (Except GL Maintain Account) | N | N |
| Mr Accounting (MSSQL) | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>Currency_Setting<br/>Customer<br/>Salesman<br/>StockMasterDetails<br/>SupplierDetail</details> | BAK | Y (Except GL Maintain Account) | N | N |
| 3A Accounting (Windows) | MS Access | Crdat.mdb<br/>DbDat.mdb<br/>Stdat.mdb | MDB | Y (Except GL Maintain Account) | N | N |
| Emas | Foxpro | Emas Backup | EMS | Y* | Y | N |
| Emas (MYSQL) | MYSQL | <details><summary>Tables</summary>MySQL Backup in .sql & zip<br/>YYYYMMDD_ACCxxxxx.sql<br/>apvend<br/>arcust<br/>currency<br/>glarea<br/>glagent<br/>icgroup<br/>icitem</details> | sql | Y (Except GL Maintain Account & Stock) | N | N |
| Smart Accounting |  | AcStk.DB<br/>AcCard.DB<br/>(Use Office XP to Open) | DB | Y (Except GL Maintain Account) | N | N |
| Smart Accounting (MSSQL) | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>AcAcc<br/>AcStk<br/>AcCard</details> | BAK | Y (Except GL Maintain Account) | N | N |
| AccSys Business Information System | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>Company<br/>Product</details> | BAK | Y (Except GL Maintain Account) | N | N |
| Million Business Software | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>Currency<br/>Customer<br/>gldata (WHERE classify NOT IN ('DR','CR'))<br/>Product<br/>Prodgrp<br/>Project<br/>Supplier</details> | BAK | Y (Except GL Maintain Account) | Y | N |
| ICS Accounting | MS Access | Cred6000<br/>Debt6000<br/>Mast4000 | ENVI1000.MDB | Y (Except GL Maintain Account) | N | N |
| APlus | DBase | agent.dbf<br/>area.dbf<br/>currency.dbf<br/>customer.dbf<br/>vendor.dbf<br/>stock.dbf | DBF | Y (Except GL Maintain Account) | N | N |
| APlus (MSSQL) | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>currency<br/>customer<br/>prodgrp<br/>product<br/>supplier</details> | BAK | Y (Except GL Maintain Account) | N | N |
| MYOB | MYO | addr.csv<br/>cards.csv<br/>chacc.csv<br/>items.csv<br/>terms.csv<br/>(CSV files generated using myData CLI tool) | MYO | Y | N | N |
| Master Accounting | MYSQL | <details><summary>Tables</summary>MySQL Backup in .sql & zip<br/>accbook WHERE REFTYPE1 NOT IN ('DEBTOR','CREDITOR')<br/>Creditor<br/>currency<br/>Debtor<br/>Stock<br/>stockcategory<br/>StockGroup<br/>term</details> | BAK | Y (Except GL Maintain Account) | N | N |
| ESoft Accounting | MYSQL | <details><summary>Tables</summary>MySQL Backup in .sql & zip<br/>xxxxx.apvend.sql<br/>xxxxx.arcust.sql</details> | sql | Y (Except GL Maintain Account & Stock) | N | N |
| iFAS Accounting | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>AP_VENDOR_MASTER<br/>AR_CUSTOMER_MASTER<br/>AREA_MASTER<br/>CURR<br/>INV_CATEGORY_MASTER<br/>INV_GROUP<br/>INV_ITEM_MASTER<br/>INV_LOCATION_MASTER</details> | BAK | Y (Except GL Maintain Account) | N | N |
| Remicle | PostgreSQL | Remicle PostgreSQL database dump backup in .sql & zip<br/>product_product<br/>res_partner | sql | Y (Except GL Maintain Account) | N | N |
| GreenPlus Accounting | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>AREA_TBL<br/>BATCH<br/>BRAND<br/>CATEGORY<br/>CHARTACCOUNT_TBL<br/>CUSTOMER$<br/>FOREX<br/>GLMAST$<br/>LOCATION<br/>MASTERSALESMAN_TBL<br/>SALESMAN_TBL<br/>STOCK_BOM<br/>STOCK<br/>SUPPLIER$<br/>SUPPLIER</details> | BAK | Y (Except GL Maintain Account) | N | N |
| Kusimi | MYSQL | <details><summary>Tables</summary>MySQL Backup in .sql & zip<br/>xxYYYY_YYYYMMDDyyyy.sql<br/>creditor<br/>currency<br/>debtor</details> | sql | Y (Except GL Maintain Account & Stock) | N | N |
| MHW Financial Accounting | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>Account<br/>CustomerSupplier<br/>WHERE CustomerSupplierTypeId IN ( SELECT CustomerSupplierTypeId FROM CustomerSupplierType WHERE ISCUSTOMERTYPE='TRUE') CustomerSupplier<br/>WHERE CustomerSupplierTypeId IN ( SELECT CustomerSupplierTypeId FROM CustomerSupplierType WHERE ISCUSTOMERTYPE='FALSE')</details> | BAK | Y (Except GL Maintain Account) | N | N |
| BBS Accounting | MSSQL | <details><summary>Tables</summary>MSSQL Backup<br/>MSTCUSTOMER<br/>MSTITEM<br/>MSTSUPPLIER</details> | BAK | Y (Except GL Maintain Account) | N | N |

:::info
* EMAS Chart of Account - will only assign bank account special type if detected. The rest of accounts need customer re-check.
:::

Highlighted with background mean direct import to SQL Database else will export to Excel or CSV file