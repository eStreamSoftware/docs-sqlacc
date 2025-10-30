---
id: perf-speed-improve
title: Performance Improvement for Domain Controller Service (Windows 2012 Server OS)
description: A guide to performance improvement for Domain Controller Service (Windows Server OS) for SQL Account
slug: /performance-improvement-for-domain-controller-service
tags: ["SQL Account", "Troubleshooting"]
---

## Solution A (not recommended)

1. Right click on the primary Hard Disc (eg. C:\), click to Properties\Hardware \Properties.

   ![solution-a-properties](../../static/img/troubleshooting/perf-speed-improve/solution-a-properties.png)

2. Go to ‘Policies’ tab.

3. Turn-ON ‘Enable write caching on the device’.

   Untick the ‘Turn off Windows write-cache buffer flushing on the device’.

4. Press OK to EXIT.

   ![solution-a-policies](../../static/img/troubleshooting/perf-speed-improve/solution-a-policies.png)

## Solution B (Recommended)

   1. Add Physically new partition/ Hard Disc (let’s said G:\). Ensure the all FDB files stored in G:\ .

   2. Right click on the partition/ Hard Disc (eg. G:\), click the Properties\Hardware \Properties.

   3. Go to ‘Policies’ tab.

   4. Turn-ON ‘Enable write caching on the device’.

      Untick the ‘Turn off Windows write-cache buffer flushing on the device’.

   5. Press OK to EXIT.

   ![solution-b](../../static/img/troubleshooting/perf-speed-improve/solution-b.png)
