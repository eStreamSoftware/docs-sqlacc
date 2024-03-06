---
sidebar_position: 12
id: fastReport-taxShwA
title: Fix Report Tax Rate show A instead of 6%
description: A guide to show Report Tax Rate as A instead of 6%
slug: /report/fastReport-taxShwA
tags: ["Report Builder", "Fast Report", "Tax"]
---

## Report Builder

![1](/img/report/fastReport-taxShwA/1.png)

1. Preview the Report format, Click on blue color link and enter into Report Design. (Refer **Pic1**)

   **Pic1:**

   ![2](/img/report/fastReport-taxShwA/2.png)

2. Check GST Summary using which Pipeline | This Report using plSQL_7. (Refer **Pic2**)

   **Pic2:**

   ![3](/img/report/fastReport-taxShwA/3.png)

3. Click on Calc Tab. (Refer **Pic3**)

   **Pic3:**

   ![4](/img/report/fastReport-taxShwA/4.png)

4. Click on Menu View | Select Module (Refer **Pic4**)

   **Pic4:**

   ![5](/img/report/fastReport-taxShwA/5.png)

5. Click on Events | Click on Main:plSQL_0 | Look for SQL_7(Refer Step 2 to see which pipeline) | Insert TaxRate (Refer **Pic5**)

   **Pic5:**

   ![6](/img/report/fastReport-taxShwA/6.png)

   **Full Query :**

   >SQL_7 := 'SELECT DocKey, Tax, TaxRate, Sum(LocalAmount) LocalAmount, Sum(Qty) Qty, Sum(LocalTaxAmt) localTaxAmt, Description '+
   >
   > 'FROM Document_Detail ' +
   >
   >'Where Tax &lt;> ''''' +
   >
   >'GROUP BY Dockey, Tax, TaxRate';

6. Click on Event Handler | Select Procedure ReportBeforePrint | Look for Pipeline SQL_7 | Insert TaxRate (Refer **Pic6**)

   **Pic6:**

   ![7](/img/report/fastReport-taxShwA/7.png)

   **Full Query :**

   >LocalSQL_SELECT(plSQL_7, SQL_7, 'Dockey;Tax;TaxRate');

7. Click on SubReport1:plSQL_7 Tab (Refer **Pic7**)

   **Pic7:**

   ![8](/img/report/fastReport-taxShwA/8.png)

8. Click on VarTax | Right Click | Select Calculation (Refer **Pic8**)

   **Pic8:**

   ![9](/img/report/fastReport-taxShwA/9.png)

9. Amend the Query | Press OK (Refer **Pic10**)

   - Before Amend **(Pic9)**:

      ![10](/img/report/fastReport-taxShwA/10.png)

   - After Amend **(Pic10)**:

      ![11](/img/report/fastReport-taxShwA/11.png)

   **Full Query :**

   >Value := plsql_7.getfieldvalue('Tax') + ' @ ' + plsql_7.getfieldvalue('TaxRate');

10. File | Save (Refer **Pic11**)

      **Pic11:**

      ![12](/img/report/fastReport-taxShwA/12.png)

11. Close the report builder

12. Preview again the same report format. (Refer **Pic12**)

   **Pic12:**

   ![13](/img/report/fastReport-taxShwA/13.png)

## Fast Report

1. Preview the Report format, Click on blue color link and enter into Report Design. (Refer **Pic1**)

   **Pic1:**

   ![14](/img/report/fastReport-taxShwA/14.png)

2. Click on Code Tab(Refer **Pic2**)

   **Pic2:**

   ![15](/img/report/fastReport-taxShwA/15.png)

3. In Code page insert TaxRate (Refer **Pic3**)

   **Pic3:**

   ![16](/img/report/fastReport-taxShwA/16.png)

   **Full Query :**
   >SQL := 'SELECT Code, TaxRate FROM Tax ' +
   >
   >'WHERE ISACTIVE=1 ' +
   >
   >'AND (TAXTYPE=0X00010000+0X00020000 OR ' +
   >
   >'((TAXTYPE / 0X00020000 / 2) - (TAXTYPE / >0X00020000 / 2.0)) &lt;> 0) ' +
   >
   >' ORDER BY CODE';
   >
   >AddDataSet('GSTTax', ['Code', 'TaxRate'])
   >
   >.GetDBData(SQL)
   >
   >.LinkTo('GSTAmt', 'Tax', 'Code');

4. Click on SubReport1 Tab | Click on the Text Field (Refer **Pic4**)

   **Pic4:**

   ![17](/img/report/fastReport-taxShwA/17.png)

5. Change the Query as below | Press OK (**Pic5**)

   **Pic5:**

   ![18](/img/report/fastReport-taxShwA/18.png)

6. File | Save

7. Close the Fast Report

8. Preview the same format again.
