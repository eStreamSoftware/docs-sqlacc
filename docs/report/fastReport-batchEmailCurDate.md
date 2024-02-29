---
sidebar_position: 4
id: fastReport-batchEmailCurDate
title: Fast Report - Batch Email with PDF File Name with Current Date
description: This guide will teach you on how to capture current date on your export PDF File Name.
slug: /fastReport-batchEmailCurDate
tags: ["Fast Report", "Batch Email"]
---

# Fast Report - Batch Email with PDF File Name with Current Date
- This guide will teach you on how to capture current date on your export PDF File Name.

1. In QT Template DocNo = EMAIL, PDF File Name may set in <mark>Remark 2</mark>   
![1](/img/report/fastReport-batchEmailCurDate/1.png) 

:::info[note]
Remark 2 must fill in
:::
   
2. Preview your report | Click on <mark>Report Name</mark>   
![2](/img/report/fastReport-batchEmailCurDate/2.png) 

3. Click on <mark>Code Tab</mark> |  
![3](/img/report/fastReport-batchEmailCurDate/3.png)

procedure OnGetEmailSettings(EmailSettings: TStrings);  
var vEmail, vName: Variant;  
&nbsp;&nbsp;&nbsp;&nbsp;<mark>lDate : String;</mark>  
begin   
&nbsp;&nbsp;&nbsp;&nbsp;<mark>lDate := (formatDateTime('dd.mm.yyyy',Date));</mark>

 &nbsp;&nbsp;&nbsp;&nbsp;GetEMailTpl;  
 &nbsp;&nbsp;&nbsp;&nbsp;vEmail := Trim(&lt;Document_CompanyBranch."Email">);  
 &nbsp;&nbsp;&nbsp;&nbsp;vName := Trim(&lt;Main."CompanyName">);  

 &nbsp;&nbsp;&nbsp;&nbsp;if (vName &lt;> '' ) and (vEmail &lt;> '') then begin  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['Recipients'] := vEmail;  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['CC'] := &lt;plEMailTpl."CC">;  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['BCC'] := &lt;plEMailTpl."BCC">;  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['Subject'] := GetFldInfo(&lt;plEMailTpl."Subject">);  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['Body'] := GetFldInfo(RichTextToPlainText(&lt;plEMailTpl."Body">));  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if Trim(&lt;plEMailTpl."PDFFileName">) &lt;> '' then  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['FileName'] := <mark>lDate + ' ' + </mark> GetFldInfo(&lt;plEMailTpl."PDFFileName">);  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if Trim(GetPassword) &lt;> '' then  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['PDFPassword'] := GetPassword;  
 &nbsp;&nbsp;&nbsp;&nbsp;end;  
 &nbsp;&nbsp;&nbsp;&nbsp;EmailSettings.Values['ID'] := vName;  
end;