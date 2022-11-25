---
sidebar_position: 2
sidebar_label: 'Voron Network Share Backup'
id: NAS-auto-backup
description: Auto-Backup your printer config files to a network share (NAS, Windows share whatever)
slug: /NAS-Auto-backup
last_update:
  author: Fabian
  date: 11/25/2022
---

# Backup your printer using S3 Storage

:::danger Disclaimer

This script is WORK IN PROGRESS. BACKUP YOUR FILES MANUALLY!!!! I´m not responsible for any not functioning printers or lost files!
:::

## Requirements

* Network Share (Windows, Linux, Synology). The host has to be online and have a fixed Hostname or IP. Click the link below for your platform if you have difficulties creating one. Also create a **DEDICATED** user.

* Windows:
  * Create a new user for the shared folder
  * Open  `File Explorer`  and browse to the folder you want to share.
  * Right-click it and select `Properties`.
  * Select the `Sharing` tab > `Share`.
  * Within the `Network access` window, select the new user you just created.
  * Click  `Add` -> `Share`.
  * Copy the network path.
  * Click  `Done`.

* Linux: Refer to <https://docs.fedoraproject.org/en-US/quick-docs/samba/>
* Synology: Refer to <https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_share_create?version=7>

## Installation

```bash title="Download the installation script"
wget https://raw.githubusercontent.com/T4KUUY4/Voron-Stuff/main/Automatic%20Backup/install.sh
```

```bash title="Run installation script"
bash install.sh
```

## Configuration

* Follow the instructions given in the script
* You can also include any other folder if you feel the need.
* The Syntax is: `sudo cp -r /YOUR/FOLDER/ "$MNTPATH"`

### Additional configuration options

* The backup script has some additional configuration options. Open it with the following command.

```bash
sudo nano /home/$USER/backup.sh
```

## Want a Mainsail/Fluidd Backup Macro?

**Requires G-Gcode Shell Command Extension (install with KIAUH)**.

* Download the backup.cfg and include it in your printer.cfg

:::info
This tutorial and scirpt were created by [T4KUUY4](https://github.com/T4KUUY4/Voron-Stuff/tree/main/Automatic%20Backup) the tutorial was included by me in the docs because the function is similar and some people would like to know the other option.
:::
