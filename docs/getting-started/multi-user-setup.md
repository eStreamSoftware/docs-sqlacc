---
sidebar_position: 2
title: Multi User Setup
description: Setup network sharing to enable multiple user access to single database server
slug: /getting-started/multi-user-setup
tags: ["SQL Account", "Getting Started", "Network Setting"]
---

For a multi-user scenario, a separated database server is recommended. It will serve as the main database for multiple users to access concurrently.

![7](../../static/img/getting-started/multiuser-setup/7.png)

## Database Server Setup

### Firebird Installation

   1. Visit [download page](http://www.sql.com.my/support/downloads) to download `Firebird`.

   2. If Window System Type is 64 Bits, please download `Firebird 3.0.x` **64 bit (x64)**

      ![1](../../static/img/getting-started/multiuser-setup/1.png)

   3. Run Firebird setup | Press **Ok** | Select **I accept the agreement** | Click 5 times **Next** | Make sure it is "**Run Firebird in SuperServer Mode**"

      ![2](../../static/img/getting-started/multiuser-setup/2.png)

   4. Leave it blank to use default password of master key.

      ![3](../../static/img/getting-started/multiuser-setup/3.png)

   5. Click on **Next** | **Install** | **Next** | Click on **Finish** to complete

### Network Setup

1. Window Firewall

   1. Control Panel | Window Firewall | Advanced Settings | Inbound Rules | New Rules

   2. Select Port | Next | TCP | Specific Local Port = 3050 | Next | Next | Next

   3. Name = Firebird | Finish

2. Network and Sharing Center

   1. Control Panel | Network and Sharing Center | Change Advanced sharing Settings

   2. Network Discovery

      - Turn on Network Discovery

   3. File and Printer Sharing

      - Turn on sharing so anyone with network access can read and write files in the public folders

   4. Public Folder Sharing

      - Turn on Sharing so anyone with network access can read and write files in the Public folders

   5. File Sharing Connection

      - Use 128-bit encryption to help protect file sharing connections(recommended)

   6. Password Protected Sharing

      - Turn off password protected sharing

3. Share the SQL Account or Payroll Folder

   1. My Computer | Go to C:\eStream\SQLAccounting\Share or Go to C:\eStream\SQL Payroll\Share | Right Click | Properties | Sharing Tab | Advanced Sharing | Tick Share this Folder | Click Permissions | Tick Full Control | Press OK until the end.

   2. Click on **Security** Tab | Click **Advanced** | Click on **Change Permissions** | Click **Add** Button | At empty Box enter : Everyone | Press **OK** | Tick **Allow Full Control** | Press **OK** until the end.

4. Install SQL Account or Payroll

   1. Run SQL Account or Payroll Setup | Click **Next** | Choose **I Select the Agreement** | Click **Next**

   2. Amend to C:\eStream\SQLAccounting or C:\eStream\SQL Payroll | Click Next | 3 times | Install | Click Finish

   3. Create Group | Click **DCF Group** | Click **Save** Button

   4. Database Engine = Firebird Server | Click **Test Connection**, if the status shown in blue color, press **OK**

   5. Double check your settings as below and click **OK**

   :::info
      Default Database Username is **SYSDBA**, Database Password is **MASTERKEY**
   :::

      ![4](../../static/img/getting-started/multiuser-setup/4.png)

## Client PC Setup

   1. Run SQL Account or Payroll Setup | Click **Next** | Choose **I Select the Agreement** | Click **Next** 4 times | **Install** | Click **Finish**

   2. **Add Group** | Click **DCF File**

   3. Select Share folder (At Step 4)| Select Default DCF

      ![5](../../static/img/getting-started/multiuser-setup/5.png)

      ![6](../../static/img/getting-started/multiuser-setup/6.png)

   4. Click on Firebird icon and Logon as usual.
