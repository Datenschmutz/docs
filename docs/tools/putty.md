---
sidebar_position: 4
sidebar_label: 'PuTTY'
id: putty
description: PuTTY is a free SSH and Telnet Client for Windows and Unix, along with an xterm terminal emulator.
slug: /putty
last_update:
  author: Fabian
  date: 12/19/2022
tags:
- Tool
- PuTTY
- Linux
- SSH
- Telnet
---

# PuTTY

PuTTY is a free and open-source terminal emulator, serial console, and network file transfer application. It is primarily used to connect to a remote computer over a network connection, such as over SSH (Secure Shell) or Telnet. PuTTY supports a wide range of protocols, including SSH, Telnet, rlogin, and raw TCP.

PuTTY is available for Windows and is also available for Unix-like systems as a command-line application called plink. It was originally written and is maintained by Simon Tatham.

PuTTY is commonly used to remotely access servers, configure networking devices, and manage remote systems. It is also frequently used for debugging and troubleshooting network issues.

In addition to its terminal emulation and file transfer capabilities, PuTTY also includes a number of other useful features, such as support for public key authentication, agent forwarding, and port forwarding. It is a popular choice among network administrators and developers due to its versatility and ease of use.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

  #### Option 1 - MS Store
  Use the Microsoft store and search for PuTTY

  #### Option 2 - MSI Download

  Download the latest version of PuTTY from the [official website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and run the .MSI.

  </TabItem>
  <TabItem value="linux" label="Linux">

  #### Option 1 - Package

  Open Terminal with `CTRL + ALT + T`

  ```bash title="Install Updates"
  sudo apt-get update
  ```

  ```bash title="Install PuTTY"
  sudo apt-get install -y putty
  ```

  ```bash title="Run PuTTY"
  putty
  ```

  #### Option 2 - TAR.GZ Download

  Download the latest version of PuTTY from the [official website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and extract the archive file. (Follow provided README)
  </TabItem>
</Tabs>

## Features 

* Supports several network protocols including *SCP*, *SSH*, *Telnet*, *rlogin*, *raw socket connection* and *serial port*.
* Supports SSO through GSSAPI
* Supports many variations on the secure remote terminal.