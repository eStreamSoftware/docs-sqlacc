---
sidebar_position: 3
title: FAQ
description: General Ledger FAQ Info
slug: /usage/general-ledger/faq
tags: ["SQL Account", "Usage"]
---

## Trial balance not tally in YTD(Year To Date)

**Issue:**

Year To Date DR and CR not balanced in Trial Balance because Retained Earnings account is missing.

![1](../../../static/img/usage/general-ledger/glfaq/tb-not-balance-iss.png)

**Solution:**

1. Go to **GL** | **Maintain Account**...
2. Restore the Retained Earning Account by drag and drop into Retained Earning group (original).

    ![2](../../../static/img/usage/general-ledger/glfaq/tb-not-balance-sol.png)

3. Apply the Trial Balance again.
4. Retained Earning Account has restored to Trial Balance, Year To Date DR and CR are now balanced.

## How to make the foreign bank account record as USD

**Issue:**

I cannot key in the foreign bank transactions in USD.

![3](../../../static/img/usage/general-ledger/glfaq/fb-usd-iss.png)

**Solution:**

Please make sure you have the following add-on modules:

- Multi-Currency (allow to add more currency code, eg. USD, SGD, etc)
- Advance Currency (allow bank account to select foreign currency)

1. Go to Tools | Maintain Payment Method...
2. Edit the Foreign Bank Account.
3. Change the currency to USD.

    ![4](../../../static/img/usage/general-ledger/glfaq/fb-usd-sol1.png)

4. The foreign bank account will now be valued in USD. See example in Supplier Payment.

![5](../../../static/img/usage/general-ledger/glfaq/fb-usd-sol2.png)

## Accumulated Depreciation for Fixed Asset

### Record accumulated depreciation for fixed asset

1. **GL > Journal Entry > New**

2. Key in the double entry for recording accumulated depreciation.

   :::info
   e.g.: Record the depreciation of motor vehicle in year 2015
   Debit Depreciation Expenses RM1000
   Credit Accumulated Depreciation of Motor Vehicle RM1000
   :::

3. Save

   ![6](../../../static/img/usage/general-ledger/glfaq/dep-fixed-asset-step1.png)

### For The Next Year

1. **GL > Journal Entry**. Open the journal entry of depreciation in year 2015.

2. Right click on empty space, refer picture , **Copy Journal Entry**.

   ![7](../../../static/img/usage/general-ledger/glfaq/dep-fixed-asset-step2.png)

3. **New**

4. Right click on empty space, refer picture, **Paste Journal Entry**.
   ![8](../../../static/img/usage/general-ledger/glfaq/dep-fixed-asset-step3.png)

5. Edit the journal entry by changing the date, description and amount.

   ![9](../../../static/img/usage/general-ledger/glfaq/dep-fixed-asset-step4.png)

6. **Save**.

## Auto Maintain Stock Value with Project Setup

:::caution

Required SQL Account version 839 and above.

:::

### Step 1: Turn on Auto Post GL Stock Value Option

1. Click on **Tools**.

2. Click on **Option**.

    ![10](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/1.png)

3. Click on **Miscellaneous**.

4. Tick on **Auto Post GL Stock Value**.

    ![11](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/2.png)

### Step 2: Map Balance Sheet Stock Account in Maintain Stock Group

1. Click on **Stock**.

2. Click on **Maintain Stock Group**.

    ![12](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/3.png)

3. Click on **Edit**.

4. **Choose** the Account Code for your Stock Value Posting.

5. Click on **Save**.

    ![13](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/4.png)

    :::note
    Ensure that all Stock Groups are mapped to the **Balance Sheet Account Code (A)**.
    :::

    ![14](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/5.png)

### Step 3: Map Project Code in Maintain Location

1. Click on **Stock**.

2. Click on **Maintain Location**.

    ![15](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/6.png)

3. Click on **Edit**.

4. You can set your stock project for each location.

5. **Save**.

    ![16](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/7.png)

    :::info
    Ensure that all Location are mapped to the **Project Code (A)**.

    ![17](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/8.png)

    :::info
    Note : May ignore this step if you have **only 1** Project.
    :::

### Step 4: Maintain Stock Month End, to show the total Stock Value for default project and P1

:::info Example A
Project Code : ----

Closing Stock : 308534.22
:::

![18](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/9.png)

:::info Example B
Project Code : P1

Closing Stock : 3560.00
:::

![19](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/10.png)

### Step 5: Apply Financial Report will auto update Stock value

:::note
When you apply **Profit & Loss Statement, Balance Sheet or Trial Balance Report**,
system will automatically retrieve the Stock value from Stock Month End
Balance and present it in financial report. Additionally, the system will update
closing Stock value to **Maintain Stock Value**.
:::

1. This is a sample of a Balance Sheet Statement report to show a **Closing Stock Value**.

    ![20](../../../static/img/usage/general-ledger/glfaq/auto-post-gl-stock-value/11.png)

:::info
Note : When Fall Outside Maintain Acceptable Trans Date range, the system will no longer retrieve the Stock
Value from the Stock Month End Balance and will silently bypass the update.
:::

## Auto Post Stock Month End Value Setup

:::warning
Require SQL Account version 748 & above.
:::

This feature allows the system to automatically post the stock value from Maintain Month End value to GL Maintain Stock Value.

### Step 1: Stock > Maintain Stock Group

![21](../../../static/img/usage/general-ledger/glfaq/auto-post-stock-month-end-value/1.png)

### Step 2: Stock > Print Stock Month End Balance Report

![22](../../../static/img/usage/general-ledger/glfaq/auto-post-stock-month-end-value/2.png)

:::info Note :
Required to fill in the Balance Sheet Account in the Stock Group to update GL Stock Value.
:::

### Step 3: GL > Maintain Stock Value

![23](../../../static/img/usage/general-ledger/glfaq/auto-post-stock-month-end-value/3.png)

## Auto Bank Reconciliation Example

### Step 1: In SQL General Ledger, go to **Bank Reconciliation** -> **Create New**

1. Select the **Bank Statement Date**.

2. Select the **Account**.

3. Tick **“Show Current Recon Transactions”**.

4. Click **Apply**.

   ![24](../../../static/img/usage/general-ledger/glfaq/auto-recon/1.png)

5. Click **Load Statement**.

   ![25](../../../static/img/usage/general-ledger/glfaq/auto-recon/2.png)

6. Select your **Bank Statement (PDF / CSV)**.

   ![26](../../../static/img/usage/general-ledger/glfaq/auto-recon/3.png)

7. System loading...

   ![27](../../../static/img/usage/general-ledger/glfaq/auto-recon/4.png)

8. System will detect the Name of your Bank and prompt message below, Click **Yes** if it is **correct**.

   ![28](../../../static/img/usage/general-ledger/glfaq/auto-recon/5.png)

9. Once you have loaded in your bank statement, bank closing amount will be automatically filled.

   ![29](../../../static/img/usage/general-ledger/glfaq/auto-recon/6.png)

   :::info
   Criteria to Match:

   1. Cheque number + Amount

   2. Description + Amount
   :::

10. System will automatically match the transactions with the bank statement and automatically tick them. **(yellow highlighted)**.

   But some transactions may not be able to auto match **[red box]**

   ![30](../../../static/img/usage/general-ledger/glfaq/auto-recon/7.png)

### Step 2: Step to match on unmatched transactions with bank statement

1. Click on the untick transaction.

   At the bottom, search for **SAME DR/CR AMOUNT**, you will find that is a **“Match”** button or few “Match” button…(if there are few same amount, eg. 50.00)

   ![31](../../../static/img/usage/general-ledger/glfaq/auto-recon/8.png)

2. Click on **“Match”** when this is the correct bank transactions for **[Salary for Ali]**.

   ![32](../../../static/img/usage/general-ledger/glfaq/auto-recon/9.png)

   After click “Match”, system will auto tick the transactions and show the date and bank description at Bank Statement (Match) Column

## Bank Reconciliation Example

:::note
For Opening Bank Reconciliation, you may refer this [Guide](../../usage/general-ledger/guide.md#bank-reconciliation).
:::

A bank reconciliation is a process performed by a company to ensure that the company's records
(check register, **general ledger account**, **balance sheet**, etc.) are tally with bank's records.

### Reconciliation Bank Transaction

   GL | Bank Reconciliation
   ![33](../../../static/img/usage/general-ledger/glfaq/bank-recon/1.png)

   ![34](../../../static/img/usage/general-ledger/glfaq/bank-recon/2.png)

### Bank Reconciliation

- Select the Bank Statement Date
- Select the Bank Account, e.g. Hong Leong Bank
- Display Period (normally the date from period will be BLANK, and date to will be same as per Bank Statement Date)
- Check(√) Show Unticked Transaction
- Check(√) Show Current Recon Transaction
- Check (√) Merge Bank Charges
- Click Apply
- You may tick the bank transaction reconcile with the transaction show in Bank Statement and save

   ![35](../../../static/img/usage/general-ledger/glfaq/bank-recon/3.png)

   ![36](../../../static/img/usage/general-ledger/glfaq/bank-recon/4.png)

   As attached bank statement is the sample, compare with the transaction, if exist then you may check as sample picture above.

### Print Bank Reconciliation Report

After reconciliation done, you can save and preview reconciliation report.

![37](../../../static/img/usage/general-ledger/glfaq/bank-recon/5.png)

:::note
You can press F6 button for preview report.
:::

## How to Calculate P&L Percentage

![38](../../../static/img/usage/general-ledger/glfaq/cal-p&l-percent/1.png)

:::note
Formula :
Account Amount / Total Sales * 100
:::

### Example

#### How to get A % = 62.1 ?

- Using Sales / Total Sales \* 100 = 184,119.49/ 296,502.11 \* 100 = 62.1%

#### How to get C % = 2.5 ?

- Using Purchase / Total Sales \* 100 = 7,406.8 / 296,502.11 \* 100 = 2.5 %

#### How to get D % = 95 ?

- Using Gross Profit / Total Sales \* 100 = 281,662.21 / 296,502.11 \* 100 = 95%

#### How to get E % = 3.4?

- Using Expenses value / Total Sales \* 100= 10,000/296,502.11 \* 100 = 3.4%

#### How to get F % = 91.7 ?

- Using Net Profit / Total Sales \* 100 = 271,805.66 /296,502.11 \* 100 = 91.7%

:::info

% will round to nearest 1 Decimal Point.

:::

## Foreign Bank Adjustment

1. Go to **GL** > **Foreign Bank Adjustment** > Create **New** > Click **Bank Revalue**.

    ![39](../../../static/img/usage/general-ledger/glfaq/foreign-bank-adjustment/1.png)

2. In Revalue windows > Select **Bank Account Code & Date**.

    ![40](../../../static/img/usage/general-ledger/glfaq/foreign-bank-adjustment/2.png)

3. Balance USD & local amount are shown as per ledger report.

    ![41](../../../static/img/usage/general-ledger/glfaq/foreign-bank-adjustment/3.png)

4. Enter the Revalue to currency rate, system will auto recalculate the:

   - **New local balance amount**
   - **Gain/Loss Amount**

    ![42](../../../static/img/usage/general-ledger/glfaq/foreign-bank-adjustment/4.png)

5. Click **OK**

    ![43](../../../static/img/usage/general-ledger/glfaq/foreign-bank-adjustment/5.png)

6. System will auto post the double entries

    ![44](../../../static/img/usage/general-ledger/glfaq/foreign-bank-adjustment/6.png)

7. Click **Save**

8. Please check the ledger for the adjustment post.

## Maintain Budget

### Budget Setting

1. Click on **General Ledger**.

2. Click on **Maintain Budget**.

    ![45](../../../static/img/usage/general-ledger/glfaq/maintain-budget/1.png)

3. Select the year you want to set the budget.

4. Choose your project code for budgeting, or select 'Non Project' if applicable.

5. Click **Edit**.

6. Enter monthly budget amounts to update quarterly, half-yearly, and yearly budgets automatically.

7. Enter your budget by account code.

8. Click **Save**.

    ![46](../../../static/img/usage/general-ledger/glfaq/maintain-budget/2.png)

### Profit & Loss Statement with Budget Report

1. This Month vs Month Budget - This Year vs Year Budget.

2. This Month vs Month Budget.

3. This Year vs Last Year Budget.

    This is a sample of a Profit & Loss Statement report comparing. **This Month vs. Monthly Budget** and **This Year vs. Yearly Budget**

    A : Month to date Vs Monthly Budget

    B : Year to date Vs Yearly Budget

    ![47](../../../static/img/usage/general-ledger/glfaq/maintain-budget/3.png)

### Balance Sheet Statement with Budget Report

1. This Month vs Month Budget - This Year vs Year Budget.

2. This Month vs Month Budget.

3. This Year vs Last Year Budget.

    This is a sample of a Balance Sheet Statement report comparing **This Month vs. Monthly Budget** and **This Year vs. Yearly Budget**

    C : Month to date Vs Monthly Budget

    D : Year to date Vs Yearly Budget

    ![48](../../../static/img/usage/general-ledger/glfaq/maintain-budget/4.png)

## P&L Statement more than 12 months

1. **GL** > **Print Profit & Loss Statement**.

    ![49](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/1.png)

2. Right Click on **SQL Icon** > go **800 x 600** to smaller SQL Screen.

    ![50](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/2.png)

3. Click on the report name **This Year - 2 Column** > click and drag it to desktop.

    ![51](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/3.png)

4. Click on the report from desktop and drag it back into SQL.

    ![52](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/4.png)

5. After drag in will prompt dialog above > click on **OK**.

    ![53](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/5.png)

6. Double click on the report name **This Year - 2 Column** *(in blue colour font)*.

    ![54](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/6.png)

   1. You can enter a report name.

   2. Change the period class to **Fixed Date**.

   3. **Param 1** : Date **From**.

      **Param 2** : Date **To**.

   4. Click on **OK**.

   ![55](../../../static/img/usage/general-ledger/glfaq/p&l-more-than-12/7.png)

:::info
Apply the report as usual, the result will captured based on Param 1 & 2 set.

Repeat the same step on GL > Print Balance Sheet Statement
:::

## P&L Statement with Appropriation

1. **GL** > **Maintain Account**.

    ![56](../../../static/img/usage/general-ledger/glfaq/p&l-statement-appropriation-acc/1.png)

    1. Click on Appropriation Account.

    2. Click on **New**.

        ![57](../../../static/img/usage/general-ledger/glfaq/p&l-statement-appropriation-acc/2.png)

    3. Insert **GL Code** and **GL Description** > After Done Press **OK**.

2. **GL** > **Journal Entry** > Create **New**.
 
    ![58](../../../static/img/usage/general-ledger/glfaq/p&l-statement-appropriation-acc/3.png)

    e.g: Dr Dividend 2,000 Cr Bank 2,000

3. GL > Print P&L Statement.

   1. Select the **Date**.

   2. Select **P&L Report format : This Year – 2 Column**.

   3. **Apply**.

       ![59](../../../static/img/usage/general-ledger/glfaq/p&l-statement-appropriation-acc/4.png)

   4. Click on **Preview**.

       ![60](../../../static/img/usage/general-ledger/glfaq/p&l-statement-appropriation-acc/5.png)

       ![61](../../../static/img/usage/general-ledger/glfaq/p&l-statement-appropriation-acc/6.png)

## General Ledger Report Ref1(DocNo) appear as (New)

When you see General Ledger Report `Ref1(DocNo)` appears as `<<New>>`, use the method below to fix it.

![62](../../../static/img/usage/general-ledger/glfaq/solution-gl-report-ref1-as-new/1.png)

### How to Fix it

1. Find out the document to check the source for this document.

    ![63](../../../static/img/usage/general-ledger/glfaq/solution-gl-report-ref1-as-new/2.png)

2. Go to **Journal Entry**, look for the Date 31/03/2015 (Because Ledger Date is 31/03/15).

    ![64](../../../static/img/usage/general-ledger/glfaq/solution-gl-report-ref1-as-new/3.png)

3. Press Edit and Save Button for all the Date is 31/03/2015.

4. After Edit and Save, apply the Ledger to see the result.

    ![65](../../../static/img/usage/general-ledger/glfaq/solution-gl-report-ref1-as-new/4.png)

5. Done.

## Trial Balance not tally

If your trial balance is not tally, try running the following checks.

## Make sure Retained Earning must have 1 Account code

1. **GL** > **Maintain Account**

    ![66](../../../static/img/usage/general-ledger/glfaq/trial-balance-not-tally/1.png)

:::note
If your Retained Earning is empty, you may create under Reserve, then only drag into Retained Earning.
:::

## Make Sure Maintain Opening Balance is Tally
 
1. **GL** > **Maintain Opening Balance**.

2. Untick Project at left top.

3. Make sure Local DR and Local CR is tally. (Refer Pic2).

   ![67](../../../static/img/usage/general-ledger/glfaq/trial-balance-not-tally/2.png)

## Not tally due to current transaction

:::tip
If the above two steps are correct, it means the current transaction is causing the imbalance. Please follow the steps below.
:::

1. **GL** > **Print Journal of Transaction Listing** > Choose the date period which is not tally.

2. Click on **Preview**.

3. Select report name : **GL Journal-of-Transaction-Imbalance-Document**.

4. The list show which mean is the document cause not tally.

5. May upload the backup file to us and mention the problem.

## Witholding Tax

Go to **GL > Maintain Account**.

| GL Account |     Description      |       Remark            |
|------------|----------------------|-------------------------|
|460-XXX     |Witholding Tax Payable|Under Current Liabilities|

:::note
GL Account is not compulsory to be the same.
:::

## Maintain Withholding Tax

Go to **Tools > Maintain Withholding Tax**.

1. Click **New**.

2. Input the following data:

    | Field Name     |     Explanation                          |       Remark                                                                               |
    |----------------|------------------------------------------|--------------------------------------------------------------------------------------------|
    |Code            |Set a code                                |WTH-TAX15                                                                                   |
    |Description     |Describe the meaning/usage of this code   |Withholding Tax 15%                                                                         |
    |Tax Rate        |Witholding Tax Rate                       |15%                                                                                         |
    |Tax Account(DR) |Expenses Account                          |**&lt;&lt;Follow document accounts>>** if leave blank here                                  |
    |Tax Account(CR) |Set to **Withholding Tax Payable** account|At GL\Maintain Account, create the Withholding Tax Payable account under Current Liabilities|

    ![68](../../../static/img/usage/general-ledger/glfaq/witholding-tax/1.png)

    :::note
    Tax Account (DR) leave blank
    :::

3. Click on **Save**.

## Withholding Tax Purchase Entry

Available in multiple menus:

|Purchase|Supplier|
|---|---|
|Purchase Invoice|Supplier Invoice|
|Cash Purchase|Supplier Invoice|
|Purchase Debit Note|Supplier Debit Note|
|Purchase Returned| Supplier Credit Note|

1. In **Purchase Invoice**, insert the following columns:

    - WH Local Tax Amt
    - WH Tax
    - WH Tax Rate

    ![69](../../../static/img/usage/general-ledger/glfaq/witholding-tax/2.png)

2. Select the Withholding Tax Code in **WH Tax** column.

    ![70](../../../static/img/usage/general-ledger/glfaq/witholding-tax/3.png)

3. System will auto post the withholding tax double entry. Press **CTRL + O** to check the double entry.

    | GL Description                                         |  Local DR |  Local CR  |
    |--------------------------------------------------------|-----------|------------|
    |Expenses Account (follow the document detail GL Account)|XXX        |            |
    |Withholding Tax Payable                                 |           |  XXX       |

    ![71](../../../static/img/usage/general-ledger/glfaq/witholding-tax/4.png)

:::note
The withholding tax amount will not be added to the purchase invoice amount.
:::

## Payment of Withholding Tax

1. Go to **GL > Cash Book Entry.**

2. Create **New PV**.

3. Enter Payee name.

4. Select bank account to pay.

5. In detail grid, select the GL Account **(Withholding Tax Payable)**.

6. Enter the withholding tax amount to be paid. Save it.

    ![72](../../../static/img/usage/general-ledger/glfaq/witholding-tax/5.png)

7. You can check the ledger report for Withholding Tax Payable outstanding balance.
