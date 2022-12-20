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

PuTTY ist ein freier und quelloffener Terminalemulator, eine serielle Konsole und eine Anwendung zur Dateiübertragung im Netzwerk. Es wird in erster Linie verwendet, um eine Verbindung zu einem entfernten Computer über eine Netzwerkverbindung herzustellen, z. B. über SSH (Secure Shell) oder Telnet. PuTTY unterstützt eine breite Palette von Protokollen, darunter SSH, Telnet, rlogin und raw TCP.

PuTTY ist für Windows und als Befehlszeilenanwendung namens plink auch für Unix-ähnliche Systeme verfügbar. Es wurde ursprünglich von Simon Tatham geschrieben und wird von ihm gepflegt.

PuTTY wird üblicherweise für den Fernzugriff auf Server, die Konfiguration von Netzwerkgeräten und die Verwaltung entfernter Systeme verwendet. Es wird auch häufig für die Fehlersuche und -behebung bei Netzwerkproblemen verwendet.

Zusätzlich zu seinen Terminalemulations- und Dateiübertragungsfunktionen bietet PuTTY eine Reihe weiterer nützlicher Funktionen, wie z. B. Unterstützung für die Authentifizierung mit öffentlichen Schlüsseln, Agentenweiterleitung und Portweiterleitung. Aufgrund seiner Vielseitigkeit und Benutzerfreundlichkeit ist es bei Netzwerkadministratoren und Entwicklern sehr beliebt.

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