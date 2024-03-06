---
sidebar_position: 4
id: serial-no
title: Serial No Module
description: A guide about serial no. module for SQL Account
slug: /additional-module/serial-no
tags: ["SQL Account", "Additional Module"]
---

## Instruction

1. Please go to **Stock** | **Maintain Stock Item** | **Edit** | Checked **Serial No.** | **Save**

   ![1](/img/additional-module/serial-no/1.png)

2. **Purchase** | **Goods Received Note** | **New** |

   :::info

   There have **3 methods** to apply serial no :

   :::

   > ### Method 1 : Manually Enter

   1. Click on the **Qty** column

   2. Click on "▼" symbol

   3. Click on "+" (Green Icon)

   4. Manually Enter at Empty Box

   ![2](/img/additional-module/serial-no/2.png)

   > ### Method 2 : Import from Notepad / Word

   1. Enter the Serial No at the notepad.

      ![3](/img/additional-module/serial-no/3.png)

   2. Click Import

      ![4](/img/additional-module/serial-no/4.png)

   3. Select Notepad where you have saved to .

      ![5](/img/additional-module/serial-no/5.png)

   4. Click Ok

      ![6](/img/additional-module/serial-no/6.png)

   > ### Method 3 : Generator

   1. Click on Generator

      ![7](/img/additional-module/serial-no/7.png)

   2. Format = Serial No Format

      Start From = What number you wish to start from

      Count = How many units to generate

      ![8](/img/additional-module/serial-no/8.png)

   3. Here the output

      ![9](/img/additional-module/serial-no/9.png)

3. In Delivery Order

   1. Sales | Delivery Order | Click Add

      ![10](/img/additional-module/serial-no/10.png)

      \+ (Green Color) Same method as Method 1

      Import same method as Method 2

   2. Tick Serial No | Press Ok

      ![11](/img/additional-module/serial-no/11.png)

   :::info

   Noted : Stock Adjustment does not support Serial No. May using Stock Received and Stock Issue to replace .

   :::

### Serial No Report

1. Print Stock Physical Worksheet – Will show all Serial that haven't been issued out.

2. Print Stock Serial No Conflict

   1. To check Serial No. have been issued out but there is no receiving information.

   2. To check duplicate Serial No. received at the same location/ batch for the same item.

3. Print Stock Outstanding Serial No

   1. For those documents Issued or Received that do no apply Serial No.

4. Inquiry | Print Serial No Inquiry

   1. Check serial no. movement.

### Access Right for Serial No

Group Stock

1. Always match Qty with Serial No.

   * Checked mean Serial No. must match Qty key in. Eg : 2 Qty = 2 Serial No.

   * If this right is checked, Print Outstanding Serial Numbers will yield no result.

2. Allow Non-Existent Serial No

   * Checked mean for those Serial No issued out, allow the input of non-existent Serial No.

   * If this right is unchecked, Print Stock Serial No Conflict will no result.
