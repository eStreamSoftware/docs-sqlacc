---
sidebar_position: 2
id: start-online-mobile-approval
title: How to Start Online Mobile Approval
description: Guiding on doing online mobile approval
slug: /start-online-mobile-approval
tags: ["Sales"]
---

# How to Start Mobile Approval

**Step 1 : Tools > Maintain User**

![1](/img/sales/start-online-mobile-approval/1.png)

**Step 2 : Double click the user that you want to setting > Edit**

![2](/img/sales/start-online-mobile-approval/2.png)  
![3](/img/sales/start-online-mobile-approval/3.png)

**Step 3 : Setting The Detail For Approval Person (ONLY GMAIL CAN LOGIN TO APPROVE OR REJECT)**

1. Mobile number - To which whatsapp number to get notification for approval only
2.  Email - To which email address to get notification for approval only
3. Open ID (Google) - Gmail for approve or reject

:::info[note]
 If received notification email and approve email is GMail, just setting at
3.OPEN ID (Google) 2.Email
column blank
:::

![4](/img/sales/start-online-mobile-approval/4.png)

For Example :  
**<ins>Senario 1 : Use Same Gmail to Received Notification and Give Approval</ins>**

Your Gmail address is : XXXXXX@gmail.com 

1. Open ID (Google) : XXXXXX@gmail.com  
2. Email : Left as blank

![5](/img/sales/start-online-mobile-approval/5.png)

**<ins>Senario 2 : Use Different email to received notification and give approval</ins>**

To Give Approval Gmail Address is : XXXXXX@gmail.com  
To Received notification Address is : XXXXXX@estream.com

1. Open ID (Google) : Put your gmail address XXXXXX@gmail.com
2. Email : XXXXXX@estream.com

![6](/img/sales/start-online-mobile-approval/6.png)

**Step 4 : Setting SMTP**
:::info[note]
- This Setting is for user who want to <mark>use Email to send Notification</mark>
- If use whatsapp to send approval can skip this step
:::

Make Sure you had create App Password
- If you’re using Gmail , you can <a href="https://support.google.com/accounts/answer/185833?hl=en" target="_blank">CLICK HERE</a> follow the step to create your App Password
- After get App Password you can go back to your SQL Accounting

1. Click on Email Setting
2. Your Email SMTP Host
3. Your Email SMTP Port
4. Your Email SMTP Connection Security
5. Your Email Address
6. Your Apps Password
7. Your Email Sender Name
8. Afte done setting click Save

![7](/img/sales/start-online-mobile-approval/7.png)

**<ins>How it works?</ins>**

For example : If we set Credit Limit over RM30,000 need override

When Save Invoice will prompt this Dialog box ***‘Do You want to override?’*** > Click ***Yes***

![8](/img/sales/start-online-mobile-approval/8.png)

Click on ***Online Approval***

![9](/img/sales/start-online-mobile-approval/9.png)

&emsp;Step 1 : Tick the ID that you choose to get approval  
&emsp;Step 2 : You can choose to send by Whatsapp, Send by Email or Send by Whatsapp & Email  
![10](/img/sales/start-online-mobile-approval/10.png)  

&emsp;Step 3 : You will received a message at whatsapp message or email send by system

**<ins>Senario 1 : Send By Whatsapp</ins>**  
You will receive a message > Click that link

![11](/img/sales/start-online-mobile-approval/11.png) 

**<ins>Senario 2 : Send By Email</ins>**  
You will receive an email > Click ***'CLICK HERE FOR MORE ACTIONS'***

![12](/img/sales/start-online-mobile-approval/12.png) 

&emsp;Step 4 : Login **Gamil Address** that you setting in maintain user **Open ID (Google)**

:::info[note]
- This Step is for those send by **whatsapp** and **not use Gmail** to receive notification
- Those use **Gmail Address** to receive notification and approve can jump to **Step 6**
:::

![13](/img/sales/start-online-mobile-approval/13.png) 

&emsp;Step 5 : Enter your Gmail Password

![14](/img/sales/start-online-mobile-approval/14.png) 

&emsp;Step 6 : After Login Gmail you will see this window

![15](/img/sales/start-online-mobile-approval/15.png) 

&emsp;Step 7 : You can click on **Doc Detail** and **ScreenShot** to see the detail

1. **Doc Detail** : To show Customer Code, the reason why need override
2. **ScreenShot** : To see the transaction screen
3. **Reply** : You can left a message and click Approve or Reject

![16](/img/sales/start-online-mobile-approval/16.png) 

:::info[note]
After Approve or Reject you can go back SQL Accounting, you will see below screen
:::

**<ins>Scenario 1 : Approve Override</ins>**  
a. Message : Approve Message  
b. If approve you will see the green tick  
c. You can click OK system will auto save that transaction

![17](/img/sales/start-online-mobile-approval/17.png) 

**<ins>Scenario 2 : Reject Override</ins>**  
a. Message : Reject Message  
b. If Reject you will see the crossed  
c. If Reject you cant Click OK only can Click Cancel

![18](/img/sales/start-online-mobile-approval/18.png) 

After Click Cancel System will Prompt back to this dialog box :  
![19](/img/sales/start-online-mobile-approval/19.png) 

**<ins>These ALL can use Online Approval for user which :</ins>** 

|Module|Action|
|------|------|
|Logon Screen|<ul><li>No access right to change password</li></ul>|
|All Module|<ul><li>All Document entry without Execute / Print / Preview / Export access rights</li><li>unable to Save and Manage Grid Layout</li><li>unable to Grid Export</li><li>Save Document Fall Outside Acceptable Trans Date</li></ul>|
|Customer Inovice|<ul><li>Fast entry save Invoice</li></ul>|
|SL&PH|<ul><li>Prompt Stock Qty Control Dialog</li><li>Prompt change unit price</li><li>Save price below cost (fmSLPriceControl)</li><li>Override Credit Control</li></ul>|
|GL|<ul><li>Bank Recon Entry form to Check Bank Recon Listing</li></ul>|
|Stock|<ul><li>Update GL stock value from other stock month end report</li><li>Stock Report with Execute access right but without Process right</li></ul>|
|Inquiry|<ul><li>Hide Dashboard</li></ul>|
