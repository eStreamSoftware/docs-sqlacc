---
sidebar_position: 16
id: roundingRpt
title: How to do Rounding Report
description: Guide on doing rounding of figure in the report
slug: /report/roundingRpt
tags: ["Report", "ReportBuilder", "Rounding"]
---

## Steps & Instructions

**Sample Invoice with Rounding RM0.02 :**

![1](/img/report/roundingRpt/1.png)

1. Using Tax Invoice format 06-Tax-Invoice
   ![2](/img/report/roundingRpt/2.png)

   :::info[note]
   Click on blue color link - **06-Tax-Invoice**
   :::

2. Click on **Calc** Tab

   ![3](/img/report/roundingRpt/3.png)

3. Right Click select **Module**

   ![4](/img/report/roundingRpt/4.png)

4. Click on **Declarations**

   ![5](/img/report/roundingRpt/5.png)

5. Declare **SQL_Rounding** under **Variable**

   ![6](/img/report/roundingRpt/6.png)

6. Click on Events | On Create | Procedure GlobalOnCreate insert syntax as below :

   >SQL_Rounding := 'SELECT DocKey, Sum(Amount) Amount, Description '+
   >
   >'FROM Document_Detail ' +
   >
   >'WHERE ItemCode=''RTN5Cents'' '+
   >
   >'GROUP BY DocKey';

   **Refer Picture below :**

   ![7](/img/report/roundingRpt/7.png)

   :::info[Optional]
   Add additional syntax in plSQL_4 – Refer below, only if Total Amount beforeGST you want to exclude rounding amount.

   ![8](/img/report/roundingRpt/8.png)

   >*SQL_4 := 'SELECT DocKey, Sum(Amount) Amount, Description '+
   >
   >'FROM Document_Detail ' +
   >
   >'WHERE ItemCode&lt;> ''DISC'' '+
   >
   >'or Itemcode is null ' +
   >
   >'and ItemCode &lt;> ''RTN5Cents'' ' +
   >
   >'GROUP BY DocKey';*
   :::

7. Click on Event Handlers | Click on procedure Report BeforePrint, insert syntax as below :

   >*LocalSQL_SELECT(plSQL_Rounding, SQL_Rounding, 'DocKey');
   >
   >SetDataPipelineFieldLink(Main, plSQL_Rounding, 'DocKey', 'DocKey');*

   ![9](/img/report/roundingRpt/9.png)

8. File | Save | Exit from report design and go in to Report Design again.

9. Insert DBText | and place at the place you want.

   ![10](/img/report/roundingRpt/10.png)

   1. Click on DBText

   2. Place at the Group Footer area

   3. Select plSQL_Rounding

   4. Manually type in Amount

   Here is the output :

   ![11](/img/report/roundingRpt/11.png)

   After adjust the position :

   ![12](/img/report/roundingRpt/12.png)

   **Item Detail hide Item Code RTN5Cents to be appearing, refer step as below :**

10. Click on Document_Detail Tab as below | Click on Calc | Event Handlers | Procedure RdiscOnPrint

       ![13](/img/report/roundingRpt/13.png)

    - Syntax:

       >RDisc.Visible := (Document_Detail.getfieldvalue('Itemcode') &lt;> 'DISC')
       >
       >and (Document_Detail.getfieldvalue('Itemcode') &lt;> 'RTN5Cents');

    - Output :

       ![14](/img/report/roundingRpt/14.png)

      **How to do if the report never create the region before?**

11. Right click tick all the Toolbars

      ![15](/img/report/roundingRpt/15.png)

12. Click on Region component

      ![16](/img/report/roundingRpt/16.png)

13. Place at the design grid | Click at the region | Select no Fill

      ![17](/img/report/roundingRpt/17.png)

14. Select No Line

      ![18](/img/report/roundingRpt/18.png)

15. Place all the DBtext/DBRichText inside the Region.

      ![19](/img/report/roundingRpt/19.png)

16. Click on Region to check the object name :

      ![20](/img/report/roundingRpt/20.png)

17. Click on Calc tab | Right Click select Events

      ![21](/img/report/roundingRpt/21.png)

18. Look for RDisc | Select OnOnPrint | Place the syntax inside bottom box

      ![22](/img/report/roundingRpt/22.png)

      Syntax :
      >**RDisc**.Visible := (Document_Detail.getfieldvalue('Itemcode') &lt;> 'DISC')
      >
      >and (Document_Detail.getfieldvalue('Itemcode') &lt;> 'RTN5Cents');

   :::info[note]
   **RDisc** is your object name, if you object name is **Region1**, then have to change as below :

   >**Region1**.Visible := (Document_Detail.getfieldvalue('Itemcode') &lt;> 'DISC')
   >
   >and (Document_Detail.getfieldvalue('Itemcode') &lt;> 'RTN5Cents');
   :::
