---
sidebar_position: 5
id: scheduler-restart-sqlsync
title: Schedule Restart Sqlsync
description: Schedule daily restart of SQL BI Dashboard Sync Tool service
slug: /integration/bi-dashboard/scheduler-restart-sqlsync
tags: ["BI Dashboard", "Schedule Restart Sqlsync"]
---

:::info
This is recommended for users whose PC is turned on 24 hours.
:::

## Prerequisites

- Completed [On-Premise Setup](./on-premise-setup)

## Setup

### Step 1 – Download RestartSqlsync Batch File

1. Download [RestartSqlsync.bat](https://drive.google.com/file/d/1v2V8nUbmCHk6Cpks4P32Zz1JVU2n4zip/view?usp=sharing)

### Step 2 – Place Batch File in SqlSync Folder

1. Copy and paste `RestartSqlsync.bat` to the SqlSync installation folder

   :::info
   The default SqlSync installation folder is `C:\SQLSync`
   :::

   ![place-batch-file-in-sqlsync-folder](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/1.jpg)

### Step 3 – Create Windows Task Scheduler

1. Open **Task Scheduler** > Click **Create Basic Task...**

   ![create-basic-task](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/2.jpg)

2. Enter a name for the task (e.g. **Restart Sqlsync**) > **Next**

   ![enter-task-name](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/3.jpg)

3. Select **Daily** > **Next**

   ![select-daily](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/4.jpg)

4. Set start time based on your preference (e.g. **5:00:00 AM**) > **Next**

   ![set-start-time](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/5.jpg)

5. Select **Start a program** > **Next**

   ![select-start-a-program](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/6.jpg)

6. At **Program/script** field > **Browse** > Select the `RestartSqlsync.bat` file path > **Open** > **Next**

   ![select-batch-file-path](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/7.jpg)

7. Check **Open the Properties dialog for this task when I click Finish** > **Finish**

   ![summary-and-finish](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/8.jpg)

8. Select **Run whether user is logged on or not** and **Run with highest privileges** > **OK**

   ![run-with-highest-privileges](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/9.jpg)

9. Enter Windows administrator **User name** and **Password** > **OK**

   ![enter-credentials](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/10.jpg)
