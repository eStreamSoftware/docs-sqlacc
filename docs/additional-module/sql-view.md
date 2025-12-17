---
title: SQL View Branch Control
description: A guide about SQL View branch control for SQL Account
slug: /additional-module/sql-view-branch-control
tags: ["SQL Account", "Additional Module"]
---

## Branch Control Module

![branch-control-module](../../static/img/additional-module/sql-view/branch-control-module.png)

**SQL View (Branch Control)** is used to:

1. Restrict users to view or edit only the data belonging to their assigned branch

2. Protect data privacy between branches

3. Prevent users from accidentally selecting or modifying records from other branches

## Scenario Example

Company has 3 branches:

![scenario-example-company](../../static/img/additional-module/sql-view/scenario-example-company.png)

Example users:

![scenario-example-users](../../static/img/additional-module/sql-view/scenario-example-users.png)

:::info

Project from other branches will be auto-filtered, preventing accidental selection of unauthorized or irrelevant data.

:::

## How to Set Branch Control Using SQL View

### A. Project Filtering

#### A1. Single Project Code (e.g., PEN Branch – P1)

1. **Tools** | **DIY** | **Maintain DIY**

   ![single-project-code-1](../../static/img/additional-module/sql-view/single-project-code-1.png)

2. **View Template** | Right-click **Project** | **New View Template**

   ![single-project-code-2](../../static/img/additional-module/sql-view/single-project-code-2.png)

3. Click **New**

   ![single-project-code-3](../../static/img/additional-module/sql-view/single-project-code-3.png)

4. Set the Filter Condition

   1. **Description**: Enter a name for this template

   2. **Code**: Select Project Code

   3. **Condition**: Equal

   4. **Value**: Enter the project code (e.g., P1)

   ![single-project-code-4](../../static/img/additional-module/sql-view/single-project-code-4.png)

5. Select the new template form the list

   ![single-project-code-5](../../static/img/additional-module/sql-view/single-project-code-5.png)

6. Right-click **Project** | Select **User View**

   ![single-project-code-6](../../static/img/additional-module/sql-view/single-project-code-6.png)

7. Tick the user

   ![single-project-code-7](../../static/img/additional-module/sql-view/single-project-code-7.png)

#### A2. Multiple Project Codes(e.g., KL + SEL = P1 & P2)

1. Set the Filter Condition

   1. Set Condition: is any of

   2. Add project codes (P1, P2)

   3. Click + if you need more codes

   ![multiple-project-codes](../../static/img/additional-module/sql-view/multiple-project-codes.png)

   **Results:**

   User can select both P1 and P2 only.

   ![result-multiple-project-codes](../../static/img/additional-module/sql-view/result-multiple-project-codes.png)

### B. Agent Filtering

**Scenario 1: Agent can only see their own documents**

For Agent, if login user same as agent code, you can follow below step in the link on (Step 2) to get the ready view template and load side.

https://docs.sql.com.my/sqlacc/sql-mobile-connect/set-user-view

If not available, follow these manual steps:

1. May follow **[Project Filtering](#a-project-filtering)** part Step1 and Step2 to create new view template

2. Choose Agent

   1. Select ‘Equals’

   2. Point the dropdown list

   3. Select the **current user**. \*current user = login user

   ![agent-filtering-scenario-1](../../static/img/additional-module/sql-view/agent-filtering-scenario-1.png)

   **Results:**

   When Yap opens any document, the Agent field will only show her own agent code

   ![result-agent-filtering-scenario-1](../../static/img/additional-module/sql-view/result-agent-filtering-scenario-1.png)

**Scenario 2: Assign a user to a specific Agent Code**

Type the Agent Code directly into the filter value

![agent-filtering-scenario-2](../../static/img/additional-module/sql-view/agent-filtering-scenario-2.png)

**Results:**

User will only see the assigned agent (e.g., **Sales**)

![result-agent-filtering-scenario-2](../../static/img/additional-module/sql-view/result-agent-filtering-scenario-2.png)

## Other Modules Using the Same Steps

The same View Template steps apply to:

- Area

- Location

- Stock Group

- Stock Item

- Payment Method

- Account Code

## How SQL View Affects the System

**View Sales and Purchase Price History**

If an SQL View is applied, the Sales Price History will only display values that pass the filter. Any values not permitted by the view will be excluded.

**View Available Stock Balance**

If an SQL View is applied for location, the View Available Stock Balance will only display the Total Qty belong to the location in Stock Card Qty, Qty in DO, Qty in PO and Available Qty.

Same as each Location Balance only refer to the location assigned.

**Sales Invoice Transfer Dialog**

When we transfer from Sales Order, if an SQL View is applied, the dialog will only display values that pass the filter. Any values not permitted by the view will be excluded.

**All Report Listing**

When SQL Views are used to restrict Agent, the Agent dropdown in reports will only show values allowed by the view. Same applies to Project, Location, Stock Item and Area etc.

![report-listing](../../static/img/additional-module/sql-view/report-listing.png)

:::important

- **ADMIN** user is a superuser. Even if SQL View is applied, ADMIN can still view everything.

- SQL View does not support Stock Transfer documents. Locking can only be applied via the DIY Script module.

:::
