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

### Step 1 – Install SQL BI Dashboard Sync Tool

1. Download [Sqlsync tool](https://drive.google.com/file/d/1MeOmnmYXZg0-LCPcld1ZCoI_-h39REJN/view)

   :::warning
   If computer previously installed Sqlsync or Gobi sync, please proceed to [Complete Uninstall](./complete-uninstall).
   :::

   ![Download Sqlsync tool](../../../static/img/integration/bi-dashboard/on-premise-setup/1.png)

2. Select `sqlsync (64bits)-V3000.exe` > Right click > **Run as administrator**

   ![Run as administrator](../../../static/img/integration/bi-dashboard/on-premise-setup/2.png)

3. Confirm the installation folder > **Next**

   ![Confirm installation folder](../../../static/img/integration/bi-dashboard/on-premise-setup/3.png)

4. Click **Next**

   ![Select Start Menu Folder](../../../static/img/integration/bi-dashboard/on-premise-setup/4.png)

5. Click **Install**

   ![Ready to Install](../../../static/img/integration/bi-dashboard/on-premise-setup/5.png)

6. Click **Finish**

   ![Setup complete](../../../static/img/integration/bi-dashboard/on-premise-setup/6.png)

### Step 2 – Ensure SQL BI Dashboard Sync Tool Service Running

1. Open web browser > type in `127.0.0.1:9081/version/` at address bar > click enter

   ![Version check](../../../static/img/integration/bi-dashboard/on-premise-setup/7.png)

2. Ensure page content showing `3.0.0.3` or above

### Step 3 – Insert SQL BI Dashboard Token

:::info
To start with BI Dashboard, contact your SQL Service Consultant for the service registration.
:::

1. Open web browser > type in `127.0.0.1:9081` at address bar > click enter

2. Click **Add Auto Update**

   ![Add Auto Update](../../../static/img/integration/bi-dashboard/on-premise-setup/8.png)

3. Paste Token\* > **Save**

   ![Paste token and save](../../../static/img/integration/bi-dashboard/on-premise-setup/9.png)

   :::warning
   Please ensure that the token without line break
   :::

   ![Token with line break warning](../../../static/img/integration/bi-dashboard/on-premise-setup/10.png)
