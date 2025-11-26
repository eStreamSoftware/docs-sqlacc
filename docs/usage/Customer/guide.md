---
sidebar_position: 1
title: Guide
description: Customer workflow
slug: /usage/customer/guide
tags: ["SQL Account", "Usage", "Customer"]
---

## Customer Work Flow (Account Receivable)

Example of **Customer (AR)** process work flow aligned with SQL Account flow:

![42](../../../static/img/usage/customer/customerBasicGuide/42.png)

**AR = Account Receivable**.

* To maintain customer profile data such as addresses, phone numbers, fax, email, contact persons, credit limits, credit terms, etc. In other words, it is your customer contacts list.

![maintain-cust](../../../static/img/usage/customer/customerBasicGuide/maintain-cust.png)

## Create New Customer

* Click the **NEW** button.

1. **Customer** | **Maintain Customer** | **New**

2. Enter the customer’s name and other information accordingly.

![newCust](../../../static/img/usage/customer/customerBasicGuide/new-cust.png)

* Enter your customer's details

![custEntry](../../../static/img/usage/customer/customerBasicGuide/cust-entry.png)

* You may input the following fields:

| **Field Name** | **Explanation & Properties** |
|-----------------|------------------------------|
| **Company** | • Input the customer billing company name.<br />• **Field type:** Alphanumerical<br />• **Length:** 100 |
| **Description 2** (underline below *Company*) | • An optional field where you can enter Chinese translated name, former company name, company register no, etc.<br />• **Field type:** Alphanumerical<br />• **Length:** 100 |
| **Control A/c** | • Select an appropriate Customer Control Account to be posted to GL when customer documents are created.<br />• **Field type:** Lookup from Maintain Accounts (Special Type: Customer Control Account)<br />• **Length:** 10 |
| **Code** | • AUTO/MANUAL generate the Customer Code.<br />• **Field type:** Alphanumerical<br />• **Length:** 10 |
| **Cust Category** | • Categorize your customer for reporting purpose.<br />• **Field type:** Lookup from Maintain Company Category<br />• **Length:** 15 |

## Maintain Customer

### General

![custGeneral](../../../static/img/usage/customer/customerBasicGuide/cust-general.png)

| **Field Name** | **Explanation & Properties** |
|----------------|------------------------------|
| **Branch Name** | • You may maintain multiple sets of addresses by differentiating the Branch Name.<br />Default Branch Name: BILLING<br />**Field type:** Alphanumerical<br />**Length:** 100 |
| **Address (4 lines)** | • Input the company addresses.<br />**Field type:** Alphanumerical<br />**Length:** 40 (each line) |
| **Attention** | • Input the contact person.<br />**Field type:** Alphanumerical<br />**Length:** 70 |
| **Phone 1 & 2** | • Input the telephone number(s).<br />**Field type:** Alphanumerical<br />**Length:** 30 |
| **Fax 1 & 2** | • Input the fax number(s).<br />**Field type:** Alphanumerical<br />**Length:** 30 |
| **Email** | • Input the email address.<br />**Field type:** Alphanumerical<br />**Length:** 60 |
| **Area** | • Select a default Area.<br />**Field type:** Lookup from Maintain Area<br />**Length:** 10 |
| **Agent** | • Select a default Agent.<br />**Field type:** Lookup from Maintain Agent<br />**Length:** 10 |
| **Currency** | • Select a default Currency.<br />**Field type:** Lookup from Maintain Currency<br />**Length:** 6 |
| **Credit Terms** | • Select a default Terms.<br />**Field type:** Lookup from Maintain Terms<br />**Length:** 10 |
| **Credit Limit** | • Set the credit limit (for non-Advance Credit Control module).<br />**Field type:** Numeric |
| **Statement** | • Select a default statement type: Open Item or Brought Forward.<br />**Brought Forward:** Summary Statement<br/>**Open Item:** Detail Statement<br />**Field type:** Option<br />**Default:** Open Item |
| **Aging On** | • Select a default Aging type: Invoice Date or Due Date.<br />**Invoice Date:** based on IV Date<br />**Due Date:** based on after due date (terms)<br />**Field type:** Option<br />**Default:** Invoice Date |
| **Price Tag** | • Set the price tag to the items.<br />**Field type:** Lookup from Maintain Stock Price Tag<br />**Length:** 10 |

1. You can categorize your customers into different groups such as category, agents, area. How to create a new agent/ area? Refer to the step below:

   ![custGroup](../../../static/img/usage/customer/customerBasicGuide/cust-group.png)

2. You can also insert more than one billing / delivery addresses (unlimited)

3. There are different options for viewing customer aging and customer statement

:::note

1. Customer Statement

* Brought Forward: Summary Statement

* Open Item: Detail Statement

2. Customer Aging

* Invoice Date: based on IV Date

* Due Date: Based on after due date (terms)

:::

### Note

![custNote](../../../static/img/usage/customer/customerBasicGuide/cust-note.png)

| **Field Name** | **Explanation & Properties** |
|----------------|------------------------------|
| **Account Open Date** | • Represents the creation date of the account.<br />**Field type:** Date |
| **Remark** | • A note that will appear in Inquiry → Account Inquiry.<br />**Example:** "Check payment refer to Ms Lee (012-345 67890)".<br />**Field type:** Alphanumerical<br />**Length:** 80 |
| **Reg No. (new)** | • Company’s new registration number.<br />**Field type:** Alphanumerical<br />**Length:** 80 |
| **Reg No. (old)** | • Use the magnifying icon to search for the old registration number.<br />**Field type:** Alphanumerical<br />**Length:** 80 |
| **Biz Nature** | • Customer’s business nature.<br />**Example:** Chemical Manufacturing, Car Service, etc.<br />**Field type:** Alphanumerical<br />**Length:** 100 |
| **Note** | • Used to record the customer knowledge base.<br />Supports **Date Stamp** feature for tracking.<br />**Field type:** Alphanumerical<br />**Length:** Rich Text |
| **Status** | • Indicates the operational state of the customer account:<br />- **Active** → Can create official documents and print Customer Statement.<br />- **Inactive** → Cannot create official documents and cannot print Customer Statement.<br />- **Suspend** → Cannot create official documents but can print Customer Statement.<br />- **Prospect** → Can create official documents and print Customer Statement.<br />- **Pending** → Can create official documents and print Customer Statement. |

### Tax

![custTax](../../../static/img/usage/customer/customerBasicGuide/cust-tax.png)

| **Field Name** | **Explanation & Properties** |
|-----------------|------------------------------|
| **Default Tax** | • Select a default tax code based on customer. |
| **Tax Area** | • Not applicable to Malaysia/Singapore. |
| **Sales Tax Area** | • Enter the company’s Sales Tax Number. |
| **Service Tax Area** | • Enter the company’s Service Tax Number. |
| **Exemption No** | • Enter the Sales Tax Exemption number received from customer.<br />**Field type:** Alphanumerical<br />**Length:** 50 |
| **Expiry Date** | • Set the expiry date for tax exemption.<br />• The customer will be tax exempted before the expiry date.<br />**Field type:** Date |

### Tariff Code Setting

* This setting set to customer who has supply the taxable goods under the Sales Tax (Person Exempted from Payment of Tax) Order 2018.

| **Field Name** | **Explanation & Properties** |
|-----------------|------------------------------|
| **Tariff** | • Add tariff code of taxable goods to be sold in exemption.<br />• You can find your tariff code at [https://ezhs.customs.gov.my/](https://ezhs.customs.gov.my/)<br />**Lookup:** Maintain Tariff<br />**Related Topic:** [Maintain Stock Item → Main Header](../../usage/stock/stock-guide#maintain-stock-item) |
| **Tax** | • Select an appropriate tax code that falls under the Person Exempted in Schedule A, B, and C.<br />**Schedule A tax code:** SE<br />**Schedule B tax code:** SEB<br />**Schedule C tax codes:** SEC1, SEC2, SEC3, SEC4, SEC5<br />**Lookup:** Maintain Tax |

* Press **SAVE** button once you are done

After Saving, you should see all your customer's information on this screen.

![custAfterSave](../../../static/img/usage/customer/customerBasicGuide/cust-after-save.png)

## Customer Code Format

* Customer code are generated AUTOMATICALLY after pressing the SAVE button.

>IMPORTANT :
>
>1. Every customer code is unique.
>2. If the system found there is a duplicate code trying to save, users will be notified with a warning message.
>See screenshot below.
>

![custDuplicatedCode](../../../static/img/usage/customer/customerBasicGuide/cust-duplicated-code.png)

* You can set the customer code format via Tools | Options...(Customer). See screenshot below.

![custCodeFormat](../../../static/img/usage/customer/customerBasicGuide/cust-code-format.png)

* Explanation of the Customer Code Format:

![custCodeFormatExplain](../../../static/img/usage/customer/customerBasicGuide/cust-code-format-explain.png)

* For Example

| Company Name | Customer Control Acc | Format        | Result       |
|--------------|-----------------------|---------------|--------------|
| ABCD SDN BHD | 301-000              | %.1s-%.1s%.1d | 3-A-1        |
| ABCD SDN BHD | 301-000              | %.2s-%.2s%.2d | 30-AB-01     |
| ABCD SDN BHD | 301-000              | %.3s-%.3s%.3d | 301-ABC-001  |
| ABCD SDN BHD | 301-000              | %.4s-%.4s%.4d | 301--ABCD-0001 |

## Advance Credit Control

> This is a **paid module**.

* Credit Control is used to manage the customer outstanding within the specific overdue and credit limit given. See screenshot below.

![custCreditControl](../../../static/img/usage/customer/customerBasicGuide/cust-credit-control.png)

>IMPORTANT :
>
>1. Depends on the user access rights to the Customer Credit Control.
>2. Override credit limit can be granted in the user access control.
>

### Credit/Overdue Limit

* Credit limit is the limit to set based on the total outstanding.
* Overdue limit is the limit to set based on the overdue outstanding only.
* Tick "Add PD Cheque to Credit Limit" to include any post dated payment to increase the credit limit.

### Exceed Credit/Overdue Limit

:::note Credit Control
Can be applied to the following document types:

1. QT - Quotation
2. SO - Sales Order
3. DO - Delivery Order
4. IV - Sales Invoice
5. CS - Cash Sales
6. DN - Debit Note
:::

* You have to tick "Apply To" in order to set the further action (e.g. unblock, block or override) to control the exceed credit and overdue limit. See screenshot below:

![credContAction](../../../static/img/usage/customer/customerBasicGuide/cred-cont-action.png)

| Control Type          | Action   | ALLOW EXCEED        |
|-----------------------|----------|---------------------|
| Exceed Credit Limit   | Unblock  | YES                 |
| Exceed Credit Limit   | Block    | NO                  |
| Exceed Credit Limit   | Override | PASSWORD REQUIRED   |
| Exceed Overdue Limit  | Unblock  | YES                 |
| Exceed Overdue Limit  | Block    | NO                  |
| Exceed Overdue Limit  | Override | PASSWORD REQUIRED   |

:::note
>**Unblock** – No restrictions
>
>**Block** – Blocked for all users
>
>**Override** – Certain users which have access rights can key in their username & password to override.
>
>**Suspended** – Blocked with suspended message
>
:::

### Suspended

* You have to tick "Apply To" any document type in order to tick the SUSPENDED.
* At the same time, you can enter the suspended message to prompt the user when they try to save the document. See screenshot below:

![suspend-CreditControl](../../../static/img/usage/customer/customerBasicGuide/suspend-credit-control.png)

## Customer Invoice

### Customer Invoice vs Sales Invoice

The differences between a Customer Invoice and a Sales Invoice are as follows:

|**Customer Invoice**| **Sales Invoice**|
|---|---|
|• Shows only the accounts code and does not show Qty / Unit Price.| • Linked to the stock and account modules. Hence, we advise users who need to key in stock items to use Sales Invoice. Once the information in the Sales Invoice is updated, the information in the Customer Invoice will automatically be updated by the system.|

![custInvoiceEntry](../../../static/img/usage/customer/customerBasicGuide/cust-invoice-entry.png)

### Create a new Customer Invoice

   1. **Customer** | **Customer Invoice** | **New**

   2. Select **Customer Code** | insert transaction and amount.

   3. **Save**

        ![saveCustInvoiceEntry](../../../static/img/usage/customer/customerBasicGuide/save-cust-invoice-entry.png)

## Customer Payment

### Local Bank Payment

   :::info
   Watch tutorial video here: [Youtube](https://www.youtube.com/watch?v=IjHX5ys846I&feature=youtu.be)
   :::

   1. **Customer** | **Customer Payment** | **New**

   2. Select your **Customer**

   3. Select the **bank for your account and cheque no** if applicable

   4. Key in the **customer payment amount**

   5. **Tick the corresponding invoice/debit note to be knocked off**

    ![45](../../../static/img/usage/customer/customerBasicGuide/45.png)

### Post Dated Cheque

   1. Search for the payment that you want to edit, click on **Edit**, right click on Customer Payment, you will see **Set Posting Date**

   ![46](../../../static/img/usage/customer/customerBasicGuide/46.png)

   ![47](../../../static/img/usage/customer/customerBasicGuide/47.png)

### Bounced Cheque

   1. Search for the payment that you want to edit, click on **Edit**, right click on Customer Payment, you will see **Bounced Status**

      ![48](../../../static/img/usage/customer/customerBasicGuide/48.png)

      ![49](../../../static/img/usage/customer/customerBasicGuide/49.png)

      After bounced, system will auto revert the payment out, you can view your ledger.

      ![50](../../../static/img/usage/customer/customerBasicGuide/50.png)

## Customer Credit Note

If the situation involves return stock from customer, please do Sales Credit Note and knock off it in Customer Credit Note as below step.

1. **Customer** | **Customer Credit Note**

2. **Edit** | Click **Yes**

3. **Knocked off accordingly**.

   ![51](../../../static/img/usage/customer/customerBasicGuide/51.png)

   If it does not involve with returned stock, e.g. discount given with

   1. **Customer** | **Customer Credit Note** | **New CN**

   2. **New** | Select **Customer** | Select **GL Account** | **Amount**

   3. **Knocked off accordingly**.

   ![52](../../../static/img/usage/customer/customerBasicGuide/52.png)

## Customer Refund

You can use this document to refund a customer. You can knock off with Customer Payment or Credit Note which have unapplied amounts.

1. **Customer** | **Customer Refund**.

2. Choose the **Customer** | Select your **Payment Method** | **Enter your Refund Amount**

3. **Knock off the payment or credit note and save**.

    ![54](../../../static/img/usage/customer/customerBasicGuide/54.png)

## Customer Contra

If you have a customer who is also a supplier, you may want to offset the outstanding customer and supplier invoices. This is known as a **contra entry**. You can offset the two invoices by using Customer Contra and Supplier Contra. This means that when you record the invoices as being paid, it will not affect your current bank account balance.

>**Scenario:**
>
>If you have an outstanding sales invoice for RM200 and a purchase invoice for RM150 for the same customer or company, the actual amount owed to you is RM50 and the contra entry amount is RM150.

### Make sure you have a valid `Contra Account`

1. **Tools** | **Options**

    ![1](../../../static/img/usage/customer/customerBasicGuide/1.png)

2. **General Ledger** | Make sure you have selected a valid Contra Account

    ![2](../../../static/img/usage/customer/customerBasicGuide/2.png)

### Contra Entry

   1. Go **Customer** | **Customer Contra**

      ![3](../../../static/img/usage/customer/customerBasicGuide/3.png)

   2. Press on **NEW**

      ![4](../../../static/img/usage/customer/customerBasicGuide/4.png)

        2a. Select your Customer Code

        2b. Enter your Contra Amount

        2c. Knock off your Invoice

        2d. Press on **SAVE** Button

        ![5](../../../static/img/usage/customer/customerBasicGuide/5.png)

   3. The system will automatically generate a Contra Number, jot down the number and go to **Supplier | Supplier Contra** to edit it.

      ![6](../../../static/img/usage/customer/customerBasicGuide/6.png)

   4. Look for the Same Contra Number (refer step 2e), EDIT it.

    ![7](../../../static/img/usage/customer/customerBasicGuide/7.png)

      4a. Select your **Supplier**

      4b. Enter Contra Amount (Must be same as Customer Contra Amount)

      4c. Knock off your Supplier Invoice

      4d. Press on **SAVE** Button

      ![8](../../../static/img/usage/customer/customerBasicGuide/8.png)

After you post the contra entry:

* The outstanding amount on the sales invoice is RM50.

* The purchase invoice is fully knock off.

* When you receive the RM50, you can record this against the sales invoice using your normal Customer Payment entry.
