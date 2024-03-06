---
sidebar_position: 7
id: stock-serial-no
title: Serial No Module
description: A guide to stock stock serial number module for SQL Account
slug: /stock/stock-serial-no
tags: ["SQL Account", "Stock", "Serial Number"]
---


## 1. Control Serial Number

- Please go to Stock | Maintain Stock Item | Edit | Checked Serial No if this item you would like to control serial number

![1](/img/stock/stock-serial-no/1.png)

## 2. Purchase | Goods Received Note | New |

1. There have 3 methods to apply serial no :

### Method 1 : Manually Enter

1. Click on + (Green Icon) | Manually Enter at Empty Box

    ![2](/img/stock/stock-serial-no/2.png)

### Method 2 : Import from Notepad / Word

1. Enter the Serial No at the notepad.

    ![3](/img/stock/stock-serial-no/3.png)

2. Click Import |

    ![4](/img/stock/stock-serial-no/4.png)

3. Select Notepad where you have saved to.

    ![5](/img/stock/stock-serial-no/5.png)

4. Click Ok

    ![6](/img/stock/stock-serial-no/6.png)

### Method 3 : Generator

1. Click on Generator |

    ![7](/img/stock/stock-serial-no/7.png)

2. Format = Serial No Format

    Start From = What number you wish to start from

    Count = How many units to generate

    ![8](/img/stock/stock-serial-no/8.png)

3. Here the output

    ![9](/img/stock/stock-serial-no/9.png)

4. **Sales** | Delivery Order | Click Add

    ![10](/img/stock/stock-serial-no/10.png)

    **+ (Green Color) Same method as Method 1**
    **Import same method as Method 2**

5. Tick Serial No | Press Ok

    ![10](/img/stock/stock-serial-no/10.png)

:::info Noted
Stock Adjustment does not support serial no. May using Stock Received and Stock Issue to replace .
:::

### Serial No Report

1. **Stock - > Print Stock Physical Worksheet** – Will show all balance serial number haven’t use

2. **Stock - > Print Stock Card** - Tick Calculate Serial Number before apply

    :::info Note
    *Checked Calculate Serial No | Only Report : Stock Card – Location*
    :::

3. **Stock - > Print Stock Month End Balance** – Tick Calculate Serial Number before apply

4. **Stock - > Print Stock Serial No Conflict**

    1. To check non Existent Serial No. Example : Purchase for this Item the serial number is 555666, but when stock out stock the serial number is 222333.
    2. To check duplicate Serial Number received at the same location / batch for the same item. If return in the stock with same serial number and out again will not consider conflict.

5. **Stock** - > Print Stock Outstanding Serial No**

    1. For those documents Issued or Received do no applying serial no.

6. **Inquiry - > Print Serial No Inquiry**

    1. Check serial no movement.

7. **Sales - > S/N Profit & Loss by Document**

    - This Report Cost is capture exactly from Stock In Serial Number Cost.
    If DO transfer to IV, due to DO have deducted Serial number, so will not have any result for this report.

### Access Right for Serial No

1. **Group Stock |Always match Qty with Serial No**

    - which mean this access right the serial no must match with Qty key in. Eg : 2 Qty must have 2 Serial No.
    - If checked this right, Print Outstanding Serial No will no result.

2. **Allow Non-Existent Serial No**

    - Which mean this access right control if tick which will allow out stock the serial number without match the serial number when purchase.
    Example : Purchase for this Item the serial number is 555666, but when stock out stock the serial number is 222333. If you do not allow this, may uncheck this access right.
    - If unchecked this right, Print Stock Serial No Conflict will no result.
