---
sidebar_position: 16
id: text-import-utility
title: Text Import Utility Guide
description: A quick guide on Text Import Utility for SQL Account
slug: /miscellaneous/text-import-utility
tags: ["SQL Account", "Text", "Import"]
---

## Text Import Step

**Step 1 :**

Download the following application in your pc.

[http://www.estream.com.my/utility/SQLAccTxtImp-setup.exe](http://www.estream.com.my/utility/SQLAccTxtImp-setup.exe)

Username : `sqlutility`

Password : `sqlutility`

**Step 2 :**

Run and Install the setup file.

**Step 3 :**

Log on to your correct database

    ![1](/img/miscellaneous/text-import-utility/1.png)

**Step 4 :**

Double click the following icon

    ![2](/img/miscellaneous/text-import-utility/2.png)

**Step 5 :**

Makesure the top is show the database you choose

Choose the transaction you want to import, eg. customer-maintain customer

    ![3](/img/miscellaneous/text-import-utility/3.png)

**Step 6 :**

Open the patch file you save

    ![4](/img/miscellaneous/text-import-utility/4.png)

**Step 7 :**

Invalid status...

Go into SQL to add the status which are not in the database

    ![5](/img/miscellaneous/text-import-utility/5.png)

Example :

    ![6](/img/miscellaneous/text-import-utility/6.png)

So now, you go into your SQL, add the agent code

    ![7](/img/miscellaneous/text-import-utility/7.png)

    ![8](/img/miscellaneous/text-import-utility/8.png)

**Step 8 :**

Go back to the Text Import, **VERIFY** again.

If the status show invalid again, go to the SQL and add in.

After add in, get the file and verify again.

For this example, go to Tools --> Maintain Area

    ![9](/img/miscellaneous/text-import-utility/9.png)

The status will shown **“** OK **”** once you complete.

    ![10](/img/miscellaneous/text-import-utility/10.png)

Once you post to A/C, go to SQL ...... Customer -–> Maintain Customer

Log out and log in again, the new customer name will automatically shown in the customer list.

    ![11](/img/miscellaneous/text-import-utility/11.png)
