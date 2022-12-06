---
sidebar_position: 2
sidebar_label: 'TeamSpeak Server-Query Reset'
id: teamspeak-qerver-query-reset
description: This guide explains how to reset the TeamSpeak Server-Query login. 
slug: /teamspeak-qerver-query-reset
last_update:
  author: Fabian
  date: 11/29/2022
---

# Reset TeamSpeak Server-Query login on Linux servers

If you have forgotten the server query password issued at the first server start, or if you simply want to change it, you can do so as follows.

:::info
This guide assumes that TeamSpeak has been set up **according** to the instructions found **[here](teamspeak-install)**. If the **TeamSpeak server has been set up differently**, some commands and/or variables such as the [Teamspeak directory](teamspeak-install#control-teamspeak-server) or the [username of the running user](teamspeak-install#create-a-teamspeak-running-user) **may differ**.
:::

## Preparations

### Switch to TeamSpeak user

  ```bash
  su teamspeak
  ```

### Navigate to the TeamSpeak directory

```bash
cd /home/teamspeak/teamspeak3-server_linux_amd64
```

### Stop TeamSpeak server

  ```bash title="Stop TeamSpeak server"
  ./ts3server_startscript.sh stop
  ```

## Reset Server-Query Password

  ```bash title="Fill in Your Password!"
  ./ts3server_minimal_runscript.sh serveradmin_password=Your_New_Password
  ```

:::tip And you're done!
:::
