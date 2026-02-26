---
sidebar_position: 4
id: complete-uninstall
title: Complete Uninstall
description: SQL BI Dashboard Complete Uninstall
slug: /integration/bi-dashboard/complete-uninstall
tags: ["BI Dashboard", "Complete Uninstall"]
---

## Setup

### Step 1 – Stop The Service

1. Control Panel > Administrative Tools > Select **Services** > Right click > **Run as administrator**

   ![services-run-as-administrator](../../../static/img/integration/bi-dashboard/complete-uninstall/1.png)

2. Select **Sqlsync** > Right click > **Stop**

   ![select-sqlsync-right-click-stop](../../../static/img/integration/bi-dashboard/complete-uninstall/2.png)

### Step 2 – Remove Sqlsync From Services

1. Search **Command Prompt** > **Run as administrator**

   ![command-prompt-run-as-administrator](../../../static/img/integration/bi-dashboard/complete-uninstall/3.png)

2. In the command line type `cd C:/Sqlsync` > Hit Enter

   ![cd-c-sqlsync](../../../static/img/integration/bi-dashboard/complete-uninstall/4.png)

3. In the command line type `nssm remove Sqlsync` > Hit Enter

   ![nssm-remove-sqlsync](../../../static/img/integration/bi-dashboard/complete-uninstall/5.png)

4. Click **Yes** to remove the service

   ![nssm-yes-dialog](../../../static/img/integration/bi-dashboard/complete-uninstall/6.png)

5. In the command line type `exit` > Hit Enter

   ![exit-command](../../../static/img/integration/bi-dashboard/complete-uninstall/7.png)

### Step 3 – Uninstall Sqlsync From The Computer

1. Navigate to `C:\SQLSync` > select `unins000.exe` > right click > **Run as administrator**

   ![unins000-exe-run-as-administrator](../../../static/img/integration/bi-dashboard/complete-uninstall/8.png)

2. Restart the computer

3. Navigate to `C:\` > Select **Sqlsync** folder > **Delete**

   ![delete-sqlsync-folder](../../../static/img/integration/bi-dashboard/complete-uninstall/9.png)
