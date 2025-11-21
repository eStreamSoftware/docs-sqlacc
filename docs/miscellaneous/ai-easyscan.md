---
title: AI EasyScan
description: A guide about AI EasyScan for SQL Account
slug: /miscellaneous/ai-easyscan
tags: ["SQL Account"]
form_name: TfmAIEasyScan
---

SQL AI EasyScan feature enables users to manage transactions more efficiently by uploading invoices, bills, or receipts through WhatsApp. It performs instant data entry using AI-powered auto extraction, which supports images, documents and text. Users can easily organize and attach these files to the following document types within SQL Account.

## Pre-requisite

1. [Setup OCR Category](#setup-ocr-category)
2. [Setup User Mobile Number](#setup-user-mobile-number)
3. [Registration](#registration)

### Setup OCR Category

:::info[INFO]
AI will assign the items with the following predefined account code when the invoice belongs to GL Payment Voucher.
:::

1. Go to **Menu Bar** > **Tools** > **Options...**.

    ![1](../../static/img/miscellaneous/ai-easyscan/1.png)

2. In **Options**, go to **AI** and switch **Account Code** to following **Category**.

    ![2](../../static/img/miscellaneous/ai-easyscan/2.png)

### Setup User Mobile Number

1. Go to **Menu Bar** > **Tools** > **Maintain User...**.

    ![3](../../static/img/miscellaneous/ai-easyscan/3.png)

2. Create **New** or select the user who request for register.

    ![4](../../static/img/miscellaneous/ai-easyscan/4.png)

3. Enter mobile number registered with WhatsApp > **Save**.

    ![5](../../static/img/miscellaneous/ai-easyscan/5.png)

### Registration

1. Go to **Menu Bar** > ☁️ > **AI EasyScan...**.

    ![6](../../static/img/miscellaneous/ai-easyscan/6.png)

2. Go to **Toolbar** > 👤 > **Register Sender...**.

    ![7](../../static/img/miscellaneous/ai-easyscan/7.png)

3. Select the user who request for register > **OK**.

    ![8](../../static/img/miscellaneous/ai-easyscan/8.png)

4. **Copy Link To Clipboard** or **Share** registration link to the user.

    ![9](../../static/img/miscellaneous/ai-easyscan/9.png)

5. The user will have 5 minutes to complete the registration before it expires.

    ![10](../../static/img/miscellaneous/ai-easyscan/10.png)

6. After the user receives the registration link, the user is required to:

    1. Click the link.

        ![11](../../static/img/miscellaneous/ai-easyscan/11.png)

    2. Send the prefilled message with the mobile number registered.

        ![12](../../static/img/miscellaneous/ai-easyscan/12.png)

    3. WhatsApp replied **You have successfully linked with [COMPANY NAME]** indicates registration completed.

        ![13](../../static/img/miscellaneous/ai-easyscan/13.png)

7. Dialog show **Registered Successful** indicates the user complete the registration.

    ![14](../../static/img/miscellaneous/ai-easyscan/14.png)

## Usage

1. [Upload File to WhatsApp](#upload-file-to-whatsapp)
2. [Check OCR Status](#check-ocr-status)
3. [Group Files](#group-files)
4. [Assign Doc Type and Category to File or Folder](#assign-doc-type-and-category-to-file-or-folder)
5. [Create New Document](#create-new-document)
6. [Attach File(s) or Folder(s) to Existing Document](#attach-files-or-folders-to-existing-document)
7. [Check Posted File or Folder](#check-posted-file-or-folder)

### Upload File to WhatsApp

1. **Snap** a photo or **Select** the following file type to upload the file.

    ![15](../../static/img/miscellaneous/ai-easyscan/15.png)

2. ✅ will be react on the file if upload is successful.

    ![16](../../static/img/miscellaneous/ai-easyscan/16.png)

3. **Refresh** to review the file uploaded.

    ![17](../../static/img/miscellaneous/ai-easyscan/17.png)

### Check OCR Status

1. Grid row highlighted in **grey** indicates that the file is currently being processed by OCR.

    ![18](../../static/img/miscellaneous/ai-easyscan/18.png)

2. Grid row highlighted in **green** or **white** indicates that the file has successfully completed the OCR process.

    ![19](../../static/img/miscellaneous/ai-easyscan/19.png)

3. Grid row highlighted in **grey** with **red** font indicates that the file failed to be processed by OCR. **Refresh** or **reopen** will automatically reprocess the file until the OCR process is completed.

    ![20](../../static/img/miscellaneous/ai-easyscan/20.png)

### Group Files

:::info[INFO]
Grouping related files allow them to be attached into a same document.
:::

1. To **Group**, select multiple files (Ctrl + Left Click) > Right Click > **Group Files...**.

    ![21](../../static/img/miscellaneous/ai-easyscan/21.png)

2. Click **Left** and **Right** button to preview files in group.

    ![22](../../static/img/miscellaneous/ai-easyscan/22.png)

3. To **Ungroup**, select the folder > Right Click > **Ungroup Files...**.

    ![23](../../static/img/miscellaneous/ai-easyscan/23.png)

### Assign Doc Type and Category to File or Folder

:::info[INFO]
Based on **Doc Type** and **Category**, the corresponding document type will be created, and the item's G/L Code will be filled in according to the predefined account code of the selected category.
:::

1. Select the file > Click ▼ button > Choose **Doc Type**.

    ![24](../../static/img/miscellaneous/ai-easyscan/24.png)

2. Select the file > Click ▼ button > Choose **Category**.

    ![25](../../static/img/miscellaneous/ai-easyscan/25.png)

### Create New Document

1. Select a file or folder that has successfully completed the OCR process, the file and its details will be automatically filled into the selected document type.

    ![26](../../static/img/miscellaneous/ai-easyscan/26.png)

2. Review or edit the document to correct information.

    ![27](../../static/img/miscellaneous/ai-easyscan/27.png)

3. Enable **Merge** in **Toolbar** if need to combine item details into a single record, except for grouped files.

    ![28](../../static/img/miscellaneous/ai-easyscan/28.png)

3. After completing the review, click **Save**.

    ![29](../../static/img/miscellaneous/ai-easyscan/29.png)

### Attach File(s) or Folder(s) to Existing Document

1. Select file(s) or folder(s) > Right Click > **Attach to Existing Document**.

    ![30](../../static/img/miscellaneous/ai-easyscan/30.png)

2. Select the target document > **OK**.

    ![31](../../static/img/miscellaneous/ai-easyscan/31.png)

3. System will navigate to the attached document, review the attached file(s) under **Attachments**.

    ![32](../../static/img/miscellaneous/ai-easyscan/32.png)

### Check Posted File or Folder

1. **Tick** the checkbox in grid footer.

    ![33](../../static/img/miscellaneous/ai-easyscan/33.png)

2. Posted files and folders will be displayed without bold formatting.

    ![34](../../static/img/miscellaneous/ai-easyscan/34.png)

3. Click the button at top left corner of the grid > **Tick** the **Doc No** and **Posted**.

    ![35](../../static/img/miscellaneous/ai-easyscan/35.png)

4. The following status will be displayed under the column.

    ![36](../../static/img/miscellaneous/ai-easyscan/36.png)

5. Double click to open the posted document.

## Additional Information

1. [Edit Filename and Caption](#edit-filename-and-caption)
2. [Batch Edit Doc Type and Caption](#batch-edit-doc-type-and-caption)
3. [Switch System Layout](#switch-system-layout)
4. [Share File](#share-file)
5. [Delete File](#delete-file)

### Edit Filename and Caption

1. **Filename** is editable by selecting the Name column in the grid.

    ![37](../../static/img/miscellaneous/ai-easyscan/37.png)

2. **Caption** is editable by selecting the Name column in the grid.

    ![38](../../static/img/miscellaneous/ai-easyscan/38.png)

### Batch Edit Doc Type and Caption

1. Select multiple files or folders (Ctrl + Left Click) > Right Click > **Batch Edit Value**.

    ![39](../../static/img/miscellaneous/ai-easyscan/39.png)

2. Select the value you want to change > **Tick** the checkbox to allow the changes to be applied.

    ![40](../../static/img/miscellaneous/ai-easyscan/40.png)

3. Make sure all the values you want to change are ticked in the checkboxes > **OK**.

    ![41](../../static/img/miscellaneous/ai-easyscan/41.png)

4. The system will display a message to show how many records will change > **OK**.

    ![42](../../static/img/miscellaneous/ai-easyscan/42.png)

5. Click **OK** to proceed.

    ![43](../../static/img/miscellaneous/ai-easyscan/43.png)

6. The following values for the selected records will be changed.

    ![44](../../static/img/miscellaneous/ai-easyscan/44.png)

### Switch System Layout

1.  Go to **Toolbar** > Click **Layout** button > Choose system layout.

    ![45](../../static/img/miscellaneous/ai-easyscan/45.png)

2. Switch to the system layout that suits your personal preference.

    ![46](../../static/img/miscellaneous/ai-easyscan/46.png)

### Share File

1. To **Share**, select the file(s) or folder(s), then either:

    1. Go to **Toolbar** > Click **Share** button.

        ![47](../../static/img/miscellaneous/ai-easyscan/47.png)

    2. Right Click > **Share Files...**.

        ![48](../../static/img/miscellaneous/ai-easyscan/48.png)

2. Choose the following channel to share the file.

    ![49](../../static/img/miscellaneous/ai-easyscan/49.png)

### Delete File

1. To **Delete**, select the file(s) or folder(s), then either:

    1. Go to **Toolbar** > Click **Delete** button.

        ![50](../../static/img/miscellaneous/ai-easyscan/50.png)

    2. Right Click > **Delete Files...**.

        ![51](../../static/img/miscellaneous/ai-easyscan/51.png)

2. Click **OK** to confirm the deletion.

    ![52](../../static/img/miscellaneous/ai-easyscan/52.png)