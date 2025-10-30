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

![scenario1-1](../../../static/img/usage/general/grid-layout/clear-sorting/scenario1-1.png)

![scenario1-2](../../../static/img/usage/general/grid-layout/clear-sorting/scenario1-2.png)

### Steps & Instruction

1. Right click on any grid column.

2. From the pop-up menu, click on Clear Sorting.

    ![steps-1](../../../static/img/usage/general/grid-layout/clear-sorting/steps-1.png)

3. All the grid columns will be clear the sorting and follow the Group By command.

    ![steps-2](../../../static/img/usage/general/grid-layout/clear-sorting/steps-2.png)

4. Preview the report. The same document numbers will now be grouped together.

    ![steps-3](../../../static/img/usage/general/grid-layout/clear-sorting/steps-3.png)

## Rename Grid Header

### Rename Steps & Instruction

1. Right click on any grid header. From the small menu, select **Properties**.

    ![right-click-properties](../../../static/img/usage/general/grid-layout/rename-header/right-click-properties.png)

2. Look for the column and change the caption. Click Ok to confirm.

    ![grid-properties](../../../static/img/usage/general/grid-layout/rename-header/grid-properties.png)

3. Original column name “Ref 1” has been changed to “Cust PO”.

    ![column-result](../../../static/img/usage/general/grid-layout/rename-header/column-result.png)

## Reset/Delete Layout

### Step to reset layout

![reset-layout-1](../../../static/img/usage/general/grid-layout/reset-layout/reset-layout-1.png)

1. Hover over **Item code** and **right click**

2. Select **Grid Layout**

3. Click on **Load Layout**

    ![reset-layout-2](../../../static/img/usage/general/grid-layout/reset-layout/reset-layout-2.png)

4. Press **Reset Layout**

### Step to delete Existing Layout

![delete-layout-1](../../../static/img/usage/general/grid-layout/reset-layout/delete-layout-1.png)

1. Hover over **item code** and **right click**

2. Select **Grid Layout**

3. Click on **Manage Layout**

![delete-layout-2](../../../static/img/usage/general/grid-layout/reset-layout/delete-layout-2.png)

If your screen looks like the one above , select the **layout | press DELETE | SAVE**

## Save and Manage Layout

### How to call out hidden field?

1. Click on the button from left side of Item Code , checked all field you wish to show out

    ![13](../../../static/img/usage/general/grid-layout/save-manage-layout/call-out-hidden-field.png)

2. **Right click on the Grid** , Eg: point on wording “Description” and right click | **Grid Layout | Save Layout**

    ![save-layout-1](../../../static/img/usage/general/grid-layout/save-manage-layout/save-layout-1.png)

3. Enter a Layout Name , and checked on “**Save as Default Layout**” if you wish to set this as your **Default Layout** | **Save**

    ![save-layout-2](../../../static/img/usage/general/grid-layout/save-manage-layout/save-layout-2.png)

### How to assign this layout to others users?

1. After you had save your layout, **Right click on the Grid** , Eg : point on wording “Description” and right click | **Grid Layout | Manage Layout**

    ![manage-layout](../../../static/img/usage/general/grid-layout/save-manage-layout/manage-layout.png)

2. You can assign your layout either by users or by groups , Let’s said by Users

    ![manage-layout-users](../../../static/img/usage/general/grid-layout/save-manage-layout/manage-layout-users.png)

3. Click on the arrow down key from the users name and select & SAVE.

    ![manage-layout-users-select](../../../static/img/usage/general/grid-layout/save-manage-layout/manage-layout-users-select.png)

:::note
**Default** : Make this layout default

− : Empty it without setting any layout for this user

**Deny** : To hide this layout , so when this user try to Load Layout unable to see this layout .
:::

### How to disable users access right to go field chooser and customize layout ?

1. Go **Tools | Maintain User**

    ![access-control-1](../../../static/img/usage/general/grid-layout/save-manage-layout/access-control-1.png)

2. **Highlighted** on the user name and press on **EDIT**

    ![access-control-2](../../../static/img/usage/general/grid-layout/save-manage-layout/access-control-2.png)

3. Click on **More | Access Control**

    ![access-control-3](../../../static/img/usage/general/grid-layout/save-manage-layout/access-control-3.png)

4. Go to Group : Misc | unchecked on Customize grid (field chooser) & Manage Grid Layout | SAVE

    ![access-control-4](../../../static/img/usage/general/grid-layout/save-manage-layout/access-control-4.png)
