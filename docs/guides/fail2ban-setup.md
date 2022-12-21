---
sidebar_position: 7
sidebar_label: 'Setup Fail2ban'
id: fail2ban-setup
description: This guide explains how to setup Fail2ban on Linux
slug: /fail2ban-setup
last_update:
  author: Fabian
  date: 12/21/2022
tags:
- Guide
- Linux
- SSH
- Terminal
- Fail2ban
- Security 
---

# Secure SSH server under Linux with Fail2ban

Fail2ban protects your SSH server from unauthorized access attempts. It will monitor the log files and block any IP addresses that show signs of malicious activity, helping to keep your server secure.

## Installation

### Update Server
Make sure that your system is up to date by running the following command:

```bash
sudo apt update && sudo apt upgrade -y
```

### Install Fail2ban

```bash
sudo apt install fail2ban
```

## Configuration

### Copy Configuration file
Copy the default Fail2ban configuration file to a new file so that you can edit:

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

### Edit Conffigurtaion file

```bash
sudo nano /etc/fail2ban/jail.local
```

Scroll down to the [sshd] section and modify the enabled setting to true:

```bash
[sshd]
# highlight-next-line
enabled = true
maxretry  = 3
findtime  = 1d
bantime   = 4w
ignoreip  = 127.0.0.1/8 23.34.45.56
```

> Save the configuration file with` CTRL + X` followed by `Y` close with `RETURN`.

### Restart Fail2ban Service

```bash
sudo systemctl restart fail2ban
```

### Start Fail2ban
To ensure that Fail2ban starts automatically when the system boots up, run the following command:

```bash
sudo systemctl enable fail2ban
```

## Check Fail2ban status

This will show you the status of all the jail services that are enabled, including the sshd jail.

```bash
sudo systemctl status fail2ban
```

Response should look like this:

```bash
user@datenschmutz:~# sudo systemctl status fail2ban
● fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
    Drop-In: /usr/lib/systemd/system/fail2ban.service.d
             └─50-ensure-log.conf
     Active: active (running) since Wed 2022-09-28 12:23:48 CEST; 2 months 23 d>
       Docs: man:fail2ban(1)
   Main PID: 1331502 (fail2ban-server)
      Tasks: 25 (limit: 9485)
     Memory: 47.0M
     CGroup: /system.slice/fail2ban.service
             └─1331502 /usr/bin/python2 /usr/bin/fail2ban-server -xf start
```

### List banned IPs

To see a list of IP addresses that have been banned by Fail2ban, run the following command:

```bash
sudo fail2ban-client statussshd
```

This will show you a list of IP addresses that have been banned due to failed login attempts.

#### That's it! You should now have Fail2ban configured to protect your SSH server from unauthorized access attempts.
