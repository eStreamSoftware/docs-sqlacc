---
sidebar_position: 12
title: Supercharging FirebirdSQL
description: A guide about Supercharging FirebirdSQL
slug: /usage/general/others/supercharging-firebird-sql
tags: ["SQL Account", "Others", "Supercharging", "FirebirdSQL"]
---

## Introduction

By default, Firebird does not fully utilize the available RAM. The steps below show how to adjust Firebird's page cache settings to:

1. Make better use of available RAM (up to ~90% depending on database size and number of attached databases)
2. Improve database performance

## Requirement

- 64-bit Firebird Server
- Minimum 16 GB of RAM (recommended)

Important: Make sure the server has a reliable UPS and that you test changes in a non-production environment first. Adjusting cache settings can significantly increase memory use and may affect system stability if not tested.

## Steps

1. Browse to Firebird folder (Normally in `C:\Program Files\Firebird\Firebird_3_0` for Firebird 3).

2. Look for **firebird.conf** file & copy to Desktop.

3. Open the **firebird.conf** at Desktop.

4. Look for **#DefaultDbCachePages = 2048**.

5. Remove the **#** .

6. Change the **2048** to **1000000** for 16 GB RAM. (will use 8GB RAM)

7. Save the file.

8. Copy the **firebird.conf** at Desktop.

9. Paste & Replace it in the Firebird folder **firebird.conf** file.

10. Restart the Server.
