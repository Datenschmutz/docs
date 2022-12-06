---
sidebar_position: 4
sidebar_label: 'Mount S3 Storage Bucket'
id: mount-s3-object-storage
description: This guide explains how to Mount a S3 Object Storage as Linux Folder. 
slug: /mount-s3-storage
last_update:
  author: Fabian
  date: 12/06/2022
---

# Mount S3 Storage bucket under Linux

:::danger
**The way shown here to mount a bucket is _not_ reboot safe!**
:::

This guide explains how to Mount a S3 Object Storage as Linux folder[^1]

## Requirements

* `access_key`
* `secret_key`
* S3 URL
* your bucket name
* folder (mount point) where you want make your bucket contents available
* s3fs-fuse

For `access_key`, `secret_key` and the S3 URL please check your s3 Provider Panel.

:::caution
The following variables are **`placeholders`** for the installation **replace them accordingly**!

* Access Key = `your_access_key`
* Secret key = `your_secret_key`
* S3 URL = `https://your.s3-storage.com`
* bucket name = `Backup`
* mount point = `${HOME}/Backup`
:::

## Install s3fs-fuse

:::info
To learn more about s3fs-fuse click [here](./s3fs-fuse).
:::

```bash
sudo apt install s3fs
```

## Create settings file

#### Create a settings file with your access_key:secret_key

```bash title='${HOME}/'
echo your_access_key:your_secret_key > ${HOME}/.passwd-s3fs
```

#### Set needed permissions

```bash title='${HOME}/'
chmod 600 ${HOME}/.passwd-s3fs
```

## Create mount point

```bash title='${HOME}'
mkdir ${HOME}/Backup
```

## Mount bucket

Mount bucket Backup to ${HOME}/Backup

```bash title='${HOME}/Backup'
s3fs Backup ${HOME}/Backup -o passwd_file=${HOME}/.passwd-s3fs -o url=https://your.s3-storage.com -o use_path_request_style
```

## Show bucket contents

```bash title='${HOME}'
ls -la ${HOME}/Backup
```

<details>
<summary>Generally S3 cannot offer the same performance or semantics as a local file system. More specifically:</summary>

| |
| --- |
|random writes or appends to files require rewriting the entire object, optimized with multi-part upload copy|
|metadata operations such as listing directories have poor performance due to network latency|
|non-AWS providers may have eventual consistency so reads can temporarily yield stale data (AWS offers read-after-write consistency since Dec 2020)|
|no atomic renames of files or directories|
|no coordination between multiple clients mounting the same bucket|
|no hard links|
|inotify detects only local modifications, not external ones by other clients or tools|
</details>


[^1]: Variation of the s3fs-fuse documentation from Contabo - [Link](https://docs.contabo.com/docs/products/Object-Storage/Tools/s3fs-fuse)
