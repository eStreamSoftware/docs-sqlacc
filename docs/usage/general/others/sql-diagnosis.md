---
sidebar_position: 11
title: SQL Diagnosis
description: A guide about SQL Diagnosis
slug: /usage/general/others/sql-diagnosis
tags: ["SQL Account", "Others", "SQL Diagnosis"]
---

## Introduction

SQL Diagnosis is an external utility for fixing and managing SQL Firebird Databases. It provides essential tools for database maintenance, repair, and optimization.

![diagnosis-intro](../../../../static/img/usage/general/others/sql-diagnosis/diagnosis-intro.jpg)

## Software Download

1. [sql-diagnosis-v2](https://download.sql.com.my/customer/Fairy/SQLDiagnosisV2-setup.exe)

## System Requirements

- Firebird Server (required for both networked and standalone installations)

## Database Patch

1. A min console use to manipulate the data including edit, delete and append data.
2. There are 2 type of patch
    - Patch From Estream
    - Build In Patch

### Applying Database Patches

1. Click **Database Patch** button (**Icon A**).
2. Click This button to **select the SQL Firebird Database.**

    ![patch-step](../../../../static/img/usage/general/others/sql-diagnosis/patch-step.jpg)

### Scenario 1 : Patch From Estream (Continue Database Patch Steps)

1. Right-click in the area below Step 2
2. Select **Load From File 1...**

    ![patch-scenario1-1](../../../../static/img/usage/general/others/sql-diagnosis/patch-scenario1-1.jpg)

3. Look for patch file (Norm begin with Patch-XXXX.sql2)
4. Click **Open** button.

    ![patch-scenario1-2](../../../../static/img/usage/general/others/sql-diagnosis/patch-scenario1-2.jpg)

5. Click **Execute...** button (In Step 3 Section).

    ![patch-scenario1-3](../../../../static/img/usage/general/others/sql-diagnosis/patch-scenario1-3.gif)

### Scenario 2 : Build In Patch (Continue Database Patch Steps)

1. Click the **Arrow** down button near the **Execute...** button.
2. Select the Patch from the available list.
3. Click **Execute...** button (In **Steps 3** Section).

### Available Patch Types and Descriptions

| Patch File Type | Description |
|------------------|-------------|
| **AR/AP Copy Paste Error** | - Updates Customer or Supplier Code based on the code provided by the user. <br/> - Sets the invalid transaction code to the provided Customer or Supplier code. <br/> - After patching, go to the respective document number, Maintain Customer & Maintain Supplier to delete it or use CN to contra it. |
| **Change → Cash To Bank Type** | - Changes Account Type from Cash to Bank type. <br/> - Ensure the Account Code is changed to **CH2BA** before running this patch. |
| **Change → Agent Code** | Changes all transactions from Agent Code A to Agent Code B. |
| **Change → Area Code** | Changes all transactions from Area Code A to Area Code B. |
| **Reset Grid Layout** | Resets all grid layouts to default. |
| **YED QT & PQ Purge** | Batch deletes Sales Quotation and Purchase Request records. |
| **Add Browse/Detail Form Mode** | Adds Form Mode (like SQL Accounting Version 775 and below) for SQL Accounting 776 and above. |
| **Update → Non Stock Control to Fixed Cost** | Sets all Non-Stock Control items to Fixed Cost. |
| **Update → Generators** | Updates all generators for SQL Accounting. |
| **Update → GL Account Special A/c Type Null to Empty** | Sets “Maintain Account Special Account Type” field from **Null** to **Empty**. |
| **Update → Batch Null to Empty** | Sets all Batch fields from **Null** to **Empty**. |
| **Update → Trim Empty Space - Payroll** | Removes empty spaces from all fields due to import. |
| **Remove → Invalid Payment Method** | Deletes invalid records in Maintain Payment Method. |
| **Remove → Non-Stock Control Opening Balance** | Deletes all Non-Stock Control Opening Balance records. |
| **Remove → All Customer** | Deletes all Maintain Customer records. |
| **Remove → All Supplier** | Deletes all Maintain Supplier records. |
| **Remove → All Stock Item** | Deletes all Maintain Item records. |
| **Remove → All Other Stock Maintenance** | Deletes all other Stock Maintenance data, including: <br/> - Stock Group <br/> - Stock Location <br/> - Stock Price Tag <br/> - Stock Batch <br/> - Stock Category |
| **Remove → Default Currency Code** | Deletes the Default Currency. |
| **Remove → Invalid Credit Note** | Removes redundant AR/AP Credit Note Detail records in GL Ledger. |
| **Remove → Duplicate GL Stock Value** | Removes duplicate (double) amounts shown in GL Maintain Stock Value. |
| **Remove → Invalid GST Transactions** | Removes "ghost" transactions in GST Listing (`GST_TR`). |
| **Remove → Inactive Users** | Removes all users where *Active* = False. |
| **Remove → Invalid Stock Category** | Removes invalid Stock Category codes set in Maintain Item (usually due to import). |

## Database Validate

The Database Validate function helps repair and maintain the integrity of your database. It is especially useful when you encounter database corruption or errors that prevent normal operations. By validating the database, you can identify and fix issues to ensure smooth performance and reliability.

### Database Validate Steps

1. **Stop** the **Firebird Service.**
2. **Copy** the database & **Paste** to Desktop or any folder you wanted.
3. **Start** the **Firebird Service.**
4. Click **Database Validate** button (Icon B).

    ![validate-step](../../../../static/img/usage/general/others/sql-diagnosis/validate-step.jpg)

5. Click the button to select your **copied** SQL Firebird Database
6. Click the **Validate** button

    :::info
    You can Click few times **Validate** button to make sure it can maximise the database fixing
    :::

7. Click the **Backup...** button to access these options:

    - **Backup Metadata...**: Extracts an empty database structure for use with IB Pump when creating a new database
    - **SQL DB Copy Table...**: Opens the Database Pump utility for copying data to a new database
    - **Direct Zip...**: Creates a compressed file for uploading to Estream support if issues persist

### Backup MetaData

Use this option when normal backup is fail.

1. Click the arrow down button at **Backup...** button.
2. Select **Backup MetaData....**

    ![validate-backup-metadata-1](../../../../static/img/usage/general/others/sql-diagnosis/validate-backup-metadata-1.jpg)

3. Click **Start Copy** to begin copying.

    - **Start Copy...**: Uses a single connection to copy tables to the new database.
    - **Start Multi Copy...**:
        - Uses two connections simultaneously to copy tables to the new database.
        - Connection 1: AUDIT, AUDITDTL, GST_TR, ST_TR
        - Connection 2: All other tables

:::warning
Using **Start Multi Copy...** may cause the following issues:

- The application UI may become scrambled
- You may encounter out-of-memory errors
- You may see Access Violations when closing windows or exiting the application

If this occurs, restart SQL Diagnosis.
Refer to the image below after completing a copy using **Start Multi Copy...**
:::

    ![validate-backup-metadata-2](../../../../static/img/usage/general/others/sql-diagnosis/validate-backup-metadata-2.jpg)

4. Click **OK** when you see the "Done" message.
5. Click **Close**.
6. Click the **Backup...** button.

:::info
Want to import specific tables only?
Remove any tables you do not want to import from the list before starting.
:::

:::warning
Be careful if you just wanted to Import Specific table Only as might cause more error.
:::

## Adhoc Backup

Adhoc Backup allows you to manually create a backup of your SQL Firebird database at any time. This feature is useful for safeguarding your data before performing major changes, troubleshooting, or simply as part of your regular backup routine. Backups can be saved to your preferred location for easy restoration if needed.

### Adhoc Backup Steps

1. Click **Adhoc Backup** button (Icon C).
2. Click the button to select the SQL Firebird database.
3. Click the **Backup** button.

    ![adhoc-backup-step1](../../../../static/img/usage/general/others/sql-diagnosis/adhoc-backup-step1.jpg)

4. Choose the backup folder (default: Desktop).
5. Click **OK** to start the backup.

    ![adhoc-backup-step2](../../../../static/img/usage/general/others/sql-diagnosis/adhoc-backup-step2.jpg)

## Database Online

The Database Online function is designed to bring your database back online when it has been shut down due to errors or maintenance. If you encounter a **"Database Shutdown"** message, this feature helps you quickly restore access and resume normal operations without extensive troubleshooting.

### Database Online Steps

1. Restart the Firebird service.
2. Click the **Database Online** button (Icon D).
3. Click the button to select the SQL Firebird database.

![database-online-step](../../../../static/img/usage/general/others/sql-diagnosis/database-online-step.jpg)

## Batch Backup

Batch Backup allows you to back up multiple databases at once or via a scheduled task. This is useful when managing several databases that require regular backups.

1. Click the **Batch Backup...** button (Icon E).
2. Click **New**.
3. Enter the server name or IP address.

    ![batch-backup-step-1](../../../../static/img/usage/general/others/sql-diagnosis/batch-backup-step-1.jpg)

4. Click the three-dot button for the **Target Backup Folder** field and choose a folder, then click **OK**.

    ![batch-backup-step-2](../../../../static/img/usage/general/others/sql-diagnosis/batch-backup-step-2.jpg)

5. Select the folder where you wanted to backup to & click OK
6. Click on 3 dot button for Database File field

    ![batch-backup-step-3](../../../../static/img/usage/general/others/sql-diagnosis/batch-backup-step-3.jpg)

7. Select the SQL Accounting/Payroll Database & Click Open
8. Click Save Button.
9. Repeat Step 2 to 8 for additional database

| Field               | Description                                                   |
|---------------------|---------------------------------------------------------------|
| Check Box           | Tick = Backup & UnTick = Not Backup                           |
| Seq                 | System Auto run record number sequence                        |
| Server IP or Name   | Server Name/IP Address                                        |
| Target Backup Folder| A folder path where the database is backup to                 |
| Database File       | SQL Accounting/Payroll Firebird Database                      |
| Remark              | System Auto Shown the selected Database Company Name & Remark |
| Status              | Last Backup Status                                            |
| Date Time           | Last Backup Date & Time                                       |

### Schedule Backup

Using Windows Schedule to Automatically run Batch Backup.

1. Open Windows **Control Panel | Administrative Tools | Task Scheduler**

    ![schedule-backup-1](../../../../static/img/usage/general/others/sql-diagnosis/schedule-backup-1.jpg)

2. Click Action | Create Basic Task...

    ![schedule-backup-2](../../../../static/img/usage/general/others/sql-diagnosis/schedule-backup-2.jpg)

3. Enter Task Name (eg SQL Backup) & Click Next

    ![schedule-backup-3](../../../../static/img/usage/general/others/sql-diagnosis/schedule-backup-3.jpg)

4. Select Daily & Click Next

    ![schedule-backup-4](../../../../static/img/usage/general/others/sql-diagnosis/schedule-backup-4.jpg)

5. Set the Start Date & Time to Start
6. Set 1 for Recur every field & Click Next

    ![schedule-backup-5](../../../../static/img/usage/general/others/sql-diagnosis/schedule-backup-5.jpg)

7. Select Start a program & Click Next

    ![schedule-backup-6](../../../../static/img/usage/general/others/sql-diagnosis/schedule-backup-6.jpg)

### For Build 32 & above (Following Steps)

1. Click **Browse** and locate **SQLDiagnosisV2.exe** (default: `C:\eStream\Utilities\SQLDiagnosis`).
2. Set the **Add arguments (optional)** field to **-Auto**.

### For Build till 31 (Following Steps)

1. Click **Browse** and locate **SQLScheduleV2.exe** (e.g., `C:\eStream\Utilities\SQLDiagnosis\SQLScheduleV2.exe`).
2. Set **Start in (optional)** to the exe folder (e.g., `C:\eStream\Utilities\SQLDiagnosis`) and click **Next**.
3. Tick **Open the Properties dialog for this task when I click Finish**.
4. Click **Finish**.

    ![backup-for-build31-step1](../../../../static/img/usage/general/others/sql-diagnosis/backup-for-build31-step1.jpg)

5. Select **Run whether user is logged on or not**.

    ![backup-for-build31-step2](../../../../static/img/usage/general/others/sql-diagnosis/backup-for-build31-step2.jpg)

6. Go to the **Triggers** tab and click **Edit...** to change the trigger time.

    ![backup-for-build31-step3](../../../../static/img/usage/general/others/sql-diagnosis/backup-for-build31-step3.jpg)

7. Change the scheduled time as required.

    ![backup-for-build31-step4](../../../../static/img/usage/general/others/sql-diagnosis/backup-for-build31-step4.jpg)

8. Click **OK** twice.
9. Enter the Windows user name and password when prompted, then click **OK**.

:::info
Commands you can use in scheduled tasks to stop and start Firebird:

- Stop Firebird: `C:\WINDOWS\SYSTEM32\NET.EXE` stop "Firebird Server - DefaultInstance"
- Start Firebird: `C:\WINDOWS\SYSTEM32\NET.EXE` start "Firebird Server - DefaultInstance"

:::

## History New/Updates/Changes

### --Build 32--

- Mini Console - Add Get Generator List Function.
- Fix still unable to backup FDB if no SY_Profile table.
- Mini Console - Add Get Table Records Count Function.
- Change Schedule Backup using command instead exe.
- Enable support restore without zip.
- Remove Verbose on Schedule Backup.
- Update High Resolution Icon.
- Add "Non System Document Number Set..." Patch.

### --Build 31--

- Add New Application Window function.
- Add Sweep Database in Validate function.
- Add Trim Empty Space - Payroll function in DB Patch.
- Update Copy Paste Error function to allow user enter Valid Company Code.
- Fix Memo not scroll down when remove temp table.
- Add Remove InValid Stock Category... Patch
- Fix unable to backup FDB if no SY_Profile table.

### --Build 30--

- Add Option Use Full name for batch backup.
- Enable support FB3.0.2.

### --Build 29--

- Add Update Generator to DB Patch function.
- Add Update Non Stock Control to Fixed Cost...to DB Patch function.
- Add Remove InActive User to DB Patch function.
- Add Change Agent & Area code to DB Patch function.
- Add Update GL Account Special A/c Type Null to Empty to DB Patch function.
- Add Update Batch Null to Empty to DB Patch function.

### --Build 28--

- Upgrade to Version 2.8.
- Change New Icon.
- Fix InValid GST Transactions not working.
- Add Update Generators... Patch.

### --Build 27--

- Fix patch Error string literal with 19890 characters exceeds the maximum length of 16383 characters for the utf8 character set.
- Add Multi Copy function for SQL DB Copy Table...

### --Build 26--

- Add YED QT && PQ Purge...
- Add InValid GST Transations.

### --Build 25--

- Upgrade to Version 2.7.
- Remove -l -g -ig from Schedule & Batch Backup.
- Replace IB Pump with SQL DB Copy Table...function.

### --Build 24--

- Add Remark for Batch Backup filename.
- Add Load From File 2 for DB Patch function.

### --Build 23--

- Upgrade to Version 2.6.
- Fixed DB Patch will auto remove & in the script.
- Fixed Load Build-In Patch Error in some pc.
- Add Remove Duplicate GL Stock Value Patch.
- Enable Proper Installation.

### --Build 22--

- Internal release.

### --Build 21--

- Upgrade to Version 2.5.
- Fix unable open fdb in LocalHost.
- Add Batch Backup.
- Add Schedule Backup.
- Fix AR/AP Copy Paste Patch not working in some situation.
- Fix still unable to backup in some situation.
- Fix Backup Metadata setting not correct for FB3.0 unicode
- Add Firebird Version label for Patch, Validate & Adhoc Backup.

### --Build 20--

- Fix Application Name Error.
- Add DB Online function.
- Add Remove InValid CN Patch.

### --Build 19--

- Fix unable to backup.
- Add Load From File... for DB Patch...

### --Build 18--

- Upgrade to Version 2.4.
- Enable Support Firebird 3.0.
- Enhance Validate to support IBPump.
- Find Tune SQL Patch for New Patch Generator.
- Add Remove Maintain Customer, Supplier, Stock Item & Other Stock Maintenance.
- Add AR/AP Copy Paste Error Patch.
- Add Change Cash To Bank Type Patch.
- Add Reset Grid Layout Patch.
- Add Delete Default Currency Patch.
