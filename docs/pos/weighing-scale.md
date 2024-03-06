---
sidebar_position: 18
id: weighing-scale
title: POS - Weighing Scale
description: A guide to setup Weighing Scale for SQL POS System
slug: /pos/weighing-scale
tags: ["SQL Account", "POS", "Weighing Scale","Setup"]
---

## 1. Maintain Stock Item

- Item Code must be 7 Character(Cannot more and less)
- First 2 Characters of Item Code must Fix, mostly use 88 or 99
- Remaining 5 digit is Item Code Running Number

    Example:

    1. Item Code = 8800010, all others item code with measure scale have to start with 88xxxxx

    2. UOM Must be KG or PCS

    3. Enter Ref Price

    4. Save

![1](/img/pos/weighing-scale/1.png)

:::note
You are recommend to create all the item code first
:::

## 2. IN SQL POS Setting

1. Others Tab

2. Scale Barcode Set to Price

    ![2](/img/pos/weighing-scale/2.png)

3. Click on Fill

    ![3](/img/pos/weighing-scale/3.png)

4. Fill Scale Items

    - Department = First 2 Character of Item Code
    - Code Length = 7 Digit Characters
    - Ticked Barcode with Price
    - Ticked Price Revert Quantity
    - Click on button Fill items which are Match

    ![4](/img/pos/weighing-scale/4.png)

5. Click on Yes

    ![5](/img/pos/weighing-scale/5.png)

6. Click on OK

    ![6](/img/pos/weighing-scale/6.png)

7. Close & Save the Setting

    :::caution
    **Every time you have added NEW with item code, you have to repeat for Step no 2**
    :::

    In Stock Item, for the items have fulfil the criteria will auto ticked with Price Revert Quantity and Barcode with Price.

    ![7](/img/pos/weighing-scale/7.png)

## 3. Step to update Price to weighing scale

1. Stock Item | Right click on More | Select Export to Scale Machine

    ![8](/img/pos/weighing-scale/8.png)

2. Here is the model able to support by SQL POS

    ![9](/img/pos/weighing-scale/9.png)

3. Select Model | Tick Assign Export FileName

    - Assign Export FileName = C:\ITUnicode\PLU.TXP

    ![10](/img/pos/weighing-scale/10.png)

4. Click Button Pooling.

    - System will run the program C:\Program Files\RLS100\RLS1000.EXE **(Please make sure RONGTA Pooling program is installed)**

5. System will auto open RLS1000 Program

    ![11](/img/pos/weighing-scale/11.png)

6. File | FSetting

    ![12](/img/pos/weighing-scale/12.png)

    - Set Exported folder C:\ITUnicode\
    - Directory of Work : C:\ITUnicode\

7. Click on Confirm

8. Setting for RLS1000

    - Department Name = Scale 1
    - Scale Name = Scale 1
    - Scale IP = 192.168.0.x

    :::info
    You can use CMD to ping with the Scale IP Add, make sure able to ping
    successfully first
    :::

    - Plu_file = PLU.TXP

    ![13](/img/pos/weighing-scale/13.png)

    :::note
    Above example is 2 weighing scale
    :::

9. Click Green arrow button to Pooling latest selling price into scale Machine.

    ![14](/img/pos/weighing-scale/14.png)

10. Click confirm.

    ![15](/img/pos/weighing-scale/15.png)

11. Status mention OK mean is connected

    ![16](/img/pos/weighing-scale/16.png)

    :::note
    **After setting for first time, when there is the price to update to weighing scale, you just have to refer to Step 3.1 & 3.4 & 3.9 & 3.10**
    :::

Now you can test to Scan the barcode in POS, check system able to capture the correct price and Qty?

If everything’s is correct, then will be fine.

:::info
Testing on weighing scale

- If item code is 8800010, then number 10 represent this item, in weighing scale
Keypad, press 1 & 0, to measure, label will print out automatically.
- If print out label is empty(weighing scale have the item description), mostly is headline problem, need to refer back to Scale vendor.

:::
