---
sidebar_position: 2
sidebar_label: 'TeamSpeak Server-Query zurücksetzen'
id: teamspeak-qerver-query-reset
description: Diese Anleitung erklärt, wie man den TeamSpeak Server-Query Login zurücksetzt.
slug: /teamspeak-qerver-query-reset
last_update:
  author: Fabian
  date: 11/29/2022
---

# TeamSpeak Server-Query Anmeldedaten auf Linux-Servern zurücksetzen

Wenn du das Passwort den Server-Query vergessen hast, das beim ersten Start des Servers vergeben wurde, oder wenn du es einfach ändern möchtest, kannst du das wie folgt tun.

:::info
Diese Anleitung geht davon aus, dass der TeamSpeak-Server **entsprechend** der Anleitung **[hier](teamspeak-install)** eingerichtet wurde. Wenn der **TeamSpeak-Server anders eingerichtet wurde**, können einige Befehle und/oder Variablen wie das [Teamspeak-Verzeichnis](teamspeak-install#teamspeak-server-steuern) oder der [Benutzername des laufenden Benutzers](teamspeak-install#teamspeak-ausführungs-benutzer-erstellen) **abweichen**.
:::

## Vorbereitungen

### Zu TeamSpeak-Benutzer wechseln

  ```bash
  su teamspeak
  ```

### TeamSpeak-Verzeichnis öffnen

```bash
cd /home/teamspeak/teamspeak3-server_linux_amd64
```

### TeamSpeak-Server stoppen

  ```bash title="Stop TeamSpeak server"
  ./ts3server_startscript.sh stop
  ```

## Server-Query Passwort zurücksetzen

  ```bash title="Gib dein Passwort ein!"
  ./ts3server_minimal_runscript.sh serveradmin_password=Your_New_Password
  ```

:::tip Und schon bist du fertig!
:::
