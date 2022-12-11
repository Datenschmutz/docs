---
sidebar_position: 3
sidebar_label: 'rclone'
id: rclone
description: rclone is a free tool for manging files and folders on cloud storage.
slug: /rclone
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Tool
- rclone
- Linux
- Backup
---

# Rclone

Rclone is a command line toole for managing files on cloud storage.

## Installation[^1]

In case of Debian / Ubuntu system please perform following action:

```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

## Setup

Since Rclone is compatible with many cloud storage solutions and this would go beyond the scope of this article, simply have a look at the [**Rclone website**](https://rclone.org/#providers).

## Features

* Backup (and encrypt) files to cloud storage
* Restore (and decrypt) files from cloud storage
* Mirror cloud data to other cloud services or locally
* Migrate data to the cloud, or between cloud storage vendors
* Mount multiple, encrypted, cached or diverse cloud storage as a disk
* Analyse and account for data held on cloud storage using lsf, ljson, size, ncdu
* Union file systems together to present multiple local and/or cloud file systems as one


#### Mentions, Credits and Sources

[^1]: From rclone download page - [Link](https://rclone.org/downloads/)