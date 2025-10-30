---
id: maintain-diff-ver
title: Maintain 2 different version in 1 PC
description: A guide to maintain 2 different version in 1 PC for SQL Account
slug: /maintain-2-different-version-in-1-PC
tags: ["SQL Account", "Troubleshooting"]
---

## Instruction to Setup

For example: version 4 (728) and version 5 (743)

1. Open setup 728

   ![icon](../../static/img/troubleshooting/maintain-diff-ver/icon.png)

2. Check the version from the last 3-digit number, and click **Next**

   ![next](../../static/img/troubleshooting/maintain-diff-ver/next.png)

3. Click "**I accept the agreement**" and click **Next**

   ![license-agreement](../../static/img/troubleshooting/maintain-diff-ver/license-agreement.png)

4. Make sure the link is as below and click **Next**:

   **C:\eStream\SQLAccounting728**

   :::note
   If for version 743, please change the number behind to 743
   :::

   ![destination-location](../../static/img/troubleshooting/maintain-diff-ver/destination-location.png)

5. Make sure the 3 directory is as shown in the picture below, and click **Next**

   :::tip
   If for version 743, please change the number behind to 743
   :::

   ![database-location](../../static/img/troubleshooting/maintain-diff-ver/database-location.png)

6. Click on **Install**

   ![install-sql](../../static/img/troubleshooting/maintain-diff-ver/install-sql.png)

7. Click on **Finish**

   ![finish-install](../../static/img/troubleshooting/maintain-diff-ver/finish-install.png)

8. Click on Custom Settings

   ![custom-settings](../../static/img/troubleshooting/maintain-diff-ver/custom-settings.png)

   :::note
   If installing version 743, after Launch, it will show as shown in the picture below, please click on Back to Database Group.
   :::

   ![back-to-database-grp](../../static/img/troubleshooting/maintain-diff-ver/back-to-database-grp.png)

9. Click on Create Group

   ![create-grp](../../static/img/troubleshooting/maintain-diff-ver/create-grp.png)

10. Save in Share Folder

      ![save-share-folder](../../static/img/troubleshooting/maintain-diff-ver/save-share-folder.png)

11. Make sure the folder directory is the same as shown in the picture below, and click on Test Connection. Lastly, click OK.

    :::note
    If version 743, then the directory will be C:\eStream\SQLAccounting743\DB
    :::

    ![test-connection](../../static/img/troubleshooting/maintain-diff-ver/test-connection.png)

12. Repeat Step 1 to Step 11 for version 743 installation

13. In version 728, rename the DCF group to 728. Click on the Firebird icon once, then it will show as shown in the picture below and allow renaming.

    :::note
    If version 743, then rename to 743.
    :::

    ![rename-grp-1](../../static/img/troubleshooting/maintain-diff-ver/rename-grp-1.png)

    ![rename-grp-2](../../static/img/troubleshooting/maintain-diff-ver/rename-grp-2.png)

    The final result will be shown like the picture below.

    ![rename-result](../../static/img/troubleshooting/maintain-diff-ver/rename-result.png)

14. In version 728, right-click on DCF (728), and click on Create Desktop Shortcut.

    :::note
    If in version 743, then right-click on DCF(743), choose Create Desktop Shortcut.
    :::

    ![create-grp-shortcut](../../static/img/troubleshooting/maintain-diff-ver/create-grp-shortcut.png)

15. After done for both versions, on the Desktop, you will see 2 icons, and please rename the icons to the number of versions for easier recognition.

    ![final-result](../../static/img/troubleshooting/maintain-diff-ver/final-result.png)
