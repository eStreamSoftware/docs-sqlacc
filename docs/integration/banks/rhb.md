---
title: RHB Reflex
description: RHB Reflex Premium Plus Linking integration
slug: /integration/banks/rhb
tags: ["SQL Account", "Integration", "Bank", "RHB", "Bank Reconciliation"]
---

## Linking Setup

### Create Database in SQL Account

1. Launch SQL Accounting software.

   Existing SQL user - Log on as usual

   New SQL user - Click ![0](../../../static/img/integration/banks/rhb/0.png) to create database.

   ![1](../../../static/img/integration/banks/rhb/1.png)

2. Click `Create Sample Database` -> `OK`.

   ![2](../../../static/img/integration/banks/rhb/2.png)

### Maintain Bank Account in SQL

1. Select `GL menu` - > `Maintain Account`

   ![4](../../../static/img/integration/banks/rhb/4.png)

2. Select `CASH AT BANK` -> `New`

   ![5](../../../static/img/integration/banks/rhb/5.png)

3. Fill in the information and click `OK`.

   - Blue box is the mandatory field.

      ![6](../../../static/img/integration/banks/rhb/6.png)

### Link RHB Reflex Account

1. Select `Banking menu` - > `RHB Reflex`

   ![7](../../../static/img/integration/banks/rhb/7.png)

2. Click `here` for RHB Reflex user linking guide

   ![8](../../../static/img/integration/banks/rhb/8.png)

3. Tick acknowledgement box - > click `Next`

   ![9](../../../static/img/integration/banks/rhb/9.png)

4. Fill in the information

   1. Registered RHB Direct user email address and

   2. Account name/business name.

5. Click `Link`

   ![10](../../../static/img/integration/banks/rhb/10.png)

   ![11](../../../static/img/integration/banks/rhb/11.png)

6. Login the registered email to verify the user linking within 10 minutes.

   ![12](../../../static/img/integration/banks/rhb/12.png)

7. Click the hyperlink (company subsidiary name) in the email from SQL Account.

   ![13](../../../static/img/integration/banks/rhb/13.png)

8. Assign RHB bank account to the desired payment method.

   ![14](../../../static/img/integration/banks/rhb/14.png)

9. Click `Finish`

   ![15](../../../static/img/integration/banks/rhb/15.png)

10. Click `OK`, your RHB Reflex bank account have now linked.

    ![16](../../../static/img/integration/banks/rhb/16.png)

## Unlink RHB Reflex Account

User is required to unlink RHB Reflex account if:

- to change user email address &
- to tag a new RHB Reflex user with different user access.

Steps to unlink:

   1. Select ![39](../../../static/img/integration/banks/cloud-icon.png) -> `RHB Reflex`

      ![36](../../../static/img/integration/banks/rhb/36.png)

   2. Click "Unlink"

      ![37](../../../static/img/integration/banks/rhb/37.png)

      ![38](../../../static/img/integration/banks/rhb/38.png)

## Bank Balance Inquiry

1. Select `Banking menu` -> `Bank Balance Inquiry`

   ![17](../../../static/img/integration/banks/rhb/17.png)

2. Bank balance inquiry details for RHB Reflex bank accounts will be populated.

   ![18](../../../static/img/integration/banks/rhb/18.png)

3. Close the window and reopen for real-time updated balance.

## Bank Reconciliation

1. Select `GL menu` - > `Bank Reconciliation` -> click `New`

   ![33](../../../static/img/integration/banks/rhb/33.png)

2. Select Bank Statement Date and Display Period

3. Click `Apply`

   ![34](../../../static/img/integration/banks/rhb/34.png)

4. Click `Load Statement`, transaction history (T- 1 ) will be populated.

   ![35](../../../static/img/integration/banks/rhb/35.png)

5. Click Match to perform reconciliation between SQL and RHB bank statement transaction.

   A. Amount must be same

   B. The reference must be same

   C. Click `Match` when both are matched

   :::note
   - Transaction initiated from SQL is will be matched automatically.
   - RHB bank statement update at 8am daily.
   :::

## Payment

### Maintain Supplier Details

1. Select `Supplier menu` - > `Maintain Supplier`

   ![19](../../../static/img/integration/banks/rhb/19.png)

2. Click `New`

   ![20](../../../static/img/integration/banks/rhb/20.png)

3. Fill in supplier details and click `Save`

   ![21](../../../static/img/integration/banks/rhb/21.png)

4. Select `Bank Account` - > click `+`

   ![22](../../../static/img/integration/banks/rhb/22.png)

   1. Select Bank for RHB 3rd Party Transfer, IBG and Instant Transfer.

      Fill in information below:

      1. Bank account number

      2. Bank account name

      3. ID Type (Business Reg No / New IC / Old IC / Passport / Police ID / Army ID)

      4. ID number

         ![23](../../../static/img/integration/banks/rhb/23.png)

   2. Select JomPAY for Bill Payment

      Fill in information below:

      1. JomPAY biller code

      2. JomPAY reference 1

      ![24](../../../static/img/integration/banks/rhb/24.png)

   3. Select DuitNow for DuitNow proxy transfer

      1. Beneficiary name

      2. DuitNow proxy ID type (NRIC/ Passport No./ Army ID/ Mobile No./ Business Reg No.)

      3. ID number2

      ![25](../../../static/img/integration/banks/rhb/25.png)

### Payment mode

### RHB 3rd Party Transfer (RHB to RHB)

1. Select `Supplier` -> `Supplier Payment` -> click `New`

   ![26](../../../static/img/integration/banks/rhb/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : RHB crediting bank account

4. Select Payment By : RHB bank account

5. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

6. Click `Save`.

7. Reflex Online Banking will be pop-out, click `Submit` to proceed.

   ![27](../../../static/img/integration/banks/rhb/27.png)

8. Enter SQL password and click `Submit`.

   ![28](../../../static/img/integration/banks/rhb/28.png)

9. Payment status will be populated after submission. Successful payment initiation status is `Pending`, otherwise please
   refer to the error message is shown or refer RHB Reflex for further details.

   ![29](../../../static/img/integration/banks/rhb/29.png)

10. Login to RHB Reflex for payment authorization.

    ![30](../../../static/img/integration/banks/rhb/30.png)

### Payment - IBG

1. Select `Supplier` -> `Supplier Payment` -> click `New`

   ![26](../../../static/img/integration/banks/rhb/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : Non RHB crediting bank account

4. Select Payment By : RHB bank account

5. Select IBG payment mode.

6. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

7. Click `Save`.

8. Reflex Online Banking will be pop-out, click `Submit` to proceed.

   ![27](../../../static/img/integration/banks/rhb/27.png)

9. Enter SQL password and click `Submit`.

   ![28](../../../static/img/integration/banks/rhb/28.png)

10. Payment status will be populated. Successful payment initiation status is `Pending`, otherwise please refer to the error message.

    ![29](../../../static/img/integration/banks/rhb/29.png)

11. Login to RHB Reflex for payment authorization.

    ![30](../../../static/img/integration/banks/rhb/30.png)

### Payment – Instant Transfer

1. Select `Supplier` -> `Supplier Payment` -> click `New`

   ![26](../../../static/img/integration/banks/rhb/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : Non RHB crediting bank account

4. Select Payment By : RHB bank account

5. Select `Instant Transfer` payment mode.

6. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

7. Click `Save`.

8. Reflex Online Banking will be pop-out, click `Submit` to proceed.

   ![27](../../../static/img/integration/banks/rhb/27.png)

9. Enter SQL password and click `Submit`.

   ![28](../../../static/img/integration/banks/rhb/28.png)

10. Payment status will be populated. Successful payment initiation status is `Pending`,

    otherwise please refer to the error message.

    ![29](../../../static/img/integration/banks/rhb/29.png)

11. Login to RHB Reflex for payment authorization.

    ![30](../../../static/img/integration/banks/rhb/30.png)

### Payment – DuitNow

DuitNow transfer via proxy is supported includes IC Number, Business Registration Number & Mobile Number.

1. Select `Supplier` -> `Supplier Payment` -> click `New`

   ![26](../../../static/img/integration/banks/rhb/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : DuitNow

4. Select Payment By : RHB bank account

5. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

6. Click `Save`.

7. Reflex Online Banking will be pop-out, click `Submit` to proceed.

   ![27](../../../static/img/integration/banks/rhb/27.png)

8. Enter SQL password and click `Submit`.

   ![28](../../../static/img/integration/banks/rhb/28.png)

9. Payment status will be populated. Successful payment initiation status is `Pending`,

   otherwise please refer to the error message.

   ![29](../../../static/img/integration/banks/rhb/29.png)

10. Login to RHB Reflex for payment authorization.

    ![30](../../../static/img/integration/banks/rhb/30.png)

### Payment – JomPay

1. Select `Supplier` -> `Supplier Payment` -> click `New`

   ![26](../../../static/img/integration/banks/rhb/26.png)

2. Select Supplier Code : created in Maintain Supplier

3. Select Supplier Bank : JomPAY

4. Select Payment By : RHB bank account

5. Select Date (Payment date)

   - Future dated payment will be submitted to Reflex if future date is selected.

6. Click `Save`.

7. Reflex Online Banking will be pop-out, click `Submit` to proceed.

   ![27](../../../static/img/integration/banks/rhb/27.png)

8. Enter SQL password and click `Submit`.

   ![28](../../../static/img/integration/banks/rhb/28.png)

9. Payment status will be populated. Successful payment initiation status is `Pending`,
   otherwise please refer to the error message.

   ![29](../../../static/img/integration/banks/rhb/29.png)

10. Login to RHB Reflex for payment authorization.

    ![30](../../../static/img/integration/banks/rhb/30.png)

### Payment Status Update

To perform payment status update, click on the green icon.

1. Success – Payment has successfully processed by the bank

   ![31](../../../static/img/integration/banks/rhb/31.png)

2. Unsuccess – Payment has rejected by the bank, please login to RHB Reflex for further details or contact RHB Reflex customer service @ **+603-9206 8118** to speak to Reflex agent.

    ![32](../../../static/img/integration/banks/rhb/32.png)

## Support Channel

### RHB Reflex Online Banking Enquiries

1. Call 03-9206 8118

2. Select Language (Only for 1st call.)

3. Press `3` to speak to REFLEX agent directly or email to [reflex.support@rhbgroup.com](mailto:reflex.support@rhbgroup.com).

### SQL Accounting Enquiries

Tel : +603 7890 1299 (Sales)

Tel : +603 7890 1300 (Support)

Fax : +603 5886 9913

### RHB Reflex User Linking User Guide

Please refer the [RHB User Linking user guide](https://www.rhbgroup.com/files/myreflex/premium/topic/all/RHB_SME_e_Solution_User_Reference_Guide_for_CBO.pdf) for further process.
