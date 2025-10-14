---
sidebar_position: 6
title: Grid Layout
description: A guide about Grid Layout for SQL Account
slug: /usage/general/grid-layout
tags: ["SQL Account", "General", "Layout"]
---

## Clear Sorting

### Scenario

I have selected "Group by Document No" in Sales Profit and Loss by Document. However, when previewing the report, the same document number is split. How can I resolve this issue, as shown in the screenshots below?

![1](../../../static/img/usage/general/grid-layout/clear-sorting/1.png)

![2](../../../static/img/usage/general/grid-layout/clear-sorting/2.png)

### Steps & Instruction

1. Right click on any grid column.

2. From the pop-up menu, click on Clear Sorting.

    ![3](../../../static/img/usage/general/grid-layout/clear-sorting/3.png)

3. All the grid columns will be clear the sorting and follow the Group By command.

    ![4](../../../static/img/usage/general/grid-layout/clear-sorting/4.png)

4. Preview the report. The same document numbers will now be grouped together.

    ![5](../../../static/img/usage/general/grid-layout/clear-sorting/5.png)

## Rename Grid Header

### Rename Steps & Instruction

1. Right click on any grid header. From the small menu, select **Properties**.

    ![6](../../../static/img/usage/general/grid-layout/rename-header/1.png)

2. Look for the column and change the caption. Click Ok to confirm.

    ![7](../../../static/img/usage/general/grid-layout/rename-header/2.png)

3. Original column name “Ref 1” has been changed to “Cust PO”.

    ![8](../../../static/img/usage/general/grid-layout/rename-header/3.png)

## Reset/Delete Layout

### Step to reset layout

![9](../../../static/img/usage/general/grid-layout/reset-layout/1.png)

1. Hover over **Item code** and **right click**

2. Select **Grid Layout**

3. Click on **Load Layout**

    ![10](../../../static/img/usage/general/grid-layout/reset-layout/2.png)

4. Press **Reset Layout**

### Step to delete Existing Layout

![11](../../../static/img/usage/general/grid-layout/reset-layout/3.png)

1. Hover over **item code** and **right click**

2. Select **Grid Layout**

3. Click on **Manage Layout**

![12](../../../static/img/usage/general/grid-layout/reset-layout/4.png)

If your screen looks like the one above , select the **layout | press DELETE | SAVE**

## Save and Manage Layout

### How to call out hidden field?

1. Click on the button from left side of Item Code , checked all field you wish to show out

    ![13](../../../static/img/usage/general/grid-layout/save-manage-layout/1.png)

2. **Right click on the Grid** , Eg: point on wording “Description” and right click | **Grid Layout | Save Layout**

    ![14](../../../static/img/usage/general/grid-layout/save-manage-layout/2.png)

3. Enter a Layout Name , and checked on “**Save as Default Layout**” if you wish to set this as your **Default Layout** | **Save**

    ![15](../../../static/img/usage/general/grid-layout/save-manage-layout/3.png)

### How to assign this layout to others users?

1. After you had save your layout, **Right click on the Grid** , Eg : point on wording “Description” and right click | **Grid Layout | Manage Layout**

    ![16](../../../static/img/usage/general/grid-layout/save-manage-layout/4.png)

2. You can assign your layout either by users or by groups , Let’s said by Users

    ![17](../../../static/img/usage/general/grid-layout/save-manage-layout/5.png)

3. Click on the arrow down key from the users name and select & SAVE.

    ![18](../../../static/img/usage/general/grid-layout/save-manage-layout/6.png)

:::note
**Default** : Make this layout default

− : Empty it without setting any layout for this user

**Deny** : To hide this layout , so when this user try to Load Layout unable to see this layout .
:::

### How to Reset Layout?

1. Right click on the Grid , Eg : point on wording “Description” and right click | **Grid Layout | Load Layout**

    ![19](../../../static/img/usage/general/grid-layout/save-manage-layout/7.png)

2. Click on **Reset Layout**

    ![20](../../../static/img/usage/general/grid-layout/save-manage-layout/8.png)

### How to Delete Layout?

1. **Right click on the Grid** , Eg : point on wording “Description” and right click | **Grid Layout | Manage Layout**

    ![21](../../../static/img/usage/general/grid-layout/save-manage-layout/9.png)

2. **Highlighted** on the Layout Name you wish to delete | press on the **Minus Icon | SAVE**

    ![22](../../../static/img/usage/general/grid-layout/save-manage-layout/10.png)

### How to disable users access right to go field chooser and customize layout ?

1. Go **Tools | Maintain User**

    ![23](../../../static/img/usage/general/grid-layout/save-manage-layout/11.png)

2. **Highlighted** on the user name and press on **EDIT**

    ![24](../../../static/img/usage/general/grid-layout/save-manage-layout/12.png)

3. Click on **More | Access Control**

    ![25](../../../static/img/usage/general/grid-layout/save-manage-layout/13.png)

4. Go to Group : Misc | unchecked on Customize grid (field chooser) & Manage Grid Layout | SAVE

    ![26](../../../static/img/usage/general/grid-layout/save-manage-layout/14.png)
