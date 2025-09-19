---
sidebar_position: 1
title: Setup
description: Basic Supplier Setup
slug: /usage/supplier/Setup
tags: ["SQL Account", "Usage", "Supplier"]
---

## Maintain Supplier

To keep the Supplier profile data such as addresses, telephone, fax, email, contact person, credit limits, credit
terms, etc. In other words, it is your supplier contacts list.

![Maintain-Supplier1](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-1.jpg)

### New Supplier

To create NEW supplier, CLICK on NEW button. See screenshot below.

![Maintain-Supplier2](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-NewSupplier-1.jpg)

You will get a blank form to be fill-in with the supplier data.

![Maintain-Supplier3](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-NewSupplier-2.jpg)

You may start input the following fields:

| **Field Name**       | **Field Type**                                                                                       | **Length** | **Explanation**                                                                                       |
|-----------------------|------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------|
| Company              | Alphanumerical                                                                                        | 100        | Input the supplier billing company name.                                                              |
| Description 2 (under Company) | Alphanumerical                                                                                        | 100        | Optional field recommended to input Chinese translated name, former company name, company register no, etc. |
| Control A/c          | Lookup from Maintain Accounts (Special Type: Customer Control Account)                                | 10         | Select an appropriate Supplier Control Account to be posted to GL when customer documents are created. |
| Code                 | Alphanumerical                                                                                        | 10         | AUTO/MANUAL generate the Supplier Code.                                                               |
| Cust Category        | Lookup from Maintain Company Category                                                                 | 15         | Categorize your supplier for reporting purpose.                                                       |

#### General

![Maintain-Supplier4](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-General-1.jpg)

| **Field Name**  | **Field Type**                               | **Length**              | **Explanation**                                                                 |
|------------------|----------------------------------------------|-------------------------|---------------------------------------------------------------------------------|
| Branch Name      | Alphanumerical                               | 100                     | You may maintain multiple sets of addresses by differentiating the Branch Name. Default Branch Name: BILLING |
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
| Statement        | Option                                       | —                       | Select a default statement type, i.e., Open Item or Brought Forward. Default: Open Item |
| Aging On         | Option                                       | —                       | Select a default Aging type, i.e., Invoice Date or Due Date. Default: Invoice Date |
| Price Tag        | Lookup from Maintain Stock Price Tag         | 10                      | Set the price tag to the items.                                                 |

#### Note

![Maintain-Supplier5](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-Note-1.jpg)

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

![Maintain-Supplier6](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-Tax-1.jpg)

| **Field Name**  | **Explanation & Properties**                                                                 |
|------------------|-----------------------------------------------------------------------------------------------|
| Default Tax      | Select a default tax code based on supplier.                                                  |
| Tax Area         | Not applicable to Malaysia/Singapore.                                                         |
| Exemption No     | • Input the Tax Exemption number applicable to your supplier.  
| | • Field type: Alphanumerical.  
| | • Length: 50 |
| Expiry Date      | Set an expiry date.
| | • This will be tax exempted before the expiry date.
| | • Field type: Date.       |

**Tariff Code Setting**
This setting set the supplier who has supply the taxable goods under the Sales Tax (Person Exempted from Payment of Tax) Order 2018.

| **Field Name** | **Explanation & Properties** |
|----------------|-------------------------------|
| Tariff         | • Add tariff code of taxable goods to be sold in exemption.  |
|                | • Lookup: [Maintain Tariff](../../usage/Tools/Tools.md#maintain-tariff)  |
|                | • Related Topic: [Maintain Stock Item → Main Header](../../usage/stock/stock-guide#maintain-stock-item) |
| Tax            | • Select an appropriate tax code that falls under the Person Exempted in **Schedule C ONLY** (must be declared in SST-02). |
|                | • Schedule C tax code: PEC1, PEC2, PEC3, PEC4, PEC5 |
|                | • Lookup: [Maintain Tax](../../usage/gst-and-sst/gst#maintain-tax) |

#### Bank Account

![Maintain-Supplier7](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-BankAccount-1.jpg)

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

![Maintain-Supplier8](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-EditSupplier-1.jpg)

:::note
 
 1. User able to EDIT the supplier data depends on the user access rights granted.
 2. Any EDITING the system will be audited (logged) with changes made.

:::

### Save Supplier

You have to SAVE the supplier data before can be used. See screenshot below.

![Maintain-Supplier9](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-SaveSupplier-1.jpg)

### Delete Supplier

You can DELETE the unwanted supplier data. See screenshot below.

![Maintain-Supplier10](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-DeleteSupplier-1.jpg)

:::note  
 1. User able to DELETE the supplier data depends on the user access rights granted.
:::

### Supplier Code Format

Supplier code can be AUTO generate or overwrite it manually. See screenshot below.

![Maintain-Supplier11](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-SupplierCodeFormat-1.jpg)

:::note Important
 1. Every supplier code is unique. 
 2. If the system found there is an duplicate code trying to save, users will be notify by warning message. See screenshot below.
:::

You can set the supplier code format via Tools | Options...(Supplier). See screenshot below.

![Maintain-Supplier12](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-SupplierCodeFormat-2.jpg)

Explanation of the Supplier Code Format:

![Maintain-Supplier13](../../../static/img/usage/supplier/supplier-guide-images/MaintainSupplier-SupplierCodeFormat-3.jpg)

For example,

| **Company Name** | **Customer Control Acc** | **Format**     | **Result**     |
|------------------|---------------------------|----------------|----------------|
| ABCD SDN BHD     | 401-000                   | %.1s-%.1s%.1d  | 4-A-1          |
| ABCD SDN BHD     | 401-000                   | %.2s-%.2s%.2d  | 40-AB-01       |
| ABCD SDN BHD     | 401-000                   | %.3s-%.3s%.3d  | 401-ABC-001    |
| ABCD SDN BHD     | 401-000                   | %.4s-%.4s%.4d  | 401--ABCD-0001 |



## Supplier Invoice

- General invoice received from supplies likes purchase of service, insurance, stationery or any non-stock control billing.
- Besides that, you can check the invoices status such as outstanding and payment history.

![Supplier-Invoice1](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-1.jpg)

### Basic Entry
  
1. Click on New button.
2. See the New Supplier Invoice entry form screenshot below.

![Supplier-Invoice2](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Entry-1.jpg)

3. Select the Supplier Code. You direct key-in and search by either supplier code or name.
4. Input the Purchase A/c and amount to be debit.
5. Below is the example of the entry created:

![Supplier-Invoice3](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Entry-2.jpg)

| Account                  | DR (RM)  | CR (RM)  |
|---------------------------|----------|----------|
| Stationery               | 500.00   |          |
| Supplier Control Account |          | 500.00   |

### Project

- There are 2 types of project you need to be take note.
  1) Document Project
  2) Detail Project
- For document project, you need to point to MORE section (on the left side bar).
- For detail project, you have to insert the project column out from Field Chooser.

![Supplier-Invoice4](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Project-1.jpg)

| **Label** | **Types**          | **Explanation**                                             |
|-----------|--------------------|-------------------------------------------------------------|
| A         | Document Project   | It represents the project for a document to be credited.    |
| B         | Detail Project     | It represents the project for individual GL Account to be debited. |

### Attachment

- It is very useful to attach any supporting documents to an invoice.
- In future, you able to retrieve and refer the attachment file easily.

![Supplier-Invoice5](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Attachment-1.jpg)

1) You have to point to the attachment section.
2) Click on ( + ) button to insert the filename path.
3) See the sample screenshot below.

![Supplier-Invoice6](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Attachment-2.jpg)

### Note

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.
3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

![Supplier-Invoice7](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Note-1.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

![Supplier-Invoice8](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-Note-2.jpg)

### Invoice description

1. To show the document description in Supplier Statement, eg. Purchase-Stationery April 2015.

![Supplier-Invoice9](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-InvoiceDescription-1.jpg)

2. Sample of supplier statement screenshot below.

![Supplier-Invoice10](../../../static/img/usage/supplier/supplier-guide-images/SupplierInvoice-InvoiceDescription-2.jpg)



## Supplier Payment

- To record the payment amount to Suppliers.
- To off-set against the outstanding supplier invoices.

![Supplier-Payment1](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-1.jpg)

### Basic Entry

1. Click on New button.
2. See the New Supplier Payment entry form screenshot below.

![Supplier-Payment2](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Entry-1.jpg)

3. Select the Supplier Code. Direct key-in and search by either Supplier code or name.
4. Select the Payment Method (bank or cash account) in Payment By.
5. Enter the Paid Amount (follow the bank account currency).
6. Below is the example of the entry created:

![Supplier-Payment3](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Entry-2.jpg)

**Double Entry will be:-**

| **Account**             | **DR (RM)** | **CR (RM)** |
|--------------------------|-------------|-------------|
| Supplier Control Acc     | 2,500.00    |             |
| Bank Account             |             | 2,500.00    |

7. Enter Bank Charges if there is a bank charges.

![Supplier-Payment4](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Entry-3.jpg)

8. It will auto post the following double entry:-

| **Account**     | **DR (RM)** | **CR (RM)** |
|-----------------|-------------|-------------|
| Bank Charges    | 2.00        |             |
| Bank Account    |             | 2.00        |

9. Enter the cheque number, cash or TT into Cheque No. field.

![Supplier-Payment5](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Entry-4.jpg)

### Knock-Off

Purpose to knock-off the invoices:
1. To show the outstanding invoices in Supplier Aging Report.
2. To indicate the payment knock-off the invoices in Supplier Statement.
3. To remove / recover from the GST Bad Debt Relief on outstanding more than 6 months

#### Partial Knock-Off

1. You can enter the knock-off amount into Pay column (auto tick).
2. Unapplied Amt will be reduced by the knock-off amount entered.

![Supplier-Payment6](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-PartialKnockOff-1.jpg)

#### Document Knock-Off

1. You can tick on the outstanding documents.
2. Unapplied Amt will be reduced by the knock-off amount ticked.

![Supplier-Payment7](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-DocumentKnockOff-1.jpg)

#### Random Knock-Off

1. You can click on the Pay column. It will auto tick on the outstanding documents.
2. Unapplied Amt will be reduced according to the outstanding balance.

![Supplier-Payment8](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-RandomKnockOff-1.jpg)

:::note
 Unapplied amount shows the Supplier payment amount not allocated/knock-off against any outstanding invoices and debit note.
:::

### Attachment

- It is very useful to attach any supporting documents.
- In future, you able to retrieve and refer the attachment file easily.

![Supplier-Payment9](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

![Supplier-Payment10](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Attachment-2.jpg)

### Note

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.

![Supplier-Payment11](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Note-1.jpg)

3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

![Supplier-Payment12](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Note-2.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

![Supplier-Payment13](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Note-3.jpg)

### Description

To show the Supplier payment description in the Supplier Statement, eg. Payment For Jan & Feb 2016.

![Supplier-Payment14](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Description-1.jpg)

Sample of Supplier statement screenshot below.

![Supplier-Payment15](../../../static/img/usage/supplier/supplier-guide-images/SupplierPayment-Description-2.jpg)



## Supplier Debit Note

- General debit note received from Supplier likes the adjustment for undercharged to purchase of stationery, services, insurance, or any non-stock control billing.
- Besides that, you can check the debit note status such as outstanding and payment history.

![Supplier-Debit-Note1](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-1.jpg)

### Basic Entry

1. Click on New button.
2. See the New Supplier Debit Note entry form screenshot below.

![Supplier-Debit-Note2](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Entry-1.jpg)

3. Select the Supplier Code. You direct key-in and search by either supplier code or name.
4. Input the Purchase A/c and amount to be debit.
5. Below is the example of the entry created:

![Supplier-Debit-Note3](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Entry-2.jpg)

**Double Entry will be:-**

| **Account**               | **DR (RM)** | **CR (RM)** |
|----------------------------|-------------|-------------|
| Stationery                 | 500.00      |             |
| Supplier Control Account   |             | 500.00      |

### Project

- There are 2 types of project you need to be take note.  
  1. Document Project  
  2. Detail Project  
- For document project, you need to point to MORE section (on the left side bar).  
- For detail project, you have to insert the project column out from Field Chooser.  

![Supplier-Debit-Note4](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Project-1.jpg)

| **Label** | **Types**        | **Explanation**                                                  |
|-----------|------------------|------------------------------------------------------------------|
| A         | Document Project | It represents the project for a document to be credited.         |
| B         | Detail Project   | It represents the project for individual GL Account to be debited. |

### Attachment

- It is very useful to attach any supporting documents to a debit note.
- In future, you able to retrieve and refer the attachment file easily.

![Supplier-Debit-Note5](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

![Supplier-Debit-Note6](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Attachment-2.jpg)

### Note

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.
3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

![Supplier-Debit-Note7](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Note-1.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

![Supplier-Debit-Note8](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-Note-2.jpg)

### D/N Description

1. To show the document description in Supplier Statement, eg. Undercharged-Stationery April 2015.

![Supplier-Debit-Note9](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-DNDescription-1.jpg)

2. Sample of supplier statement screenshot below.

![Supplier-Debit-Note10](../../../static/img/usage/supplier/supplier-guide-images/SupplierDebitNote-DNDescription-2.jpg)



## Supplier Credit Note

- Credit note is use to reduce and offset the outstanding invoices or debit note.
- For those Credit Note created from Purchase module, you are require to offset against the outstanding Invoices/Debit Note here.
- You can check any unapplied amount for a credit note. Unapplied amount meaning the credit note amount must find the invoice / debit note to knock-off.

![Supplier-Crebit-Note1](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-1.jpg)

### Basic Entry

1. Click on New button.
2. See the New Supplier Credit Note entry form screenshot below.

![Supplier-Crebit-Note2](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Entry-1.jpg)

3. Select the Supplier Code. You direct key-in and search by either supplier code or name.
4. Input the Purchase A/c and amount to be credit.
5. Below is the example of the entry created:

![Supplier-Crebit-Note3](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Entry-2.jpg)

**Double Entry will be:-**

| **Account**            | **DR (RM)** | **CR (RM)** |
|-------------------------|-------------|-------------|
| Supplier Control Acc    | 500.00      |             |
| Purchase Returns        |             | 500.00      |

### Unapplied Amount

- Unapplied amount shows the credit note amount not allocated/knock-off against any outstanding invoices and debit note.
- It will remains in supplier aging report show as negative amount (-).

![Supplier-Crebit-Note4](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-UnappliedAmount-1.jpg)

### Knock-Off Outstanding

- To knock-off the outstanding invoice/debit note, TICK the checkbox beside the pay column.
- You can direct input the pay amount into pay column.

![Supplier-Crebit-Note5](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-KnockOffOutstanding-1.jpg)

### Project

- There are 2 types of project you need to be take note.
  1. Document Project
  2. Detail Project
- For document project, you need to point to MORE section (on the left side bar).
- For detail project, you have to insert the project column out from Field Chooser.

![Supplier-Crebit-Note6](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Project-1.jpg)

| **Label** | **Types**        | **Explanation**                                                  |
|-----------|------------------|------------------------------------------------------------------|
| A         | Document Project | It represents the project for a document to be debited.          |
| B         | Detail Project   | It represents the project for individual GL Account to be credited. |

### Attachment

- It is very useful to attach any supporting documents to a credit note.
- In future, you able to retrieve and refer the attachment file easily.

![Supplier-Crebit-Note7](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Attachment-1.jpg)

1. You have to point to the attachment section.  
2. Click on ( + ) button to insert the filename path.  
3. See the sample screenshot below.  

![Supplier-Crebit-Note8](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Attachment-2.jpg)

### Note

1. Click on the Note section (on the LEFT side bar).  
2. RIGHT click it, you will see the Rich Text Editor pop-up.  
3. You can start key-in the note. See the example screenshot below.  
4. Click on X button to save and exit the Rich Text Editor.  

![Supplier-Crebit-Note9](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Note-1.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.  

![Supplier-Crebit-Note10](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-Note-2.jpg)

### C/N Description

1. To show the document description in Supplier Statement, eg. Overcharged-Stationery April 2015.  

![Supplier-Crebit-Note11](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-CNDescription-1.jpg)

2. Sample of supplier statement screenshot below.  

![Supplier-Crebit-Note12](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-CNDescription-2.jpg)

### Foreign Exchange Currency Gain/Loss

- Difference in the foreign currency exchange rate will AUTO post the FOREX Gain/Loss entry into GL.
- Posting date can be changed to reflect the FOREX Gain/Loss for a month.

![Supplier-Crebit-Note13](../../../static/img/usage/supplier/supplier-guide-images/SupplierCreditNote-GainLoss-1.jpg)



## Supplier Refund

- To receive the refund for the amount over paid to supplier.
- To off-set against the unapplied amount for Supplier Payment and Credit Note.

![Supplier-Refund1](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-1.jpg)

### Basic Entry

1. Click on New button.
2. See the New Supplier Refund entry form screenshot below.

![Supplier-Refund2](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Entry-1.jpg)

3. Select the Supplier Code. Direct key-in and search by either Supplier code or name.
4. Select the Payment Method (bank or cash account) in Received In.
5. Enter the Refund Amount (follow the bank account currency).
6. Below is the example of the entry created:

![Supplier-Refund3](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Entry-2.jpg)

**Double Entry will be:-**

| **Account**            | **DR (RM)** | **CR (RM)** |
|-------------------------|-------------|-------------|
| Bank Acc               | 3,590.00    |             |
| Supplier Control Acc    |             | 3,590.00    |

7. Enter Bank Charges if there is a bank charges.

![Supplier-Refund4](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Entry-3.jpg)

8. Lets said the bank charges = Rm2.00, therefore the double entry posting will be:-

| **Account**      | **DR (RM)** | **CR (RM)** |
|------------------|-------------|-------------|
| Bank Charges     | 2.00        |             |
| Bank Account     |             | 2.00        |

9. Enter the cheque number, cash or TT into Cheque No. field.

![Supplier-Refund5](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Entry-4.jpg)

### Knock-off

Purpose to knock-off the invoices:
1. To show the outstanding invoices in Supplier Aging Report.
2. To indicate the payment knock-off the invoices in Supplier Statement.

#### Partial Knock-Off

1. You can enter the knock-off amount into Pay column (auto tick).
2. Unapplied Amt will be reduced by the knock-off amount entered.

![Supplier-Refund6](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-PartialKnockOff-1.jpg)

#### Document Knock-Off

1. You can tick on the outstanding documents.
2. Unapplied Amt will be reduced by the knock-off amount ticked.

![Supplier-Refund7](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-DocumentKnockOff-1.jpg)

#### Random Knock 0ff

1. You can click on the Pay column. It will auto tick on the outstanding documents.
2. Unapplied Amt will be reduced according to the outstanding balance.

![Supplier-Refund8](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-RandomKnockOff-1.jpg)

:::note
 Refund Unapplied amount shows the supplier refund amount not allocated/knock-off against any unapplied amount in supplier payment and credit note.
:::

### Attachment

- It is very useful to attach any supporting documents.
- In future, you able to retrieve and refer the attachment file easily.

![Supplier-Refund9](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

![Supplier-Refund10](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Attachment-2.jpg)

### Note

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.

![Supplier-Refund11](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Note-1.jpg)

3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

![Supplier-Refund12](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Note-2.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

![Supplier-Refund13](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Note-3.jpg)

### Description

To show the supplier refund description in the Supplier Statement, eg. Refund For SC-00002 & PV-00004..

![Supplier-Refund14](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Description-1.jpg)

Sample of supplier statement screenshot below.

![Supplier-Refund15](../../../static/img/usage/supplier/supplier-guide-images/SupplierRefund-Description-2.jpg)



## Supplier Contra

- To make settlement of the outstanding between both supplier and customer accounts without any monetary transactions.
- It will use an intermediate accounts known as Contra Account. This account balance must be ZERO.

![Supplier-Contra1](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-1.jpg)

### Basic Entry

Assume that you have create the [Customer Contra](../../usage/customer/guide#customer-contra). You will found the same contra no. appeared in the Supplier Contra.
1. Highlight the Contra No to edit. Click on Edit button.
2. See the Supplier Contra entry form screenshot below.

![Supplier-Contra2](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Entry-1.jpg)

3. Select the Supplier Code. Direct key-in and search by either supplier code or name.
4. Enter the Contra Amount (follow the supplier currency).
5. Below is the example of the entry created:

![Supplier-Contra3](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Entry-2.jpg)

**Double Entry will be:-**

| **Account**             | **DR (RM)** | **CR (RM)** |
|--------------------------|-------------|-------------|
| Supplier Control Acc     | 1,500.00    |             |
| Contra Acc               |             | 1,500.00    |

:::note TIPS

To ensure the contra account has set properly. [Contra Account](../../usage/tools/guide#options)

:::

### Knock-off

Purpose to knock-off the invoices:
1. To show the outstanding invoices in Supplier Aging Report.
2. To indicate the contra knock-off the invoices in Supplier Statement.

#### Partial Knock-Off

1. You can enter the knock-off amount into Pay column (auto tick).
2. Unapplied Amt will be reduced by the knock-off amount entered.

![Supplier-Contra4](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-PartialKnockOff-1.jpg)

#### Document Knock-Off

1. You can tick on the outstanding documents.
2. Unapplied Amt will be reduced by the knock-off amount ticked.

![Supplier-Contra5](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-DocumentKnockOff-1.jpg)

#### Random Knock-Off

1. You can click on the Pay column. It will auto tick on the outstanding documents.
2. Unapplied Amt will be reduced according to the outstanding balance.

![Supplier-Contra6](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-RandomKnockOff-1.jpg)

:::note
 Refund unapplied amount shows the supplier contra amount not allocated/knock-off against any outstanding supplier invoices and debit note.
:::

### Attachment

- It is very useful to attach any supporting documents.
- In future, you able to retrieve and refer the attachment file easily.

![Supplier-Contra7](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Attachment-1.jpg)

1. You have to point to the attachment section.
2. Click on ( + ) button to insert the filename path.
3. See the sample screenshot below.

![Supplier-Contra8](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Attachment-2.jpg)

### Note

1. Click on the Note section (on the LEFT side bar).
2. RIGHT click it, you will see the Rich Text Editor pop-up.

![Supplier-Contra9](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Note-1.jpg)

3. You can start key-in the note. See the example screenshot below.
4. Click on X button to save and exit the Rich Text Editor.

![Supplier-Contra10](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Note-2.jpg)

5. You will get prompted the Save changes? message. Click YES to save it.

![Supplier-Contra11](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Note-3.jpg)

### Description

To show the supplier contra description in the Supplier Statement, eg. Contra IV-00005 .

![Supplier-Contra12](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Description-1.jpg)

Sample of supplier statement screenshot below.

![Supplier-Contra13](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-Description-2.jpg)

### GL Ledger - Contra Account

1. Select the date range.
2. Select the account code, eg. 450-000 CONTRA ACCOUNT.
3. Tick on General Ledger.
4. Click Apply button.
5. Example of the Contra Account ledger as shown below.

![Supplier-Contra14](../../../static/img/usage/supplier/supplier-guide-images/SupplierContra-ContraAccount-1.jpg)