---
sidebar_position: 3
title: FAQ
description: Supplier Frequently Asked Questions
slug: /usage/supplier/FAQ
tags: ["SQL Account", "Supplier", "FAQ"]
---

## JOMPAY - How to add the Ref 2 (optional) in the bank payment file format?

**Issue:**

How to capture the JomPay Ref 2 (bill no) in the bank payment file format?

![supplier-faq-add-reference2-1](../../../static/img/usage/supplier/supplier-faq-images/supplier-faq-add-ref2-1.jpg)

**Solution:**

1. Go to **Tools | DIY | SQL Control Center**...
2. Add the JomPAY Ref 2 field under **Supplier | Supplier Payment | Payment Fields**.

   | Field Name  | Data Type | Size |
   |-------------|-----------|------|
   | JomPAY_Ref2 | String    | 30   |

   ![supplier-faq-add-reference2-2](../../../static/img/usage/supplier/supplier-faq-images/supplier-faq-add-ref2-2.jpg)

3. Create **Quick Form** and add the UDF_JomPay_Ref2.

   ![supplier-faq-add-reference2-3](../../../static/img/usage/supplier/supplier-faq-images/supplier-faq-add-ref2-3.jpg)

4. At **Supplier Payment**, key in the bill no into UDF_JomPAY_Ref2 under JOMPAY tab.

   ![supplier-faq-add-reference2-4](../../../static/img/usage/supplier/supplier-faq-images/supplier-faq-add-ref2-4.jpg)

5. JomPAY Ref 2 will be captured in the bank JomPAY payment format.

   ![supplier-faq-add-reference2-5](../../../static/img/usage/supplier/supplier-faq-images/supplier-faq-add-ref2-5.jpg)

:::note NOTE:
The above solution is using SQL Account version 784 and above. Modules required:

1. Interbank GIRO
2. DIY Field (or Professional Set).

:::
