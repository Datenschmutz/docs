---
sidebar_position: 1
sidebar_label: 'Voron S3 Backup'
id: S3-auto-backup
description: Automatisches Sichern der Druckerkonfigurationsdateien mit rClone auf S3.
slug: /S3-Auto-backup
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Script
- Voron
- Backup
- S3
- s3fs
- rclone
- Object Storage
- 3D-Printing
- Raspberry
- German/Deutsch
---

# Automatisiertes Drucker Backup per S3 Speicher

:::danger Disclaimer
Dieses Skript ist WORK IN PROGRESS. SICHERE DEINE DATEIEN MANUELL!!! Wir sind nicht verantwortlich für nicht funktionierende Drucker oder verlorene Dateien!
:::

:::note **Entsprechendes  [GitHub](https://github.com/Datenschmutz/Voron-Backup-Script) Repository** 
:::

## Voraussetzungen

* S3-Speicher
* Grundlegende Kenntnisse von rClone

## Installation

```bash title="Installationsskript herunterladen"
wget https://raw.githubusercontent.com/datenschmutz/Voron-Backup-Script/main/install.sh
```

:::info
Beachte, dass **nach der Ausführung des folgenden Befehls** die rClone **Konfiguration automatisch startet**.
Siehe [**Konfiguration**](#Konfiguration) für Anweisungen.
:::

```bash title="Installationsskript ausführen"
bash install.sh
```

## Konfiguration

Folge den Anweisungen im Skript

### rClone S3 Storage Einrichtung

:::note
Ich verwende für mein Tutorial S3-Speicher von [Contabo](https://contabo.com/object-storage/) auf Basis von Cleph, die Konfiguration kann bei anderen Anbietern abweichen.[^1]
:::

* Drücke `n` für neuen entfernten Speicher
* Gib einen rClone Ziel *Namen* an, z.B. `MyS3-Storage`
* Drücke `4` für *Amazon S3-kompatible Speicheranbieter wie AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, SeaweedFS und Tencent COS*
* Wähle die S3-Speicherlösung, z. B. `3` *für Ceph Object Storage*.
* Drücke `1` für AWS-Anmeldedaten im nächsten Schritt eingeben.
* Gib deinen `access_key` an, *z.B. 82046e8110804a43bf29c1ae426a724d* für *access_key_id*
* Gib deinen `secret_key` an, *z.B. 82e69bd7a52076c527154297a76c2233* für *secret_access_key*
* Drücke `Enter`, um *Region* zu überspringen.
* Gib die S3-URL an, z. B. `https://eu2.contabostorage.com` für *Endpunkt*.
* Drücke `Enter`, um *location_constraint* zu überspringen.
* Drücke `Enter` zum Überspringen von *acl*
* Drücke `Enter`, um *server_side_encryption* zu überspringen
* Drücke `Enter`, um *sse_kms_key_id* zu überspringen
* Drücke `n` für * Edit advanced config*
* Drücke `y` für *Yes this is OK (Standard)*
* Gib optional `q` an, um *den Konfigurationsmodus zu verlassen*.

### Zusätzliche Konfigurationsmöglichkeiten

* Das Backup-Skript verfügt über einige zusätzliche Konfigurationsoptionen. Öffne es mit dem folgenden Befehl.

```bash
sudo nano /home/$USER/backup.sh
```

***

#### Erwähnungen, Danksagungen und Quellenangaben

* Vielen Dank an @T4KUUY4 für die [Grundlage](https://github.com/T4KUUY4/Voron-Stuff/tree/main/Automatic%20Backup) dieses Skripts!

[^1]: Variante der rCLone-Einrichtungsanleitung von Contabo - [Link](https://docs.contabo.com/docs/products/Object-Storage/Tools/rclone)
