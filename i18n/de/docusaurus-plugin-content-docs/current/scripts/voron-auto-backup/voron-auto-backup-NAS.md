---
sidebar_position: 2
sidebar_label: 'Voron Netzwerkfreigabe-Backup'
id: NAS-auto-backup
description: Automatische Sicherung Ihrer Druckerkonfigurationsdateien auf einer Netzwerkfreigabe (NAS, Windows-Freigabe, was auch immer)
slug: /NAS-Auto-backup
last_update:
  author: Fabian
  date: 12/11/2022
tags:
- Script
- Voron
- Backup
- NAS
- Network Share
- 3D-Printing
- Raspberry
- German/Deutsch
---

# Automatisiertes Drucker Backup per Netzwerkfreigabe

:::danger Disclaimer
Dieses Skript ist WORK IN PROGRESS. SICHERN SIE IHRE DATEIEN MANUELL!!! Wir sind nicht verantwortlich für nicht funktionierende Drucker oder verlorene Dateien!
:::

:::note **Entsprechendes [GitHub](https://github.com/T4KUUY4/Voron-Stuff/tree/main/Automatic%20Backup) Repository** 
:::

## Voraussetzungen

* Netzwerkfreigabe (Windows, Linux, Synology). Der Host muss online sein und einen festen Hostnamen oder eine feste IP haben. Klicke auf den untenstehenden Link für deine Plattform, wenn du Schwierigkeiten hast, einen zu erstellen. Erstelle auch einen **dedizierten** Benutzer.

* Windows:
  * Erstelle einen neuen Benutzer für den gemeinsamen Ordner.
  * Öffne den "Datei-Explorer" und navigiere zu dem Ordner, den du freigeben möchtest.
  * Klicke ihn mit der rechten Maustaste an und wähle "Eigenschaften".
  * Wähle die Registerkarte "Freigabe" > "Freigeben".
  * Wähle im Fenster "Netzwerkzugang" den neuen Benutzer, den du gerade erstellt hast.
  * Klick auf "Hinzufügen" -> "Freigabe".
  * Kopiere den Netzwerkpfad.
  * Klick auf `Fertig`.

* Linux: Siehe <https://docs.fedoraproject.org/en-US/quick-docs/samba/>
* Synology: Siehe <https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_share_create?version=7>

## Installation

```bash title="Installationsskript herunterladen"
wget https://raw.githubusercontent.com/T4KUUY4/Voron-Stuff/main/Automatic%20Backup/install.sh
```

```bash title="Installationsskript ausführen"
bash install.sh
```

## Konfiguration

* Folge den Anweisungen im Skript.
* Du kannst auch weitere Ordner einbinden, wenn du es für nötig hältst.
* Die Syntax lautet: `sudo cp -r /DEIN/ORDNER/ "$MNTPATH"`

### Zusätzliche Konfigurationsmöglichkeiten

* Das Backup-Skript verfügt über einige zusätzliche Konfigurationsoptionen. Öffne es mit dem folgenden Befehl.

```bash
sudo nano /home/$USER/backup.sh
```

## Willst du ein Mainsail/Fluidd Backup Makro?

**Erfordert die G-Gcode Shell Command Extension (mit KIAUH installieren)**.

* Lade die backup.cfg herunter und füge sie in deine printer.cfg ein.

:::info
Dieses Tutorial und Scirpt wurden von [T4KUUY4](https://github.com/T4KUUY4/Voron-Stuff/tree/main/Automatic%20Backup) erstellt. Das Tutorial wurde von mir in die Docs aufgenommen, da die Funktion ähnlich ist und einige Leute die andere Option kennenlernen möchten.
:::
