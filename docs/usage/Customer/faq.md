---
sidebar_position: 3
title: FAQ
description: Customer Frequently Ask Questions
slug: /usage/customer/customerFaq/faq
tags: ["SQL Account", "Usage", "Customer","faq"]
---

## Bounce Payment for different currency

### Customer Invoice

Invoice amount USD 100 | Rate 3.00 | Local net total = RM300

![1](../../../static/img/usage/customer/customerFaq/bounce-payment/1.png)

#### Situation 1: Received payment RM330, so Gain RM30

![2](../../../static/img/usage/customer/customerFaq/bounce-payment/2.png)

Please follow the steps below to do the bounce payment:

1. **Issue a Customer Debit Note as the previous invoice that had issue.**

    ![3](../../../static/img/usage/customer/customerFaq/bounce-payment/3.png)

2. **Issue a payment voucher to credit out the amount that already knock off.**

    ![4](../../../static/img/usage/customer/customerFaq/bounce-payment/4.png)

#### Situation 2: Received payment RM270, so Loss RM30

![5](../../../static/img/usage/customer/customerFaq/bounce-payment/5.png)

Please follow the steps below to do the bounce payment:

 1. **Issue a Customer Debit Note as the previous invoice that had issue.**

     ![6](../../../static/img/usage/customer/customerFaq/bounce-payment/6.png)

 2. **Issue a payment voucher to credit out the amount that already knock off.**

     ![7](../../../static/img/usage/customer/customerFaq/bounce-payment/7.png)

### Supplier Invoice

Supplier Invoice amount USD100 | Rate 3.00 | Local net total = RM300

![8](../../../static/img/usage/customer/customerFaq/bounce-payment/8.png)

#### Situation 1: Make payment RM330, so Loss RM30

![9](../../../static/img/usage/customer/customerFaq/bounce-payment/9.png)

Please follow the steps below to do the bounce payment:

 1. **Issue a Supplier Debit Note as the previous invoice that had issue.**

     ![10](../../../static/img/usage/customer/customerFaq/bounce-payment/10.png)

 2. **Issue an Official receipt to debit the amount that already knock off.**

     ***Put USD30 into loss GL account because we need to paid more USD30 to supplier,but we loss USD**.

     ![11](../../../static/img/usage/customer/customerFaq/bounce-payment/11.png)

#### Situation 2: Make payment RM270, so Gain RM30

![12](../../../static/img/usage/customer/customerFaq/bounce-payment/12.png)

Please follow the steps below to do the bounce payment:

 1. **Issue a Supplier Debit Note as the previous invoice that had issue.**

     ![13](../../../static/img/usage/customer/customerFaq/bounce-payment/13.png)

 2. **Issue an Official receipt to debit the amount that already knock off.**

     **\*Put USD -30 into gain GL account because we pay less USD30 to supplier,but we gain USD30.**

     ![14](../../../static/img/usage/customer/customerFaq/bounce-payment/14.png)

## Foreign Customer Unrealised Gain Loss

### Customer | Print Customer Aging Report

![1](../../../static/img/usage/customer/customerFaq/foreign/1.png)

1. Select Date

2. Select Foreign Customer

3. Select UnRealised Gain Loss report

4. Click Apply

    ![2](../../../static/img/usage/customer/customerFaq/foreign/2.png)

5. Click Preview, system will prompt a dialog to let you enter currency rate

6. Enter **closing currency rate** | Click OK

    ![3](../../../static/img/usage/customer/customerFaq/foreign/3.png)

7. System will show the report with the auto-calculated UnRealised Gain/Loss Amount

    ![4](../../../static/img/usage/customer/customerFaq/foreign/4.png)

8. Click Post_DNCN_Adjustment

    ![5](../../../static/img/usage/customer/customerFaq/foreign/5.png)

9. Show Posting Done...

    ![6](../../../static/img/usage/customer/customerFaq/foreign/6.png)

10. Go to Customer Credit Note / Customer Debit Note to check the document posted.

:::note

1. Same step for supplier.

2. For more info, may go to the [Youtube](https://www.youtube.com/watch?v=PnLYx8ophIQ) link

:::

## Bank Deposit

Opening Bank Deposit can be done when you are banking in 2 or more cheques at a time in a same transaction slip. After it is done, the transaction will be displayed in grouped form at bank reconciliation for you to reconcile.

### Steps to open bank deposit

1. Firstly, point to **“Customer”** tab and select **“Customer Payment”**.

    ![1](../../../static/img/usage/customer/customerFaq/open-bank-deposit/1.png)

2. Click on **“New”** 

    ![2](../../../static/img/usage/customer/customerFaq/open-bank-deposit/2.png)

3. Right click at the blank space, and you will see a panel displayed with *“Open Bank Deposit”* for you to select. Click on **“Open Bank Deposit”**

    ![3](../../../static/img/usage/customer/customerFaq/open-bank-deposit/3.png)

4. Click on **“New”**

    ![4](../../../static/img/usage/customer/customerFaq/open-bank-deposit/4.png)

5. You will come to this interface. Enter the transaction slip number, select the correct date and account.
    ![5](../../../static/img/usage/customer/customerFaq/open-bank-deposit/5.png)
    ![6](../../../static/img/usage/customer/customerFaq/open-bank-deposit/6.png)

6. Click **“Search”**. System will search for customer payment within the selected date.

    ![7](../../../static/img/usage/customer/customerFaq/open-bank-deposit/7.png)

    ![8](../../../static/img/usage/customer/customerFaq/open-bank-deposit/8.png)

7. Tick on the payments which are made under the same transaction. Then, click **“OK”**.

    ![9](../../../static/img/usage/customer/customerFaq/open-bank-deposit/9.png)

8. You will see the selected payments displayed in the panel. If you have wrongly selected the payment, you can always remove it by clicking on the “-“button. Click **“Save”**.

    ![10](../../../static/img/usage/customer/customerFaq/open-bank-deposit/10.png)

9. Point to **“GL”** and click into **“Bank Reconciliation”**.

    ![11](../../../static/img/usage/customer/customerFaq/open-bank-deposit/11.png)

10. Click on **“New”**.

    ![12](../../../static/img/usage/customer/customerFaq/open-bank-deposit/12.png)

11. Then, you will come to this panel. Select the bank statement date (When the bank statement is received). Make sure that you have selected the correct account.

    ![13](../../../static/img/usage/customer/customerFaq/open-bank-deposit/13.png)

12. Select the correct display period (including the date of the bank deposit opening made). Key in Bank Statement Bank Closing according to the bank statement you received. Click **“Apply”**.

    ![14](../../../static/img/usage/customer/customerFaq/open-bank-deposit/14.png)

13. You will see the cheques from **“Opening Bank Deposit”** will be displayed together in a row with the total amount added up together. Then, click **“Save”**.

    ![15](../../../static/img/usage/customer/customerFaq/open-bank-deposit/15.png)

### Opening Bank Deposit at Cash Book Entry

“Opening Bank Deposit” can also be done at cash book entry. Firstly, point to **“GL”** and select **“Cash Book Entry”**.

    ![16](../../../static/img/usage/customer/customerFaq/open-bank-deposit/16.png)

Click on **“New”**

    ![17](../../../static/img/usage/customer/customerFaq/open-bank-deposit/17.png)

Then, right click at the blank space beside Payment Voucher, you will see **“Open Bank Deposit”** for you to select.

    ![18](../../../static/img/usage/customer/customerFaq/open-bank-deposit/18.png)

## Payment Guide

### Customer Payment Scenario

|#|Customer Pay| You Receive|
|---|---|---|
|1|RM|RM|
|2|USD|RM|
|3|USD|USD|
|4|USD|SGD|

#### 1. Customer Paid in RM & Payment Received in RM

1. First step to know the customer for currency RM by default is with “----“ sign.

    **Customer > Maintain Customer**

    ![1](../../../static/img/usage/customer/customerFaq/payment-guide/1.png)

2. Customer order and proceed to Invoice

    **Sales > Invoice**

    ![2](../../../static/img/usage/customer/customerFaq/payment-guide/2.png)

3. Proceed to Payment

    **Customer > Payment**

    ![3](../../../static/img/usage/customer/customerFaq/payment-guide/3.png)

Make sure the above step for Customer in RM currency, payment in default is RM currency also.

#### 2. Customer Paid in USD & Payment Received in RM

:::note
Refer to  Step 1 in [Scenario 1](#1-customer-paid-in-rm--payment-received-in-rm) to know if the customer using USD currency.
:::

1. Check the local amount and net total. Is it different with the previous one? If yes, proved that the document amount is in USD currency.

   **Sales > Invoice**

    ![4](../../../static/img/usage/customer/customerFaq/payment-guide/4.png)

2. Proceed to Payment

    **Customer > Payment**

    ![5](../../../static/img/usage/customer/customerFaq/payment-guide/5.png)

    - 2A. Currency rate for knocking off the payment (System auto calculate)

    - 2B. Payment Amount made in RM (Note: This payment amount is based on Bank payment method currency) **[check on Tools >     Maintain payment method to know more!]**

    - 2C. Bank payment method, make sure you choose the correct bank.

    - 2D. This pay amount you can either put it on your desire amount and check on the 2A, you’ll notice that currency rate will change once you try to knock off the amount.

#### 3. Customer Paid in USD & Payment Received in USD

1. For this case where customer currency is USD and payment also in USD, there’ll be a few more step to do.

    1. you need to maintain a USD Bank in GL Account (**GL > Maintain Account**) where this will be the bank you’ll be getting your
    payment in.

    2. After maintained the GL Account, go to **Tools > Maintain Payment Method** to assign the currency of the
    payment method in the particular bank.

    ![6](../../../static/img/usage/customer/customerFaq/payment-guide/6.png)

2. After maintained payment method, we can proceed to do transaction for cases similar (USD Currency on Invoice).

    **Sales > Invoice**

    ![7](../../../static/img/usage/customer/customerFaq/payment-guide/7.png)

3. Proceed to Payment

    **Customer > Payment**

    :::info
    The currency rate in the top-right corner can only be edited if the customer's currency matches the payment currency.
    :::

    ![8](../../../static/img/usage/customer/customerFaq/payment-guide/8.png)

   1. Now, this rate can be changed as the currency rate change according to the currency rate

   2. Select the correct payment method in order to allow USD payment knocking off USD Invoice

   3. Paid amount will be the amount of USD you receive

   4. Local amount is the amount of conversion of (paid amount x currency rate at the moment)

   5. This IV amount will always be following the currency amount not local amount.

    After confirming all the related info is correct may save it. If your currency rate is different from the one stated in the Invoice, a message should prompt out defining your gain/loss on foreign exchange.

    ![9](../../../static/img/usage/customer/customerFaq/payment-guide/9.png)

    :::note
    If your Invoice currency is stated 3.5 at the moment, and when your customer pay to you on 3.6 rate, the system will auto calculate the amount of gain/loss you actually got from this transaction and show to you the amount when you click save. Above prompt dialog will appear.
    :::

#### 4. Customer Paid in USD & Payment Received in SGD

For customer on USD and receiving payment on different currency you just need to main the payment method.

:::note
How to maintain payment method? – Refer to [Scenario 3](#3-customer-paid-in-usd--payment-received-in-usd)
:::

## Payment Listing Commission

### Guideline: Commission Report

1. Go to **Tools > Maintain Commission Script > New** to add in the commission
   script. Fill in the Code and Description.

    :::note
    Maintain Commission Script requires additional module
    :::

    ![1](../../../static/img/usage/customer/customerFaq/comm/1.png)

    ![2](../../../static/img/usage/customer/customerFaq/comm/2.png)

    ![3](../../../static/img/usage/customer/customerFaq/comm/3.png)

    Default commission script:

    ```pascal
    procedure CalculateCommission(AKODocAmt, AAge: variant; var Value: variant);
    begin
        if AAge < 10 then
            Value := AKODocAmt * 0.05
        else if AAge < 20 then
            Value := AKODocAmt * 0.03
        else if AAge < 30 then
            Value := AKODocAmt * 0.02
        else
            Value := AKODocAmt * 0.05005;
    end;
    ```

2. Change the value highlighted as below according to commission rate for agent and Save.

   ![4](../../../static/img/usage/customer/customerFaq/comm/4.png)

    1. Value 10, 20, 30 = Age

    2. Value 0.05, 0.03, 0.02, 0.005 = Commission Rate

3. Go to **Tools > Maintain Agent** and select the agent that need to load the commission script.

    ![5](../../../static/img/usage/customer/customerFaq/comm/5.png)

4. At the attachment tab, add in the commission script by selecting it as shown below and click Save after adding the script.

    ![6](../../../static/img/usage/customer/customerFaq/comm/6.png)

5. Go to **Customer > Print Customer Document Listing**, select **Document Type** as **Customer Payment Listing**, group by Agent and apply. Preview the result with **Cust Local - Payment Listing - Collection Report**.

    ![7](../../../static/img/usage/customer/customerFaq/comm/7.png)

    ![8](../../../static/img/usage/customer/customerFaq/comm/8.png)

    ![9](../../../static/img/usage/customer/customerFaq/comm/9.png)

## Post-dated & Bounced Cheque

### Post-dated Cheque

Post-dated cheque is a cheque written by the drawer (payer) for a date in the future.

1. Firstly, go to **Customer > Customer Payment**.

    ![1](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/1.png)

2. Click on **New** to create a new customer payment.

    ![2](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/2.png)

3. As usual, create a customer payment and tick to knock off the corresponding invoice. Make sure the bank account and amount is correct.

    ![3](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/3.png)

4. To set the payment as a post-dated cheque, simply point the cursor to the blank space beside **Customer Payment** and right click. Click into **Set Posting Date**.

    ![4](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/4.png)

5. Select the actual posting date of the cheque (e.g., 16th of July 2015). Then, click **OK**.

    ![5](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/5.png)

    ![6](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/6.png)

6. Now, you will see the posting date is clearly stated in the system. Click **Save**.

    ![7](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/7.png)

7. From ledger report, by selecting the posting date and corresponding account, you will see that the document date and transaction is clearly stated.

    ![8](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/8.png)

8. To view the listing of post-dated cheques. Go to **Customer Reports** and select **Print Customer Post Dated Cheque Listing**.

    ![9](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/9.png)

9. Select the date of the payment made (NOT the cheque posting date), and click **Apply**. (You can filter the search by payment method, customer, agent and etc. before clicking **Apply**)

    ![10](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/10.png)

10. Upon clicking the **Apply** button, a list of post-dated cheque will be displayed

    ![11](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/11.png)

### Bounced Cheque

A bounced cheque is a cheque that cannot be processed because the payer has insufficient funds or written wrong / incomplete information on the cheque.

1. Firstly, go to **Customer** and click into **Customer Payment**.

    ![12](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/12.png)

2. Select the bounced cheque customer payment. Double click into the document.

    ![13](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/13.png)

3. Click **Edit**.

    ![14](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/14.png)

4. To set the payment as a bounced cheque, simply point the cursor to the blank space beside **Customer Payment** and right click. Click into **Bounced Status**.

    ![15](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/15.png)

5. Tick in checkbox to bounce the payment. And set the bounce date. (For this case, the cheque is posted on 16th of July 2015, thus the bounce date should be later that 16th of July 2015). Click **OK**.

    ![16](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/16.png)

6. The cheque will then be labelled as bounced, and the bounce date will be clearly stated. Then click **Save**.

    ![17](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/17.png)

7. From ledger report, by selecting the bounce date and the corresponding account, you can clearly see the transaction is bounced.

    ![18](../../../static/img/usage/customer/customerFaq/post-dated-bounced-cheque/18.png)

## MyKad Reader

### Read Customer Info using MyKad Reader

1. Link your Smart Card Reader to your computer.

2. The reader will display a red light when successfully linked to your computer.

    ![1](../../../static/img/usage/customer/customerFaq/read-mykad/1.png)

3. Put MyKad into reader

4. The reader will display a blue light when it successfully reads your MyKad.

    ![2](../../../static/img/usage/customer/customerFaq/read-mykad/2.png)

5. Open your SQL Accounting New Customer Profile > ***Read MyKad***

    ![3](../../../static/img/usage/customer/customerFaq/read-mykad/3.png)

6. Select ***Reader Devices*** > ***Click Read Card***

    ![4](../../../static/img/usage/customer/customerFaq/read-mykad/4.png)

7. Click ***Read MyKad***

    ![5](../../../static/img/usage/customer/customerFaq/read-mykad/5.png)

8. The system will automatically fill in MyKad details ***(NAME , ADDRESS , ID Number)***

    ![6](../../../static/img/usage/customer/customerFaq/read-mykad/6.png)
