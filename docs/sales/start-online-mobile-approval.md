---
sidebar_position: 2
id: start-online-mobile-approval
title: How to Start Online Mobile Approval
description: Guiding on doing online mobile approval
slug: /sales/start-online-mobile-approval
tags: ["Sales", "Online Mobile Approval"]
---

## Step 1 : Maintain User

1. Tools > Maintain User
    ![1](/img/sales/start-online-mobile-approval/1.png)

## Step 2 : Edit User

1. Double click the user that you want to setting > Edit

    ![2](/img/sales/start-online-mobile-approval/2.png)

    ![3](/img/sales/start-online-mobile-approval/3.png)

## Step 3 : Set Approval Person

- Setting The Detail For Approval Person (ONLY GMAIL CAN LOGIN TO APPROVE OR REJECT)

  1. Mobile number - To which whatsapp number to get notification for approval only

  2. Email - To which email address to get notification for approval only

  3. Open ID (Google) - Gmail for approve or reject

    :::info[note]
    If receive notification email and approve email is Gmail, do setting only at **3.OPEN ID (Google)** and leave **2.Email** column blank
    :::

    ![4](/img/sales/start-online-mobile-approval/4.png)

    For Example :

       - **Senario 1 : Use Same Gmail to Receive Notification and Give Approval**

            >- Your Gmail address is : `XXXXXX@gmail.com`

            1. Open ID (Google) : `XXXXXX@gmail.com`
            2. Email : **Left as blank**

            ![5](/img/sales/start-online-mobile-approval/5.png)

        - **Senario 2 : Use Different email to received notification and give approval**

            >- To Give Approval Gmail Address is : `XXXXXX@gmail.com`
            >- To Received notification Address is : `XXXXXX@estream.com`

            1. Open ID (Google) : Put your gmail address XXXXXX@gmail.com
            2. Email : XXXXXX@estream.com

            ![6](/img/sales/start-online-mobile-approval/6.png)

## Step 4 : Setting SMTP

:::info[note]

- This Setting is for user who want to **use Email to send Notification**
- If use whatsapp to send approval can skip this step

:::

1. Make Sure you had create App Password
   - If you are using Gmail , you can [CLICK HERE](https://support.google.com/accounts/answer/185833?hl=en) to follow the steps to create your App Password
   - After getting your App Password, return to your SQL Accounting

2. Click on Email Setting
3. Your Email SMTP Host
4. Your Email SMTP Port
5. Your Email SMTP Connection Security
6. Your Email Address
7. Your Apps Password
8. Your Email Sender Name
9. Afte done setting click Save

    ![7](/img/sales/start-online-mobile-approval/7.png)

## How it works?

>For example : If we set Credit Limit over RM30,000 need override

1. A Dialog box will be prompted after *Save Invoice*, ***‘Do You want to override?’*** > Click ***Yes***

    ![8](/img/sales/start-online-mobile-approval/8.png)

2. Click on ***Online Approval***

    ![9](/img/sales/start-online-mobile-approval/9.png)

   1. Tick the ID that you choose to get approval

   2. You can choose to send by **Whatsapp**, **Send by Email** or **Send by Whatsapp & Email**

       ![10](/img/sales/start-online-mobile-approval/10.png)

3. You will receive a message at **Whatsapp** message or **email sent by system**

   - **Senario 1 : Send By Whatsapp**

       >You will receive a message > Click the link

        ![11](/img/sales/start-online-mobile-approval/11.png)

   - **Senario 2 : Send By Email**

        >You will receive an email > Click **'CLICK HERE FOR MORE ACTIONS'**

        ![12](/img/sales/start-online-mobile-approval/12.png)

4. Login **Gamil Address** that you setting in maintain user **Open ID (Google)**

    :::info[note]

    - This step is for those send by **whatsapp** and **not use Gmail** to receive notification
    - Those use **Gmail Address** to receive notification and approve can jump to **Step 6**

    :::

    ![13](/img/sales/start-online-mobile-approval/13.png)

5. Enter your Gmail Password

    ![14](/img/sales/start-online-mobile-approval/14.png)

6. After Login Gmail you will see this window

    ![15](/img/sales/start-online-mobile-approval/15.png)

7. You can click on **Doc Detail** and **ScreenShot** to see the detail

   1. **Doc Detail** : To show Customer Code, the reason why need override

   2. **ScreenShot** : To see the transaction screen

   3. **Reply** : You can left a message and click Approve or Reject

        ![16](/img/sales/start-online-mobile-approval/16.png)

    :::info[note]
    After Approve or Reject you can go back SQL Accounting, you will see below possible scenario
    :::

        - **Scenario 1 : Approve Override**

            >a. Message : Approve Message
            >
            >b. The green tick will appear after approve
            >
            >c. Click **OK** to save that transaction

            ![17](/img/sales/start-online-mobile-approval/17.png)

        - **Scenario 2 : Reject Override**

            >a. Message : Reject Message
            >
            >b. The cross will appear after reject
            >
            >c. **OK** button is disabled after reject, click **Cancel**

            ![18](/img/sales/start-online-mobile-approval/18.png)

            After Click Cancel System will Prompt back to this dialog box :

            ![19](/img/sales/start-online-mobile-approval/19.png)

## When to use?

These **ALL** can use Online Approval for user :

    | Module          | Action                                                                                     |
    |---------------|-----------------|
    | Logon Screen    | - No access right to change password                                                      |
    | All Module      | - All Document entry without Execute / Print / Preview / Export access rights               |
    |                 | - Unable to Save and Manage Grid Layout                                                    |
    |                 | - Unable to Grid Export                                                                    |
    |                 | - Save Document Fall Outside Acceptable Trans Date                                         |
    | Customer Inovice| - Fast entry save Invoice                                                                  |
    | SL&PH           | - Prompt Stock Qty Control Dialog                                                          |
    |                 | - Prompt change unit price                                                                 |
    |                 | - Save price below cost (fmSLPriceControl)                                                  |
    |                 | - Override Credit Control                                                                  |
    | GL              | - Bank Recon Entry form to Check Bank Recon Listing                                         |
    | Stock           | - Update GL stock value from other stock month end report                                   |
    |                 | - Stock Report with Execute access right but without Process right                          |
    | Inquiry         | - Hide Dashboard                                                                           |
