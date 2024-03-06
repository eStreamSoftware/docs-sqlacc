---
sidebar_position: 5
id: perf-speed-improve
title: Performance Improvement for Domain Controller Service (Windows 2012 Server OS)
description: A guide to performance improvement for Domain Controller Service (Windows Server OS) for SQL Account
slug: /performance-improvement-for-domain-controller-service
tags: ["SQL Account", "Troubleshooting"]
---

## Solution A (not recommended)

1. Right click on the primary Hard Disc (eg. C:\), click to Properties\Hardware \Properties.

   ![1](/img/troubleshooting/perf-speed-improve/1.png)

2. Go to ‘Policies’ tab.

3. Turn-ON ‘Enable write caching on the device’.

   Untick the ‘Turn off Windows write-cache buffer flushing on the device’.

4. Press OK to EXIT.

   ![2](/img/troubleshooting/perf-speed-improve/2.png)

## Solution B (Recommended)

   1. Add Physically new partition/ Hard Disc (let’s said G:\). Ensure the all FDB files stored in G:\ .

   2. Right click on the partition/ Hard Disc (eg. G:\), click the Properties\Hardware \Properties.

   3. Go to ‘Policies’ tab.

   4. Turn-ON ‘Enable write caching on the device’.

      Untick the ‘Turn off Windows write-cache buffer flushing on the device’.

   5. Press OK to EXIT.

   ![3](/img/troubleshooting/perf-speed-improve/3.png)
