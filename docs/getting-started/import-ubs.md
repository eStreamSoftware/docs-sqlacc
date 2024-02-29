---
sidebar_position: 8
id: import-ubs
title: Import UBS Guide
description: A guide to import UBS for SQL Account
slug: /import-ubs-guide
tags: ["SQL Account", "Getting Started"]
---

# Migrate UBS – Valid 693 & Above    
Step 1 : Place the UBS backup file to C:\UBSACC90\DB\20140704, every time create new folder under DB.   
Step 2 : Download 7 Zip to extract UBS Backup file(Only for Import Master File) or else you may restore to UBS program.   

Download Path for 7 Zip :   
   -  Window 32 Bits   
      http://www.sql.com.my/utility/7-zip.msi     

   -  Window 64 Bits    
      http://www.sql.com.my/utility/7-zip-x64.msi    
      \- Username & Password to download = sqlutility     

:::info
Make sure install the right one or else you can’t find 7 Zip to Extract.       
:::
   ![1](/img/getting-started/import-ubs/1.png)      

Step 3 : Create New Database | Logon to New Company   
Step 4 : Go to `File` | `Data Import` | Select `UBS Account` |    
   ![2](/img/getting-started/import-ubs/2.png)      

:::info 
i) Account which mean import COA, Maintain Customer, Maintain Supplier, Agent, Area, Term, Project, Currency and Customer & Supplier Outstanding   

ii) Stock which mean import Stock Group, Stock Category, Stock Location, Stock Price Tag, Stock Item, Sales Invoice History, Sales Delivery Order History, Purchase Invoice History.      
:::
   ![3](/img/getting-started/import-ubs/3.png)      
   ![4](/img/getting-started/import-ubs/4.png)      

Step 5 : Close the Data Import | Go to `Tools` | `Options` | `Customer` | Fill in the Customer Control Account code(Same to Supplier Control Account Code).    
   ![5](/img/getting-started/import-ubs/5.png)    

Step 6 : Repeat step 4, continue import to system.   
   ![6](/img/getting-started/import-ubs/6.png)    

Step 7 Import Customer   
   ![7](/img/getting-started/import-ubs/7.png)    

:::note 
Note 1 : When you import half way with error, you can continue by enter the record no, then press
Save button, system will continue import.
:::

:::note
Note 2 : Tick Reformat Cust & Supplier follow SQL Customer Code. Eg : Ubs Cust Code is 3000/A01
will become 300-A0001
:::

Step 8 : Import Customer Opening Balance   

   Step 8.1 : The step you have to do before run UBS Year End :   
   i) Transaction(4) | Open Item Menu Debtor (6)| Maintain B/F Bills(1) | Press List Button | Exit | Press Generate | Press Yes | Exit    
   ii) Transaction(4) | Open Item Menu Debtor (6)| Edit B/F or O/I(5) | Click on Mark all for O/I button | Exit    
   iii) Transaction(4) | Open Item Menu Debtor (6)| Bill Payment Ledger(6) | List Missing Record in ARPost.dcf(3) | Press ok    

   Step 8.2 : Do the same step for Supplier Side    

   Step 8.3 : Import Opening Balance(Outstanding Invoice by Invoice)    
   ![8](/img/getting-started/import-ubs/8.png)    
\* You may tick all the opening at the same time. (Customer Payment takes longer time to import in).   

Step 9 : Import UBS Stock 
: Go to `File` | `Data Import` | Select `UBS Stock` | 
   ![9](/img/getting-started/import-ubs/9.png)    

Step 9.1 : Maintain Stock   
   ![10](/img/getting-started/import-ubs/10.png)    

Step 9.2 : Maintain Stock Item   
   ![11](/img/getting-started/import-ubs/11.png)    

Step 9.3 : Sales DO / IV and Purchase Price History   
   ![12](/img/getting-started/import-ubs/12.png)    

:::note
Note 3 : Optional – Tick if you need the info.
:::
 