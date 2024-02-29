---
sidebar_position: 4
id: serial-no
title: Serial No Module
description: A guide about serial no. module for SQL Account
slug: /serial-no
tags: ["SQL Account", "Additional Module"]
---

# Serial No Module 
1. Please go to Stock | Maintain Stock Item | Edit | Checked Serial No  
   ![1](/img/additional-module/serial-no/1.png)    

2. Purchase | Goods Received Note | New |  
:::info
2.1 There have **3 methods** to apply serial no :  
:::
## 2.2 Method 1 : <u>Manually Enter</u>  
   2.2.1 : Click on + (Green Icon) | Manually Enter at Empty Box  
   ![2](/img/additional-module/serial-no/2.png)    

## 2.3 Method 2 : <u>Import from Notepad / Word</u>  
   2.3.1 Enter the Serial No at the notepad.  
   ![3](/img/additional-module/serial-no/3.png)    

   2.3.2 : Click Import |  
   ![4](/img/additional-module/serial-no/4.png)    

   2.3.3 : Select Notepad where you have saved to .  
   ![5](/img/additional-module/serial-no/5.png)    
   
   2.3.4 : Click Ok   
   ![6](/img/additional-module/serial-no/6.png)    

## 2.4 Method 3 : <u>Generator</u>  
   2.4.1 : Click on Generator |  
   ![7](/img/additional-module/serial-no/7.png)    

###  2.4.2 Format = Serial No Format  
   Start From = What number you wish to start from  
   Count = How many units to generate  
   ![8](/img/additional-module/serial-no/8.png)    

###  2.4.2 Here the output   
   ![9](/img/additional-module/serial-no/9.png)    
   
   Step 3 : Sales | Delivery Order | Click Add   
   ![10](/img/additional-module/serial-no/10.png)    

   \* + (Green Color) Same method as 2.2  
   \* Import same method as 2.3  

   4.1 Tick Serial No | Press Ok  
   ![11](/img/additional-module/serial-no/11.png)  

:::info   
Noted : Stock Adjustment does not support serial no. May using Stock Received and Stock Issue to replace .  
:::
### Serial No Report  
1. Print Stock Physical Worksheet – Will show all Serial No haven’t issuing out.  

2. Print Stock Serial No Conflict  
   i) To check SN had issued out, but no any receiving info.  
   ii) To check duplicate SN received at the same location/batch for the same item.  

3. Print Stock Outstanding Serial No  
   i) For those documents Issued or Received do no applying serial no.  

4. Inquiry | Print Serial No Inquiry  
   i) Check serial no movement.  


### Access Right for Serial No  
1. Group Stock |  
   i) Always match Qty with serial no  
   \- Checked mean serial no must match Qty key in. Eg : 2 Qty = 2 Serial No  
   If checked this right, Print Outstanding Serial No will no result.  

   ii) Allow Non-Existent Serial No  
   \- Checked mean for those Serial No Issuing out, allow to key non exist Serial No.  
   If unchecked this right, Print Stock Serial No Conflict will no result.    


