---
sidebar_position: 11
title: FAQ
description: SQL POS frequently-asked questions
slug: /faq/sql-pos
tags: ["SQL Account", "FAQ", "POS"]
---
## Normal POS FAQ

### 1. Error When install SQL POS : Must specify additional Parameter

![1](../../../static/img/integration/pos/qna/1.png)

**Solution:**

    - **If New Installation:**

![2](../../../static/img/integration/pos/qna/2.png)

    ```
    1. Delete all the Item from C:\itUnicode
    2. Control Panel | Uninstall SQL-POS
    ```

- **If already have transactions:**

    ![3](../../../static/img/integration/pos/qna/3.png)

    1. Backup SQL POS first

    2. Delete all the Item from C:\itUnicode

    3. Control Panel | Uninstall SQL-POS

### 2. Use Offline Mode

- Unable to capture live Master Transaction from SQL Acc Master

### 3. SQL POS is only Standalone PC

- The reason due to when Database corrupt, it won’t corrupt all, so preferable
    Standalone

### 4. Even though I set to Each Bill(Real Time) still unable to get the UTD QTY in SQL POS?

- In Setting - > SQL Account -> Need to ticked Run This POS When call from
    SQLAcc

    ![4](../../../static/img/integration/pos/qna/4.png)

### 5.Why keep prompt me Network failed?

1. Make sure have install Firebird

2. SQL Account have to Set to **Firebird Server** if setting ticked **Run this POS when call from SQLAcc**

### 6. Added Stock Item Code with Chinese word, prompt me unable to find this Product Code ???

- SQL POS unable to support Unicode on Code, may key in the Chinese Word in Item Description
- Code Only Alphanumeric

### 7. Previously using IT Uni POS, how should I integrate in SQL?

#### 1. SQL POS 316 -> FoxPro

1. In SQL Account -> Click on SQL POS(to generate New POS Database)

2. In SQLPOS-> Setting -> System Tab -> Tools -> Select UniPos Migration ->

    ![5](../../../static/img/integration/pos/qna/5.png)

    1. Import From : C:\user\public\itposdata or C:\user\public\unipos

    2. Ticked all the Setting

    3. Click on Migrate

#### 2. SQL POS 333 - > Firebird Database

In SQL POS System -> Double click SQL POS -> Logon Screen -> Right Click
Restore Database

### 8. Print Receipt Chinese word show in ???

- Reason due to Non-Unicode program set to Chinese

Solution :

- Control Panel -> Regional -> Language for Non Unicode -> Set to English (United States)

    ![6](../../../static/img/integration/pos/qna/6.png)

- Font change to Arial

1. Click on Design report

    ![7](../../../static/img/integration/pos/qna/7.png)

2. Click on Modify

    ![8](../../../static/img/integration/pos/qna/8.png)

3. Click on Description Text Object -> Menu select Format -> Font

    ![9](../../../static/img/integration/pos/qna/9.png)

4. Change to Arial

    ![10](../../../static/img/integration/pos/qna/10.png)

5. Save the report

### 9. Error Message : Warning : Assigned Printer does not exist : Print to PDF (Mac Desktop)

    ![11](../../../static/img/integration/pos/qna/11.png)

Solution:

1. **Testing Database only** - Delete whole ITUnicode database
2. **Real Database** – May request backup from user upload to us to check (suspect file corrupted)

### 10. Unable to capture correct price Tag Price

Assigned price tag for item A and Item B, how come only first Item A will capture price tag
price, but second item B ref price?

Solution :

Setting -> SQL Account -> Ticked Unlink SQL Accounting when available

![12](../../../static/img/integration/pos/qna/12.png)

### 11. Error Message : Failed to Set

![13](../../../static/img/integration/pos/qna/13.png)

**Solution :**

- Make sure install SQL With 759 & above

### 12. What is Price Set in Stock Item?

- Multiple price set in Maintain Stock Item, user allow to set multiple price with comma.

- Example :
  - Price 1 : RM 10.
  - Price 2 : RM 15.
  - Price 3 : RM 20.

    ![14](../../../static/img/integration/pos/qna/14.png)

- When select itemcode RED BEAN 500G, auto prompt the price for user to select

    ![15](../../../static/img/integration/pos/qna/15.png)

### 13. What to do if I want to print Barcode Label with Chinese Company Name?

- Save as JPEG, then load the picture into Foxit Design ~

### 14. Error Message : File in use when design barcode report

![16](../../../static/img/integration/pos/qna/16.png)

- Try Exit the program and logon
- Delete this report and design again

### 15. Backup Error : C:\itUnicode\SQL-POS\SQL-POS-0001.fdb could not be read

- Is due to IT Sync is running behind, may shut down IT Sync before Backup

### 16. Close Counter Collect Payment Type is not match with Payment Method select in Bills

![17](../../../static/img/integration/pos/qna/17.png)

- Collect Payment Summary Payment Type is group by Account Code, may check
    whether the payment method is using same account code ~

:::info
Step to check Payment Method post to what Account

- Setting -> POS Screen -> Payment Method - > Double click on the Payment Name

:::

### 17. Why in Setting Receipt & License Retrieve From SQL button is missing

![18](../../../static/img/integration/pos/qna/18.png)

- Once License Registered, the button will disable ~

### 18. Same receipt will auto cut to few pages

![19](../../../static/img/integration/pos/qna/19.png)

**Solution :**

- Upgrade to latest version of 334, some of the printer after design, paper size changed incorrectly, need to Tweak it again

**Step to Tweak :**

- In Print Receipt -> Follow below step

![20](../../../static/img/integration/pos/qna/20.png)

### 19. Unable to key In Daily Cash Sales No with message : The Control is Read Only

![21](../../../static/img/integration/pos/qna/21.png)

**Answer :**

- Control by license, need email to request new license key, mean Counter ID and CashSales number prefix based on license.

### 20. Receipt format unable to show Chinese word

1. Menu Screen -> Select **Print Receipt**

2. Click on **Modify** - >

3. Select the **Report Name** - > Click on **Modify**

4. Double click on the object to show in Chinese

    ![22](../../../static/img/integration/pos/qna/22.png)

:::caution
After Fill in \<UTF-8\> , remember save the report.
:::

### 21. Proper Step to set Branch SQL POS (Error Failed to Set )

1. Configure and make sure SQL able to test successful

2. Add Port 3050

3. In SQL POS :

![23](../../../static/img/integration/pos/qna/23.png)

- Put in DNS Number
- Ping result lost 0 = 0%
- Unticked **DisableChkPing**

### 22. Fail to assign Printer

![24](../../../static/img/integration/pos/qna/24.png)

**Solution :**

1. Check in **Setting** - > **Device** - > Receipt Printer -> assigned valid Receipt Printer
    **A4 Printer** Normally use EPSON LQ-310 or other laser printer - > Assigned
    valid Laser Printer

2. Check Report Format may assigned to valid printer

3. Window XP -> Upgrade to Window 7 & Above

### 23. How to disable preview receipt when payment done

![25](../../../static/img/integration/pos/qna/25.png)

Solution :

- SQL POS **Setting** - > **Receipt & License** Tab -> **No Copy of Receipt** set to **0**

### 24. What to do if disallow User to return stock?

Maintain User -> Refund Item ->

![26](../../../static/img/integration/pos/qna/26.png)

:::note
Set to Yes, user allow to return stock with enter - 1

Set to No, user disallow to save negative stock
:::

### 25. How to un-closed counter?

➔ Close Counter -> Right click un-closed counter

### 26. Unable to Sent Email from Gmail : Fail to sent email

:::info
*(Menu -> Export Cash Sales -> Email Button -> Setting Email Server Button)*
:::

![27](../../../static/img/integration/pos/qna/27.png)

**Solution :**

1. Follow this [Google Account Security page](https://myaccount.google.com/security)

2. Click on **Less Secure App Access**

    ![28](../../../static/img/integration/pos/qna/28.png)

3. Press the scrolling bar to Turn on

    ![29](../../../static/img/integration/pos/qna/29.png)

### 27. Post to SQL Account raise Error: Failed to Psot Payment of 02/6/2020 OLED IDispatch exception code 0 from : knockoff amount (0.00) must not exceed outstanding amount (321.6)

![30](../../../static/img/integration/pos/qna/30.png)

**Solution :**

1. Make sure SQL Pos version 340 & Above

2. SQL POS Setting -> SQL Account -> Ticked **Direct write to SQLAcc** & try to post again

## SQL POS F&B

### 28. Error Message : Counter is closed, wait for Main Counter to open

    ![31](../../../static/img/integration/pos/qna/31.png)

- This error message mean when there have multiple POS link together, make sure Main Counter have to Open Counter first.
