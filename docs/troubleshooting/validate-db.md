---
sidebar_position: 3
id: validate-db
title: How to validate database with SQL Diagnosis Utility
description: A guide to validate database using SQL Diagnosis Utility for SQL Account
slug: /validate-database-using-diagnosis-utility
tags: ["SQL Account", "Troubleshooting"]
---

# How To Validate Database With SQL Diagnosis Utility

Download & Install SQL Accounting Diagnosis from http://www.sql.com.my/utility/SQLAccDiagnosis-setup.exe  

User & password to access to above link = sqlutility  
   1) Find below icon in your desktop after installed SQL Accounting Diagnosis  
   ![1](/img/troubleshooting/validate-db/1.png)  

   2) Choose firebird 2.5 and click on `Database Validate`  
   ![2](/img/troubleshooting/validate-db/2.png)  

   3) Click on the yellow colour folder to select your database  
   ![3](/img/troubleshooting/validate-db/3.png)  

   4) A) go to your DB Folder (refer step `5D` on how to check where your DB Folder located)  
      B) Select your FDB (refer step `5B i` on how to check which FDB should select)  
      C) Click on Open  
   ![4](/img/troubleshooting/validate-db/4.png)  

   5) A) Click on the ⚙️ button in logo screen  
      B i) check your ACC-XXXX.FDB  
      B ii) click on back to database group  
      C i) right click on the firebird group  
      C ii) go properties  
      D) Check on the DB Folder  
   ![5](/img/getting-started/backup-restore/7.png)  
   ![6](/img/troubleshooting/validate-db/6.png)  
   ![7](/img/troubleshooting/validate-db/7.png)  
   ![8](/img/troubleshooting/validate-db/8.png)  

   6) After selected your correct ACC-XXXX.FDB , Click on Validate and make sure you get message “Database Validation Complete” as right screen > click ok  

   :::info
   If you don’t get “Database validation complete” , and get error “ bad parameter” , please contact helpdesk to fix this database .
   :::
   ![9](/img/troubleshooting/validate-db/9.png)  

   7) Click on Backup if you get “ database validation complete” > select `Desktop` > Click on `OK` > Click `ok` for Backup Successful.  
   ![10](/img/troubleshooting/validate-db/10.png)  

   8) A) Restore your database as usual >click on the ⚙️ button  
   ![11](/img/getting-started/backup-restore/7.png)  

   8B) Click on Restore  
   ![12](/img/troubleshooting/validate-db/12.png)  

   8C) Click on the 3 dot button  
   ![13](/img/troubleshooting/validate-db/13.png)  

   8D) Select the backup file in desktop > Open > Click on OK > Click on OK  
   ![14](/img/troubleshooting/validate-db/14.png)  
   ![15](/img/troubleshooting/validate-db/15.png)  

   8E)Click on OK  
   ![16](/img/troubleshooting/validate-db/16.png)  

   9) After restore you will see two database in same name , left side ACC-0160.FDB is old(refer step `5B i`)  
      And right side ACC-0161.FDB is new file you restored (refer step `8D`)  
      
      For old database you can right click on it either to drop link / delete database  
      \- **Drop link : Temporary hide, future you can click “Find Database” in left panel to call it back**  
      \- **Delete Database : Permanently delete, no way to call it back**  
   ![17](/img/troubleshooting/validate-db/17.png)  

 