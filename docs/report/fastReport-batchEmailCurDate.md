---
sidebar_position: 4
id: fastReport-batchEmailCurDate
title: Fast Report - Batch Email with PDF File Name with Current Date
description: This guide will teach you on how to capture current date on your export PDF File Name.
slug: /report/fastReport-batchEmailCurDate
tags: ["Fast Report", "Batch Email"]
---

## Steps & Instruction

- This guide will teach you on how to capture current date on your export PDF File Name.

1. In QT Template DocNo = EMAIL, PDF File Name may set in **Remark 2**

    ![1](/img/report/fastReport-batchEmailCurDate/1.png)

    :::info[note]
    Remark 2 must fill in
    :::

2. Preview your report | Click on **Report Name**

    ![2](/img/report/fastReport-batchEmailCurDate/2.png)

3. Click on **Code Tab** |

    ![3](/img/report/fastReport-batchEmailCurDate/3.png)

>procedure OnGetEmailSettings(EmailSettings: TStrings);
>
>var vEmail, vName: Variant;
>
>>**lDate : String;**
>
>begin
>
>>**lDate := (formatDateTime('dd.mm.yyyy',Date));**
>>
>>GetEMailTpl;
>>
>>vEmail := Trim(&lt;Document_CompanyBranch."Email">);
>>
>>vName := Trim(&lt;Main."CompanyName">);
>>
>>if (vName &lt;> '' ) and (vEmail &lt;> '') then begin
>>
>>>EmailSettings.Values['Recipients'] := vEmail;
>>>
>>>EmailSettings.Values['CC'] := &lt;plEMailTpl."CC">;
>>>
>>>EmailSettings.Values['BCC'] := &lt;plEMailTpl."BCC">;
>>>
>>>EmailSettings.Values['Subject'] := GetFldInfo(&lt;plEMailTpl."Subject">);
>>>
>>>EmailSettings.Values['Body'] := GetFldInfo(RichTextToPlainText(&lt;plEMailTpl."Body">));
>>>
>>>if Trim(&lt;plEMailTpl."PDFFileName">) &lt;> '' then
>>>
>>>>EmailSettings.Values['FileName'] := lDate + ' ' +  GetFldInfo(&lt;plEMailTpl."PDFFileName">);
>>>
>>>if Trim(GetPassword) &lt;> '' then
>>>
>>>>EmailSettings.Values['PDFPassword'] := GetPassword;
>>>
>>end;
>>
>>EmailSettings.Values['ID'] := vName;
>
>end;
