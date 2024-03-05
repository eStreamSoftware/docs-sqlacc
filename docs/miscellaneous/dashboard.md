---
sidebar_position: 16
id: dashboard
title: Dashboard
description: A quick guide on Dashboard for SQL Account
slug: /miscellaneous/dashboard
tags: ["SQL Account", "Dashboard"]
---

<!-- ![2](/img/miscellaneous/dashboard/2.png) -->

## How to access SQL Dashboard?

### View -> Dashboard

    ![1](/img/miscellaneous/dashboard/1.png)

    ![3](/img/miscellaneous/dashboard/3.png)

### 1. Cash Flow

    - You can see the latest balance for all Cash at hand and the Cash at Bank account balance.

    - The cash flow date is open dated.

    - The amounts are directly derived from the general ledger.

        ![4](/img/miscellaneous/dashboard/4.png)

    1. Cash In Hand

        ![5](/img/miscellaneous/dashboard/5.png)

    2. Cash in bank

        The bank balance is obtained by calculating the bank balance of all banks. So for this example:

        ![6](/img/miscellaneous/dashboard/6.png)

        Maybank: RM 19,271.75 + CIMB: RM 100,960.00 + UOB(SGD$): RM 101,024 + HSBC (USD): RM57,550 = RM 278,805.75

    3. Bank Balance

        You can also see the current cash in bank balance for each bank account in your system.

        ![7](/img/miscellaneous/dashboard/7.png)

        You can click on the word '**cash analysis**' to see a cash flow forecast

        ![8](/img/miscellaneous/dashboard/8.png)

        If you press on the words (eg. Trade Debtor) in the blue highlighted column, and then click the '**Detail**' tab, you can perform an estimation calculation based on the Due Data and Amount collected.

            ![9](/img/miscellaneous/dashboard/9.png)

            ![10](/img/miscellaneous/dashboard/10.png)

    4. Total Supplier Outstanding and Total Customer Outstanding

        ![11](/img/miscellaneous/dashboard/11.png)

        Total Supplier and Total Customer outstanding balance is summarised in this dashboard.

        1. You can click on the “**Total**” or “**Undue**” words, and if will bring you to the **supplier/customer due document listing**.

        2. You will be able to generate a more detailed report from the Supplier/Customer Due Document Listing.

        **Total Customer Outstanding:**

        1. The amount undue is RM52,523.00. The current working date is 15/07/2021.

        2. When refer back to the customer due document listing report. It is shown that the amount is RM52.522.50. the amount has been rounded up.

            ![12](/img/miscellaneous/dashboard/12.png)

        3. The total amount is RM58,513.00. Total amount is a combination of both overdue and under due amount. The amount in the Customer Due Document listing report is RM58,512.50. The amount is rounded up.

            ![13](/img/miscellaneous/dashboard/13.png)

        4. You can check the overdue amount by unticking the undue check box. It is the same amount in the dashboard and the Customer Due Document Listing Report. Both shows RM5,990.

            ![14](/img/miscellaneous/dashboard/14.png)

        **Total Supplier Outstanding**

        1. The amount undue is RM56,330.00. the current working date is 15/07/2021. When refer back to the customer due document listing report. It is shown that the amount is exactly the same.

            ![15](/img/miscellaneous/dashboard/15.png)

        2. The total amount is RM72,958.00. Total amount is a combination of both overdue and under due amount. The amount in the Customer Due Document listing report is RM72,957.50. The amount is rounded up.

            ![16](/img/miscellaneous/dashboard/16.png)

        3. If you want to double check the amount overdue. You can untick the undue and press apply. It’ll be the saxme as in the dashboard or rounded up to the nearest ones.

            ![17](/img/miscellaneous/dashboard/17.png)

### 2. Ratio Analysis

    - You can see the company’s financial health report.

        ![18](/img/miscellaneous/dashboard/18.png)

    1. Sales , Net Profit (YTD)

        ![19](/img/miscellaneous/dashboard/19.png)

        The Total sales is obtained from **GL -> Profit & Loss Statement**. Under “Net Sales” on the current working date.

            ![20](/img/miscellaneous/dashboard/20.png)

        The Net Profit is gathered from the Net sales – Cost of Goods Sold – Expenses

            ![21](/img/miscellaneous/dashboard/21.png)

    2. Accounts Receivable Turnover & Accounts Payable Turn Over

        ![22](/img/miscellaneous/dashboard/22.png)

        ![23](/img/miscellaneous/dashboard/23.png)

        1. The Sales YTD and Purchase YTD is obtained fom the Profti and loss under “Net Sales” and “Cost of Goods Sold”.

        2. The Debtor and Creditor amount can be found under the Customer Due Document Listing and Supplier Due Document Listing.

        3. The average days to customer payback is calculated by Debtor Amount / Average Sales per Day. Same formula is used for creditors.

        Debtor Amount = RM 58,513

        Average Sales per Day = Sales YTD / Start of Year – Workig Date

        Average Sales per Day = 225,882 / ( 01/01/2021 – 15/07/2021)

        Average Sales per Day = 225,882 / 195

        Average Sales per Day = 1158.37

        Average Days for debtor’s payment = RM 58,513 / 1158.37 = 51 Days

    3. Profit Margin, Gearing Ration, ROA, Liquidity

        The dashboard also shows you the current Net Profit Margin , Gearing Ratio, Return On Assets as well as liquidity ratios. This information can be used for your performance analysis and management.

            ![24](/img/miscellaneous/dashboard/24.png)

### 3. Outstanding Order

    1. You can press on either ”Outstanding Sales Order” or “Outstanding Purchase Order” to see the sales order / purchase order documents that have not been transferred as of the current working date.

    2. You can go to **Sales -> Outstanding Sales Document Listing** and compare the documents and see the outstanding Sales Order in detail.

        ![25](/img/miscellaneous/dashboard/25.png)

        You can go to **Purchase -> Outstanding Purchase Document Listing** and compare the documents and see the outstanding Purchase Order in detail.

            ![26](/img/miscellaneous/dashboard/26.png)

### 4. Top Product

    - You can set the date period and see the top 10 stock items that your company sells. The top 10 can is rated based on quantity of the item and based on total sales

        ![27](/img/miscellaneous/dashboard/27.png)

    1. Top 10 product Sell in Qty is based on **Sales ->Yearly Sales Analysis Report**. Sort the quantity in descending order and you will get the top 10.

        ![28](/img/miscellaneous/dashboard/28.png)

    2. Top 10 product Sell in Value is based on **Sales -> Yearly Sales Analysis Report**. Sort the total value in descending order and you will get the top 10

        ![29](/img/miscellaneous/dashboard/29.png)

### 5. Profit and Loss

    1. In this dashboard, you can see the comparison of Sales, Cost of Goods Sold (COGS), and expenses between the past 7-12 months and the current 1-6 months.

    2. The information is based on the current working date.

    3. The profit and loss information is show in a line graph. You can select the period of the information that you want to see. You can choose to see that P&L for the last 3 months, 6 months or 12 months.

        ![30](/img/miscellaneous/dashboard/30.png)
