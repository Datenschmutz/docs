---
sidebar_position: 3
sidebar_label: 'rclone'
id: rclone
description: rclone ist ein kostenloses Tool zum Verwalten von Dateien und Ordnern auf einem Cloud-Speicher.
slug: /rclone
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Tool
- rclone
- Linux
- Backup
- German/Deutsch
---

# Rclone

Rclone ist ein Befehlszeilentool zur Verwaltung von Dateien auf einem Cloud-Speicher.

## Installation[^1]

Im Falle von Debian / Ubuntu-Systemen führe bitte folgende Befehl aus:

```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

## Einrichtung

Da Rclone mit vielen Cloud-Speicherlösungen kompatibel ist und dies den Rahmen dieses Artikels sprengen würde, wirf einfach einen Blick auf die [**Rclone-Website**] (https://rclone.org/#providers).

## Besonderheiten

* Sichern (und verschlüsseln) von Dateien auf einem Cloud-Speicher
* Wiederherstellen (und Entschlüsseln) von Dateien aus dem Cloud-Speicher
* Spiegeln von Cloud-Daten auf andere Cloud-Dienste oder lokal
* Migrieren von Daten in die Cloud oder zwischen Cloud-Speicheranbietern
* Einbinden mehrerer verschlüsselter, zwischengespeicherter oder unterschiedlicher Cloud-Speicher als Festplatte
* Analyse und Abrechnung von Daten auf Cloud-Speicher mit lsf, ljson, size, ncdu
* Zusammenführen von Dateisystemen, um mehrere lokale und/oder Cloud-Dateisysteme als ein einziges darzustellen


#### Erwähnungen, Danksagungen und Quellenangaben

[^1]: Von der rclone Download-Seite - [Link](https://rclone.org/downloads/)