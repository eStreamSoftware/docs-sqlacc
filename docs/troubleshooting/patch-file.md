---
id: patch-file
title: How to do Patch File using SQL Diagnosis Utility
description: A guide to fix database shutdown error for SQL Account
slug: /troubleshooting/how-to-do-patch-file-using-diagnosis-utility
tags: ["SQL Account", "Troubleshooting"]
---

## Steps & Instruction

:::note SITUATION
After cloning master data, we want to delete a customer (AR) or a supplier (AP).
:::

1. Must be done at the server PC, and all users must log out first

2. [Click me to the patch file list](http://www.sql.com.my/document) and download the patch file

   ![download-patch-file](../../static/img/troubleshooting/patch-file/download-patch-file.png)

3. Open the downloaded patch (For example, if you want to delete a supplier)

   ![open-patch-file](../../static/img/troubleshooting/patch-file/open-patch-file.png)

   ![extract-to-desktop](../../static/img/troubleshooting/patch-file/extract-to-desktop.png)

4. [Click me to utility website](http://www.sql.com.my/utility) and download diagnosis

   ![download-diagnosis-1](../../static/img/troubleshooting/patch-file/download-diagnosis-1.png)

   ![download-diagnosis-2](../../static/img/troubleshooting/patch-file/download-diagnosis-2.png)

   After download completed, click on the setup:

   ![download-diagnosis-3](../../static/img/troubleshooting/patch-file/download-diagnosis-3.png)

   ![download-diagnosis-4](../../static/img/troubleshooting/patch-file/download-diagnosis-4.png)

   ![download-diagnosis-5](../../static/img/troubleshooting/patch-file/download-diagnosis-5.png)

   ![download-diagnosis-6](../../static/img/troubleshooting/patch-file/download-diagnosis-6.png)

   ![download-diagnosis-7](../../static/img/troubleshooting/patch-file/download-diagnosis-7.png)

   ![download-diagnosis-8](../../static/img/troubleshooting/patch-file/download-diagnosis-8.png)

   ![download-diagnosis-9](../../static/img/troubleshooting/patch-file/download-diagnosis-9.png)

5. Open SQL Accounting Diagnosis

   ![run-patch-file-1](../../static/img/troubleshooting/patch-file/run-patch-file-1.png)

   ![run-patch-file-2](../../static/img/troubleshooting/patch-file/run-patch-file-2.png)

   ![run-patch-file-3](../../static/img/troubleshooting/patch-file/run-patch-file-3.png)

   ![run-patch-file-4](../../static/img/troubleshooting/patch-file/run-patch-file-4.png)

---

## Tips

   :::note Attention
   If you don’t know which database to choose, you may refer here
   :::

   1. Click on `⚙️`

      ![tips-1](../../static/img/troubleshooting/patch-file/tips-1.png)

   2. You can identify the database by checking the Database ID (For example, ACC-003.FDB)

      ![tips-2](../../static/img/troubleshooting/patch-file/tips-2.png)
