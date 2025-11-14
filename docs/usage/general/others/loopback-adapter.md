---
sidebar_position: 13
title: Loopback Adapter
description: A guide about Loopback Adapter
slug: /usage/general/others/loopback-adapter
tags: ["SQL Account", "Others", "Loopback", "Adapter"]
---

## Introduction

A Loopback Adapter is a virtual network adapter that enables network communications between applications on the same computer, even without a physical network connection. 

You need to install the Loopback Adapter only if both of these conditions apply:

1. You are using Firebird 3.0 database server
2. Your computer is in a non-networked environment (not connected to any network)

## Installation Steps

Follow these steps to install the Loopback Adapter:

1. Press **Windows + R** to open Run dialog
2. Type `hdwwiz` and press Enter
3. Click **Next**
4. Select "Install the hardware that I manually select from a list (Advanced)"
5. Click **Next**
6. Scroll down and select **Network adapters**
7. Click **Next**
8. Select "Microsoft" in the **Manufacturer** column
9. In the **Model** column, select either:
   - Microsoft Loopback Adapter, or
   - Microsoft KM-TEST Loopback Adapter
10. Click **Next** and follow the prompts to complete installation
11. Restart your computer
