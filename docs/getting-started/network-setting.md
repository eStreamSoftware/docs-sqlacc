---
sidebar_position: 10
id: network-setting
title: Network Setting
description: A guide about network setting for SQL Account 
slug: /network-setting
tags: ["SQL Account", "Getting Started", "Network Setting"]
---

# Step by Step : SQL Account or Payroll – Network Setting     
Server PC Setting    

## 1 Session 1 : Install Firebird Version   
Visit http://www.sql.com.my/support/downloads to download firebird version.   
1.1 Install Firebird 3.0 version or higher. If Window System Type is 64 Bits, please download Firebird 3.0- 64 Bits    
   ![1](/img/getting-started/network-setting/1.png)     

 1.2 Run Firebird setup | Press `Ok` | Select `I accept the agreement` | Click 5 times `Next` | Make sure it is Run Firebird in SuperServer Mode (Refer Pic1) |   
   ![2](/img/getting-started/network-setting/2.png) **Pic1**     

1.3 : Leave it blank to use default password of masterkey.    
   ![3](/img/getting-started/network-setting/3.png)     

1.4 Click on `Next` | `Install` | `Next` | `Finish` to complete   

## 2 Session 2 : Window Firewall   
2.1 Control Panel | Window Firewall | Advanced Settings | Inbound Rules | New Rules |   
2.2 Select Port | Next | TCP | Specific Local Port = 3050 | Next | Next | Next |   
2.3 Name = Firebird | Finish   

## 3 Session 3 : Network and Sharing Center   
3.1 Control Panel | Network and Sharing Center | Change Advanced sharing Settings |   
3.2 **Network Discovery**   
 \- turn on Network Discovery     

 **File and Printer Sharing**     
\- Turn on sharing so anyone with network access can read and write files in the public folders     

**Public Folder Sharing**   
\- Turn on Sharing so anyone with network access can read and write files in the Public folders    

**File Sharing Connection**    
\- Use 128-bit encryption to help protect file sharing connections(recommended)    

**Password protected Sharing**    
\- Turn off password protected Sharing    

## 4 Session 4 : Share the SQL Account or Payroll Folder    
4.1 My Computer | Go to C:\eStream\SQLAccounting\Share or Go to C:\eStream\SQL Payroll\Share | Right Click | Properties | Sharing Tab | Advanced Sharing | Tick Share this Folder | Click Permissions | Tick Full Control | Press OK | Ok |   

4.2 Click on Security Tab | Click Advanced | Click on Change Permissions | Click Add Button | At empty Box enter : Everyone | Press OK | Tick Allow Full Control | Press OK | OK | OK | OK       

## 5 Session 5 : Install SQL Account or Payroll    
5.1 Run SQL Account or Payroll Setup | Click Next | Choose I Select the Agreement | Click Next |    
5.2 Amend to C:\eStream\SQLAccounting or C:\eStream\SQL Payroll | Click Next | 3 times | Install | Click Finish    
5.3 Create Group | Click DCF Group | Click save Button    
5.4 Database Engine = Firebird Server | Click Test Connection. If the status shown in blue color, press OK (Refer Pic3)     
   ![4](/img/getting-started/network-setting/4.png) **Pic3**     

## 6 Session 6 : Client PC Setting   
6.1 Run SQL Account or Payroll Setup | Click Next | Choose I Select the Agreement | Click Next 4 times | Install | Click Finish   
6.2 Add Group | Click DCF File   
6.3 Select Share folder (At Session 4)| Select Default DCF      
   ![5](/img/getting-started/network-setting/5.png)        
   ![6](/img/getting-started/network-setting/6.png)     
6.4 Click on Firebird icon and Logon as usual.   
