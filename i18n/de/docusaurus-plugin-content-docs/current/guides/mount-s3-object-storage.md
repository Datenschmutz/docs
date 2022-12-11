---
sidebar_position: 4
sidebar_label: 'S3 Storage Bucket Mounten'
id: mount-s3-object-storage
description: Diese Anleitung erklärt, wie man einen S3-Objektspeicher als Linux-Ordner einbindet.
slug: /mount-s3-storage
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Guide
- Linux
- S3
- Mount
- Object Storage
- Bash
- Shell
- Terminal
- German/Deutsch
---

# S3-Speicher Bucket unter Linux mounten (einbinden)

:::danger
**Der hier gezeigte weg, einen Bucket zu mounten, ist _nicht_ rebootsicher!**
:::

Diese Anleitung erklärt, wie man einen S3-Objektspeicher als Linux-Ordner einbindet.[^1]

## Voraussetzungen

* S3 Storage
  * `access_key`
  * `secret_key`
  * S3 Bucket URL
  * S3 bucket name
* Ordner (Mount-Punkt), in dem du den Inhalt deines Buckets verfügbar machen willst
* s3fs-fuse

Für `access_key`, `secret_key` und die S3 URL schau bitte in deinem S3 Provider Panel nach.

:::caution
Die folgenden Variablen sind **`Platzhalter`** für die Installation **Ersetze sie entsprechend**!

* Access Key = `your_access_key`
* Secret key = `your_secret_key`
* S3 URL = `https://your.s3-storage.com`
* bucket name = `Backup`
* mount point = `${HOME}/Backup`
:::

## s3fs-fuse Installieren

:::info
Um mehr über s3fs-fuse zu erfahren, klick [hier](./s3fs-fuse).
:::

```bash
sudo apt install s3fs
```

## Konfigurationsdatei erstellen

#### Erstelle eine Konfigurationsdatei mit access_key:secret_key

```bash title='${HOME}/'
echo your_access_key:your_secret_key > ${HOME}/.passwd-s3fs
```

#### Erforderliche Berechtigungen festlegen

```bash title='${HOME}/'
chmod 600 ${HOME}/.passwd-s3fs
```

## Mountpunkt erstellen

```bash title='${HOME}'
mkdir ${HOME}/Backup
```

## Bucket Mounten

Bucket `Backup` nach ${HOME}/Backup mounten

```bash title='${HOME}/Backup'
s3fs Backup ${HOME}/Backup -o passwd_file=${HOME}/.passwd-s3fs -o url=https://your.s3-storage.com -o use_path_request_style
```

## Bucket inhalt anzeigen

```bash title='${HOME}'
ls -la ${HOME}/Backup
```

<details>
<summary>Im Allgemeinen kann S3 nicht die gleiche Leistung oder Semantik wie ein lokales Dateisystem bieten. Genauer gesagt:</summary>

| |
| --- |
|Zufällige Schreibvorgänge oder Anhänge an Dateien erfordern das Neuschreiben des gesamten Objekts, optimiert mit mehrteiliger Upload-Kopie|
|Metadatenoperationen wie das Auflisten von Verzeichnissen sind aufgrund der Netzwerklatenz schlecht|
|Anbieter, die nicht über AWS verfügen, verfügen möglicherweise über eine eventuelle Konsistenz, so dass Lesevorgänge vorübergehend veraltete Daten liefern können (AWS bietet seit Dezember 2020 eine Lese-nach-Schreib-Konsistenz).|
|keine atomaren Umbenennungen von Dateien oder Verzeichnissen|
|keine Koordinierung zwischen mehreren Clients, die denselben Bucket bestücken|
|keine hard links|
|inotify erkennt nur lokale Änderungen, keine externen Änderungen durch andere Clients oder Tools|
</details>

[^1]: Variation der s3fs-fuse-Dokumentation von Contabo - [Link](https://docs.contabo.com/docs/products/Object-Storage/Tools/s3fs-fuse)
