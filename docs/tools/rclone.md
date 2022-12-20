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

Rclone is a command-line tool that allows you to synchronize files and directories between different storage services, such as Google Drive, Amazon S3, and Dropbox. It is designed to be easy to use and supports a wide range of storage providers and protocols, including local files, Google Drive, Amazon S3, Dropbox, and many others.

Rclone is written in Go and is available for Linux, macOS, and Windows. It is open source and released under the MIT license.

Rclone can be used for tasks such as backing up data to the cloud, synchronizing files between different storage providers, and moving data between different storage services. It supports a variety of features, including file and directory synchronization, server-side encryption, and multiple concurrent transfers.

Rclone is a useful tool for managing data stored on cloud storage services and can be used in a variety of different scenarios, including personal use, small business, and enterprise environments

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