---
sidebar_position: 3
id: set-user-view
title: Set User View
description: A guide to set user view for SQL Mobile Connect
slug: /sql-mobile-connect/set-user-view
tags: ["SQL Account", "SQL Mobile Connect", "Setup", "User View", "View Template"]
---

## 1.0 How to Set User View

**Step 1**: Go to **Tools** | **DIY** | **Maintain DIY**

![1](../../../static/img/integration/sql-mobile-connect/set-user-view/1.png)

**Step 2**: Switch to **View Template** tab, then click on **Load From File** to select `View Template` to load

:::info[Download]
You can download this **[View Template - View by Agent (Current User)](https://cdn.sql.com.my/wp-content/uploads/2024/08/View-Template-View-by-Agent-Current-User.zip)** and **load** to SQL Account.

This `View Template` will filter document by `Agent`, where `Agent` is match to current login user `Code`.
:::

![2](../../../static/img/integration/sql-mobile-connect/set-user-view/2.png)

**Step 3**: After select a `View Template` file to load, you can select **Load All** or **Custom**

![3](../../../static/img/integration/sql-mobile-connect/set-user-view/3.png)

- **Load All**: All the template will load.
- **Custom**: Can select all or some template to load.

    ![4](../../../static/img/integration/sql-mobile-connect/set-user-view/4.png)

Once completed, `Loaded` message will prompt and all `View Template` loaded will show.

![5](../../../static/img/integration/sql-mobile-connect/set-user-view/5.png)

![6](../../../static/img/integration/sql-mobile-connect/set-user-view/6.png)

**Step 4**: **Right-click** on View Template and click on **User View**.

![7](../../../static/img/integration/sql-mobile-connect/set-user-view/7.png)

**Step 5**: A list of `User` will shown, then **tick** on `User View` column for the `User` that want to apply this View Template and click **Save**.

![8](../../../static/img/integration/sql-mobile-connect/set-user-view/8.png)

Based on the scenario above, `Invoice view by Agent - Current User` View Template is applied to `SALES` user. When `SALES` user login to SQL Account, the user only can view those `Invoice` with `Agent` code equal to `SALES`

- Login by **SALES**

    ![9](../../../static/img/integration/sql-mobile-connect/set-user-view/9.png)

- Login by **ADMIN**

    ![10](../../../static/img/integration/sql-mobile-connect/set-user-view/10.png)

## 2.0 How to Set Customer View by Agent

**Step 1**: Set Customer View Filter by Agent **LIM**

Go to **Tools** | **DIY** | **Maintain DIY…** | **View Template**

Under **Customer** | Open, select **AGENT** Equals **'LIM'** | Save

![1](../../../static/img/integration/sql-mobile-connect/set-customer-view/1.png)

**Step 2**: Right-click and Select **User View**

![2](../../../static/img/integration/sql-mobile-connect/set-customer-view/2.png)

**Step 3**: Choose **'LIM'** Under User View

![3](../../../static/img/integration/sql-mobile-connect/set-customer-view/3.png)

Under Sales Document Listing, only the sales results for Agent **LIM** are visible.

![4](../../../static/img/integration/sql-mobile-connect/set-customer-view/4.png)

![5](../../../static/img/integration/sql-mobile-connect/set-customer-view/5.png)
