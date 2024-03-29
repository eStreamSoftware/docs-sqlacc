---
sidebar_position: 9
id: myob-migrate
title: MYOB Migration - Master File
description: A guide to migrate MYOB to SQL
slug: /getting-started/myob-migration-master-file
tags: ["SQL Account", "Getting Started", "MYOB"]
---

## Instruction

1. Place the MYOB Backup file to Desktop. For example: C:\Users\SQL\Desktop\MYOB.

2. Download 7-Zip to extract the MYOB Backup file. (Only if you don’t have).

   Use the following links based on your Windows version

   [Window 32 Bits](http://www.sql.com.my/utility/7-zip.msi)

   [Window 64 Bits](http://www.sql.com.my/utility/7-zip-x64.msi)

   **Make sure install the right one to prevent unable Extract by 7 Zip.**

3. Refer Image below on How to Extract MYOB Backup file.

   ![1](../../static/img/getting-started/myob-migrate/1.png)

4. **Create New Database** then **Log On** New Company with ADMIN User

   ![2](../../static/img/getting-started/myob-migrate/2.png)

5. Once Log On, Go to **File** | **Data Import** | Select **MYOB**.

   ![3](../../static/img/getting-started/myob-migrate/3.png)

6. Follow Step 1 in image below : Click the ‘Download’ button to download the needed tool for MYOB migrate.

   Then place the ‘myData CLI’ to C:\Users\SQL\Desktop\MYOB.

   ![4](../../static/img/getting-started/myob-migrate/4.png)

7. Follow Step 2 of the Image below, Click ‘Select File’ button then look into

   C:\Users\SQL\Desktop\MYOB to select ‘mydatacli.zip’.

   ![5](../../static/img/getting-started/myob-migrate/5.png)

8. Follow Step 3 of the Image below, Click ‘Select File’ button then look into

   C:\Users\SQL\Desktop\MYOB\ **TEST_20160908**\DATAFILES\MYOB DATA CD\MYOB Data Backup to select ‘**Test 2015-2016v161.MYO**’ a MYO File Type.

   :::note

   Those highlighted in **BOLD** is based on own Company Name of MYOB Backup.

   :::

   ![6](../../static/img/getting-started/myob-migrate/6.png)

9. Follow step below to start Import.

   ![7](../../static/img/getting-started/myob-migrate/7.png)

10. Few Important settings MUST do before continue Import.

      1. In this window

         1. Read the Information then click ‘OK’ to close it.

         2. Close the Data Import.

            ![8](../../static/img/getting-started/myob-migrate/8.png)

      2. Go to GL /Maintain Account, verify the Imported Chart of Account & set the necessary Special Type.

         Especially for Trade Debtor, Trade Creditor, Bank/Cash Account, Stock & etc.

         ![9](../../static/img/getting-started/myob-migrate/9.png)

      3. Go to Tools /Options /General Ledger, to setup for :

         -Financial Start Period

         -System Conversion Date

         -Default Account

         ![10](../../static/img/getting-started/myob-migrate/10.png)

      4. Next

         1. Still in ‘Options’ tab select ‘Customer’ then fill in the Customer Control Account.

         2. Vice Versa for Supplier Control Account setting.

            ![11](../../static/img/getting-started/myob-migrate/11.png)

11. Once DONE settings, Repeat Step 5, 7 & 8 to continue import.

      ![12](../../static/img/getting-started/myob-migrate/12.png)

   :::info

   Kindly check **ALL** the Imported Master File from MYOB to SQL system before proceed to use it.

   :::
