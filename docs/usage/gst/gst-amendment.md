---
sidebar_position: 8
title: Amendment
description: Amendment on GST system
slug: /usage/gst/gst-amendment
tags: ["SQL Account", "Usage", "GST"]
---

## GST - 03 Amendment

For those company who might asked and self report to RMCD for the GST-03 amendment. It could be because of applying wrong tax code or others reasons.
Therefore, this guide will explain the features to perform amendment on the particular GST-03 and re-submit via TAP website.

### Notification On GST 03 Return Amendment

In accordance with **Regulation 69 of the GST Regulation 2014**, with **effect from 23 August 2016**, rules on return amendments are follows:

  1. There is **no limit** on return amendments until due date of submission of return.
  2. Amendment are allowed once within 30 days **(for monthly taxable period)** or 90 days **(for quarterly taxable period)** after last day of submission of return. Subsequent amendment are subject to approval by GST Officer.
  3. Amendment after the period stated in PARA 2 above are subject to approval by GST Officer.
  4. Amendment can be made through TAP but are subject to approval by GST Officer.
  5. Return amendments which are not approved by GST Officer is considered invalid and previous return made before the amendment will be accepted.

### Amendment

1. Highlight and right click on the GST-03 that you are required to resubmit as **amendment**.

   ![des-gst03-amendment-step-1](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-1.jpg)

2. Select **Unlock**.

   ![des-gst03-amendment-step-2](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-2.jpg)

3. Click on **No** to unlock this GST Return.

   ![des-gst03-amendment-step-3](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-3.jpg)

   :::note Important:

   Read the message before take further actions.

   :::

4. Enter the ADMIN password.

   ![des-gst03-amendment-step-4](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-4.jpg)

   :::note NOTE:

   ADMIN password only

   :::

5. Status will added **Unlock** icon. It means users are allow to amend the documents for the month unlock, eg. the documents are able to amend in Oct 2015 only.

   ![des-gst03-amendment-step-5](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-5.jpg)

   :::note NOTE:

   1. The month and all the subsequent month of GST-03 will converted to "Recalculate" action. It is depends on the amendment which might trigger the bad debt relief result changed.
   2. All the subsequent month of GST-03 are not allow to amend the documents (eg. invoice, credit note, supplied invoice, etc), unless you have **Unlock** it.

   :::

6. For example, to correct the tax code from ZRL to SR for the invoice amount Rm2,500.00.

   1. Edit the invoice (eg. IV-00014 and date: 02 Oct 2015)

      ![des-gst03-amendment-step-6](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-6.jpg)

      :::note NOTE:

      **Unlock** GST-03 is allow you to edit the documents only.

      :::

   2. Change the tax code from **ZRL** to **SR**.
   3. It will resulting the **output tax increased by Rm150.00** (Rm2,500.00 X 6%).

      ![des-gst03-amendment-step-7](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-7.jpg)

7. Run **Recalculate** for the GST-03 (eg. Oct 2015)
8. System will prompt **Recalculate successfully**.

   ![des-gst03-amendment-step-8](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-8.jpg)

9. Press OK to proceed and a draft copy of GST-03 for Oct 2015 will create automatically. A previous GST-03 before perform any amendment to the taxable period will converted as **DRAFT** status.

   ![des-gst03-amendment-step-9](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-9.jpg)

10. You can see the comparison in between **the draft (from Recalculate)** and **the Final GST-03** for the amendment taxable period.

   ![des-gst03-amendment-step-10](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-step-10.jpg)

   | Status  | Taxable Period       | Total Output Tax | Total Input Tax |
   |---------|----------------------|------------------|-----------------|
   |         | 01 Oct - 31 Oct 2015 | 422,415.73       | 474,787.86      |
   | Draft   | 01 Oct - 31 Oct 2015 | 422,265.73       | 474,787.86      |
   |         | Increase/Decrease (-)| 150.00           | 0.00            |

### How to know the GST - 03 has performed amendment?

1. You can find a **cross marked (X)** on the amendment column in the GST-03. See the screenshot below.

   ![des-gst03-amendment-know-gst03-has-performed-amendment-1](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-know-gst03-has-performed-amendment-1.jpg)

2. At the GST Returns, insert a grid column **Amendment**. Usually, you will found **the ticked on the amendment column** for both DRAFT and final GST-03.

   ![des-gst03-amendment-know-gst03-has-performed-amendment-2](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-know-gst03-has-performed-amendment-2.jpg)

### How to unlock the subsequent GST - 03 for amendment?

1. Highlight on the subsequent GST-03, eg. for subsequent taxable period is 01 Nov - 30 Nov 2015.
2. Right and **unlock** it.

   ![des-gst03-amendment-unlock-gst03-for-amendment-1](../../../static/img/usage/gst-and-sst/gst/gst03-amendment-unlock-gst03-for-amendment-1.jpg)

## Adjustment to negative value in GST-03

1. Negative value in 5a5b and 6a6b.
2. TAP system not accept negative value.

![des-adjustment-to-negative-value-in-gst03-1](../../../static/img/usage/gst-and-sst/gst/adjustment-to-negative-value-in-gst03-1.png)

### Negative in 5a5b

1. **Output Tax (Negative)**

   | GST-03 | Value  |
   |--------|--------|
   | 5a     | -2,000 |
   | 5b     | -120   |

2. **Journal Adjustment:**

   | GL Code  | Tax      | Tax Rate | Local DR | Local CR | Local DR(Tax) | Local CR(Tax) | GST-03               |
   |----------|----------|----------|----------|----------|---------------|---------------|----------------------|
   | GST-103  |**AJP-OA**| 6%       | 2,000    |          | 2,120         |               | **6a = 0, 6b = 120** |
   | GST-103  | **SR**   | 6%       |          | 2,000    |               | 2,120         | **5a = 0, 5b = 0**   |

   ![des-adjustment-to-negative-value-in-gst03-negative-in-5a5b-1](../../../static/img/usage/gst-and-sst/gst/adjustment-to-negative-value-in-gst03-negative-in-5a5b-1.jpg)

### Negative in 6a6b

1. **Input Tax (Negative)**

   | Items | Value  |
   |-------|--------|
   | 6a    | -1,000 |
   | 6b    | -60    |

2. **Journal Adjustment:**

   | GL Code  | Tax      | Tax Rate | Local DR | Local CR | Local DR(Tax) | Local CR(Tax) | GST-03              |
   |----------|----------|----------|----------|----------|---------------|---------------|---------------------|
   | GST-103  | **TX**   | **6%**   | 1,000    |          | 1,060         |               | **6a = 0, 6b = 0**  |
   | GST-103  |**AJS-OA**| **6%**   |          | 1,000    |               | 1,060         | **5a = 0, 5b = 60** |

## GST Sales/Purchase Deferred Tax Journal Adjustment

1. Double entry adjustment for the balance of GST Sales / Purchase Deferred Tax (Bad Debt Relief) AFTER 29 December 2018.
2. Add the adjustment amount into Final GST Return (amendment).

   ![des-sales-purchase-deferred-tax-journal-adjustment-1](../../../static/img/usage/gst-and-sst/gst/sales-purchase-deferred-tax-journal-adjustment-1.jpg)

### How to check the Sales / Purchase Bad Debt Recovered Amount after Final GST Returns?

1. Select a date **AFTER** the Final GST Return Date, eg. 28/02/2019.

   ![des-check-bad-debt-relief-after-final-gst-returns-1](../../../static/img/usage/gst-and-sst/gst/check-bad-debt-relief-after-final-gst-returns-1.jpg)

2. Choose **Process As Draft**.

   ![des-check-bad-debt-relief-after-final-gst-returns-2](../../../static/img/usage/gst-and-sst/gst/check-bad-debt-relief-after-final-gst-returns-2.jpg)

3. Click on **GST Return Draft** and **Print GST Listing**.
4. Filter the **Tax Date** (ie. greater than or equal to 30 December 2018).

   ![des-check-bad-debt-relief-after-final-gst-returns-3](../../../static/img/usage/gst-and-sst/gst/check-bad-debt-relief-after-final-gst-returns-3.jpg)

   > **SL-AJS-BD** : Sales Bad Debt Recovered (Output Tax).
   > **PH-AJP-BD** : Purchase Bad Debt Recovered (Input Tax).

### Adjustment for GST Sales Deferred Tax (SL-AJS-BD)

![des-adjustment-for-gst-sales-deferred-tax-1](../../../static/img/usage/gst-and-sst/gst/adjustment-for-gst-sales-deferred-tax-1.jpg)

1. Based on the **GST Listing (Draft)**, post the GST Bad Debt Recovered double entry using **Journal Entry**.

   | GL Code    | GL Description            | Local DR | Local CR | Add to Final GST-03  |
   |------------|---------------------------|----------|----------|----------------------|
   | GST-202    | GST - Sales Deferred Tax  | 3,600    |          |                      |
   | GST-KASTAM | GST - Payable (KASTAM)    |          | 3,600    | 5(b), 18             |

2. Amend the Final GST Return (Aug 2018) at TAP.
3. Add the amount into
    a. 5(b)
    b. 18

### Adjustment for GST Purchase Deferred Tax (PH-AJP-BD)

![des-adjustment-for-gst-purchase-deferred-tax-1](../../../static/img/usage/gst-and-sst/gst/adjustment-for-gst-purchase-deferred-tax-1.jpg)

1. Based on the **GST Listing (Draft)**, post the GST Bad Debt Recovered double entry using **Journal Entry**.

   | GL Code     | GL Description              | Local DR | Local CR | Add to Final GST-03  |
   |-------------|-----------------------------|----------|----------|----------------------|
   | GST-KASTAM  | GST - Payable (KASTAM)      | 600      |          | 6(b)                 |
   | GST-102     | GST - Purchase Deferred Tax |          | 600      |                      |

2. Amend the Final GST Return (Aug 2018) at TAP.
3. Add the amount into
    a. 6(b)

### Payment to RMCD (Tax Journal Adjustment)

Made payment to RMCD, use **Cash Book Entry (PV)**.

| GL Code    | GL Description                        | Local DR | Local CR |
|------------|---------------------------------------|----------|----------|
| GST-KASTAM | GST - Payable (KASTAM) - Net Balance  | 3,000    |          |
| BANK       | Bank Name                             |          | 3,000    |