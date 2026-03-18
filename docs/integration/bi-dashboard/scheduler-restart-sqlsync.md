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

### Step 1 – Create Windows Task Scheduler

1. Open **Task Scheduler** > Click **Create Basic Task...**

   ![create-basic-task](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/1.jpg)

2. Enter a name for the task (e.g. **Restart Sqlsync**) > **Next**

   ![enter-task-name](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/2.jpg)

3. Select **Daily** > **Next**

   ![select-daily](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/3.jpg)

4. Set start time based on your preference (e.g. **5:00:00 AM**) > **Next**

   ![set-start-time](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/4.jpg)

5. Select **Start a program** > **Next**

   ![select-start-a-program](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/5.jpg)

6. At **Program/script** field, paste the following command > **Next**

   ```
   cmd /c "(net stop Sqlsync || ver > nul) && timeout /t 10 /nobreak && net start Sqlsync"
   ```

   ![enter-command](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/6.jpg)

7. Click **Yes** when prompted with "it appears as though arguments have been included"

   ![confirm-arguments](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/7.jpg)

8. Check **Open the Properties dialog for this task when I click Finish** > **Finish**

   ![summary-and-finish](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/8.jpg)

9. Select **Run whether user is logged on or not** and **Run with highest privileges** > **OK**

   ![run-with-highest-privileges](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/9.jpg)

10. Enter Windows administrator **User name** and **Password** > **OK**

    ![enter-credentials](../../../static/img/integration/bi-dashboard/scheduler-restart-sqlsync/10.jpg)
