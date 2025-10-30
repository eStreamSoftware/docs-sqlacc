---
title: Backup & Restore
description: Database backup & restore
slug: /getting-started/database/backup-restore
tags: ["SQL Account", "Getting Started", "Database"]
---


SQL Account provides users with the option to backup their database into their local computer or a cloud drive storage. Users can perform backups as frequently as daily or weekly and have full ownership over their backups, allowing them to restore them at any time without additional charges.

## Why must I backup my database?

In any situation, it is always useful to have a backup copy of your work. Regularly backing up your SQL Account data is beneficial for several reasons:

1. Faster data recovery in emergency situations

2. Ability to perform cross checking and comparisons with past data

3. Protection against ransomware attacks and cyber crimes

4. Easy and secure sharing of data within the company

## Local Backup

### Backup

1. Go to **File** > **Backup Database**

   ![1](../../../static/img/getting-started/database/backup-restore/1.png)

2. Click on the "**+**" icon | select "**Add Local Storage**" (You may select multiple storage locations.)

   ![2](../../../static/img/getting-started/database/backup-restore/2.png)

3. Choose where you want to save your backup file

   ![3](../../../static/img/getting-started/database/backup-restore/3.png)

4. Click **Backup**

   **Compress Backup File** : This option will put the backup file into a ZIP file.

   **Best Compression Mode** : Takes longer time than normal backup, but the file size will be smaller.

   ![4](../../../static/img/getting-started/database/backup-restore/4.png)

5. Once the backup is completed, "Done" will be displayed. Press **OK**.

   ![5](../../../static/img/getting-started/database/backup-restore/5.png)

6. You will see a zip file in the location you have selected.

   ![6](../../../static/img/getting-started/database/backup-restore/6.png)

### Restore

1. Press the ⚙️ button at the bottom right.

   ![7](../../../static/img/getting-started/database/backup-restore/7.png)

2. Click **Restore…**

   ![8](../../../static/img/getting-started/database/backup-restore/8.png)

3. Click **…** button.

   ![9](../../../static/img/getting-started/database/backup-restore/9.png)

4. Look for your Backup File and click **Open**.

   ![10](../../../static/img/getting-started/database/backup-restore/10.png)

5. Click **OK** once backup file is selected.

   ![11](../../../static/img/getting-started/database/backup-restore/11.png)

6. Click **OK**

   ![12](../../../static/img/getting-started/database/backup-restore/12.png)

7. Once the restore is completed, **Completed** will be displayed. Press **OK**.

   ![13](../../../static/img/getting-started/database/backup-restore/13.png)

8. Your file is now restored. Double-click and login as usual.

   ![14](../../../static/img/getting-started/database/backup-restore/14.png)

## SQL AI Cloud Backup

What is AI Cloud Backup? AI Cloud backup is one of SQL’s latest services that gives users the option to store backups in a secure and regulated cloud-based server. Users can perform database backups and restore them anytime and anywhere.

### Benefits

1. Secure and encrypted storage.

2. Regulated security practices with frequent ransomware screening and server health analysis.

3. Backup and restore anytime, anywhere.

4. Ai Smart Recycle feature – removes older daily backups to utilizes cloud storage space.

### Cloud Backup

:::info[Requirement]
Please contact your SQL Agent to register a SQL Drive account beforehand.
:::

1. Go to **File** > **Backup Database**

   ![15](../../../static/img/getting-started/database/backup-restore/1.png)

2. Click on "**+**" and **Add Cloud Storage**

   ![16](../../../static/img/getting-started/database/backup-restore/15.png)

3. Click on **Login** > **Login with Google** > Type in your email address and password > **Grant access**

   ![17](../../../static/img/getting-started/database/backup-restore/16.png)

   ![18](../../../static/img/getting-started/database/backup-restore/17.png)

   ![19](../../../static/img/getting-started/database/backup-restore/18.png)

4. Click **Backup**

   **Compress Backup File** : This option will put the backup file into a ZIP file.

   **Best Compression Mode** : Takes longer time than normal backup, but the file size will be smaller.

   ![20](../../../static/img/getting-started/database/backup-restore/19.png)

5. Once the backup is completed, **Done** will be displayed. Press **OK**.

   ![21](../../../static/img/getting-started/database/backup-restore/20.png)

### Cloud Restore

1. Press the ⚙️ button at bottom right

   ![22](../../../static/img/getting-started/database/backup-restore/7.png)

2. Click **Restore…** (with Cloud icon)

   ![23](../../../static/img/getting-started/database/backup-restore/21.png)

3. Select your Backup File and click **OK**

   ![24](../../../static/img/getting-started/database/backup-restore/22.png)

4. Click **OK**

   ![25](../../../static/img/getting-started/database/backup-restore/23.png)

5. Once the restore is completed, **Completed** will be displayed. Press **OK**.

   ![26](../../../static/img/getting-started/database/backup-restore/24.png)

6. Your file is now restored. Double-click and login as usual.

   ![27](../../../static/img/getting-started/database/backup-restore/25.png)
