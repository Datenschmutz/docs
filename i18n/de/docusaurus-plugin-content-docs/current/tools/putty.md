---
sidebar_position: 4
sidebar_label: 'PuTTY'
id: putty
description: PuTTY ist ein kostenloser SSH- und Telnet-Client für Windows und Unix sowie ein xterm-Terminalemulator.
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
- German/Deutsch
---

# PuTTY

PuTTY ist ein kostenloser SSH- und Telnet-Client für Windows und Linux sowie ein xterm-Terminalemulator.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

  #### Option 1 - MS Store
  Verwende den Microsoft Store und suche nach PuTTY

  #### Option 2 - MSI Download

  Lade die neueste Version von PuTTY von der [offiziellen Website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter und führe die MSI-Datei aus.

  </TabItem>
  <TabItem value="linux" label="Linux">

  #### Option 1 - Paket

  Terminal öffnen mit `STRG + ALT + T`

  ```bash title="Updates Installieren"
  sudo apt-get update
  ```

  ```bash title="Installiere PuTTY"
  sudo apt-get install -y putty
  ```

  ```bash title="Starte PuTTY"
  putty
  ```

  #### Option 2 - TAR.GZ Download

  Lade die neueste Version von PuTTY von der [offiziellen Website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter und entpacke die Archivdatei. ( Folge der mitgelieferten README)
  </TabItem>
</Tabs>

## Besonderheiten

* Unterstützt mehrere Netzwerkprotokolle, darunter *SCP*, *SSH*, *Telnet*, *rlogin*, *raw socket connection* und *serial port*.
* Unterstützt SSO über GSSAPI
* Unterstützt viele Varianten von secure remote terminals.