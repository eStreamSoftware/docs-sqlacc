---
sidebar_position: 16
id: import-list
title: List of Accounting can be import to SQL Accounting
description: List of Accounting can be import to SQL Accounting 
slug: /miscellaneous/list-acc-import
tags: ["SQL Account", "Export", "Import"]
---


| Product | File Type | File/Table Name | File Extension | Master File (90%) | Opening Balance (70–80%) | Current Transactions (70–80%) | Remarks |
|----------|------------|------------------|----------------|-------------------|---------------------------|--------------------------------|----------|
| Autocount Enterprise 2005 | MSSQL | AutoCount Backup | A06 | Yes | Yes | Yes (Except Sales & Purchase Outstanding) |  |
| UBS Accounting | Foxpro | UBS Backup | ACC | Yes | Yes | No |  |
| UBS Stock | Foxpro | UBS Backup | STK | Yes | Yes | No |  |
| QnE | Firebird | Tables | GDB / QZB / QIB | Yes (Except GL Maintain Account) | No | No |  |
| QnE (MSSQL) | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| Mr Accounting (MSSQL) | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| 3A Accounting (Windows) | MS Access | Crdat.mdb / DbDat.mdb / Stdat.mdb | MDB | Yes (Except GL Maintain Account) | No | No |  |
| Emas | Foxpro | Emas Backup | EMS | Yes* | Yes | No |  |
| Emas (MySQL) | MySQL | Tables | sql | Yes (Except GL Maintain Account & Stock) | No | No |  |
| Smart Accounting | — | AcStk.DB / AcCard.DB (Use Office XP to Open) | DB | Yes (Except GL Maintain Account) | No | No |  |
| Smart Accounting (MSSQL) | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| AccSys Business Information System | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| Million Business Software | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | Yes | No |  |
| ICS Accounting | MS Access | Cred6000 / Debt6000 / Mast4000 / ENVI1000.MDB | MDB | Yes (Except GL Maintain Account) | No | No |  |
| APlus | DBase | agent.dbf / area.dbf / currency.dbf / customer.dbf / vendor.dbf / stock.dbf | DBF | Yes (Except GL Maintain Account) | No | No |  |
| APlus (MSSQL) | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| MYOB | MYO | addr.csv / cards.csv / chacc.csv / items.csv / terms.csv (CSV via myData CLI) | MYO | Yes | No | No |  |
| Master Accounting | MySQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| ESoft Accounting | MySQL | Tables | sql | Yes (Except GL Maintain Account & Stock) | No | No |  |
| iFAS Accounting | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| Remicle | PostgreSQL | PostgreSQL dump (.sql / .zip) — product_product, res_partner | sql | Yes (Except GL Maintain Account) | No | No |  |
| GreenPlus Accounting | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| Kusimi | MySQL | Tables | sql | Yes (Except GL Maintain Account & Stock) | No | No |  |
| MHW Financial Accounting | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |
| BBS Accounting | MSSQL | Tables | BAK | Yes (Except GL Maintain Account) | No | No |  |

*Yes* = Supported  
*No* = Not supported  
*Yes\** = Conditional support depending on data completeness

:::info

* EMAS Chart of Account - will only assign bank account special type if detected. The rest of accounts need customer re-check.

:::

Highlighted with background mean direct import to SQL Database else will export to Excel or CSV file
