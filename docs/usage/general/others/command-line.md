---
sidebar_position: 18
title: Command Line Switches
description: A guide about Command Line Switches
slug: /usage/general/others/command-line
tags: ["SQL Account", "Others", "Command Line"]
---

## Introduction

The following switches are available when starting the SQL application from the command line.

All switches must be preceded by a dash (-), unless otherwise noted.

The switches are case-sensitive.

## Command switches

| Command | Description |
|----------|-------------|
| `-b` | Backup database. |
| `-t <GUI\|Console>` | Run unit testing with GUI or Console application type. |
| `-i` | *(For developer use only)* Generate application integrity file. |
| `-deploy` | *(For developer use only)* Deploy runtime files. |

## General switches

| Command | Description |
|----------|-------------|
| `-g <DCF File>` | Optional. Access to DCF file. |
| `-d <database>` | Optional. Access to database file. |
| `-u <username>` | Optional. Login username. |
| `-p <password>` | Optional. Login password. |

## Unit Testing Switches

| Command | Description |
|----------|-------------|
| `-testparams <parameters>` | Optional. Unit testing parameters. |

## Backup Switches

| Command | Description |
|----------|-------------|
| `-g <DCF File>` | Optional. Backup all databases in the specified DCF file. Uses the default DCF file if not specified. |
| `-d <database>` | Optional. Backup the specified database only. |
| `-u <username>` | Optional. Database server authenticated username. Uses the default username if not specified. |
| `-p <password>` | Optional. Database server authenticated password. Uses the default password if not specified. |
| `-to=<backup to folder>` | **Required.** Folder to store backup files. |
| `-remove` | Optional. Remove temporary tables before backup. |
| `-zip` | Optional. Compress backup files using ZIP format. |
| `-mail` | Optional. Send email notification. |
| `-ap <base64 password>` | Undocumented option. Database ADMIN passwords separated by CRLF and encoded with Base64. |

## E-mail switches

| Command | Description |
|----------|-------------|
| `-smtp_host=<host or IP address>` | SMTP server host name or IP address. |
| `-smtp_port=<port>` | SMTP service port number. |
| `-smtp_user=<username>` | Username for SMTP authentication. |
| `-smtp_pass=<password>` | Password for SMTP authentication. |
| `-mail_from=<email>` | Sender’s email address. |
| `-mail_to=<email-1>,<email-2>,<email-3>,...` | Recipient email addresses. |
