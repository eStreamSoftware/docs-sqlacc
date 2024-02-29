---
sidebar_position: 2
id: fastReport-basicGuide
title: Fast Report - Basic Guide
description: Basic Guide to get start with Fast Report
slug: /fastReport-basicGuide
tags: ["Fast Report", "Guide"]
---

# Fast Report - Basic Guide
## 1. Understand on Toolbar
### 1.1 Report Object

    ![1](/img/report/fastReport-basicGuide/1.png)
   
### 1.2 Align Toolbar

    ![2](/img/report/fastReport-basicGuide/2.png)  

## 2. Sales Inovice Bands
### 2.1 Understand on Bands

2.1.1 Group Header
- Grouping Header
- To Print on every page, right click on ***Group Header Band***, select ***reprint on new page***

2.1.2 Master Data
- The ***Main*** Dataset of the report 
- Normally Bind to Main Dataset 
- Each Page allows to have 1 ***Main Dataset Only***

2.1.3 Detail Data
- To display ***all Item Details***

2.1.4 Group Footer
- Grouping Footer
- Display on ***Last Page*** only 

2.1.5 Page Footer
- Display on ***Every Pages***

### 2.2 Sample Layout in Design Mode  
![3](/img/report/fastReport-basicGuide/3.png)

### 2.3 Sample Layout on Preview Mode  
![4](/img/report/fastReport-basicGuide/4.png)

### 2.4 Print Position
- Group Footer content will be printed at the pixel value input. 
- Higher Value = Higher Footer
- without setting with print position, the group footer will be printed after the document 
detail records.
- Example Source Code:  
    if Engine.FreeSpace < (GroupFooter1.Height + PageFooter1.Height + 30) then Engine.NewPage;  
    Engine.CurY := Engine.PageHeight - GroupFooter1.Height - PageFooter1.Height - **60** ;  
:::info[note]
**60** -> Higher Value = Higher Footer
:::


#### 2.4.1 How to do the Print Position setting in Report?

2.4.1.1 Click on ***Group Footer*** -> Click on ***Properties*** -> ***Events*** Tab -> Double Click on ***OnbeforePrint*** event name

![5](/img/report/fastReport-basicGuide/5.png)

2.4.1.2 Adjust the value  

![6](/img/report/fastReport-basicGuide/6.png)

### 2.5 Stop Position vs Print Count

| Stop Position | Print Count |
| :---:          |    :----:   |
| Details will stop at the input value| Details will stop by number of records inputs|
| Recommend    | Not recommend if using More Description        |
| Value in Pixel    | Number of Records |

#### 2.5.1 How to do the Stop Position in Report?
2.5.1.1 Right click ***DetailData1*** -> Click on ***Events*** Tab -> Double click ***onAfterCalcHeight*** name

![7](/img/report/fastReport-basicGuide/7.png)

2.5.1.2 Setting the stop position

![8](/img/report/fastReport-basicGuide/8.png)

:::tip[SMALL TIPS] 
i.    Set Either Print Count or Stop Position  
ii.   use // to disable the command  
iii.  When you set both Print Count and Stop Position, system will capture Print Count.
:::

#### 2.5.3 Sample on Print Position / Stop Position

![9](/img/report/fastReport-basicGuide/9.png)

## 3. How to design Simple Sales Invoice?  
➔ i. Preview Invoice  
➔ ii. Click on Report Name to enter to Design Mode

### 3.1 Add PICTURE
3.1.1 Click on Picture Object  
![10](/img/report/fastReport-basicGuide/10.png)

3.1.2 Place on Report Page   
![11](/img/report/fastReport-basicGuide/11.png)

**<u>i. Fix Picture</u>**

3.1.3 Click on Load  
![12](/img/report/fastReport-basicGuide/12.png)

3.1.4 Select the Picture on your local drive  

3.1.5 Click on ![tick](/img/report/fastReport-basicGuide/tick.png)  
![13](/img/report/fastReport-basicGuide/13.png)

3.1.6 Adjust to the desire size  
![14](/img/report/fastReport-basicGuide/14.png)

**<u>ii. Capture Picture from Report Dataset</u>**  
![15](/img/report/fastReport-basicGuide/15.png)

### 3.2 Text Memo
- Add Customer Email Address

3.2.1 Click on Text Memo  
![16](/img/report/fastReport-basicGuide/16.png)

3.2.2 Place on Report Page

3.2.3 Enter Text : Email   
![17](/img/report/fastReport-basicGuide/17.png)

3.2.4 Repeat Step 3.2.1 & 3.2.2

3.2.5 Select Document_CompanyBranch -> Email Expression  
![18](/img/report/fastReport-basicGuide/18.png)

### 3.3 Rich Text Object
- Add Note 

3.3.1 Click on RichText Object  
![19](/img/report/fastReport-basicGuide/19.png)

3.3.2 Place on Report Page  

3.3.3 Select Main -> Note  
![20](/img/report/fastReport-basicGuide/20.png)

### 3.4 System Text
- Add Sum Qty

3.4.1 Click on System Text Object  
![21](/img/report/fastReport-basicGuide/21.png)

3.4.2 Place on the Report Page

3.4.3 Select Aggregate value  
![22](/img/report/fastReport-basicGuide/22.png)

3.5 Draw Line

3.5.1 Click on Line  
![23](/img/report/fastReport-basicGuide/23.png)

3.5.2 Place on the Report Page

3.5.3 Draw a line  
![24](/img/report/fastReport-basicGuide/24.png)

### 3.6 Center Horizontally in Band  
- Display the object in center horizontal

3.6.1 Click on Object you want to show in center horizontal

3.6.2 Click on Center Horizontally In Band  
![25](/img/report/fastReport-basicGuide/25.png)

3.6.3 Done

### 3.7 Align Left / Middle / Right
3.7.1 Click on the multiple Object to Align as same alignment. System will follow the first object 
as alignment  
![26](/img/report/fastReport-basicGuide/26.png)

3.7.2 Done

### 3.8 Save the File
1. File -> Save As -> Enter Report Name -> Save  

2. Preview and see the result

Result:

![27](/img/report/fastReport-basicGuide/27.png)

## 4. How to create the Subreport in Report?
-> Preview Invoice  
-> Click on Report Name to enter to Design Mode

![28](/img/report/fastReport-basicGuide/28.png)

### 4.1 Click on Subreport Object
![29](/img/report/fastReport-basicGuide/29.png)

4.1.1 Place on Report Page you want to show.  
![30](/img/report/fastReport-basicGuide/30.png)

### 4.2 System will prompt a new blank page for Subreport
![31](/img/report/fastReport-basicGuide/31.png)

### 4.3 Click on Insert Band to design the layout or insert the data
![32](/img/report/fastReport-basicGuide/32.png)  
*\*\*May refer 2.1 Understand Bands at Page 4 on what band to use*

## 5. Check Box
### 5.1 Simple CheckBox
5.1.1 Click on CheckBox object  
![33](/img/report/fastReport-basicGuide/33.png)  

5.1.2 Place on the place you want to show.  
![34](/img/report/fastReport-basicGuide/34.png)  

5.1.3 Press on the button  
![35](/img/report/fastReport-basicGuide/35.png) 

5.1.4 Select the frame design  
![36](/img/report/fastReport-basicGuide/36.png) 

5.1.5 Change to False  
![37](/img/report/fastReport-basicGuide/37.png) 

5.1.6 Save the File  
i. File -> Save As -> Enter Report Name -> Save  
ii. Preview and see the result

Result:  
   ![38](/img/report/fastReport-basicGuide/38.png) 

## 5.2 Query to show Check Box either True to False
### 5.2.1 Click on CheckBox | Double Click OnBeforePrint
![39](/img/report/fastReport-basicGuide/39.png) 

### 5.2.2 Place a Query below
![40](/img/report/fastReport-basicGuide/40.png)

Query :  
&nbsp;&nbsp;&nbsp;&nbsp;if (Main."UDF_updated") = 'T' then  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checkbox1.checked := true  
&nbsp;&nbsp;&nbsp;&nbsp;else  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checkbox1.checked := false;

## 6. How to do Report Watermark?
Step 1 : Insert Band | Select Overlay   
![41](/img/report/fastReport-basicGuide/41.png)  

Step 2 : Insert Picture / Text to load in the water mark  
![42](/img/report/fastReport-basicGuide/42.png)  

Step 3 : Overlay size can drag the same size as A4/Letter, and place the watermark on the position you want to show.  
![43](/img/report/fastReport-basicGuide/43.png) 

Step 4 : File | Save As: Enter report name

Step 5 : Preview and see the Result :  
![44](/img/report/fastReport-basicGuide/44.png) 

## Frequently Ask Question(FAQ)
### 1. Unit price is 0, display as FOC  
In Memo, enter following syntax :  
&nbsp;&nbsp;&nbsp;&nbsp;[FormatFloat(',0.00;-,0.00;FOC ',&lt;Document_Detail."UnitPrice"&gt;)]  
![45](/img/report/fastReport-basicGuide/45.png) 

### 2. Document Currency Description Cents change to Sens
[Document_Currency."Description"] : [StringReplace(CurrencyToLangWord(&lt;Main."DocAmt"&gt;, 
&lt;Profile."CurrencyLang"&gt;), 'CENTS', 'SENS', TRUE)]  
![46](/img/report/fastReport-basicGuide/46.png) 

### 3. More Description convert RichTextToPlainText
Syntax :   
&nbsp;&nbsp;&nbsp;&nbsp;[RichTextToPlaintext(&lt;Document_Detail."Description3"&gt;)]  
![47](/img/report/fastReport-basicGuide/47.png)

![48](/img/report/fastReport-basicGuide/48.png)  

### 4. How to change report paper size?
File -> Page Setting ->   
![49](/img/report/fastReport-basicGuide/49.png)  

### 5. if Qty > 10 , text color in red and in bold?
5.1 Double Click on Memo

5.2 Click on **Highlight Tab**

5.3 Click on **Add Button**

5.4 Expression value > 10  
![50](/img/report/fastReport-basicGuide/50.png) 

5.5 Click on Font 
Can set for Font Type, Font Style, Size, Color or Effects
![51](/img/report/fastReport-basicGuide/51.png) 

5.6 Press **OK**

5.7 Right Click on Memo, **Ticked Allow Expression**

**Result** :  
![52](/img/report/fastReport-basicGuide/52.png) 

### 6. Why in Report I have place at the position I want, but when preview it will show at bottom?
- Right click on Memo, **unticked Shift** and **Unticked Shift when Overlapped**

### 7. Export to PDF Logo is blur
Solution :  
![53](/img/report/fastReport-basicGuide/53.png) 

### 8. How to capture remark1 as url path?
In Memo properties :  
Hyperlink Expression added in the Data Field Name
![54](/img/report/fastReport-basicGuide/54.png) 

Result :  
![55](/img/report/fastReport-basicGuide/55.png)

### 9. Payslip to show AL or MC Only
&nbsp;&nbsp;&nbsp;&nbsp;Step 1 : Click on SubReport3  
&nbsp;&nbsp;&nbsp;&nbsp;Step 2 : Right click on **Leave MasterData Band**
![56](/img/report/fastReport-basicGuide/56.png)

&nbsp;&nbsp;&nbsp;&nbsp;Step 3 : Click on Filter button  
&nbsp;&nbsp;&nbsp;&nbsp;Step 4 : Enter the expression :  
&nbsp;&nbsp;&nbsp;&nbsp;(&lt;Leave."LeaveType"&gt; ='AL') OR (&lt;Leave."LeaveType"&gt; ='MC')  
&nbsp;&nbsp;&nbsp;&nbsp;Step 5 : Press OK  
&nbsp;&nbsp;&nbsp;&nbsp;Step 6 : Press OK  
![57](/img/report/fastReport-basicGuide/57.png)

### 10.How to get Net Unit Price
&nbsp;&nbsp;&nbsp;&nbsp;Step 1 : Click on **Memo Tex**  
&nbsp;&nbsp;&nbsp;&nbsp;Step 2 : Place on **Document Detail Band**  
&nbsp;&nbsp;&nbsp;&nbsp;Step 3 : Drag data field from right to left box :  
&nbsp;&nbsp;&nbsp;&nbsp;[&lt;Document_Detail."Amount"&gt; / &lt;Document_Detail."Qty"&gt]  
&nbsp;&nbsp;&nbsp;&nbsp;Step 4 : Press OK  
&nbsp;&nbsp;&nbsp;&nbsp;Step 5 : Adjust the position  
&nbsp;&nbsp;&nbsp;&nbsp;Step 6: Preview and see the result

![58](/img/report/fastReport-basicGuide/58.png)

### 11. UOM = UNIT, Qty display without Decimal Point, else with 2 Decimal Point.
&nbsp;&nbsp;&nbsp;&nbsp;Step 1 : Click On Memo Text  
&nbsp;&nbsp;&nbsp;&nbsp;Step 2 : Copy the below syntax and Paste into Memo:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IIF(&lt;Document_Detail."UOM"> = 'UNIT'>,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FormatFloat('#,0;-#,0 ', &lt;Document_Detail."Qty">) ,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FormatFloat('#,0.00;-#,0.00 ', &lt;Document_Detail."Qty">))]  

![59](/img/report/fastReport-basicGuide/59.png)  
Step 4 : Press OK  
Step 5 : Result After Preview  

![60](/img/report/fastReport-basicGuide/60.png)

### 12.How to Get Supplier Bank in Payment Voucher?
Step 1 : Click on Memo ![A](/img/report/fastReport-basicGuide/A.png)  
Step 2 : Paste this syntax inside Memo
[&lt;GetbankName(pl_SUPPLIERBANKACC."Bank"&gt;)]

![61](/img/report/fastReport-basicGuide/61.png)

### 13.How to change the Amount in Word to First Character to Upper Case only?
Can use function NameCase

![62](/img/report/fastReport-basicGuide/62.png)

Before :
![63](/img/report/fastReport-basicGuide/63.png)  
After :
![64](/img/report/fastReport-basicGuide/64.png)
