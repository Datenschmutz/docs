---
sidebar_position: 12
sidebar_label: 'Robocopy Cheat Sheet'
id: robocopy-cheat-sheet
description: Dieses umfassende Robocopy-Cheat Sheet bietet eine vollständige Anleitung mit allen verfügbaren Optionen. Erfahre, wie du Robocopy effektiv und effizient einsetzen kannst.
slug: /robocopy-cheat-sheet
tags:
- Robocopy
- Windows
- File copying
- File transfer
- Backup
- Command line
- Syntax
- Options
- Examples
- Cheat-Sheet
- IT
- System administration
- Data management
- Server
- German/Deutsch
---

# Robocopy Cheat Sheet

Robocopy ist ein Befehlszeilenwerkzeug zur Dateireplikation. Es ist in Windows-Betriebssystemen verfügbar und wird verwendet, um große Dateien oder große Dateimengen von einem Ort zum anderen zu kopieren.

## Syntax
```Bash
ROBOCOPY quell_ordner ziel_ordner [zu_kopierende_datei(en)] [optionen]
```

- **quell_ordner**: Gibt den Ordner an, der die zu kopierenden Dateien enthält.
- **ziel_ordner**: SGibt den Zielordner für die kopierten Dateien an.
- **zu_kopierende_datei(en)**: Gibt die zu kopierende(n) Datei(en) an. Du kannst Platzhalterzeichen verwenden, um mehrere Dateien anzugeben.
- **optionen**: Gibt die Optionen an, die beim Kopieren der Dateien verwendet werden sollen.

## Optionen

### Kopier Optionen
| Option       | Beschreibung                                                                                                                |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| /L           | Zeigt die Dateien an, die kopiert werden würden, kopiert sie jedoch nicht.                                                  |
| /X           | Schließt Dateien aus, die mit angegebenen Namen oder Pfaden übereinstimmen.                                                 |
| /XC          | Schließt geänderte Dateien aus.                                                                                             |
| /XN          | Schließt neuere Dateien aus.                                                                                                |
| /XO          | Schließt ältere Dateien aus.                                                                                                |
| /XX          | Schließt zusätzliche Dateien und Verzeichnisse aus.                                                                         |
| /XL          | Schließt "einsame" Dateien und Verzeichnisse aus (die nur in der Quelle oder im Ziel, aber nicht in beiden vorhanden sind). |
| /LOG:file    | Schreibt die Statusausgabe in eine Protokolldatei.                                                                          |
| /LOG+:file   | Hängt die Statusausgabe an eine Protokolldatei an.                                                                          |
| /TEE         | Schreibt die Statusausgabe in das Konsolenfenster und in die Protokolldatei.                                                |
| /NJH         | Unterdrückt den "Jobheader" in der Statusausgabe.                                                                           |
| /NJS         | Unterdrückt die "Jobzusammenfassung" in der Statusausgabe.                                                                  |
| /UNILOG:file | Schreibt die Statusausgabe in eine Protokolldatei im Unicode-Format.                                                        |

### Wiederholungsoptionen
| Option | Beschreibung                                                                                                              |
|--------|---------------------------------------------------------------------------------------------------------------------------|
| /R:n   | Gibt an, wie oft Robocopy versuchen soll, eine Datei zu kopieren. Standardmäßig sind 1 Million Wiederholungen vorgesehen. |
| /W:n   | Gibt die Wartezeit in Sekunden an, die Robocopy zwischen den Wiederholungen einlegt. Standardmäßig sind es 30 Sekunden.   |
| /REG   | Speichert Wiederholungsinformationen in der Systemregistrierung anstelle einer Datei.                                     |

### Protokolloptionen
| Option       | Beschreibung                                                                                                                |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| /L           | Zeigt die Dateien an, die kopiert werden würden, kopiert sie jedoch nicht.                                                  |
| /X           | Schließt Dateien aus, die mit angegebenen Namen oder Pfaden übereinstimmen.                                                 |
| /XC          | Schließt geänderte Dateien aus.                                                                                             |
| /XN          | Schließt neuere Dateien aus.                                                                                                |
| /XO          | Schließt ältere Dateien aus.                                                                                                |
| /XX          | Schließt zusätzliche Dateien und Verzeichnisse aus.                                                                         |
| /XL          | Schließt "einsame" Dateien und Verzeichnisse aus (die nur in der Quelle oder im Ziel, aber nicht in beiden vorhanden sind). |
| /LOG:file    | Schreibt die Statusausgabe in eine Protokolldatei.                                                                          |
| /LOG+:file   | Hängt die Statusausgabe an eine Protokolldatei an.                                                                          |
| /TEE         | Schreibt die Statusausgabe in das Konsolenfenster und in die Protokolldatei.                                                |
| /NJH         | Unterdrückt den "Jobheader" in der Statusausgabe.                                                                           |
| /NJS         | Unterdrückt die "Jobzusammenfassung" in der Statusausgabe.                                                                  |
| /UNILOG:file | Schreibt die Statusausgabe in eine Protokolldatei im Unicode-Format.                                                        |

### Weitere Optionen
| Option | Beschreibung                                                                  |
|--------|-------------------------------------------------------------------------------|
| /NFL   | Gibt an, dass Dateinamen nicht protokolliert werden sollen.                   |
| /NDL   | Gibt an, dass Verzeichnisnamen nicht protokolliert werden sollen.             |
| /NC    | Gibt an, dass Dateiklassen nicht protokolliert werden sollen.                 |
| /NS    | Gibt an, dass Dateigrößen nicht protokolliert werden sollen.                  |
| /NP    | Gibt an, dass der Fortschritt des Kopiervorgangs nicht angezeigt werden soll. |
| /BYTES | Zeigt Dateigrößen in Bytes an.                                                |
| /K     | Kopiert Dateiattribute.                                                       |
| /A     | Kopiert nur Dateien mit dem Attribut "Archiv".                                |
| /M     | Kopiert nur Dateien mit dem Attribut "Archiv" und setzt das Attribut zurück.  |
| /FFT   | Verwendet FAT-Dateizeit statt NTFS.                                           |
| /256   | Verwendet den 256-Farben-Modus.                                               |