---
sidebar_position: 4
id: payment-listing-comm
title: Customer Payment Listing Commission
description: A guide on Customer Payment Listing Commission for SQL Account
slug: /customer/payment-listing-comm
tags: ["SQL Account", "Customer", "Payment", "Listing", "Commission"]
---

## Guideline: Commission Report

1. Go to Tools> Maintain Commission Script and select new to add in the commission
   script. Fill in the Code and Description.

    :::note
    Maintain Commission Script requires additional module
    :::

    ![1](/img/customer/comm/1.png)

    ![2](/img/customer/comm/2.png)

    ![3](/img/customer/comm/3.png)

    Default commission script:

    procedure CalculateCommission(AKODocAmt, AAge: variant; var Value: variant);

    begin

        if AAge < 10 then

        >    Value := AKODocAmt * 0.05

        else if AAge < 20 then

        >    Value := AKODocAmt * 0.03

        else if AAge < 30 then

        >    Value := AKODocAmt * 0.02

        else

        >    Value := AKODocAmt * 0.05005;

    end;

2. Change the value highlighted as below according to commission rate for agent and Save.

   ![4](/img/customer/comm/4.png)

    Value 10, 20, 30 = Age

    Value 0.05, 0.03, 0.02, 0.005 = Commission Rate

3. Go to Tools>Maintain Agent and select the agent that need to load the commission script.

    ![5](/img/customer/comm/5.png)

4. At the attachment tab, add in the commission script by selecting it as shown below and click Save after adding the script.

    ![6](/img/customer/comm/6.png)

5. Go to Customer> Customer Document Listing, select Customer Payment Listing, group by Agent and apply. Preview the result with Cust Local - Payment Listing - Collection Report.

    ![7](/img/customer/comm/7.png)

    ![8](/img/customer/comm/8.png)

    ![9](/img/customer/comm/9.png)
