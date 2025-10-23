---
id: validate-db
title: How to validate database with SQL Diagnosis Utility
description: A guide to validate database using SQL Diagnosis Utility for SQL Account
slug: /troubleshooting/validate-database-using-diagnosis-utility
tags: ["SQL Account", "Troubleshooting"]
---
## Steps & Instruction

:::note
Download & Install SQL Accounting Diagnosis from [**This Link**](http://www.sql.com.my/utility/SQLAccDiagnosis-setup.exe)

User & password to access to above link = sqlutility
:::

1. Find below icon on your desktop after installing SQL Accounting Diagnosis

   ![sql-diag-icon](../../static/img/troubleshooting/validate-db/sql-diag-icon.png)

2. Choose Firebird 2.5 and click on **Database Validate**

   ![database-validate-1](../../static/img/troubleshooting/validate-db/database-validate-1.png)

3. Click on the yellow color folder to select your database

   ![database-validate-2](../../static/img/troubleshooting/validate-db/database-validate-2.png)

4. Select your database

   1. Go to your DB Folder (refer to step **5 vi** on how to check where your DB Folder is located)

   2. Select your FDB (refer to step **5 ii** on how to check which FDB you should select)

   3. Click on Open

   ![select-database](../../static/img/troubleshooting/validate-db/select-database.png)

5. Go to SQL Financial Accounting

   1. Click on the ⚙️ button in the logon screen

      ![5](../../static/img/getting-started/database/backup-restore/7.png)

   2. Check your ACC-XXXX.FDB

      ![check-fdb](../../static/img/troubleshooting/validate-db/check-fdb.png)

   3. Click on back to the database group

   4. Right-click on the Firebird group

   5. Go to properties

      ![grp-properties](../../static/img/troubleshooting/validate-db/grp-properties.png)

   6. Check on the DB Folder

      ![properties](../../static/img/troubleshooting/validate-db/properties.png)

6. After selecting your correct ACC-XXXX.FDB, click on **Validate** and make sure you get the message “**Database Validation Complete**” as shown on the right screen. Then, click **ok**.

   ![validation-complete](../../static/img/troubleshooting/validate-db/validation-complete.png)

   :::info
   If you don’t get “Database validation complete” and get an error “bad parameter,” please contact the helpdesk to fix this database.
   :::

7. Click on Backup if you get “database validation complete” > select **Desktop** > Click on **OK** > Click **ok** for Backup Successful.

   ![backup](../../static/img/troubleshooting/validate-db/backup.png)

8. Restore database

   1. Restore your database as usual > Click on the ⚙️ button

      ![11](../../static/img/getting-started/database/backup-restore/7.png)

   2. Click on Restore

      ![restore-1](../../static/img/troubleshooting/validate-db/restore-1.png)

   3. Click on the 3 dot button

      ![restore-2](../../static/img/troubleshooting/validate-db/restore-2.png)

   4. Select the backup file on the desktop > Open > Click on **OK** > Click on **OK**

      ![restore-3](../../static/img/troubleshooting/validate-db/restore-3.png)

      ![restore-4](../../static/img/troubleshooting/validate-db/restore-4.png)

   5. Click on **OK**

      ![restore-5](../../static/img/troubleshooting/validate-db/restore-5.png)

9. After the restore, you will see two databases with the same name. On the left side, ACC-0160.FDB is the old (refer to step **5 ii**). And on the right side, ACC-0161.FDB is the new file you restored (refer to step **8 iv**).

   For the old database, you can right-click on it either to drop the link or delete the database:

   - **Drop link**: Temporary hide, in the future you can click “Find Database” in the left panel to call it back.

   - **Delete Database**: Permanently delete, no way to call it back.

   ![delete-old-database](../../static/img/troubleshooting/validate-db/delete-old-database.png)
