---
sidebar_position: 12
title: Supercharging FirebirdSQL
description: A guide about Supercharging FirebirdSQL
slug: /usage/general/others/supercharging-firebird-sql
tags: ["SQL Account", "Others", "Supercharging", "FirebirdSQL"]
---

## Introduction

By Default firebird will not fully utilise the available RAM. Below is the how to Supercharging the FirebirdSQL so that

1. Fully utilise the available RAM (about 90% depend how big is the FDB size & number of FDB connected)
2. Improve performance

## Requirement

1. 64 bit Firebird Server
2. Minimum 16 GB & above RAM

## Steps

1. Browse to Firebird folder (Normally in C:\Program Files\Firebird\Firebird_3_0 for Firebird 3).
2. Look for **firebird.conf** file & copy to Desktop.
3. Open the **firebird.conf** at Desktop.
4. Look for **#DefaultDbCachePages = 2048**.
5. Remove the **#** .
6. Change the **2048** to **1000000** for 16 GB RAM. (will use 8GB RAM)
7. Save the file.
8. Copy the **firebird.conf** at Desktop.
9. Paste & Replace it in the Firebird folder **firebird.conf** file.
10. Restart the Server.