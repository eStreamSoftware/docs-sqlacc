---
sidebar_position: 1
id: stock-take
title: Stock Take App
description: Stock Take application guide
slug: /integration/stock-take-mobile-app/stock-take
tags: ["Stock Take", "Stock", "Setup"]
---

## Introduction

Stock Take is a mobile application designed to enhance the user experience in stock taking and counting, and it provides seamless synchronization with SQL Account.

### Pros

1. Able to Stock Take/Count using **smartphone**
2. Sync to SQL Accounting Stock Adjustment
3. Able to check price

### Cons

1. Unable to Sync if no WiFi or WiFi signal is very Weak
2. Drain Mobile Phone battery if keep On the

## Requirement

    - Internet Access
    - SQL Accounting Version 781 & above
    - Smart Phone requirement
      - 4 GB RAM & above
      - 32 GB Storage
      - Android 6 (Marshmallow) and above
      - Permission - Camera & Storage
      - IOS 11 and above
    - Barcode for Each Item Code

## Installation

- [Stock Take App](https://www.sql.com.my/sqlstocktake/)
- [Stock Take App - Huawei App Gallery](https://appgallery.huawei.com/#/app/C102639285)

## Prerequisite

Please make sure the user has a SQL Drive account. For new users, please contact your SQL Service Consultant to register for an account.

Provide the following user details for registration purposes: - Customer's Google E-mail - Customer's Full Name - Company Name

:::warning[Note]
Only one(1) SQL Drive account is needed for each company.

Users who already have an SQL Drive account that was previously used for SQL Payroll E-Claim may use that account to log in for SQL Account Stock Take.
:::

## Setup

### SQL Accounting

1. Navigate to Stock > **Stock Take**

   ![1](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take.png)

2. Click **Allow Access** if Windows prompts the above warning

   ![2](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take1.png)

3. Leave this screen opens as it will auto sync & update and begins with to record stock.
4. After finish taking, click on Calculate Stock Take (System will compare with Month End As At Posted)

   ![3](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take2.png)

5. Click **Post Stock Adjustments**

| Button                     | Description                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **New Job**                | • To Start New Stock Take                                                                                                      |
| **Load From File**         | • To Load file exported from Stock Take (in Zip) <br /> • For Offline/No WiFi User use only <br /> • Normally is in Zip Format |
| **Export Stock List**      | • To Export the Stock List for Stock Take <br /> • For Offline/No WiFi User use only <br /> • Normally is in Zip Format        |
| **Calculate Stock Take**   | • To Calculate Stock Take                                                                                                      |
| **Export To CSV**          | • To Export Grid Result to CSV                                                                                                 |
| **Post Stock Adjustments** | • To Post Grid Result to Stock Adjustment                                                                                      |

### Stock Take (Mobile App)

![4](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take3.png)
![12](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take4.png)

1. In the mobile app, the last update indicator is displayed at the bottom of the screen

   ![5](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take5.png)

2. After finish with the sync, Click Stock Take

   ![13](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take6.png)
   ![6](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take7.png)

3. Click "Scan" to begin with scanning the stock

   ![7](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take8.png)

4. If the item code has more than 1 UOM, it will prompt for selection.
5. Select the UOM and confirm

   ![8](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take9.png)

6. In the following screen, user can adjust the quantity of the stock (optional)
7. Click Stop if you wish to stop the scanning

   ![9](../../../static/img/integration/stock-take-mobile-app/stock-take/stock-take10.png)

## Stock Take Items List Import

There are some prerequisites to be done before proceeding with the import:

### Prerequisites

#### SQL Account

1. In SQL Account, go to "**Tools**" > "**Options...**".

2. Click on "**Barcode**", go to "**Stock Take**" tab and click on the switch beside "**Stock Take**" label.

3. Next, the SQL Drive window will prompt, click on the "**Log in**" button.

4. Click on "**Log in with Google**" button.

5. Click on "**Grant access**" button.

6. After you see "**Account connected**" message, close the window.

#### Stock Take Module

1. In SQL Account, navigate to "**Stock**" -> "**Stock Take...**".

2. Click "**New Job**" button.

3. On first dialog prompt("Do you want to cancel?"), choose "**No**".

4. On second dialog prompt("Do you want to continue?"), choose "**Yes**".

### Import

> Proceed with the following steps after finishing the prerequisites above

1. On the Stock Take app home page, tap on "Update Items List" button (located to the left of "Update Items List" label).

2. On "Import Options" page, users can change the device name by tapping on the edit box next to the label "Name:", which is optional. The device name will be displayed on SQL Account to help the user identify which device uploaded stock take result and its content

3. Tap on "**Network File Transfer**" button.

   - For devices without a Stock Take share profile set, a QR code scanner will be shown. Proceed to scan the QR shown in SQL Account Stock Take window.

   - For devices with stock take share profile set, the import process will begin immediately.

## Sync Stock Take Result To SQL Account

Sync stock take result from Stock Take app to SQL Account to perform stock adjustment on SQL Account

1. Stock Take App Upload

   1. On the Stock Take mode page, tap on "**More Options**" button.
   2. Tap on "**Export/Upload**" button.
   3. Choose option "**SQL Stock Take Import File**".
   4. Tap on the "**Upload**" button.

2. SQL Account Sync

   1. Go to "**Stock**" -> "**Stock Take...**".
   2. On Stock Take window, click on "**Refresh**" button.

## Reset Connection Profile

User may want to reset Stock Take share profile on Stock Take app as user would want to switch to different Stock Take share profile.

:::note
Stock Take share profile refers to one(1) company only
:::

Resetting company profile will require user to scan QR code on SQL Acoount Stock Take window and update items list. To reset Stock Take share profile:

1. On Stock Take app home page, tap on the "**Update Items List**" button (which is located to the left of "Update items List" label).

2. On "**Import Options**" page, tap on the "**Reset Connection Profile**" button (which is located to the left of "Reset Connection Profile" label).

3. When prompted to proceed with resetting the connection profile, tap on the button "**Yes**" to continue.

4. Once done, tap on the "**Network File Transfer**" to add a new Stock Take share profile and update items list (Follow steps in [Import](#import), specifically steps 2 and 3).
