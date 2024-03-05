---
sidebar_position: 10
id: banking
title: User Guide SQL RHB Reflex Premium Plus
description: A quick guide on RHB Reflex Premium Plus for SQL Account
slug: /banking/banking
tags: ["SQL Account", "Banking", "RHB", "Bank Reconciliation"]
---

<!-- ![3](/img/banking/3.png) -->

<!-- **Table of Contents**

- [User Linking](#user-linking)
  - [Create Database in SQL Account](#create-database-in-sql-account)
  - [Maintain Bank Account in SQL](#maintain-bank-account-in-sql)
  - [Link RHB Reflex Account](#link-rhb-reflex-account)
- [Bank Balance Inquiry](#bank-balance-inquiry)
- [Payment Initialization](#payment-initialization)
  - [Maintain Supplier Details](#maintain-supplier-details)
  - [Payment mode](#payment-mode)
  - [RHB 3rd Party Transfer (RHB to RHB)](#rhb-3rd-party-transfer)
  - [Payment - IBG](#payment-ibg)
  - [Payment – Instant Transfer](#payment-instant-transfer)
  - [Payment – DuitNow](#payment-duitnow)
  - [Payment – JomPay](#payment-jompay)
- [Payment Status Update](#payment-status-update)
- [Bank Reconciliation](#bank-reconciliation)
- [Unlink RHB Reflex Account](#unlink-rhb-reflex-account)
- [Support Channel](#support-channel)
- [RHB Reflex User Linking User Guide](#rhb-reflex-user-linking-user-guide) -->

## User Linking

### Create Database in SQL Account

1. Launch SQL Accounting software.

   Existing SQL user - Log on as usual  

   New SQL user - Click '![0](/img/banking/0.png)' to create database.

   ![1](/img/banking/1.png)

2. Click 'Create Sample Database' -> 'OK'.

   ![2](/img/banking/2.png)

### Maintain Bank Account in SQL

1. Select 'GL' menu - > 'Maintain Account'

   ![4](/img/banking/4.png)

2. Select 'CASH AT BANK' -> 'New'

   ![5](/img/banking/5.png)

3. Fill in the information and click 'OK'.

   Blue box is the mandatory field.

   ![6](/img/banking/6.png)

### Link RHB Reflex Account

1. Select Banking menu - > 'RHB Reflex'

   ![7](/img/banking/7.png)

2. Click 'here' for RHB Reflex user linking guide

   ![8](/img/banking/8.png)

3. Tick acknowledgement box - > click 'Next'

   ![9](/img/banking/9.png)

4. Fill in the information

   1. Registered RHB Direct user email address and

   2. Account name/business name.

5. Click 'Link'

   ![10](/img/banking/10.png)

   ![11](/img/banking/11.png)

6. Login the registered email to verify the user linking within 10 minutes.

   ![12](/img/banking/12.png)

7. Click the hyperlink (company subsidiary name) in the email from SQL Account.

   ![13](/img/banking/13.png)

8. Assign RHB bank account to the desired payment method.

   ![14](/img/banking/14.png)

9. Click 'Finish'

   ![15](/img/banking/15.png)

10. Click 'OK', your RHB Reflex bank account have now linked.

    ![16](/img/banking/16.png)

## Bank Balance Inquiry

1. Select Banking menu-> 'Bank Balance Inquiry'

   ![17](/img/banking/17.png)

2. Bank balance inquiry details for RHB Reflex bank accounts will be populated.

   ![18](/img/banking/18.png)

3. Close the window and reopen for real-time updated balance.

## Payment Initialization

### Maintain Supplier Details

1. Select Supplier menu - > 'Maintain Supplier'

   ![19](/img/banking/19.png)

2. Click 'New'

   ![20](/img/banking/20.png)

3. Fill in supplier details and click 'Save'

   ![21](/img/banking/21.png)

4. Select 'Bank Account' - > click '+'

   ![22](/img/banking/22.png)

   1. Select Bank for RHB 3rd Party Transfer, IBG and Instant Transfer.  

      Fill in information below:  

      1. Bank account number  

      2. Bank account name  

      3. ID Type (Business Reg No / New IC / Old IC / Passport / Police ID / Army ID)  

      4. ID number

         ![23](/img/banking/23.png)

   2. Select JomPAY for Bill Payment

      Fill in information below:

      1. JomPAY biller code

      2. JomPAY reference 1

      ![24](/img/banking/24.png)

   3. Select DuitNow for DuitNow proxy transfer

      1. Beneficiary name

      2. DuitNow proxy ID type (NRIC/ Passport No./ Army ID/ Mobile No./ Business Reg No.)

      3. ID number2

      ![25](/img/banking/25.png)

### Payment mode

### RHB 3rd Party Transfer (RHB to RHB)

1. Select Supplier -> Supplier Payment -> click 'New'

   ![26](/img/banking/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : RHB crediting bank account

4. Select Payment By : RHB bank account

5. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

6. Click 'Save'.

7. Reflex Online Banking will be pop-out, click 'Submit' to proceed.

   ![27](/img/banking/27.png)

8. Enter SQL password and click 'Submit'.

   ![28](/img/banking/28.png)

9. Payment status will be populated after submission. Successful payment initiation status is 'Pending', otherwise please
   refer to the error message is shown or refer RHB Reflex for further details.

   ![29](/img/banking/29.png)

10. Login to RHB Reflex for payment authorization.

    ![30](/img/banking/30.png)

### Payment - IBG

1. Select Supplier -> Supplier Payment -> click “New”

   ![26](/img/banking/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : Non RHB crediting bank account

4. Select Payment By : RHB bank account

5. Select IBG payment mode.

6. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

7. Click “Save”.

8. Reflex Online Banking will be pop-out, click “Submit” to proceed.

   ![27](/img/banking/27.png)

9. Enter SQL password and click “Submit”.

   ![28](/img/banking/28.png)

10. Payment status will be populated. Successful payment initiation status is “Pending”, otherwise please refer to the error message.

    ![29](/img/banking/29.png)

11. Login to RHB Reflex for payment authorization.

    ![30](/img/banking/30.png)

### Payment – Instant Transfer

1. Select Supplier -> Supplier Payment -> click “New”

   ![26](/img/banking/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : Non RHB crediting bank account

4. Select Payment By : RHB bank account

5. Select “Instant Transfer” payment mode.

6. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

7. Click “Save”.

8. Reflex Online Banking will be pop-out, click “Submit” to proceed.

   ![27](/img/banking/27.png)

9. Enter SQL password and click “Submit”.

   ![28](/img/banking/28.png)

10. Payment status will be populated. Successful payment initiation status is “Pending”,

    otherwise please refer to the error message.

    ![29](/img/banking/29.png)

11. Login to RHB Reflex for payment authorization.

    ![30](/img/banking/30.png)

### Payment – DuitNow

DuitNow transfer via proxy is supported includes IC Number, Business Registration Number & Mobile Number.

1. Select Supplier -> Supplier Payment -> click “New”

   ![26](/img/banking/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : DuitNow

4. Select Payment By : RHB bank account

5. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

6. Click “Save”.

7. Reflex Online Banking will be pop-out, click “Submit” to proceed.

   ![27](/img/banking/27.png)

8. Enter SQL password and click “Submit”.

   ![28](/img/banking/28.png)

9. Payment status will be populated. Successful payment initiation status is “Pending”,

   otherwise please refer to the error message.

   ![29](/img/banking/29.png)

10. Login to RHB Reflex for payment authorization.

    ![30](/img/banking/30.png)

### Payment – JomPay

1. Select Supplier -> Supplier Payment -> click “New”

   ![26](/img/banking/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : JomPAY

4. Select Payment By : RHB bank account

5. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

6. Click “Save”.

7. Reflex Online Banking will be pop-out, click “Submit” to proceed.

   ![27](/img/banking/27.png)

8. Enter SQL password and click “Submit”.

   ![28](/img/banking/28.png)

9. Payment status will be populated. Successful payment initiation status is “Pending”,
   otherwise please refer to the error message.

   ![29](/img/banking/29.png)

10. Login to RHB Reflex for payment authorization.

    ![30](/img/banking/30.png)

## Payment Status Update

To perform payment status update, click on the green icon.

Success – Payment has successfully processed by the bank

   ![31](/img/banking/31.png)

Unsuccess – Payment has rejected by the bank, please login to RHB Reflex for further details

or contact RHB Reflex customer service @ **+603-9206 8118**, then select language and press

‘ 3 ’ to speak to Reflex agent.

    ![32](/img/banking/32.png)

## Bank Reconciliation

1. Select GL menu - > Bank Reconciliation -> click “New”

   ![33](/img/banking/33.png)

2. Select Bank Statement Date and Display Period

3. Click “Apply”

   ![34](/img/banking/34.png)

4. Click “Load Statement”, transaction history (T- 1 ) will be populated.

   ![35](/img/banking/35.png)

5. Click Match to perform reconciliation between SQL and RHB bank statement transaction.

   A. Amount must be same

   B. The reference must be same

   C. Click “Match” when both are matched

   :::note
   - Transaction initiated from SQL is will be matched automatically.
   - RHB bank statement update at 8am daily.
   :::

## Unlink RHB Reflex Account

   User is required to unlink RHB Reflex account if

      1. to change user email address &

      2. to tag a new RHB Reflex user with different user access.

1. Select '![39](/img/banking/39.png)' -> RHB Reflex

   ![36](/img/banking/36.png)

2. Click “Unlink”

   ![37](/img/banking/37.png)

   ![38](/img/banking/38.png)

## Support Channel

### RHB Reflex Online Banking Enquiries

1. Call 03-9206 8118

2. Select Language (Only for 1st call.)

3. Press '3' to speak to REFLEX agent directly or email to [reflex.support@rhbgroup.com](mailto:reflex.support@rhbgroup.com).

### SQL Accounting Enquiries

Tel : +603 7890 1299 (Sales)

Tel : +603 7890 1300 (Support)

Fax : +603 5886 9913

## RHB Reflex User Linking User Guide

Please refer below URL [link](https://www.rhbgroup.com/files/myreflex/premium/topic/all/RHB_SME_e_Solution_User_Reference_Guide_for_CBO.pdf) for RHB User Linking user guide.
