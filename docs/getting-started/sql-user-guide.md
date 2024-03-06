---
sidebar_position: 12
id: sql-user-guide
title: SQL Account User Guide
description: Detail user guide on SQL Account
slug: /getting-started/sql-account-userguide
tags: ["SQL Account", "Getting Started", "User Guide"]
---

## 1 SQL Account Modules

SQL Account is a centralize system to assist the business (or departments) to record and process daily documents from sales, purchase, stock, and bank. It also a tool for SST reporting.

![1](/img/getting-started/user-guide/1.png)

1. **General Ledger**, a general ledger accounting where records all transactions posted from various journal (eg. general, sales, purchase, bank), an entry for general journal and expenses payment (eg. sales person claims, water and electricity expenses). Bank reconciliation, cash flow statement and financial reports are available in this module.

2. **Customer**, a sales ledger accounting where monitor the outstanding and payment received from the customers. Customer report such as reminder letter, customer aging and analysis reports are available here.

3. **Supplier**, a purchase ledger accounting where monitor the outstanding and payment received from the customers. Customer report such as reminder letter, customer aging and analysis reports are available here.

4. **Sales**, a module to handle all the sales activities from quotation, sales order, delivery order, tax invoice, debit note and credit note. Advance sales reports in help business to identity the top sales of the products.

5. **Purchase**, a module to records all the purchase activities from purchase request, purchase order, goods receive, purchase invoice, purchase debit note, and purchase returns.

6. **Production**, a manufacturing data process. It helps to identify the materials required and planned based on the customer orders.

7. **Stock**, an inventory control, stock take adjustment and for monitor the stock movement from one location to another location. Stock aging to identify out the obsolete stock.

8. **SST**, a Tax compliance accounting system. Readiness to process and submit the SST and others SST reports.

## 2 Getting Started SQL Account System

### 2.1 How to set Financial Period & System Conversion Date

:::info

Watch tutorial video here : [Setting Financial Period](https://www.youtube.com/watch?v=yH8VfNGjEr0&feature=youtu.be)

:::

1. **Tools** | **Options**

   ![2](/img/getting-started/user-guide/2.png)

   :::note

   Once you setup your Financial Start Period & System Conversion Date it is not easy to change it again. It is set only once when you create a NEW database.

   :::

2. Select **General Ledger**

3. Select **Financial Start Period & System Conversion Date**

   ![3](/img/getting-started/user-guide/3.png)

   :::note Situation 1

   My financial period starts on 1st January every year, I start using SQL from 1/1/2015.

   **Financial Start Period** = 1/1/2015

   **System Conversion Date** = 1/1/2015

   :::

   :::note Situation 2

   My financial period starts on 1st January every year, I start using SQL from 1/4/2015.

   **Financial Start Period** = 1/1/2015

   **System Conversion Date** = 1/4/2015

   :::

### 2.2 Start SST

1. Activate SST

   This is initiate setup of SST Malaysia module in SQL Account.

   1. go to **SST** | **Start SST Now**

      ![4](/img/getting-started/user-guide/4.png)

   2. Choose country Malaysia & click **next**.

      ![5](/img/getting-started/user-guide/5.png)

   3. Set your SST Effective Date & click **next**.

      ![6](/img/getting-started/user-guide/6.png)

   4. Enter your Sales Tax Number / Service Tax Number and click on **Next**.

      ![7](/img/getting-started/user-guide/7.png)

   5. SQL will auto create the following account, click on **Next**.

      ![8](/img/getting-started/user-guide/8.png)

   6. Choose your default Tax & click on Finish.

      ![9](/img/getting-started/user-guide/9.png)

   7. click on **OK**, to re-login the system.

      ![10](/img/getting-started/user-guide/10.png)

   8. After log-in, you will see a new drop down list for SST Functions, the SST setup is now completed.

2. Maintain Tariff

   1. Go to **Tools** | **Maintain tariff** | **New**

      <!-- link not working -->

      Insert your product tariff code here, you can also find out your product tariff code from [MySST Customs](http://mysstext.customs.gov.my/tariff/)

      ![11](/img/getting-started/user-guide/11.png)

### 2.3 Setting of Company Profile

1. Go To **File** | **Company Profile**

   Fill in your company particulars and if this company is subject to both sales and service tax, fill in the Sales Tax number / Service Tax number.

   ![12](/img/getting-started/user-guide/12.png)

2. Select **Report Header** & **Set Report Header**

   ![13](/img/getting-started/user-guide/13.png)

## 3 Master Data Creation

### 3.1 General Ledger (Maintain Chart of Account)

:::info

Watch tutorial video here: [GL Chart of Account](https://www.youtube.com/watch?v=hsdpDJImya4&feature=youtu.be)

:::

1. Creating a New Account

   1. Select **GL** | **Maintain Account** | Select category (e.g. Fixed Assets) | **New**

   2. Enter the **GL Code** and **Description** (alphanumeric characters are acceptable)

   3. Check the **Special Account Type** if applicable, e.g. the account is belonging to Accumulated Deprn Account (Fixed Assets)

   4. Click **OK**. Your new account is now created.

      ![14](/img/getting-started/user-guide/14.png)

      ![15](/img/getting-started/user-guide/15.png)

2. Creating a Sub Account

   1. Point to the parent account (e.g. Cash at Bank)

   2. Follow the same steps from **2.1.1 Create New Account**

      ![16](/img/getting-started/user-guide/16.png)

### 3.2 Maintain Customer

:::info

Watch tutorial video here: [AR Maintain Customer](https://www.youtube.com/watch?v=qn0xmeHUZkk&feature=youtu.be)

:::

There are 4 main tabs under Maintain Customer, let’s look at them

### 3.2.1 General (Maintenance)

### Create New Customer

1. **Customer** | **Maintain Customer** | **New**

2. **Enter the customer’s name and other information accordingly**.

3. You can categorize your customers into different groups, e.g. Category, agents, area
   How do you create your new agent/ area? Refer to the step below:

   ![19](/img/getting-started/user-guide/19.png)

4. You can also insert more than one billing / delivery addresses (unlimited)

5. There are different options for viewing a customer aging and customer statement

   :::note

   1. **Customer Statement**

      - Brought Forward: Summary Statement

      - Open Item: Detail Statement

   2. **Customer Aging**

      - Invoice Date: based on IV Date

      - Due Date: Based on after due date (terms)

   :::

   ![17](/img/getting-started/user-guide/17.png)

   ![18](/img/getting-started/user-guide/18.png)

### 3.2.2 Advance Credit Control (*Pro Package Inclusive)

![20](/img/getting-started/user-guide/20.png)

You can set the credit limit and overdue limit amounts as well as blocking a certain transaction entry for specific customers. What does the document include and for the following documents: Quotation(QT), Sales Order(SO), Delivery Order(DO), Invoice (IV), Cash Sales (CS) and Debit Note(DN)

We can also set once exceed limit & overdue limit,

1. Unblock – No restrictions

2. Block – Blocked for all users

3. Override – Certain users which have access rights can key in their username & password to override.

4. Suspended – Blocked with suspended message

### 3.2.3 Tax

If the customer provides you with certificate exemption number, you may fill in part A & B as below.

![21](/img/getting-started/user-guide/21.png)

![22](/img/getting-started/user-guide/22.png)

### 3.3 Maintain Supplier

![23](/img/getting-started/user-guide/23.png)

**Maintain Supplier** it’s just a mirror of Maintain Customer, please refer to 2.2 Maintain Customer.

Additional features: GIRO (beta version)

Please refer here to get more information on [GIRO module](http://www.sql.com.my/document/sqlacc_docs/PDF/13-05-GIRO_SupplierPayment.pdf)

### 3.4 Maintain Stock Group

Allows the user to set default account posting for the a particular group of items.

:::info

Watch tutorial video here: [Stock Maintain Stock Item](https://www.youtube.com/watch?v=o4Z3oyhdeq0&feature=youtu.be)

:::

1. **Stock** | **Maintain Stock Group** | **New**

   ![24](/img/getting-started/user-guide/24.png)

2. You can enter your **code** and **description**; you can also assign your **costing method** e.g. FIFO, Weighted Average & Fixed Cost.

3. Assign the account accordingly to sales, cash sales, sales return, purchase, cash purchase and purchase return.

   :::note

   In this case, you can create a different stock group for a different costing method, to apply on a different item code.

   :::

### 3.5 Maintain Stock Item

Allows user to maintain an item or service that you provide for your business.

:::info

Watch tutorial video here: [Stock Maintain Stock Item](https://www.youtube.com/watch?v=o4Z3oyhdeq0&feature=youtu.be)

:::

1. **Stock** | **Maintain Stock Item** | **New**

   ![25](/img/getting-started/user-guide/25.png)

2. You can enter your **code** and **description**.

3. You can assign your item to a **group** (see 2.4 Maintain Stock Group to create a new group)

4. You can insert **Base UOM** as default / **smallest unit of measurement. Ref Cost and Ref Price** are used as **default purchase and sales price**.

5. We categorize **Reorder Level, Reorder Qty and Lead Time** as one group. The settings here allow you to pre-set all these details, so that if the stock quantity drops to the reorder level, report is generated as a reminder to reorder.

   :::note

   **Reorder Level** = When stock balance drops to a certain level, system will be able to prompt you to re-order your stock

   **Reorder Qty** = The quantity you wish to reorder when you print reorder advice report

   **Lead Time** = The number of days required for your stock item to arrive.

   **Output Tax** = Default output tax code for an item (only need to define if different from the system default output tax in **Tools** | **Option** | **Customer**)

   **Input Tax** = Default input tax code for an item (only need to define if different from the system default output tax in **Tools** | **Option** | **Supplier**)

   **If you pre-set Tax in Customer & Stock Item, system default will capture Maintain Customer Tax Code only follow by Stock Item**
   :::

6. You can set **MIN PRICE**, so that your sales personnel won’t sell below min price.

7. **Multiple UOM purpose is useful for different packaging, as illustrated by the scenario below:**

   **Scenario A:**

   I am selling blue pens, blue pens haves different packaging, I can sell by pcs, by box or by carton. Now, I can pre-set them this way:

      ![26](/img/getting-started/user-guide/26.png)

   As you can see above, I have different Units of Measurement (UOM) and different rates,

   :::note

   Base Rate = PCS = 1

   Box = 10 PCS

   Carton = 24 PCS

   :::

## 4 Sales & Purchase

### 4.1 Purchase Work Flow

Example of sales process work flow aligned with SQL Account flow:

![27](/img/getting-started/user-guide/27.png)

### 4.2 Purchase Order

1. **Purchase** | **Purchase Order** | **New**

2. **Select Supplier**

3. **Insert Item Code**

   1. **Insert Item Code and details** (e.g. Qty, Unit Cost)

      :::note

      You can navigate the search column by using the “TAB” button on your keyboard. It will apply to all drop down tables.

      :::

   2. **Click on the show/hide/move column icon to customize your column layout**.

   3. If you want to key in for a discount amount, you may tick the discount field by following step 3b and update the discount field. You can key in multiple levels of discount as shown by the picture attached.

4. After updating, click **Save**

   ![28](/img/getting-started/user-guide/28.png)

5. To preview the report, you may click on the preview button and select the format you wish to print.

   ![29](/img/getting-started/user-guide/29.png)

### 4.3 Purchase Goods Received

1. **Purchase** | **Goods Received** | **New**

2. Select **Supplier Code**

3. **Right Click on G/R Note title**, select **Transfer from Purchase Order**, tick the document that you wish to transfer

4. **Save** the Goods Received Note

   ![30](/img/getting-started/user-guide/30.png)

### 4.4 Purchase Invoice

1. **Purchase** | **Purchase Invoice** | **New**

2. **Select Supplier Code**

3. **Right Click on Purchase Invoice title**, select **Transfer from Goods Received**, tick the document that you wish to transfer

4. **Save** the Purchase Invoice

   ![31](/img/getting-started/user-guide/31.png)

### 4.5 Sales Work Flow

Example of sales process work flow aligned with SQL Account flow:

![32](/img/getting-started/user-guide/32.png)

### 4.6 Sales Quotation

:::info

Watch tutorial video here:  [Sales Quotation](http://www.sql.com.my/video/sqlacc_tutorial/06-01_Sales_Quotation.mp4)

:::

1. **Sales** | **Quotation** | **New**

2. Select **Customer Code**

3. Insert the item that is requested by the customer, and you can estimate your profit & loss in this transaction by checking on **Profit Estimator**

   ![33](/img/getting-started/user-guide/33.png)

4. After everything is keyed in correctly, save the **Sales Quotation**

5. **Preview** the report and you can **print** or **export** it into PDF/ Email/ RTF(Microsoft Word)/Excel or others.

   ![34](/img/getting-started/user-guide/34.png)

### 4.7 Sales Order

:::info

Watch tutorial video here: [Sales Invoicing Sales Order](https://www.youtube.com/watch?v=klEAjmFT0og&feature=youtu.be)

:::

1. **Sales** | **Sales Order** | **New**

2. Select **Customer Code**

3. **Right Click on Sales Order title**, select **Transfer from Quotation**. You can either transfer the whole quotation or only part of the quotation document (*Partial Delivery Module requested)

   ![35](/img/getting-started/user-guide/35.png)

4. Save the **Sales Order**.

   :::note

   For additional reports showing outstanding sales orders, you can access **Sales | Print Outstanding Sales Document Listing**, and select **Sales Order** to view. This also applies to other sales documents.

   :::

### 4.8 Sales Delivery Order

1. **Sales** | **Delivery Order** | **New**

2. Select **Customer Code**

3. **Right Click on D/Order title**, select **Transfer from Sales Order**.

4. Save the **Delivery Order**.

   :::note

   Once the delivery order is saved, the stock will be deducted.

   :::

### 4.9 Sales Invoice

---

:::info

Watch tutorial video here: [Sales Invoicing Sales Invoice](https://www.youtube.com/watch?v=hQ6bX5pOKRQ&feature=youtu.be)

:::

**Steps:**

1. **Sales** | **Invoice** | **New**

2. Select **Customer Code**

3. **Right Click on Invoice** title, select **Transfer from Delivery Order**.

4. **Save** the Invoice.

---

1. **Show double entry**

   :::info

   Watch tutorial video here: [Ctrl + O](https://www.youtube.com/watch?v=FAKSzjEezjo&t=9s)

   :::

**There have 2 methods to show double entry of the transactions:**

**First Method** - After you save then invoice then you can press on keyboard short cut key “ Ctrl + O” to get the show double entry result.

   ![36](/img/getting-started/user-guide/36.png)

**Second Method** – After you save the invoice, you may right click on the wording of Invoice then select “Show Double Entry”.

   ![37](/img/getting-started/user-guide/37.png)

### 4.10 Sales Cash Sales

1. **Sales** | **Cash Sales** | **New**

2. Select **Customer Code**

3. Insert item and **Save** the **Cash Sales**.

4. When saving, the system will prompt a **Payment/ Change** dialog box

   ![38](/img/getting-started/user-guide/38.png)

   ![39](/img/getting-started/user-guide/39.png)

### 4.11 Sales Credit Note

:::info

Watch tutorial video here: [Sales Invoicing Sales Credit Note](https://www.youtube.com/watch?v=2LrsegwiWJM&feature=youtu.be)

:::

1. **Sales** | **Credit Note** | **New**

2. Select **Customer Code**

3. **Right Click on Credit Note title**, select **Transfer from Sales Invoice/ Cash Sales**, enter the returned quality in X/F column.

4. **Save** the Credit Note.

   ![40](/img/getting-started/user-guide/40.png)

### 4.12 Sales Cancelled Note (required partial delivery module)

Sales Cancelled Note is used for the cancelling of any outstanding Sales Order.

1. **Sales** | **Sales Cancelled Note** | **New**.

2. **Right Click on the Cancelled Note title**, select **Transfer from Sales Order**; (in Sales Cancelled Note, items can only be inserted by transferring from Sales Order)

   ![41](/img/getting-started/user-guide/41.png)

3. You can choose to transfer the sales order either by the whole document or partially.

4. **Save** the Cancelled Note.

## 5 Customer & Supplier

### 5.1 Customer Work Flow (AR)

Example of **customer (AR)** process work flow aligned with SQL Account flow:

![42](/img/getting-started/user-guide/42.png)

AR = Account Receivable

### 5.2 Customer Invoice

:::note

The difference between Customer Invoice and Sales Invoice:

**Customer Invoice** shows only the accounts code and does not show Qty / Unit Price.

**Sales Invoice** is linked to the stock and account modules. Hence, we advise users who need to key in stock items to use Sales Invoice. Once the information in the Sales Invoice is updated, the information in the Customer Invoice will automatically be updated by the system.

:::

![43](/img/getting-started/user-guide/43.png)

1. Create a new **Customer Invoice?**

   1. **Customer** | **Customer Invoice** | **New**

   2. Select **Customer Code** | insert transaction and amount.

   3. **Save**

      ![44](/img/getting-started/user-guide/44.png)

### 5.3 Customer Payment

1. Local Bank Payment

   :::info

   Watch tutorial video here: [AR Customer Payment Local Payment](https://www.youtube.com/watch?v=IjHX5ys846I&feature=youtu.be)

   :::

   1. **Customer** | **Customer Payment** | **New**

   2. Select your **Customer**

   3. Select the **bank for your account and cheque no** if applicable

   4. Key in the **customer payment amount**

   5. **Tick the corresponding invoice/debit note to be knocked off**

      ![45](/img/getting-started/user-guide/45.png)

2. Post Dated Cheque

   1. Search for the payment that you want to edit, click on **Edit**, right click on Customer Payment, you will see **Set Posting Date**

      ![46](/img/getting-started/user-guide/46.png)

      ![47](/img/getting-started/user-guide/47.png)

3. Bounced Cheque

   1. Search for the payment that you want to edit, click on **Edit**, right click on Customer Payment, you will see **Bounced Status**

      ![48](/img/getting-started/user-guide/48.png)

      ![49](/img/getting-started/user-guide/49.png)

      After bounced, system will auto revert the payment out, you can view your ledger.

      ![50](/img/getting-started/user-guide/50.png)

### 5.4 Customer Credit Note

---

If the situation involves return stock from customer, please do Sales Credit Note and knock off it in Customer Credit Note as below step.

1. **Customer** | **Customer Credit Note**

2. **Edit** | Click **Yes**

3. **Knocked off accordingly**.

   ![51](/img/getting-started/user-guide/51.png)

   If it does not involve with returned stock, e.g. discount given with

   1. **Customer** | **Customer Credit Note** | **New CN**

   2. **New** | Select **Customer** | Select **GL Account** | **Amount**

   3. **Knocked off accordingly**.

   ![52](/img/getting-started/user-guide/52.png)

---

1. **New JE:**

   For non-GST adjustment purpose, a new Journal (JE) is available in

   A. Customer Debit Note and Credit Note

   B. Supplier Debit Note and Credit Note

   1. **Customer** | **Customer Credit Note** | **New JE**.

   2. **New** | Select **Customer** | Select **GL Account** | **Amount**.

      ![53](/img/getting-started/user-guide/53.png)

   3. **Knocked off accordingly**.

### 5.5 Customer Refund

You can use this document to refund a customer. You can knock off with Customer Payment or Credit Note which have unapplied amounts.

1. **Customer** | **Customer Refund**.

2. Choose the **Customer** | Select your **Payment Method** | **Enter your Refund Amount**

3. **Knock off the payment or credit note and save**.

  ![54](/img/getting-started/user-guide/54.png)

### 5.6 Customer Contra

If you have a customer who is also a supplier, you may want to offset the outstanding customer and supplier invoices. This is known as a contra entry. You can offset the two invoices by using Customer Contra and Supplier Contra. This means that when you record the invoices as being paid, it will not affect your current bank account balance.

**Scenario:**

**If you have an outstanding sales invoice for RM200 and a purchase invoice for RM150 for the same customer or company, the actual amount owed to you is RM50 and the contra entry amount is RM150.**

1. **Tools** | **Options**.

   ![55](/img/getting-started/user-guide/2.png)

2. **General Ledger** | **Make sure you have assigned a contra account**.

   ![56](/img/getting-started/user-guide/55.png)

3. **Customer** | **Customer Contra** | Click **New**.

4. Select **Customer Code and key-in the contra amount**.

5. **Knock off the corresponding invoice and Save**.

   ![57](/img/getting-started/user-guide/56.png)

6. Go to **Supplier** | **Supplier Contra**.

7. You will realize that the **SAME transaction will appear at Supplier Contra Screen**, you just have to **EDIT** the supplier contra.

   ![58](/img/getting-started/user-guide/57.png)

8. **After Editing** you need to **update the supplier contra info accordingly and knock off the outstanding invoices** of supplier.

9. **Save** the Supplier Contra.

   ![59](/img/getting-started/user-guide/58.png)

### 5.7 Supplier Work Flow (AP*)

Example of **supplier (AP)** process work flow aligned with SQL Account flow:

![60](/img/getting-started/user-guide/59.png)

AP = Account Payable

**Supplier module** is the similarly feature with Customer Module. You can repeat the Supplier Module same as Customer guide start from 5.2 Customer Invoice → 5.6 Customer Contra.

How to use **InterBank GIRO** for supplier payment?

Refer to Interbank GIRO guide start from 11 InterBank GIRO

## 6 General Ledger

### 6.1 Opening Balance

:::info

Watch tutorial video here: [SQL Account General Ledger - GL Opening Balance](https://www.youtube.com/watch?v=43y_4awgSlA&feature=youtu.be)

:::

1. General Ledger

   1. **GL** | **Maintain Opening Balance**

   2. Highlight the account that you wish to key in as opening balance, and click **Edit**.

   3. **Insert the figure in local Dr or local Cr**. Then **Save**.

   4. **Make sure the Dr and Cr figures tally**

      ![61](/img/getting-started/user-guide/60.png)

2. Customer and Supplier

   1. Customer(Supplier) | **New**

   2. Set the **Date** (before system conversion date)

   3. Key in only the **outstanding amount**.

   4. The words “Past Invoice” must appear; (they will not appear if the inserted date is after system conversion date)

   5. Click **Save**.

      ![62](/img/getting-started/user-guide/61.png)

3. Stock Value

   1. **GL** | **Maintain Stock Value** | **Edit**

   2. Set the year

   3. **Insert the Opening Balance**

      ![63](/img/getting-started/user-guide/62.png)

4. Bank Reconciliation

   1. **GL** | **Bank Reconciliation** | **New**

   2. **Right click, to see Opening Bank Reconciliation**

   3. **Set the Date** (before System Conversion Date)

      ![64](/img/getting-started/user-guide/63.png)

### 6.2 Journal Entry

:::info

Watch tutorial video here: [GL Journal Entry](https://www.youtube.com/watch?v=WHzNMsCmFHg&feature=youtu.be)

:::

1. **GL** | **Journal Entry**

2. **Key in your double entry**

3. Click on **Save** (System will blocked in Dr and Cr are not tally)

   ![65](/img/getting-started/user-guide/64.png)

### 6.3 Cash Book Entry

:::info

Watch tutorial video here: [General Ledger Cash Book Entry](https://www.youtube.com/watch?v=rh0L-Kol1ts&feature=youtu.be)

:::

Cash book entry is normally used for a non-customer/ supplier payment or receipt e.g. payment for salaries, utilities etc.

1. **GL** | **Cash Book Entry** | **New** (choose between Payment Voucher or Official Receipt)

   ![66](/img/getting-started/user-guide/65.png)

2. **Insert Payable Name** | Select **GL Code | Tax |Amount**

   ![67](/img/getting-started/user-guide/66.png)

## 7 Inventory

### 7.1 Stock Received

Allows user to increase stock quantity without purchasing. It is normally used when you have assembled or manufactured finished goods. Just key-in the item code, quantity IN and cost that you want.

1. **Stock** | **Stock Received** | **New**.

   ![68](/img/getting-started/user-guide/67.png)

### 7.2 Stock Issue

Allows user to **decrease stock quantity without selling**. It is normally used when you consume raw material during assembly or when manufacturing finished goods or even sometimes for internal usage. Just key-in the item code, quantity OUT and cost and you may also click on the Update Cost, then the system will auto-detect the actual costing base on your document date.

1. **Stock** | **Stock Issue** | **New**.

   ![69](/img/getting-started/user-guide/68.png)

### 7.3 Stock Adjustment / Stock Take

Allows user to key-in quantity in and quantity out from the system, just like a combination of stock received and stock issue. Normally used for stock take purposes. **(Stock | Stock Adjustment | New)**

:::info

Watch tutorial video here: [Stock Stock Adjustment StockPhysicalWorksheet](https://www.youtube.com/watch?v=uEbCRAftQ4A&feature=youtu.be)

:::

**How SQL System can help during Stock Take?**

1. Click on **Stock**

2. Choose **Print Stock Physical Worksheet**

3. **Filter** by date, stock group or others **information** that you want to do for the stock take, please **make sure that you choose the correct location and batch if you have these two modules**.

   ![70](/img/getting-started/user-guide/69.png)

4. lick on Preview & choose your report format.

   ![71](/img/getting-started/user-guide/70.png)

5. **Print out the “Stock Take Sheet”** for stock keeper.

   The stock keeper should manually **fill in the actual quantity into the “physical qty” column**.

   ![72](/img/getting-started/user-guide/71.png)

6. After complete updating the stock take report by your stock-keeper, do your stock adjustment in system from **Stock** | **Stock Adjustment** | **and drag out Book Qty and Physical Qty**.

   ![73](/img/getting-started/user-guide/72.png)

   ![74](/img/getting-started/user-guide/73.png)

7. Click on the first item in **Stock Physical Worksheet**, press on **Ctrl + A** on the keyboard to select all items.

   **Then Drag & Drop into Stock Adjustment**.

   ![75](/img/getting-started/user-guide/74.png)

8. Based on the stock keeper’s Stock Take Report, **fill in the actual physical quantity** in your warehouse into the Stock Adjustment **Physical Qty column**, the system will calculate the variance based on the Book Qty and apply a correction to the Qty column.

   :::note

   **Book Qty** = Quantity that is recorded in system.

   **Physical Qty** = Actual Quantity at your warehouse.

   **Qty** = Variance between Physical and Book Quantity, system will auto-adjust then update accordingly. (Physical Qty – Book Qty)

   :::

## 8 Reports

### 8.1 General Ledger Report

1. Balance Sheet

   1. Go to **GL** | **Print Balance Sheet** | Select your date

   2. Choose your preferred format

   3. “Show Up to Level” under Option refer to the depth of sub-accounts in your Maintain Chart of Account, the higher the value, the more level of detail will be shown.

   4. In Option Upper Level

      1. **Use second description** – use second description which is controlled at GL | Maintain Chart of Account

      2. **Zero Balance Account** – choose to show accounts in the report even if their amount is 0.

      3. **Display Trade Debtor/Creditor in Details** – show per customer account in detail

   5. In Option Bottom Level

      1. **Print Sub Account Only** – Select a certain account to view

      2. **Print Project Comparison** – you are allowed to view your report by project (project module requested)

      3. **Show Column Options** – you can preset setting as attached

   6. **Apply**

   ![76](/img/getting-started/user-guide/75.png)

2. Profit & Loss Statement

   1. Go to **GL** | **Print Profit and Loss Statement** | Select your date

   2. Choose your preferred format

   3. In Option Upper Level

      1. **Use second description** – use second description which is maintained under GL | Maintain Chart of Account

      2. **Zero Balance Account** – choose to show accounts in the report even if their amount is 0

   4. In Option Upper Level

      1. **Print Sub Account Only** – Select a certain account to view

      2. **Print Manufacturing Account** – you are only allowed to view manufacturing account if you have set it up under Maintain Chart of Account

      3. **Print Project Comparison** – you are allowed to view your report by project (project module requested)

      4. **Show Column Options** – refer Balance Sheet

   5.**Apply**

      ![77](/img/getting-started/user-guide/76.png)

3. Trial Balance

   1. Go to **GL** | **Print Trial Balance** | Select your date

   2. Filter by project, area, agent (optional)

   3. Tick whether you want to view General Ledger, Sales Ledger(Customer) or Purchase Ledger (Supplier)

   4. In Option Upper Level

      1. **Use second description** – use second description is which maintained under GL | Maintain Chart of Account

      2. **Zero Balance Account** – choose to show accounts in the report even if their amount is 0

   5. **Apply**

      ![78](/img/getting-started/user-guide/77.png)

4. Ledger Report

   1. Go to **GL** | **Print Ledger Report** | Select your date

   2. Filter by account, project, area, agent (optional)

   3. Tick whether you want to view General Ledger, Sales Ledger(Customer) or Purchase Ledger (Supplier)

   4. System can generate by group and give you a summary of each group (group/sort by)

   5. In Option Upper Level

      1. **Merge GL Code for same document** – if you have the same account in one single transaction, the system will automatically merge, if you want to separate the account code for the same document, please un-tick.

      2. **Exclude Project when merging** – exclude project when merge GL Account.

      3. **Use second description** – use second description which is maintained under GL | Maintain Chart of Account

      4. **Include Zero Closing Balance** – choose to show accounts in the report even if their amount is 0

      5. **Include Zero Transaction** – choose to show accounts in the report even if there are 0 transactions.

      6. **Local Currency & Foreign Currency** – If you have foreign currency transactions, you can tick the foreign currency so that the system will show the figures in foreign currency compare versus local currency.

      7. **Apply**.

      ![79](/img/getting-started/user-guide/78.png)

### 8.2 Customer Report

1. Customer Aging

   1. **Customer** | **Print Customer Aging** | **Filter Aging Date**

   2. Choose your preferred report format options.

   3. You can select either 4 months, 6 months or 12 months aging

   4. Click on **Apply**

   ![80](/img/getting-started/user-guide/79.png)

2. Customer Statement

   1. **Customer** | **Print Customer Statement** | **Set Date Range**

   2. Choose your preferred options.

      1. **Default Statement Type** – The default Setting preset under Maintain Customer

      2. **Open Item Statement** – Show all outstanding transaction row by row

      3. **Brought Forward Statement** – Show outstanding amount from previous months as a lump-sum

   3. You can select either 6 months or 12 months’ statement

   4. Click on **Apply**

      ![81](/img/getting-started/user-guide/80.png)

3. Customer Due Document Listing

   In this report, you can print a reminder letter to remind customers of outstanding amounts.

   1. **Filter by Date, Document** (Invoice, Debit Note, Credit Note, Contra)

   2. Overdue or Undue document.

   3. System can generate by group and give you a summary on each group (group/sort by)

   4. **Apply**.

      ![82](/img/getting-started/user-guide/81.png)

   5. If you want to **print a reminder letter, make sure you tick the customer code under “group / sort by”** and **Apply**.

      ![83](/img/getting-started/user-guide/82.png)

   6. Preview the report and you will see **Cust Overdue Letter**, choose your preferred format.

      ![84](/img/getting-started/user-guide/83.png)

      ![85](/img/getting-started/user-guide/84.png)

4. Customer Analysis By Document

   This report is used to analyse all customer documents in one report. You can check total Invoice, Credit Note, Debit Note, Payment and the rest of the document amount.

   1. **Customer** | **Customer Analysis By Document**

   2. Filter by Document Date and any others optional field to display.

   3. **Apply**

      ![86](/img/getting-started/user-guide/85.png)

### 8.3 Sales Report

1. Sales Document Listing

   1. Go to **Sales** | **Print Sales Document Listing** |  filter which type of document you want: for example, **Sales Quotation /Sales Order/ Deliver Order/ Invoice Listing**

   2. Filter by **date**, if left untick means all periods will be shown

   3. Filter area by pipelines (It’s optional)

   4. System can generate by group and can give you a summary on each diff group (group/sort by)

   5. Click **Apply** to generate, whenever you change any setting under Step 3 or 4, please redo by clicking Apply

      ![87](/img/getting-started/user-guide/86.png)

   :::note

   1. **Export report into Excel**

      1. **Right click on any title bar**

      2. **Click on Grid Export | Export to Excel**.

         ![88](/img/getting-started/user-guide/87.png)

   2. **Batch Printing Invoices**

      If you want to print out entire month invoices by batch and into a page-by-page format,

      1. **Sales** | **Print Sales Document Listing**.

      2. Tick **“Print Document Style”**

   :::

   :::info

   Watch tutorial video here: [Sales Invoicing Batch Print Invoices](ttps://www.youtube.com/watch?v=MbNMVn0mBiw&feature=youtu.be)

   :::

   ![89](/img/getting-started/user-guide/88.png)

### 8.3.2 Outstanding Sales Document Listing (Require Partial Delivery Module)

This report can help you check the transfer document’s info, such as the amount of outstanding items for the particular document and; which invoices the DO have been transferred to.

1. **Sales** | **Print Outstanding Sales Document Listing**.

2. Filter the information that you want and apply.

3. Criteria

   1. **Print Outstanding Item** – to check outstanding items which have not yet been transferred.

   2. **Print Fulfilled Item** – to check those documents which have been fully transferred and transferred to which document.

   3. **Include cancelled documents** – tick to show cancelled documents in the report.

   4. **Outstanding SO & PO** – to check the number of outstanding items from sales order and purchase order

   5. **Transfer Doc Date Follow Filtered Date** – tick this if you want the document transfer date (e.g. transfer document Sales Order to Invoice both will followed filtered date.

4. **Apply**

   ![90](/img/getting-started/user-guide/89.png)

5. If you want to know where this **document has already been transferred** to, you just **Preview** the report.

   ![91](/img/getting-started/user-guide/90.png)

### 8.4 Inventory Report

A subsidiary report where each individual movement of stock is recorded, including stock movements from Purchases, Sales and Returns.

1. Stock Card:

   Step: **Stock** | **Print Stock Card** | **Apply**

   ![92](/img/getting-started/user-guide/91.png)

2. Stock Card Qty

   Same purpose with stock card but stock card qty is without costing and pricing, this is useful for customers who want to block specific users from viewing stock costing.

   1. **Stock** | **Print Stock Card Qty** | **Apply**.

      ![93](/img/getting-started/user-guide/92.png)

3. Stock Month End Balance:

   The Monthly Stock Balance Report summarizes the stock balances of the participant as of a calendar month end. The report also shows the monthly custody fee charged for each stock.

   1. **Stock** | **Print Stock Card Qty** | **Apply**.

      ![94](/img/getting-started/user-guide/93.png)

4. Stock Reorder Advice

   This report is to show reorder advice according to stock level, normally used to trace pending Purchase Orders and Sales Orders. You may compare as seen below:

   1. **Stock** | **Print Stock Reorder Advice** | **Apply**.

      ![95](/img/getting-started/user-guide/94.png)

      ![96](/img/getting-started/user-guide/95.png)

## 9 Historical of GST

Historical of changes in GST Accounting Guideline.

![97](/img/getting-started/user-guide/96.png)

### 9.1 GST Audit File (GAF)

1. GAF is constructed from 5 records elements.

   ![98](/img/getting-started/user-guide/97.png)

2. GAF – Record Elements (P, S).

   ![99](/img/getting-started/user-guide/98.png)

3. GAF – Record Elements (L).

   ![100](/img/getting-started/user-guide/99.png)

4. GAF – Record Elements (F).

   ![101](/img/getting-started/user-guide/100.png)

### 9.2 Generate GAF

:::info

Watch tutorial video here: [GST 08 GAF](https://www.youtube.com/watch?v=EoyLOMs5pQg&feature=youtu.be)

:::

GAF = GST Audit File.

The purpose of a GAF is for Customs to audit the accuracy of your GST Return but GAF submission is only required upon request. It is not required to be submitted with GST-03.

1. Click on **GST** | **Open GST Return**.

   ![102](/img/getting-started/user-guide/101.png)

2. Select the cycle for the GAF that you want to generate. Then click on the **arrow down button** and select **Generate GST Audit File(GAF)**.

   ![103](/img/getting-started/user-guide/102.png)

3. The result is generated based on **General, Sales & Purchase Ledger** for you to check your transactions before submitting to Customs for auditing purposes.

   ![104](/img/getting-started/user-guide/103.png)

4. You may check the report.

5. Click on **Save as Text**.

   ![105](/img/getting-started/user-guide/104.png)

6. Save your GAF text file to desktop.

   ![106](/img/getting-started/user-guide/105.png)

7. After saving, the message “File generated successfully” will automatically pop-up, just click **OK**.

   ![107](/img/getting-started/user-guide/106.png)

8. Go to desktop to select the GAF.txt file. The output will be similar to the image below:

   ![108](/img/getting-started/user-guide/107.png)

The above is the exported file that has fulfilled all requirements by Customs, you may submit to [Customs Department](https://gst.customs.gov.my/TAP)

:::note

C= Company Name

P = Purchase Transaction

S = Sales Transaction

L = General Ledger transaction

You have to submit GAF File upon request by Customs.

:::

### 9.3 GST Listing Report

This report is to analyse the detail of GST transactions grouped by tax type. It can be used to check against GST-03.

1. **GST** | **Print GST Listing**.

2. Filter the date range that you want to apply or you can filter by GST Process, tax code.

3. Click **Apply**.

   ![109](/img/getting-started/user-guide/108.png)

   ![110](/img/getting-started/user-guide/109.png)

## 10 Tools

### 10.1 Maintain User

1. Select **Tools** | **Maintain User** | **New**

2. Enter the **Code and Name** (both can be the same e.g. Code = ALI, Name = ALI)

3. Click on **More** Options and look for **Change Password**

   ![111](/img/getting-started/user-guide/110.png)

4. Click Save. Your new user account is now created.

   SQL User license is per concurrent basis (i.e. how many users can login to the system at the same time). This mean that if you have 5 staffs in the office who can access SQL but you only 3 license for 3 concurrent users, you can still maintain all 5 users in the system but only 3 users can login and access at the same time.

**User Access Right:**

:::info

Watch tutorial video here: [Setting AccessRight 01](https://www.youtube.com/watch?v=t_TJKdOihfw&feature=youtu.be)

:::

Not every user is going to have the same access rights as ADMIN, and ADMIN user might want to set security control settings in system.

1. Select **Tools** | **Maintain User** | **Edit for the user that you want to set the access right for**.

2. Click on **More** Options and look for **Access Right**.

3. You need to check the transactions / functions (row), compare with the user (column) and **tick = Allowed** or **untick = Disallowed**, the action for a particular user for particular transactions. For example, base on the setting in the following images, the user is not allowed to delete Customers or to view Customer Payments.

   ![112](/img/getting-started/user-guide/111.png)

### 10.2 Maintain Document Number

You can maintain document number format and next number.

:::info

Watch tutorial video here: [Setting Multiple Document Number](https://www.youtube.com/watch?v=hFR6TfqxnRU&feature=youtu.be)

:::

Step 1: **Tools** | **Maintain Document Number**.

Step 2: Insert **description** for the particular set of document and select a **document type** (e.g. Payment Voucher)

Step 3: The system’s defaults is the **Format** %.5d, where “%” is the formula which allows the function to auto-run for the document number while 5d stands for 5 digits.

   ![112a](/img/getting-started/user-guide/111a.png)

Step 4: You can select the **Frequency** option as Never Reset or others.

Step 5: Set the **Next Number** for this document.

   ![113](/img/getting-started/user-guide/112.png)

### 10.3 Maintain Acceptable Transaction Date

Maintain Acceptable Transaction Date allows you to control which documents you are allowed to maintain (New, Edit) based on their dates.

Brief – Any document which date falls within the allowed transaction dates. CAN be edited vice-versa, any document which date falls outside the allowed transaction dated CANNOT be edited/created.

1. **Tools** | **Maintain Acceptable Transaction Date**

2. Click on **Append** (Icon with + symbol)

3. Choose the period which you want to **allow transactions**

4. **Save**.

  ![114](/img/getting-started/user-guide/113.png)

   Example: Date From **(01/02/2016) & Date To (29/02/2016)** allows an Invoice with date (08/02/2016) to be edited/created.

   If a user tries to enter the date of an Invoice as (01/01/2016) which falls outside the allowed period, it will be blocked. An error message of “Transaction date \{dd/mm/yyyy} falls outside acceptable transaction date. Do you want to save it?” If the user click “Yes” a dialogue box will request override permission by ID/PW with rights to override it.

   :::info

   Please maintain access rights before allowing any user to override the acceptable transaction date.

   :::

1. Override Acceptable Transaction Date

   To override i.e. save a document that falls outside the acceptable transaction dates, you will need to be logged-in as a user with the right to override acceptable transactions dates.

   1. **Tool** | **Maintain User**. Double click on the user that you want to **edit**.

   2. Click on **More** | **Access Control**

   3. Under **Group Tools**, tick or untick the option of **Override Acceptable Transaction Date** to allow or deny the user from having the overriding right to save a document out of the acceptable transaction period.

   4. **Save** the access right.

      ![115](/img/getting-started/user-guide/114.png)

      If the user Is not permitted to override, the system will prompt with an option and you can choose either

      - **OK = cancel saving**

      ![115b](/img/getting-started/user-guide/115.png)

      - **Override = Enter user the ID and password of a user who can override then save the transaction.**

      ![116](/img/getting-started/user-guide/116.png)

### 10.4 Maintain Form Mode

Form Mode helps to filter data based on defined criteria. It is used to restrict users to view only specific sets of data for a certain document. For example, agent **Lip Fong can view and access the sales invoices belonging to his agent code** LF ONLY.

:::info

Watch tutorial video here: [Setting FormMode byAgent](https://www.youtube.com/watch?v=bqSDZlAhM5I&feature=youtu.be)

:::

1. **Tools** | **Maintain Form Mode** | **New**.

2. **Enter Code & Select the document** form that you want to filter, e.g. Invoice

   ![117](/img/getting-started/user-guide/117.png)

3. Click on the **Customize Filter** and then click on the **press the button to add a new condition**.

   ![118](/img/getting-started/user-guide/118.png)

4. Change the **“SL_IV.DOCKEY” to “SL_IV.Agent”** because right now I need to filter based on sales invoice agent field, then change **the “= equals” to “like”** after that **enter the agent code** that you want to filter and click on **OK**.

   ![119](/img/getting-started/user-guide/119.png)

5. Make sure the info is updated correctly then you can **Save**.

   ![120](/img/getting-started/user-guide/120.png)

6. Other optional setting:

   ![121](/img/getting-started/user-guide/121.png)

   ![122](/img/getting-started/user-guide/122.png)

7. If you have set **more than 1 form mode**, once you click **Sales** | **Invoice** | you will get the prompt browse mode to choose which form mode that you want to apply.

   ![123](/img/getting-started/user-guide/123.png)

---

1. **Form Mode VS User**

   How do I apply the format mode on a specific user?

   1. **Tools** | **User Access Right Assignment…**

   2. Under the list of security, click on **form mode**

   3. Select the user, eg: user code: LF (Lip Fong)

   4. Tick to apply the **form mode**, e.g. tick **form mode: IV-LF** and click Save

      ![124](/img/getting-started/user-guide/124.png)

### 10.5 Maintain Terms

Maintain Terms allows the user to maintain their Customer and Supplier terms. In SQL there are 3 types of different terms for you to assign.

1. **Tools** | **Maintain Terms** | **New**

2. **Insert Code, Description and allocated Term Type.**
   ![125](/img/getting-started/user-guide/125.png)

   - **Due in number of days** – Means how many days until document is due, e.g. if you set 30 days then the document will be due on the 30th day from the document date.

   ![126](/img/getting-started/user-guide/126.png)

   - **Due on specific day of the month** – Means how many months and which day the document is due, e.g. if you set it as 1 Month 6 Days the document will be due on the 6th of the next month.

   ![127](/img/getting-started/user-guide/127.png)

   - **Due in the month end** – Means how many months until the document is due at the end of the final month, e.g. if you set it as 2 months, the document will be due at the end of 2nd month.

### 10.6 Maintain Currency

:::info

Watch tutorial video here: [Setting Maintain Currency](https://www.youtube.com/watch?v=qfhtlAjW4As&feature=youtu.be)

:::

You can bill overseas customers & suppliers in foreign currencies e.g. USD, SGD, Euro & etc. **(Prof Package Inclusive)**

1. **Tools** | **Maintain Currency** | **New**

   ![128](/img/getting-started/user-guide/128.png)

2. **Maintain Customer / Supplier to assign the currency**

   ![129](/img/getting-started/user-guide/129.png)

3. Sales document, select the customer, sample as below:

   1. Currency Rate will be follow your setting from Tools | Maintain Currency, but it is still changeable in this invoice.

   2. Unit Price entered is in based on Customer’s currency eg this customer is in USD.

   3. system will auto converted into default currency RM on right bottom Local Net Total column.

      ![130](/img/getting-started/user-guide/130.png)

---

1. **Payment for Foreign Customer**

   **Customer** | **Customer Payment** | **New**

   :::note

   Customer **invoice billing in USD**, but **payment paid in your local RM bank**

   :::

   1. Select your Customer

   2. Choose your RM Bank

   3. Enter your RM Amount

   4. knock off the invoice and the rate will be update automatically by system. Foreign gain loss will be auto calculated and post to account accordingly. (you can call out Rate & Gain Loss column from the hidden field).

      ![131](/img/getting-started/user-guide/131.png)

2. Customer Invoice **billing in USD, Payment paid in your Foreign USD Bank** (Advance Currency modules required)

   1. Go to Tools | Maintain Payment | edit your USD Bank

   2. **Currency**: You can assign the currency for the particular payment method, so that the payment method will be in foreign currency payment.

   3. **Bank Charge Acc**: You can pre-set bank charges account to the payment method accordingly.

   4. **OR & PV Number Set**: Set default running document number for the particular payment method (optional)

   5. **Bank Info**: able to set Giro info & make payment thru Giro (refer Interbank Giro Topic for more detail)

      ![132](/img/getting-started/user-guide/132.png)

      Select your payment received in your **Foreign USD Bank**, enter your **paid Amount in USD, Enter your USD Rate** & Knock off the invoice, foreign gain loss will be auto calculated by system.

      ![133](/img/getting-started/user-guide/133.png)

3. Customer Invoice **billing in USD**, but **payment in others currency** eg SGD / RMB / EURO

   1. Select your Bank eg you received in SGD Bank, enter your SGD Amount & SGD Rate.

   2. Knock off your USD Invoice.

   3. USD rate will be auto calculated & foreign gain loss will auto calculated and posting to account accordingly

      ![134](/img/getting-started/user-guide/134.png)

### 10.7 Maintain Project (Required Project Module)

This module allows the user to maintain the project accounting on a branch or departmental basis, the user can use this module for simple construction business as they get to view Profit and Loss / Balance Sheet by Project.

1. Click on **Tools** | **Maintain Project**.

   ![135](/img/getting-started/user-guide/135.png)

2. Insert **Project Code & Description**. Project Value and Project Cost is not compulsory fields to fill in, if you have filled in then it is for remark purpose.

   ![136](/img/getting-started/user-guide/136.png)

3. Click on **Tools** | **Options**.

   ![137](/img/getting-started/user-guide/137.png)

4. Then look for **Miscellaneous** | Make sure the option **“Show Document Project”** is ticked.

   ![138](/img/getting-started/user-guide/138.png)

5. During **sales and purchase** transactions, make sure you can **the project column**, then **update** accordingly.

   ![139](/img/getting-started/user-guide/139.png)

   When keying-in a transaction, some users will ask why is there a project at item detail and another beside the Customer. Duplicate tab?

   **What is the difference between More | Project |(Document Project) and Item Detail | Project (Item Project )?**

   ![140](/img/getting-started/user-guide/140.png)

   ![141](/img/getting-started/user-guide/141.png)

   ![142](/img/getting-started/user-guide/142.png)

   **The project feature is also available for GL | Cash Book Entry.**

   After updating the document with project, how to view report with project and compare by project? For example: **GL | Print Profit & Loss Statement**.

6. Filter by the date that you want to view for the P&L report, then if you want to perform a project-to-project comparison then choose **“Comparison – Project (6 columns)”**

   ![143](/img/getting-started/user-guide/143.png)

   :::note

   6 Columns = up to 6 projects

   10 Columns = up to 10 projects

   19 Columns = up to 19 projects.

   :::

7. Criteria

   1. After selecting the report that you need, make sure to tick the **“Show Column Options”**, then the top of the report will show column options.

   2. You may change the period that you want to view, e.g. by default it will be **“Current Month”**.

      If you want to view the whole year figures, then you have to **change to “Current Year”**.

      ![144](/img/getting-started/user-guide/144.png)

8. After changing the column options, you have to **tick the “Print Project Comparison”**, then the project tab will appear on the **right hand site**, you can select which project that you want to view then click on **Add**.

   ![145](/img/getting-started/user-guide/145.png)

9. Click on **Apply** and you will see the result. The P&L report will compare each project that you select.

   ![146](/img/getting-started/user-guide/146.png)

### 10.8 5 Cents Rounding

We can pre-set the system to automatically round your invoice or cash sales amounts to the nearest 5 cents.

:::info

Watch tutorial video here: [Activate 5 Cents Rounding](https://www.youtube.com/watch?v=VSnX55l_3xw&feature=youtu.be)

:::

1. **Tools** | **Options** | **Customer**

2. **Tick 5 Cents Rounding** for Sales Invoice/ Cash Sales

   ![147](/img/getting-started/user-guide/147.png)

   ![148](/img/getting-started/user-guide/148.png)

## 11 Interbank GIRO (IBG)

### 11.1 Bank credit – Supplier Payment IBG

The following shows list of banks file format that are currently supported.

![149](/img/getting-started/user-guide/149.png)

1. **Tools** | **Maintain Payment Method** | **Edit** | **Click on the Bank Info.**

   ![150](/img/getting-started/user-guide/150.png)

2. Choose a **Bank**.

   ![151](/img/getting-started/user-guide/151.png)

3. Click **Ok**.

   ![152](/img/getting-started/user-guide/152.png)

4. Enter bank information | Click **OK** button | Save.

   ![153](/img/getting-started/user-guide/153.png)

### 11.2 Supplier Bank Account

1. Add Bank Account and Save.

  ![154](/img/getting-started/user-guide/154.png)

### 11.3 Supplier Payment Method

1. Select Supplier Bank from drop down list.

   ![155](/img/getting-started/user-guide/155.png)

2. Choose the payment method that contains bank information then Save.

   ![156](/img/getting-started/user-guide/156.png)

### 11.4 Print Supplier Document (Interbank GIRO) Listing

1. Click on the Giro button.

   ![157](/img/getting-started/user-guide/157.png)

2. Enter additional information and click on Save.

   ![158](/img/getting-started/user-guide/158.png)

3. You can now upload bank instruction file to bank host.

## 12 Production Job Order

:::info

Watch tutorial video here: [Production Job Order, Bill of Material (BOM), Sales Order to Purchase Order](https://youtu.be/q97_s92bmZQ)

:::

### 12.1 Setup on production accounts and stock items

1. Chart of Account

   1. GL | Maintain Account

   2. Create finished good, raw material, WIP’s closing stock account in your balance sheet current asset account as below.

      ![159](/img/getting-started/user-guide/159.png)

   3. Create Manufacturing Account under Cost of Goods Sold (Profit & Loss)

      1. Highlight on Cost of Goods Sold and click on NEW Button, Insert GL Code, Description and make sure tick on special Account type Manufacturing Control Account.

         ![160](/img/getting-started/user-guide/160.png)

      2. Create all your raw materials opening stock, closing stock, production overhead charges group into Manufacturing cost account under Cost of Goods Sold.

         ![161](/img/getting-started/user-guide/161.png)

2. Setup Stock Group

   Stock | Maintain Stock Group

   Use to differentiate the types of stocks and the costing method use for the stock, eg. raw materials, finished goods, etc.

   To produce a chemical products, the costing calculation based on stock group:-

   1. Raw Materials

      Assign your Raw Material Purchase code, Cash Purchase code, Purchase Return code.

      \- Costing Method : FIFO

      ![162](/img/getting-started/user-guide/162.png)

   2. Water

      Assigned your Raw Material Purchase code, Cash Purchase code, Purchase Return code.

      \- Costing Method : Fixed Costing

      ![163](/img/getting-started/user-guide/163.png)

   3. Finished Goods

      Assigned your Finished Goods Purchase code, Cash Purchase code, Purchase Return code.

      \- Costing Method : FIFO

      ![164](/img/getting-started/user-guide/164.png)

3. Setup Stock Item

   Stock | Maintain Stock Item

   Setup the stock item master data for all types of stock. Eg. raw materials, end products, trading products, etc.

   1. Create all your raw materials items and assigned stock group respectively.

      ![165](/img/getting-started/user-guide/165.png)

   2. Create your finished goods item and assign raw materials.

      1. assigned stock group, enter based UOM, ref cost and ref price.

      2. go to **BOM** tab, choose this product it a **BOM** item, and assigned all the raw materials, quantity needed.

         **Location** is the Raw Materials keep and deducted from which warehouse.

         **Overhead Cost** is a fixed additional cost to the material cost incurred during to each material process.

         **Assembly Cost** is a fixed cost incurred to the entire process for final products.

            ![166](/img/getting-started/user-guide/166.png)

4. Location (Warehouse)

   Stock | Maintain Location

   Define the warehouse code to identify the stock movement between the locations.

   1. Receive raw materials from purchase and keep at **Raw Materials Warehouse**.

   2. Production use the materials to produce the final products. Raw materials must deduct from the **Raw Materials Warehouse**.

   3. Final products will be kept at **Finished Goods Warehouse**.

   4. Work in progress stock kept in **WIP Warehouse**.

      ![167](/img/getting-started/user-guide/167.png)

### 12.2 Overview of Manufacturing Business Flow

Sales coordinator usually will input the Sales Order (SO) based on the customer PO received. The stock products will be updated into the system as ordered qty. If the stock are purchased from supplier, then the purchaser has to transfer from SO to PO.

Unless the stock is manufactured, then you have to proceed to Job Order process. How much of the materials/components
required to meet the products ordered by customer? This question raised by the Material Planning department. Therefore, the Job Order takes place as the order to be input after Sales Order. It will planned the materials/components required based on the qty ordered from Sales Order.

When products produce out, you have to transfer the Job Order to Stock Assembly to commit on the stock on hand.

![168](/img/getting-started/user-guide/168.png)

![169](/img/getting-started/user-guide/169.png)

1. Sales Order

   Customer order will be enter via Sales Order by Sales Coordinator.

   1. Sales | Sales Order | New | choose your customer | enter the items orders from your customer | save.

      ![170](/img/getting-started/user-guide/170.png)

   2. : You can also press on **CTRL + F11** to check Available Stock Balance, if there is sufficient stock on hand you may directly proceed to delivery, but there is short of stock you may need to proceed to Job Order on the planning to manufacturer the items.

      ![171](/img/getting-started/user-guide/171.png)

2. Production Job Order

   A Job Order is a document that contains the requirements and instruction to produce a particular of goods.

   1. **Production** | **Job Order** | **New**

   2. Select **Customer Code**

   3. **Right Click on Job Order** title, select **Transfer from Sales Order**.

   4. enter the **X/F Qty** for the quantity you want to produce.

      ![172](/img/getting-started/user-guide/172.png)

   5. Save the Job Order.

   6. you can also click **CTRL + F11** to check all your raw material stock available balance.

      ![173](/img/getting-started/user-guide/173.png)

3. Stock Item Assembly

   Stock Item Assembly is an entry form to record the actual components (materials) usage to convert/produce the final product based on the actual output. Unit cost will be used to revalue the stock balance.

   Actual components (materials) used will be deduct out from the stock balance. However, the final products will be replenished the stock balance. You can always check the stock movement from the stock card report.

   1. **Production** | **Stock Item Assembly** | **New**

   2. **Right Click**, select **Transfer from Job Order**.

   3. enter the **X/F Qty** for the quantity produced.

      ![174](/img/getting-started/user-guide/174.png)

   4. Save the Stock Item Assembly.

      ![175](/img/getting-started/user-guide/175.png)

## 12.3 Stock Batch

:::info

Watch tutorial video here: [Stock Maintain Batch](https://youtu.be/QUlp-Js_cnk)

:::

This module commonly used in food manufacturing, pharmaceutical, cosmetic/skin care product. It helps to trace the expiry date of the products. It can set the manufacturing date for label print purposes and easy to identify the stock expired to write off using stock adjustment.

1. **Stock** | **Maintain Batch** | **New**

   Insert the code, description, Expiry date, Manufacturing date & items that will expire on this expiry date.

   ![176](/img/getting-started/user-guide/176.png)

2. **Purchase** | **Purchase Invoice** | **New**

   You can enable Batch column from the hidden bar and assign your stock batch during purchase for every individual item.

   ![177](/img/getting-started/user-guide/177.png)

3. **Sales** | **Sales Invoice** | **New**

   In Sales Invoice, you can select the item issue out from which batch (expiry date), system will also show the expiry day & quantity available.

   ![178](/img/getting-started/user-guide/178.png)

4. **Stock** | **Print Stock Batch Expiry**

   You can also check the listing of your product that will be expire soon as well as you can trace the product manufacture date.

   ![179](/img/getting-started/user-guide/179.png)

## 13 Sales and Service Tax 2018 Model and Scope

Sales and Service Tax model are structured as below:

![180](/img/getting-started/user-guide/180.png)

## 14 Sales Tax

### 14.1 Sales Tax Legislation

1. Act

   1. Sales Tax 2018

2. Regulations

   1. Sales Tax Regulations 2018

   2. Sales Tax (Customs Ruling) Regulations 2018

   3. Sales Tax (Determination of Sale Value of Taxable Goods) Regulations 2018

   4. Sales Tax (Compounding of Offences) Regulations 2018

3. Order

   1. Appointment of Date of Coming into Operation

   2. Sales Tax (Person Exempted From Payment Of Tax) Order 2018

   3. Sales Tax (Imposition Of Tax In Respect Of Designated Area) Order 2018

   4. Sales Tax (Imposition Of Tax In Respect Of Special Area) Order 2018

   5. Sales Tax (Exemption From Registration) Order 2018

   6. Sales Tax (Goods Exempted From Tax) Order 2018

   7. Sales Tax (Rates Of Tax) Order 2018

   8. Sales Tax (Total Sale Value Of Taxable Goods) Orders 2018

### 14.2 Scope and Charge

Sales Tax is a tax charged and levied -

- on taxable goods manufactured in Malaysia by a taxable person and sold, used or disposed by him;

- on taxable goods imported into Malaysia

**Definition of:**

◆ Goods means all kind of movable property.

◆ Taxable goods means goods of a class or kind not exempted from sales tax; i.e goods which are not listed in Sales Tax (Goods Exempted From Sales Tax) Order 2018).

◆ Sales includes barter, disposal of goods with a right of purchase or on terms providing that the seller retains an interest in the goods, and delivery of goods under any conditions as to future payment.

Sales Tax is not charged on-

- Goods listed under Sales Tax (Goods Exempted From Sales Tax) Order 2018;

- Certain manufacturing activities are exempted by Minister of Finance through Sales Tax (Exemption from Registration) Order 2018.

:::note

Malaysia excludes designated area (DA) and special area (SA).

:::

### 14.3 Sales Tax Mechanism

Overview of Sales Tax flow chart:-

![181](/img/getting-started/user-guide/181.png)

### 14.4 Meaning of Manufacture

Manufacture defines as **a conversion of materials** by manual or mechanical means into a new product by changing the following:

1. size

2. shape

3. composition

4. nature

5. quality

of such materials and includes the assembly of parts into a piece of machinery or other products.

However, manufacture does not include the installation of machinery or equipment for the purpose of construction.

In relation to petroleum, any process of:-

1. separation

2. purification

3. conversion

4. refining

5. Blending

For goods other than petroleum

1. By conversion

   ![182](/img/getting-started/user-guide/182.png)

2. The assembly

   ![183](/img/getting-started/user-guide/183.png)

3. For petroleum

   ![184](/img/getting-started/user-guide/184.png)

### 14.5 Meaning of Taxable Person

Taxable person is a person who manufacturing taxable goods and is:

1. Liable to be registered

   - Reached sales threshold

      - Manufacturer - RM 500,000.00

      - Sub-contractor - RM 500,000.00

2. Registered under Sales Tax Legislation

   - Mandatorily registered

   - Voluntarily registered

### 14.6 Sales Tax Registration

1. Liability To Register

   Taxable goods manufacturers are required / liable to be registered when SALES VALUE OF TAXABLE GOODS has exceeded RM 500,000 for 12 months period.

   Manufacturers who carry out sub-contract work on taxable goods where the VALUE of work performed exceeds RM500,000 for 12 months period.

   Taxable goods belong to:

   - Registered manufacturer;

   - Non-registered manufacturer

   - Manufacturer in special area (FIZ and LMW)

   :::note

   Registered Person will known as Registered Manufacturers.

   :::

2. Voluntary Registration

   Conditions are:

   - Sales value of taxable goods below threshold (ie. < RM 500,000).

   - Person who are exempted from registration

3. Determination of Turnover

   Manufacturers should calculate the sales value of taxable goods for a period of 12 months using the following methods:

   1. Historical Method

      The total value of taxable goods in that month and the 11 months immediately preceding the month;

   2. Future Method

      The total value of taxable goods in that month and the 11 months immediately succeeding the month.

4. Exemption from Registration

   - Manufacturer of non taxable goods. (Not eligible for voluntary registration).

   - Manufacturer below threshold (ie. < RM 500,000).

   - Sub-contractor manufacturer below threshold.

   - Manufacturing activities that have been exempted from registration. E.g :

      - Tailoring

      - Installation incorporation of goods into building

5. Transitional Registration

   Manufacturer who is liable to be registered is required to register before 1 September 2018. Registration commencement date will be on 1 September 2018.

   1. Automatic Registration

      - Manufacturers who are GST Registered Persons which have been identified and fulfilled the required criteria will be registered automatically as Registered Manufacturer under Sales Tax.

      - Registered Manufacturer need to charge tax beginning 1 September 2018.

   2. Person Not Registered Automatically

      - GST registered person who fulfilled the required criteria to be registered but were not registered by 1 September 2018 need to apply for registration within 30 days from the commencement date.

### 14.7 Taxable vs Exempted Goods

1. Taxable Goods

   Taxable goods means goods of a class or kind of **not exempted** from sales tax.

   In another words, goods which are not listed in **Sales Tax (Goods Exempted From Sales Tax) Order 2018.**

   Example of taxable goods are:

   ![185](/img/getting-started/user-guide/185.png)

   It is chargeable with a tax rate of

   - 10% - standard sales tax rate

   - 5% - reduced sales tax rate

      - First Schedule in the Sales Tax (Rate of Tax) Order 2018

   - Specific rate - for petroleum product (eg. RM0.30 per litre)

      - Second Schedule in the Sales Tax (Rate of Tax) Order 2018

   How to determine the rate of sales tax for goods?

   ![186](/img/getting-started/user-guide/186.png)

2. Exempted Goods

   **Exempted goods** means goods of a class or kind of exempted from sales tax which are listed in **Sales Tax (Goods Exempted From Sales Tax) Order 2018**.

   Example of exempted goods are:

   ![187](/img/getting-started/user-guide/187.png)

## 14.8 Value of Taxable Goods

Refer to **Sales Tax (Rules of Valuation) Regulation 2018**, value of taxable goods that:

- sold by taxable person

- manufactured and used by the manufacturer for other purpose than as materials in manufacturing; or

- disposed by manufacturer.

For goods belongs to another manufacturer is known as sub-contract work.

- Sale value of the goods = Amount of the work performed and charged by **sub-contractor**.

The sale value of the goods shall be determined on the basis of the **transactions value of the goods** as the primary basis of valuation.

Transaction value of the goods,

- The **actual price** the goods are sold, without any conditions or restrictions imposed to purchaser.

- Purchaser is not required to give parts of proceed on subsequent sale to the manufacturer.

- Purchaser and manufacturer are not related or if related the relationship did not influence the price.

### 14.9 Responsibility of Registered Manufacturer

   ![188](/img/getting-started/user-guide/188.png)

### 14.10 Exemption and Facilities

1. Goods Exemption from Sales Tax

   **Goods** refer to Sales Tax (Goods Exempted From Sales Tax) Order 2018.

   - E.g. live animals, unprocessed food, vegetables, medicines, machinery, chemicals, etc.

2. Person Exempted from Sales Tax

   Person refer to Sales Tax (Person Exempted From Sales Tax) Order 2018.

   - Schedule A: Class of person, e.g. Ruler of States, Federal or State Government Department, Local Authority, Inland Clearance Depot, Duty Free Shop.

   - Schedule B: Manufacturer of specific non-taxable goods, e.g. any manufacturer of

      1. Controlled goods under Control of Supplies Act 1961

      2. Pharmaceuticals products

      3. Solely manufacture milk products

      4. Solely manufacture of exempted goods for export to import/purchase raw materials, components and packaging materials.

         - Schedule C: Registered Manufacturer, exemption of tax on the acquisition of raw materials, components, packaging to be used in manufacturing of taxable goods (previously known as CJ5, CJ5A, CJ5B).

3. Exemption from Registration

   Manufacturing activities exempted from registration regardless of turnover.

   - E.g. tailor, jeweller, optician, engraving, vanishing table top, etc.

## 14.11 Special Rules

1. Treatment in Designated Area (DA)

   ![189](/img/getting-started/user-guide/189.png)

   :::note

   SA = Special Area, e.g. Free Zone (FZ), Licensed Warehouse, Licensed Manufacturing Warehouse (LMW) and Joint Development Area (JDA).

   PCA = Principal Customs Area

   :::

2. Treatment in Special Area (SA)

   ![190](/img/getting-started/user-guide/190.png)

### 14.12 Accounting of Tax

1. Invoices

   **Issuance of Invoice**

   - Mandatory for registered manufacturer who sell taxable goods.

   - Hard copy or electronically.

   - Containing prescribed particulars.

   - Bahasa Melayu or English.

   **Prescribed particulars** are:

   1. The invoice serial number;

   2. The date of the invoice;

   3. The name, address and identification number of the registered manufacturer (Sales Tax Number);

   4. The name and address of the person to whom the taxable goods is sold;

   5. Description and quantity of the goods;

   6. Any discount offered;

   7. For each description, distinguish the type of goods, quantity and amount payable excluding tax;

   8. The total amount payable excluding tax, the rate of tax and the total tax chargeable shown as a separate amount or total amount payable inclusive of total of tax chargeable;

   9. Any amount expressed in a currency other than ringgit shall also be expressed in ringgit at the selling rate of exchange prevailing in Malaysia at the time of sale.

2. Credit Note & Debit Note

   A credit note is allowed to issue by registered manufacturer under the situation where the goods are returned by the purchaser due to :

   - Wrong quantity, poor or defective quality or uncontracted goods, provided that the goods have not been subsequently sold or disposed of by the purchaser.

   - Discount given in respect of goods sold and which are freely available to all who are willing to conduct business.

   A debit note is allowed to issue by registered manufacturer under the situation where there is an additional of sales tax to be paid for any price adjustment.

   Both credit note and debit note shall contains the following particulars:

   - The word “credit note” or “debit note” in a prominent place.

   - The serial number and date of issue.

   - The name, address and Sales Tax identification number of the supplier.

   - The name and address of the customer.

   - The **reason** for issuance.

   - Description which identifies the description of goods, the quantity and amount for which CN or DN is given.

   - The total amount excluding tax.

   - The rate and amount of tax.

   - The number and date of the original invoice.

   If changes related to amount of tax payable:

   - Adjustment in the return for the taxable period in which the credit note or debit note is issued.

   - Adjustment in the return for the last taxable for person who has ceased to be a taxable person.

   If deduction for taxable period exceeds the amount of sales tax payable, the balance is to be carried forward to the next taxable period. Refund is not allowed on balance carried forward if taxable person has ceased to carry on business.

## 14.13 Accounting Basis and Taxable Period

1. Accounting Basis

   Sales Tax is based on accrual basis and it is required to be accounted at the time when the goods are sold, disposed or first used.

2. Taxable Period

   Regular interval period where a taxable person accounts and remits sales tax to Government. Default taxable period for the registered manufacturer to be **bimonthly (2 months)** period.

   Registered manufacturer may apply for taxable period other than the default taxable period.

   In summary,

   ![191](/img/getting-started/user-guide/191.png)

### 14.14 Furnishing Sales Tax (SST-02) Return & Payment of Tax

Registered manufacturer has to declare SST return every 2 months according to the taxable period.

- Sales tax return has to be submitted not later than the last day of the following month after the taxable period ended.

- Sales tax return has to be submitted regardless of whether there is any tax to be paid or not.

- Sales tax return has to be submitted electronically or by cheque, bank draft and posted to SST Processing Centre.

Payment for tax due and payable declared in SST-02. Failure to submit return is an offence.

## 14.15 Miscellaneous (Remission, Refund of Overpaid Tax, Drawback. Penalty)

1. Remission

   Minister may remit the whole or any part of sale tax due and payable.

   Director General may remit the whole or any part of:

   - Surcharge

   - Penalty

   - Fee

   - Other money payable under the Act

2. Refund of overpaid tax

   Any person who has overpaid or erroneously paid of sales tax, penalty, surcharge, fee; or If any person who has paid sales tax and then exemption or remission of sales tax has granted by Minister.

   Claim to be made in form JKDM No. 2 within one year from the date of over payment or erroneously payment; or entitlement of refund.

3. Drawback

   Director General may allow drawback of the full amount of sales tax paid by a person in respect of taxable goods which are subsequently exported. This is not applicable to petroleum.

   Conditions:

   - Goods must be exported within six months from Sales Tax paid on import or date of invoice issued.

   - Application made within three months from the date of export in JKDM Form no. 2

   - Other conditions with regards to documentation and declaration.

   Submission to sales tax office at applicants’ place of business.

   Illustration:

   ![192](/img/getting-started/user-guide/192.png)

4. Penalty for late payment of tax

   Late payment penalty on the amount of sales tax not paid as shown in the table below.

    ![193](/img/getting-started/user-guide/193.png)

5. Other penalty for offences

   Evasion of sales tax:

   - 1st offence - either or both

      - Fine

         - Minimum 10x Sales Tax Amount

         - Maximum 20x Sales Tax Amount

      - Imprisonment not exceeding 5 years

   - 2nd offence - either or both

      - Fine

         - Minimum 20x Sales Tax Amount

         - Maximum 40x Sales Tax Amount

      - Imprisonment not exceeding 7 years

## 15 Service Tax

## #15.1 Service Tax Legislation

1. Act

   1. Service Tax 2018

2. Regulations

   1. Service Tax Regulations 2018

   2. Service Tax (Customs Ruling) Regulatons 2018

   3. Service Tax (Compounding of Offences) Regulations 2018

3. Order

   1. Appointment of Date of Coming into Operation

   2. Appointment of Effective Date for Charging and Levying of Service Tax

   3. Service Tax (Imposition Of Tax For Taxable Service in Respect of Designated Areas and Special Areas) Order 2018

   4. Service Tax (Rates Of Tax) Order 2018

### 15.2 Scope and Charge

Service tax is charged on:

- any provision of taxable services;

- made in the course or furtherance of any business;

- by a taxable person; and

- In Malaysia

Service tax is not chargeable on:

- Imported services

- Exported services

### 15.3 Service Tax Mechanism

Overview of Service Tax flow chart:-

![194](/img/getting-started/user-guide/194.png)

### 15.4 Meaning of Taxable Person

A service provider who is liable to be registered or registered under the Service Tax Act 2018. The service provider provides taxable services in the course or furtherance of business in Malaysia.

### 15.5 Taxable Service

Value of taxable service provided by a service provider for a period of 12 months that exceed a threshold of RM 500,000 is liable to be registered. Except the following taxable service group:

- Food and Beverages (exceed RM 1,500,000)

- Credit card / charge card (no threshold)

![195](/img/getting-started/user-guide/195.png)

![196](/img/getting-started/user-guide/196.png)

![197](/img/getting-started/user-guide/197.png)

![198](/img/getting-started/user-guide/198.png)

### 15.6 Rate of Services

All taxable services are fixed charged at a rate of 6%, except the provision of credit card/charge card services are charged at a specific rate of tax of RM25 is imposed upo issuance of principal or supplementary card and every subsequent year or part thereof.

### 15.7 Service Tax Registration

1. Types of Registration list:

   ![199](/img/getting-started/user-guide/199.png)

2. Determination of Taxable Turnover

   Service provider should calculate the value of taxable services provided for a period of 12 months using the following method:

   1. Historical Method

      The total value of taxable supplies in that month and the 11 months immediately preceding the month.

   2. Future Method

      The total value of taxable supplies in that month and the 11 months immediately succeeding the month.

3. Transitional Registration

   Any person who liable to register are required to register before 1 September 2018 and registration commencement date will be on 1 September 2018.

   1. Automatic Registration

      - Service provider who is a GST Registrant which have been identified and fulfilled the required criteria will be registered automatically as a registered person.

   2. Person Not Registered Automatically

      - Service provider who is a GST Registered person that fulfilled the required criteria to be registered but was not registered by 1 September 2018 need to apply for registration within 30 days from the commencement date.

### 15.8 Contra System Facility

Registered person is allowed to deduct service tax in his return for any cancellation and termination of services or any other reasons such as reducing premiums or discounts.

### 15.9 Special rules for specific areas

1. Treatment in Designated Area (DA)

   ![200](/img/getting-started/user-guide/200.png)

   :::note

   1. SA = Special Area, e.g. Free Zone (FZ), Licensed Warehouse, Licensed Manufacturing Warehouse (LMW) and Joint Development Area (JDA).

   2. PCA = Principal Customs Area

   :::

2. Treatment in Special Area (SA)

   ![201](/img/getting-started/user-guide/201.png)

### 15.10 Accounting

1. Issuance of Invoice

   - Mandatory for registered person who provides any taxable services..

   - Hard copy or electronically.

   - Containing prescribed particulars.

   - Bahasa Melayu or English.

      **Prescribed particulars** are:

      1. The invoice serial number;

      2. The date of the invoice;

      3. The name, address and identification number of the registered person (Service Tax Number);

      4. The name and address of the person to whom the taxable service is provided;

      5. Description of service provided;

      6. Any discount offered;

      7. For each description, distinguish the type of service and amount payable excluding tax;

      8. The total amount payable excluding tax, the rate of tax and the total tax chargeable shown as a separate amount or total amount payable inclusive of total of tax chargeable;

      9. Any amount expressed in a currency other than ringgit shall also be expressed in ringgit at the selling rate of exchange prevailing in Malaysia at the time of sale.

2. Credit Note & Debit Note

   Both credit note and debit note are allowed to issue by registered person. It shall contained the prescribed particular and make an adjustment in his SST-02 return.

### 15.11 Accounting Basis and Taxable Period

1. Accounting Basis

   Service Tax is based on payment basis and it is required to be accounted at the time when the payment has received. On the day following period of twelve months when any whole or part of the payment is not received from the date of the invoice for the taxable service provided.

2. Taxable Period

   Regular interval period where a taxable person accounts and remits service tax to Government. Default taxable period for the registered person to be bimonthly (2 months) period.

   Registered person may apply for taxable period other than the default taxable period.

   In summary,

   ![202](/img/getting-started/user-guide/202.png)

### 15.12 Furnishing Service Tax (SST-02) Return & Payment of Tax

Registered person has to declare service tax return every 2 months according to the taxable period.

- Service Tax return has to be submitted not later than the last day of the following month after the taxable period ended.

- Service Tax return has to be submitted regardless of whether there is any tax to be paid or not.

- Service Tax return has to be submitted electronically or by cheque, bank draft and posted to SST Processing Centre.

Payment for tax due and payable declared in SST-02. Failure to submit return is an offence.

## 16 Bad Debts

Bad debt refers to outstanding amount of sales tax from a person who is insolvent, and is irrecoverable from the person.

Insolvent person is:

- For individual, adjudged bankrupt.

- For company, ordered by the court to be wound up and a receiver is appointed.

Payment deemed to be irrecoverable whole or parts of the payment has been provided in the account as:

- Doubtful debt, or

- Written off in the person’s account as bad debt.

1. Bad Debt Claim

   Refund of sales tax in relations to Bad Debts:

   1. Can be claimed by a registered manufacturer or a person who ceased to be registered manufacturer.

   2. Shall claim within 6 years from the date the taxable goods is sold.

   3. Subject to conditions & satisfaction of the Direct General (DG).

   4. May claim according to the formula below.

      ![203](/img/getting-started/user-guide/203.png)

2. Bad Debts Recovery

   Repayment of sales tax in relation to Bad Debts refunded:

   1. Has claimed and received the sales tax refund.

   2. Payment received from the debtor after bad debts claimed.

   3. Repay to DG in his return.

   4. Repay according to the formula below.

      ![204](/img/getting-started/user-guide/204.png)

## 17 Record Keeping

Criteria to kept the records are:

- Bahasa Malaysia or English

- 7 years

- Can be kept in soft or hard copy

- To be kept in Malaysia

Records relating to registration

- SSM records - Form A, B, C, 8, 9 and etc.

Records relating business activities

- Invoices, receipts

- Debit note, credit note

- Delivery order, purchase order

- Bank slip, bank statement, voucher

- Contract, agreement

Records relating to accounting (hard copy)

- Financial Statement - Profit & Loss, Balance Sheet, Trial Balance.

- Account Payable, Account Receivable, General Ledger, Sales, Purchase, Stock, Cash and etc.

Records relating to taxation

- Customs forms - K1, K2, K9 and etc

- SST Returns (SST-02), registration and etc.

- Income Tax declaration

Records relating to electronic form

- Accounting software manual

- Accounts chart, access code, program documentation

- Audit trail

- Purchase, Sales, GL Listing (e.g. standard, exempt)

- Management Information Report (MIS)

- Other data / records keep in accounting / business software

## 18 Tax Code

Tax code lists in SQL Financial Accounting:

![205](/img/getting-started/user-guide/205.png)

Default SST Account generated automatically:

![206](/img/getting-started/user-guide/206.png)

## 19 Sales and Service Tax Returns (SST-02)

### 19.1 Tax code and SST-02 mapping

SST tax code structures and mapping to SST-02:

![207](/img/getting-started/user-guide/207.png)

### 19.2 Example of SST-02

:::info

SQL Account process SST02 step : [SST02 Form - guide on sales & service tax, SST Listing](https://youtu.be/laLjRJWh2j8)

:::

1. Process SST Return from SST | New SST Return

   ![208](/img/getting-started/user-guide/208.png)

2. Enter your taxable period

3. Key in declaration, this declaration will appear in SST02 form part F, this is required to key in 1 time only, in the following return will automatic show out.

4. click on Process

   ![209](/img/getting-started/user-guide/209.png)

5. click on SST-02

   ![210](/img/getting-started/user-guide/210.png)

   ![211](/img/getting-started/user-guide/211.png)

   ![212](/img/getting-started/user-guide/212.png)

:::info

Understand SST02 27 Column : [What is SST02 form](https://www.facebook.com/SQLEstream/videos/2216806511940307/)

:::

---

1. Part A

   ![213](/img/getting-started/user-guide/213.png)

2. Part B1

   ![214](/img/getting-started/user-guide/214.png)

3. Part B2

   ![215](/img/getting-started/user-guide/215.png)

4. Part C

   ![216](/img/getting-started/user-guide/216.png)

5. Part D

   ![217](/img/getting-started/user-guide/217.png)

6. Part E

   ![218](/img/getting-started/user-guide/218.png)

7. Part F

   ![219](/img/getting-started/user-guide/219.png)

8. Part G

   ![220](/img/getting-started/user-guide/220.png)

## 20 Double Entry Posting

1. Sales Tax (Accrual Basis)

   ![221](/img/getting-started/user-guide/221.png)

2. Service Tax (Payment Basis)

   In SST 2.0, the service tax is due and payable when payment is received for any taxable service.

      ![222](/img/getting-started/user-guide/222.png)

   1. Issue sales invoice with service tax 6%, date 31/10/2018, Amount RM 1,000.00 & Tax Amount RM 60.00.

      ![223](/img/getting-started/user-guide/223.png)

   2. Process SST Return from 01/09/2018 to 31/10/2018. Total Tax Payable is RM 0. Due to no payment is receive for the invoices issued.

      ![224](/img/getting-started/user-guide/224.png)

   3. Payment is received on 05/11/2018, knocked-off on IV-00111.

      ![225](/img/getting-started/user-guide/225.png)

   4. Process second cycle of taxable period, the tax payable will be capture as payment is received.

      ![226](/img/getting-started/user-guide/226.png)

   5. SQL Account will auto Credit to SST- Deferred Tax account during invoice issue but no payment. Once payment is received, a Debit will be auto reversed at SST-Deferred Tax Account.

      ![227](/img/getting-started/user-guide/227.png)

   6. the taxable amount of RM 1,000.00 and Tax Amount of RM 60.00 will also capture in SST-02 Part B2, number 11c.

      ![228](/img/getting-started/user-guide/228.png)
