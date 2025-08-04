---
title: Clipboard Import
description: A guide about clipboard import for SQL Account
slug: /miscellaneous/clipboard-import
tags: ["SQL Account", 'Import']
form_name: TfmClipboardImport
---

Clipboard Import allows users to import master and transaction data by simply copy and paste from Excel. It supports both inserting new records and updating existing ones.

## Prerequisite

1. [Download Excel Template](#download-excel-template)
2. [Maintain Master Data](#maintain-master-data)

### Download Excel Template

Click this link: [Template](https://cdn.sql.com.my/wp-content/uploads/2025/08/SQLAcc-ImportClipboard.xlsx)

### Maintain Master Data

Go to **Tools** and maintain all necessary tables required for a smooth import process. For example, when importing Sales Invoices with agent field, you must first set up these entries in **Maintain Agent**. Otherwise, the import will fail with errors.

![1](../../static/img/miscellaneous/clipboard-import/1.png)

:::tip
Always import **Master Data** first, then import **Transactions**.
:::

## About Excel Template

1. In the Excel, there are *tabs* at the bottom. Each tab is named according to which table it should be imported into.

    ![2](../../static/img/miscellaneous/clipboard-import/2.png)

2. The first row is field name and number inside the bracket is the field size. Field that starts with '_' (underscore) represents the detail table.

    ![3](../../static/img/miscellaneous/clipboard-import/3.png)

    :::warning
    Do not modify the field name. Modifying them may result in import errors.
    :::

## Usage

### Import Steps

1. Select and **Copy (Ctrl + C)** the table in Excel, including with field name

    ![4](../../static/img/miscellaneous/clipboard-import/4.png)

2. Go to **File** > **Import** > **Clipboard Excel Import** and select the table

    ![5](../../static/img/miscellaneous/clipboard-import/5.png)

3. Click **Paste from Clipboard**

    ![6](../../static/img/miscellaneous/clipboard-import/6.png)

4. **Validate** the imported data

    ![7](../../static/img/miscellaneous/clipboard-import/7.png)

5. The status will show **New**, **Update** or **Error**

    ![8](../../static/img/miscellaneous/clipboard-import/8.png)

    :::info
    **New**: Inserts master and detail records. <br/>
    **Update**: Udpates the master table and appends the detail records. <br/>
    **Error**: You can **edit** the grid then **Select All** and click **Validate** again or use **[Quick Fix](#quick-fix)**.
    :::

6. Click **Import**

    :::warning
    During the import process, it is advisable to wait patiently until the import is complete. Performing other actions may cause the application to become unresponsive
    :::

    ![9](../../static/img/miscellaneous/clipboard-import/9.png)

### Quick Fix

Quick Fix helps you automatically fix errors, such as missing values. It can create missing items (like Agent or Area) or let you select a default value for empty field.

1. After **Validate**, record with *Error* status will be unticked. Click **Select All** or tick records that need to be fixed

    :::tip
    Quick Fix only works for records with an Error status.
    :::

    ![10](../../static/img/miscellaneous/clipboard-import/10.png)

2. Click **Quick Fix**

    ![11](../../static/img/miscellaneous/clipboard-import/11.png)

3. For empty value error, select a default value

    ![12](../../static/img/miscellaneous/clipboard-import/12.png)

4. Error is fixed

    ![13](../../static/img/miscellaneous/clipboard-import/13.png)

### Auto Generate DocNo

Use **`<<New>>n`** in the DocNo field for each set where *n* is a number

![14](../../static/img/miscellaneous/clipboard-import/14.png)

## Additional Information

1. Customer / Supplier branch's detail will be updated when *BranchName* already exist. 

2. First customer / supplier branch type is *Billing*. Ensure billing details always in the first record during import.