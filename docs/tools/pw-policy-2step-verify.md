---
sidebar_position: 8
id: pw-policy-2step-verify
title: Password Policy (with 2 Steps Verification)
description: A guide to password policy and 2 steps verifications for SQL Account
slug: /tools/pw-policy-2step-verify
tags: ["SQL Account", "Tools", "Password Policy","2 Steps Verifications"]
---

## Password Policy Setup

1. Go to menu : **Tools | Options…** click on **Password Policy**.

    ![1](/img/tools/pw-policy-2step-verify/1.png)

2. You can choose the following password requirement:

    - Maximum Password Age (days): number of days to expire and change password.
    - Minimum Password Length: password length cannot less than the minimum,eg. 8.
    -Save Password History (0-5): number of password history not allow to re-use
    - Password combination of
        - At least one Upper Case letter (A-Z)
        - At least one Lower Case letter (a-z)
        - At least one number (0-9)
        - At least one non-alphanumeric character \!\$\%\^\&\*\(\)_\-\+\=\@\~\#\<\,\>\.\?

## New User - Reset Password

1. Go to menu : **Tools | Maintain User**.

2. Click on More (arrow key down), click **Reset Password**.

    ![2](/img/tools/pw-policy-2step-verify/2.png)

3. New password auto generated.

    ![3](/img/tools/pw-policy-2step-verify/3.png)

4. Press **Yes** (Copy password to clipboard = Tick).

5. You can press **Ctrl + V** to paste the New Password into email and send to the new user.

### 2-Steps Verifications Login

1. Go to menu : **File | 2-Steps Verification**.

    ![4](/img/tools/pw-policy-2step-verify/4.png)

2. Enter your current password, press **Ok** to proceed.

3. Choose an Authenticator device.

    ![5](/img/tools/pw-policy-2step-verify/5.png)

4. Follow the instructions to install and setup the Authenticator in your hand-phone.

5. Each time login, you will require to enter the verification code generated from the Authenticator in your mobile phone.

    ![6](/img/tools/pw-policy-2step-verify/6.png)
