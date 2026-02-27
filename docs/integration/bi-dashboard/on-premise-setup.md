---
sidebar_position: 1
id: on-premise-setup
title: On-Premise Setup
description: SQL BI Dashboard On-Premise Setup
slug: /integration/bi-dashboard/on-premise-setup
tags: ["BI Dashboard", "On-Premise Setup"]
---

## Prerequisites

- Install in `SQL Account` server PC
- Must have Firebird 3.0 or above (including standalone license)
- Windows 10 (64 bit) or above
- Have internet access

## Setup

:::note[SQL Connect Public Cloud Users]
If you are using **SQL Connect Public Cloud**, you may **skip Steps 1 to 3**. The installation and token insertion will be handled by our team.
:::

### Step 1 – Install SQL BI Dashboard Sync Tool

1. Download [Sqlsync tool](https://drive.google.com/file/d/1MeOmnmYXZg0-LCPcld1ZCoI_-h39REJN/view)

   :::warning
   If computer previously installed Sqlsync or Gobi sync, please proceed to [Complete Uninstall](./complete-uninstall).
   :::

   ![download-sqlsync-tool](../../../static/img/integration/bi-dashboard/on-premise-setup/1.png)

2. Select `sqlsync (64bits)-V3000.exe` > Right click > **Run as administrator**

   ![run-as-administrator](../../../static/img/integration/bi-dashboard/on-premise-setup/2.png)

3. Confirm the installation folder > **Next**

   ![confirm-installation-folder](../../../static/img/integration/bi-dashboard/on-premise-setup/3.png)

4. Click **Next**

   ![select-start-menu-folder](../../../static/img/integration/bi-dashboard/on-premise-setup/4.png)

5. Click **Install**

   ![ready-to-install](../../../static/img/integration/bi-dashboard/on-premise-setup/5.png)

6. Click **Finish**

   ![setup-complete](../../../static/img/integration/bi-dashboard/on-premise-setup/6.png)

### Step 2 – Ensure SQL BI Dashboard Sync Tool Service Running

1. Open web browser > type in `127.0.0.1:9081/version/` at address bar > click enter

   ![version-check](../../../static/img/integration/bi-dashboard/on-premise-setup/7.png)

2. Ensure page content showing `3.0.0.3` or above

### Step 3 – Insert SQL BI Dashboard Token

:::info
To start with BI Dashboard, contact your SQL Service Consultant for the service registration.
:::

1. Open web browser > type in `127.0.0.1:9081` at address bar > click enter

2. Click **Add Auto Update**

   ![add-auto-update](../../../static/img/integration/bi-dashboard/on-premise-setup/8.png)

3. Paste Token\* > **Save**

   ![paste-token-and-save](../../../static/img/integration/bi-dashboard/on-premise-setup/9.png)

   :::warning
   Please ensure that the token without line break
   :::

   ![token-with-line-break-warning](../../../static/img/integration/bi-dashboard/on-premise-setup/10.png)
