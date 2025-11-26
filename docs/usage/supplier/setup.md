---
sidebar_position: 1
title: Setup
description: Basic Supplier Setup
slug: /usage/supplier/Setup
tags: ["SQL Account", "Usage", "Supplier"]
---

## Maintain Supplier

To maintain the supplier profile data such as addresses, phone numbers, fax, email, contact persons, credit limits, credit
terms, etc. In other words, it is your supplier contacts list.

![des-maintain-supplier-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-1.jpg)

### New Supplier

To create NEW supplier, CLICK on NEW button. See screenshot below.

![des-maintain-supplier-new-supplier-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-new-supplier-1.jpg)

You will get a blank form to be filled in with the supplier data.

![des-maintain-supplier-new-supplier-2](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-new-supplier-2.jpg)

You may start input the following fields:

| **Field Name**       | **Field Type**                                                                                       | **Length** | **Explanation**                                                                                       |
|-----------------------|------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------|
| Company              | Alphanumerical                                                                                        | 100        | Input the supplier billing company name.                                                              |
| Description 2 (under Company) | Alphanumerical                                                                                        | 100        | An optional field where you can enter Chinese translated name, former company name, company register no, etc. |
| Control A/c          | Lookup from Maintain Accounts (Special Type: Supplier Control Account)                                | 10         | Select an appropriate Supplier Control Account to be posted to GL when supplier documents are created. |
| Code                 | Alphanumerical                                                                                        | 10         | AUTO/MANUAL generate the Supplier Code.                                                               |
| Cust Category        | Lookup from Maintain Company Category                                                                 | 15         | Categorize your supplier for reporting purpose.                                                       |

#### General

![des-maintain-supplier-general-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-general-1.jpg)

| **Field Name**  | **Field Type**                               | **Length**              | **Explanation**                                                                 |
|------------------|----------------------------------------------|-------------------------|---------------------------------------------------------------------------------|
| Branch Name      | Alphanumerical                               | 100                     | You may maintain multiple sets of addresses by differentiating the Branch Name<br />Default Branch Name: BILLING |
| Address (4 lines)| Alphanumerical                               | 40 (each line)          | Input the company addresses.                                                    |
| Attention        | Alphanumerical                               | 70                      | Input the contact person.                                                       |
| Phone 1 & 2      | Alphanumerical                               | 30                      | Input the telephone number.                                                     |
| Fax 1 & 2        | Alphanumerical                               | 30                      | Input the fax number.                                                           |
| Email            | Alphanumerical                               | 60                      | Input the email.                                                                |
| Area             | Lookup from Maintain Area                    | 10                      | Select a default Area.                                                          |
| Agent            | Lookup from Maintain Agent                   | 10                      | Select a default Agent.                                                         |
| Currency         | Lookup from Maintain Currency                | 6                       | Select a default Currency.                                                      |
| Credit Terms     | Lookup from Maintain Terms                   | 10                      | Select a default Terms.                                                         |
| Credit Limit     | Numeric                                      | —                       | Set the credit limit.                                                           |
| Statement        | Option                                       | —                       | Select a default statement type, e.g., Open Item or Brought Forward. <br />Default: Open Item |
| Aging On         | Option                                       | —                       | Select a default Aging type, e.g., Invoice Date or Due Date. Default: Invoice Date |
| Price Tag        | Lookup from Maintain Stock Price Tag         | 10                      | Set the price tag to the items.                                                 |

#### Note

![des-maintain-supplier-note-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-note-1.jpg)

| **Field Name**      | **Field Type**   | **Length**  | **Explanation**                                                                 |
|----------------------|------------------|-------------|---------------------------------------------------------------------------------|
| Account Open Date    | Date             | —           | Creation date.                                                                  |
| Remark               | Alphanumerical   | 80          | This remark will show in Inquiry → Account Inquiry.                             |
| Biz Nature           | Alphanumerical   | 100         | Input supplier business nature. For example, Chemical Manufacturing, Car Service, etc. |
| Note                 | Alphanumerical   | Rich Text   | Record the supplier knowledge base. You can use the "Date Stamp".               |
| Status               | Option           | —           | See **Status Options** table below.                                             |

| **Status** | **Explanation**                                                                 |
|------------|---------------------------------------------------------------------------------|
| Active     | Allow to create official documents and select to print Supplier Statement.      |
| Inactive   | Not allow to create official documents, but cannot select to print Supplier Statement. |
| Suspend    | Not allow to create official documents, but can select to print Supplier Statement. |
| Prospect   | Allow to create official documents and select to print Supplier Statement.      |
| Pending    | Allow to create official documents and select to print Supplier Statement.      |

#### Tax

![des-maintain-supplier-tax-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-tax-1.jpg)

| **Field Name**  | **Explanation & Properties**                                                                 |
|------------------|-----------------------------------------------------------------------------------------------|
| Default Tax      | Select a default tax code based on supplier.                                                  |
| Tax Area         | Not applicable to Malaysia/Singapore.                                                         |
| Exemption No     | • Input the Tax Exemption number applicable to your supplier.  |
| | • Field type: Alphanumerical.  |
| | • Length: 50 |
| Expiry Date      | Set an expiry date. |
| | • This will be tax exempted before the expiry date. |
| | • Field type: Date.       |

**Tariff Code Setting**
This setting set the supplier who has supply the taxable goods under the Sales Tax (Person Exempted from Payment of Tax) Order 2018.

| **Field Name** | **Explanation & Properties** |
|----------------|-------------------------------|
| Tariff         | • Add tariff code of taxable goods to be sold in exemption.  |
|                | • Lookup: [Maintain Tariff](../../usage/tools/guide#maintain-tariff)  |
|                | • Related Topic: [Maintain Stock Item → Main Header](../../usage/stock/stock-guide#maintain-stock-item) |
| Tax            | • Select an appropriate tax code that falls under the Person Exempted in **Schedule C ONLY** (must be declared in SST-02). |
|                | • Schedule C tax code: PEC1, PEC2, PEC3, PEC4, PEC5 |
|                | • Lookup: [Maintain Tax](../../usage/gst-and-sst/gst#maintain-tax) |

#### Bank Account

![des-maintain-supplier-bank-account-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-bank-account-1.jpg)

| **Field Name** | **Explanation & Properties** |
|----------------|-------------------------------|
| Bank           | Select the correct bank. |
| Account No     | Key in the account number of the supplier. |
| Account Name   | Insert the name. |
| ID Type        | Select the ID type that you want. |
| ID             | Insert the ID. |
| Active         | • Tick it when active.  |
|                | • Untick when inactive. |

### Edit Supplier

You can EDIT the supplier, CLICK on EDIT button. See screenshot below.

![des-maintain-supplier-edit-supplier-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-edit-supplier-1.jpg)

:::note

 1. Users are able to EDIT the supplier data depends on the user access rights granted.
 2. Any EDITING the system will be audited (logged) with changes made.

:::

### Save Supplier

You have to SAVE the supplier data before can be used. See screenshot below.

![des-maintain-supplier-save-supplier-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-save-supplier-1.jpg)

### Delete Supplier

You can DELETE the unwanted supplier data. See screenshot below.

![des-maintain-supplier-delete-supplier-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-delete-supplier-1.jpg)

:::note

 1. User able to DELETE the supplier data depends on the user access rights granted.

:::

### Supplier Code Format

Supplier code can be AUTO generate or overwrite it manually. See screenshot below.

![des-maintain-supplier-supplier-code-format-1](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-supplier-code-format-1.jpg)

:::note Important

 1. Every supplier code is unique.
 2. If the system found there is a duplicate code trying to save, users will be notified with a warning message.

:::

You can set the supplier code format via Tools | Options...(Supplier). See screenshot below.

![des-maintain-supplier-supplier-code-format-2](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-supplier-code-format-2.jpg)

Explanation of the Supplier Code Format:

![des-maintain-supplier-supplier-code-format-3](../../../static/img/usage/supplier/supplier-guide-images/maintain-supplier-supplier-code-format-3.jpg)

For example,

| **Company Name** | **Customer Control Acc** | **Format**     | **Result**     |
|------------------|---------------------------|----------------|----------------|
| ABCD SDN BHD     | 401-000                   | %.1s-%.1s%.1d  | 4-A-1          |
| ABCD SDN BHD     | 401-000                   | %.2s-%.2s%.2d  | 40-AB-01       |
| ABCD SDN BHD     | 401-000                   | %.3s-%.3s%.3d  | 401-ABC-001    |
| ABCD SDN BHD     | 401-000                   | %.4s-%.4s%.4d  | 401--ABCD-0001 |

## Supplier Invoice (SI)

- General invoice received from suppliers likes purchase of service, insurance, stationery or any non-stock control billing.
- Besides that, you can check the invoices status such as outstanding and payment history.

![des-supplier-invoice-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-1.jpg)

### Basic Entry (SI)

1. Click on New button.
2. See the New Supplier Invoice entry form screenshot below.

   ![des-supplier-invoice-entry-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-entry-1.jpg)

3. Select the Supplier Code. You direct key in and search by either supplier code or name.
4. Input the Purchase A/c and amount to be debit.
5. Below is the example of the entry created:

   ![des-supplier-invoice-entry-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-entry-2.jpg)

   | Account                  | DR (RM)  | CR (RM)  |
   |---------------------------|----------|----------|
   | Stationery               | 500.00   |          |
   | Supplier Control Account |          | 500.00   |

### Project (SI)

- There are 2 types of project you need to be take note.
  1) Document Project
  2) Detail Project
- For document project, you need to point to More section (on the left side bar).
- For detail project, you have to insert the project column out from Field Chooser.

![des-supplier-invoice-project-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-project-1.jpg)

| **Label** | **Types**          | **Explanation**                                             |
|-----------|--------------------|-------------------------------------------------------------|
| A         | Document Project   | It represents the project for a document to be credited.    |
| B         | Detail Project     | It represents the project for individual GL Account to be debited. |

### Attachment (SI)

- It is very useful to attach any supporting documents to an invoice.
- In future, you are able to retrieve and refer the attachment file easily.

![des-supplier-invoice-attachment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-attachment-1.jpg)

1) You have to point to the attachment section.
2) Click on ( + ) button to insert the filename path.
3) See the sample screenshot below.

![des-supplier-invoice-attachment-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-attachment-2.jpg)

### Note (SI)

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.
3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

   ![des-supplier-invoice-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-note-1.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

   ![des-supplier-invoice-note-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-note-2.jpg)

### Invoice description (SI)

1. To show the document description in Supplier Statement, e.g., Purchase-Stationery April 2015.

   ![des-supplier-invoice-invoice-description-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-invoice-description-1.jpg)

2. Sample of supplier statement screenshot below.

   ![des-supplier-invoice-invoice-description-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-invoice-invoice-description-2.jpg)

## Supplier Payment (SP)

- To record the payment amount to Suppliers.
- To off-set against the outstanding supplier invoices.

![des-supplier-payment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-1.jpg)

### Basic Entry (SP)

1. Click on New button.
2. See the New Supplier Payment entry form screenshot below.

   ![des-supplier-payment-entry-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-entry-1.jpg)

3. Select the Supplier Code. Direct key in and search by either Supplier code or name.
4. Select the Payment Method (bank or cash account) in Payment By.
5. Enter the Paid Amount (follow the bank account currency).
6. Below is the example of the entry created:

   ![des-supplier-payment-entry-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-entry-2.jpg)

   **Double Entry will be:-**

   | **Account**             | **DR (RM)** | **CR (RM)** |
   |--------------------------|-------------|-------------|
   | Supplier Control Acc     | 2,500.00    |             |
   | Bank Account             |             | 2,500.00    |

7. Enter Bank Charges if there is a bank charges.

   ![des-supplier-payment-entry-3](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-entry-3.jpg)

8. It will auto post the following double entry:-

   | **Account**     | **DR (RM)** | **CR (RM)** |
   |-----------------|-------------|-------------|
   | Bank Charges    | 2.00        |             |
   | Bank Account    |             | 2.00        |

9. Enter the cheque number, cash or TT into Cheque No. field.

   ![des-supplier-payment-entry-4](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-entry-4.jpg)

### Knock-Off (SP)

Purpose to knock-off the invoices:

1. To show the outstanding invoices in Supplier Aging Report.
2. To indicate the payment knock-off the invoices in Supplier Statement.
3. To remove / recover from the GST Bad Debt Relief on outstanding more than 6 months

#### Partial Knock-Off (SP)

1. You can enter the knock-off amount into Pay column (auto tick).
2. Unapplied Amt will be reduced by the knock-off amount entered.

   ![des-supplier-payment-partial-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-partial-knockoff-1.jpg)

#### Document Knock-Off (SP)

1. You can tick on the outstanding documents.
2. Unapplied Amt will be reduced by the knock-off amount ticked.

   ![des-supplier-payment-document-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-document-knockoff-1.jpg)

#### Random Knock-Off (SP)

1. You can click on the Pay column. It will auto tick on the outstanding documents.
2. Unapplied Amt will be reduced according to the outstanding balance.

   ![des-supplier-payment-random-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-random-knockoff-1.jpg)

:::note
 Unapplied amount shows the Supplier payment amount not allocated/knock-off against any outstanding invoices and debit note.
:::

### Attachment (SP)

- It is very useful to attach any supporting documents.
- In future, you are able to retrieve and refer the attachment file easily.

![des-supplier-payment-attachment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

   ![des-supplier-payment-attachment-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-attachment-2.jpg)

### Note (SP)

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.

   ![des-supplier-payment-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-note-1.jpg)

3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

   ![des-supplier-payment-note-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-note-2.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

   ![des-supplier-payment-note-3](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-note-3.jpg)

### Description (SP)

To show the Supplier payment description in the Supplier Statement, e.g., Payment For Jan & Feb 2016.

![des-supplier-payment-description-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-description-1.jpg)

Sample of Supplier statement screenshot below.

![des-supplier-payment-description-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-payment-description-2.jpg)

## Supplier Debit Note (SDN)

- General debit note received from Supplier likes the adjustment for undercharged to purchase of stationery, services, insurance, or any non-stock control billing.
- Besides that, you can check the debit note status such as outstanding and payment history.

![des-supplier-debit-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-1.jpg)

### Basic Entry (SDN)

1. Click on New button.
2. See the New Supplier Debit Note entry form screenshot below.

   ![des-supplier-debit-note-entry-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-entry-1.jpg)

3. Select the Supplier Code. You direct key in and search by either supplier code or name.
4. Input the Purchase A/c and amount to be debit.
5. Below is the example of the entry created:

   ![des-supplier-debit-note-entry-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-entry-2.jpg)

   **Double Entry will be:-**

   | **Account**               | **DR (RM)** | **CR (RM)** |
   |----------------------------|-------------|-------------|
   | Stationery                 | 500.00      |             |
   | Supplier Control Account   |             | 500.00      |

### Project (SDN)

- There are 2 types of project you need to be take note.
  1. Document Project
  2. Detail Project
- For document project, you need to point to More section (on the left side bar).
- For detail project, you have to insert the project column out from Field Chooser.

![des-supplier-debit-note-project-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-project-1.jpg)

| **Label** | **Types**        | **Explanation**                                                  |
|-----------|------------------|------------------------------------------------------------------|
| A         | Document Project | It represents the project for a document to be credited.         |
| B         | Detail Project   | It represents the project for individual GL Account to be debited. |

### Attachment (SDN)

- It is very useful to attach any supporting documents to a debit note.
- In future, you are able to retrieve and refer the attachment file easily.

![des-supplier-debit-note-attachment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

   ![des-supplier-debit-note-attachment-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-attachment-2.jpg)

### Note (SDN)

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.
3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

   ![des-supplier-debit-note-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-note-1.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

   ![des-supplier-debit-note-note-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-note-2.jpg)

### D/N Description (SDN)

1. To show the document description in Supplier Statement, e.g., Undercharged-Stationery April 2015.

   ![des-supplier-debit-note-dn-description-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-dn-description-1.jpg)

2. Sample of supplier statement screenshot below.

   ![des-supplier-debit-note-dn-description-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-debit-note-dn-description-2.jpg)

## Supplier Credit Note (SCN)

- Credit note is used to reduce and offset the outstanding invoices or debit note.
- For those Credit Note created from Purchase module, you are required to offset against the outstanding invoices/debit note here.
- You can check any unapplied amount for a credit note. Unapplied amount meaning the credit note amount must find the invoice / debit note to knock-off.

![des-supplier-credit-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-1.jpg)
 
### Basic Entry (SCN)

1. Click on New button.
2. See the New Supplier Credit Note entry form screenshot below.

   ![des-supplier-credit-note-entry-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-entry-1.jpg)

3. Select the Supplier Code. You direct key in and search by either supplier code or name.
4. Input the Purchase A/c and amount to be credit.
5. Below is the example of the entry created:

   ![des-supplier-credit-note-entry-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-entry-2.jpg)

   **Double Entry will be:-**

   | **Account**            | **DR (RM)** | **CR (RM)** |
   |-------------------------|-------------|-------------|
   | Supplier Control Acc    | 500.00      |             |
   | Purchase Returns        |             | 500.00      |

### Unapplied Amount (SCN)

- Unapplied amount shows the credit note amount not allocated/knock-off against any outstanding invoices and debit note.
- It will remains in supplier aging report show as negative amount (-).

![des-supplier-credit-note-unapplied-amount-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-unapplied-amount-1.jpg)

### Knock-Off Outstanding (SCN)

- To knock-off the outstanding invoice/debit note, TICK the checkbox beside the pay column.
- You can direct input the pay amount into pay column.

![des-supplier-credit-note-knockoff-outstanding-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-knockoff-outstanding-1.jpg)

### Project (SCN)

- There are 2 types of project you need to be take note.
  1. Document Project
  2. Detail Project
- For document project, you need to point to More section (on the left side bar).
- For detail project, you have to insert the project column out from Field Chooser.

![des-supplier-credit-note-project-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-project-1.jpg)

| **Label** | **Types**        | **Explanation**                                                  |
|-----------|------------------|------------------------------------------------------------------|
| A         | Document Project | It represents the project for a document to be debited.          |
| B         | Detail Project   | It represents the project for individual GL Account to be credited. |

### Attachment (SCN)

- It is very useful to attach any supporting documents to a credit note.
- In future, you are able to retrieve and refer the attachment file easily.

![des-supplier-credit-note-attachment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

   ![des-supplier-credit-note-attachment-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-attachment-2.jpg)

### Note (SCN)

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.
3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

   ![des-supplier-credit-note-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-note-1.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

   ![des-supplier-credit-note-note-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-note-2.jpg)

### C/N Description (SCN)

1. To show the document description in Supplier Statement, e.g., Overcharged-Stationery April 2015. 

   ![des-supplier-credit-note-cn-description-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-cn-description-1.jpg)

2. Sample of supplier statement screenshot below.

   ![des-supplier-credit-note-cn-description-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-cn-description-2.jpg)

### Foreign Exchange Currency Gain/Loss (SCN)

- Difference in the foreign currency exchange rate will AUTO post the FOREX Gain/Loss entry into GL.
- Posting date can be changed to reflect the FOREX Gain/Loss for a month.

![des-supplier-credit-note-gainloss-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-credit-note-gainloss-1.jpg)

## Supplier Refund (SR)

- To receive the refund for the amount over paid to supplier.
- To off-set against the unapplied amount for Supplier Payment and Credit Note.

![des-supplier-refund-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-1.jpg)

### Basic Entry (SR)

1. Click on New button.
2. See the New Supplier Refund entry form screenshot below.

   ![des-supplier-refund-entry-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-entry-1.jpg)

3. Select the Supplier Code. Direct key in and search by either Supplier code or name.
4. Select the Payment Method (bank or cash account) in Received In.
5. Enter the Refund Amount (follow the bank account currency).
6. Below is the example of the entry created:

   ![des-supplier-refund-entry-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-entry-2.jpg)

   **Double Entry will be:-**

   | **Account**            | **DR (RM)** | **CR (RM)** |
   |-------------------------|-------------|-------------|
   | Bank Acc               | 3,590.00    |             |
   | Supplier Control Acc    |             | 3,590.00    |

7. Enter Bank Charges if there is a bank charges.

   ![des-supplier-refund-entry-3](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-entry-3.jpg)

8. Let's say the bank charges = RM2.00; therefore, the double entry posting will be:-

   | **Account**      | **DR (RM)** | **CR (RM)** |
   |------------------|-------------|-------------|
   | Bank Charges     | 2.00        |             |
   | Bank Account     |             | 2.00        |

9. Enter the cheque number, cash or TT into Cheque No. field.

   ![des-supplier-refund-entry-4](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-entry-4.jpg)

### Knock-off (SR)

Purpose to knock-off the invoices:

1. To show the outstanding invoices in Supplier Aging Report.
2. To indicate the payment knock-off the invoices in Supplier Statement.

#### Partial Knock-Off (SR)

1. You can enter the knock-off amount into Pay column (auto tick).
2. Unapplied Amt will be reduced by the knock-off amount entered.

   ![des-supplier-refund-partial-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-partial-knockoff-1.jpg)

#### Document Knock-Off (SR)

1. You can tick on the outstanding documents.
2. Unapplied Amt will be reduced by the knock-off amount ticked.

   ![des-supplier-refund-document-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-document-knockoff-1.jpg)

#### Random Knock 0ff (SR)

1. You can click on the Pay column. It will auto tick on the outstanding documents.
2. Unapplied Amt will be reduced according to the outstanding balance.

   ![des-supplier-refund-random-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-random-knockoff-1.jpg)

   :::note
    Refund Unapplied amount shows the supplier refund amount not allocated/knock-off against any unapplied amount in supplier payment and credit note.
   :::

### Attachment (SR)

- It is very useful to attach any supporting documents.
- In future, you are able to retrieve and refer the attachment file easily.

![des-supplier-refund-attachment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

   ![des-supplier-refund-attachment-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-attachment-2.jpg)

### Note (SR)

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.

   ![des-supplier-refund-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-note-1.jpg)

3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

   ![des-supplier-refund-note-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-note-2.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

   ![des-supplier-refund-note-3](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-note-3.jpg)

### Description (SR)

To show the supplier refund description in the Supplier Statement, e.g., Refund For SC-00002 & PV-00004..

![des-supplier-refund-description-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-description-1.jpg)

Sample of supplier statement screenshot below.

![des-supplier-refund-description-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-refund-description-2.jpg)

## Supplier Contra (SC)

- To make settlement of the outstanding between both supplier and customer accounts without any monetary transactions.
- It will use an intermediate accounts known as Contra Account. This account balance must be ZERO.

![des-supplier-contra-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-1.jpg)

### Basic Entry (SC)

Assume that you have created the [Customer Contra](../../usage/customer/guide#customer-contra). You will found the same contra no. appeared in the Supplier Contra.

1. Highlight the Contra No to edit. Click on Edit button.
2. See the Supplier Contra entry from screenshot below.

   ![des-supplier-contra-entry-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-entry-1.jpg)

3. Select the Supplier Code. Direct key in and search by either supplier code or name.
4. Enter the Contra Amount (follow the supplier currency).
5. Below is the example of the entry created:

   ![des-supplier-contra-entry-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-entry-2.jpg)

   **Double Entry will be:-**

   | **Account**             | **DR (RM)** | **CR (RM)** |
   |--------------------------|-------------|-------------|
   | Supplier Control Acc     | 1,500.00    |             |
   | Contra Acc               |             | 1,500.00    |

:::note TIPS

To ensure the contra account has set properly. [Contra Account](../../usage/tools/guide#options)

:::

### Knock-off (SC)

Purpose to knock-off the invoices:

1. To show the outstanding invoices in Supplier Aging Report.
2. To indicate the contra knock-off the invoices in Supplier Statement.

#### Partial Knock-Off (SC)

1. You can enter the knock-off amount into Pay column (auto tick).
2. Unapplied Amt will be reduced by the knock-off amount entered.

   ![des-supplier-contra-partial-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-partial-knockoff-1.jpg)

#### Document Knock-Off (SC)

1. You can tick on the outstanding documents.
2. Unapplied Amt will be reduced by the knock-off amount ticked.

   ![des-supplier-contra-document-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-document-knockoff-1.jpg)

#### Random Knock-Off (SC)

1. You can click on the Pay column. It will auto tick on the outstanding documents.
2. Unapplied Amt will be reduced according to the outstanding balance.

   ![des-supplier-contra-random-knockoff-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-random-knockoff-1.jpg)

   :::note

   Refund unapplied amount shows the supplier contra amount not allocated/knock-off against any outstanding supplier invoices and debit note.

   :::

### Attachment (SC)

- It is very useful to attach any supporting documents.
- In future, you are able to retrieve and refer the attachment file easily.

![des-supplier-contra-attachment-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

   ![des-supplier-contra-attachment-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-attachment-2.jpg)

### Note (SC)

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.

   ![des-supplier-contra-note-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-note-1.jpg)

3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

   ![des-supplier-contra-note-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-note-2.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

   ![des-supplier-contra-note-3](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-note-3.jpg)

### Description (SC)

To show the supplier contra description in the Supplier Statement, e.g., Contra IV-00005 .

![des-supplier-contra-description-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-description-1.jpg)

Sample of supplier statement screenshot below.

![des-supplier-contra-description-2](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-description-2.jpg)
 
### GL Ledger - Contra Account

1. Select the date range.
2. Select the account code, e.g., 450-000 CONTRA ACCOUNT.
3. Tick on General Ledger.
4. Click Apply button.
5. Example of the Contra Account ledger as shown below.

   ![des-supplier-contra-contra-account-1](../../../static/img/usage/supplier/supplier-guide-images/supplier-contra-contra-account-1.jpg)

## InterBank GIRO Module

To use the **Interbank GIRO** feature, you must have the **Interbank GIRO** module enabled in SQL Account.

![des-interbank-giro-requirement](../../../static/img/usage/supplier/supplier-guide-images/interbank-giro-requirement.png)

### Bank File Format

The following shows the list of bank file formats that are currently supported.

![des-giro-bank-file-format](../../../static/img/usage/supplier/supplier-guide-images/giro-bank-file-format.png)

### Payment Method

1. Click the **Bank Info** button.

   ![des-giro-payment-method-1](../../../static/img/usage/supplier/supplier-guide-images/giro-payment-method-1.png)

2. Choose a **bank**.

   ![des-giro-payment-method-2](../../../static/img/usage/supplier/supplier-guide-images/giro-payment-method-2.png)

3. Click the **OK** button.

   ![des-giro-payment-method-3](../../../static/img/usage/supplier/supplier-guide-images/giro-payment-method-3.png)

4. The bank you have chosen may have **more than one file format**, please ensure you have selected the **correct file format**.

   ![des-giro-payment-method-4](../../../static/img/usage/supplier/supplier-guide-images/giro-payment-method-4.png)

5. Enter the **bank information**, click the **OK** button, then Save.

   ![des-giro-payment-method-5](../../../static/img/usage/supplier/supplier-guide-images/giro-payment-method-5.png)

### Supplier Bank Account

1. Add a **bank account**, then Save.

   ![des-giro-supplier-bank-account-1](../../../static/img/usage/supplier/supplier-guide-images/giro-supplier-bank-account-1.png)

### Supplier Payment Method

1. Select **Supplier Bank** from the drop-down list.

   ![des-giro-supplier-payment-method-1](../../../static/img/usage/supplier/supplier-guide-images/giro-supplier-payment-method-1.png)

2. Choose the **payment method** that contains **bank information**, then Save.

   ![giro-supplier-payment-method-2](../../../static/img/usage/supplier/supplier-guide-images/giro-supplier-payment-method-2.png)

### Print Supplier Document (Interbank GIRO) Listing

1. Click the **GIRO** button.

   ![des-giro-print-supplier-document-listing-1](../../../static/img/usage/supplier/supplier-guide-images/giro-print-supplier-document-listing-1.png)

2. Enter additional information, then click the **Save** button.

   ![des-giro-print-supplier-document-listing-2](../../../static/img/usage/supplier/supplier-guide-images/giro-print-supplier-document-listing-2.png)

3. You can now upload the bank instruction file to the bank host.

### Excel Format

By default, the system automatically saves an Excel file in XLSX format. Some banks (**Alliance Bank, Public Bank, RHB**) require the bank instruction file in XLS format. First, you must have **Microsoft Excel 2007** or a version above installed on your machine.

Then, **open** the Excel file and **save it as XLS** format.
