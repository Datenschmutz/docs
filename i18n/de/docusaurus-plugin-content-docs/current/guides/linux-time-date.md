---
sidebar_position: 3
sidebar_label: 'Linux Time and Date'
id: linux-time-date
description: This guide explains how to set Time and Date under Linux. 
slug: /linux-time-date
last_update:
  author: Fabian
  date: 12/06/2022
---

# Time and Date under Linux

This guide explains how to set Time and Date under Linux. 

## Display Current Time and Date

Enter the following command into the Linux command prompt to show basic Time and Date information.

```bash
date
```

Response should look something like this:
>Tue 2022-12-06 16:18:53 CET

### Advanced configuration with timedatectl

Enter the following command into the Linux command prompt to show **Advanced** Time and Date information.

```bash
timedatectl
```

Response should look something like this:

>Local time: Tue 2022-12-06 16:18:53 CET<br/>
>Universal time: Tue 2022-12-06 15:18:53 UTC<br/>
>RTC time: Tue 2022-12-06 15:18:54<br/>
>Time zone: Europe/Vienna (CET, +0100)<br/>
>System clock synchronized: yes<br/>
>NTP service: n/a<br/>
>RTC in local TZ: no

### Display Hardware Clock (RTC)

Use one of the following hwclock command's to display the Hardware Clock time on screen:

```bash title="Option 1"
hwclock -r
```

```bash title="Option 2"
hwclock --show
```

## Adjust Time and Date

**In many cases the time would fit only the time zone is wrong [Click here](#change-time-zone) to jump directly to section Change Time Zone**

:::info
Although it is possible to set a fixed time, we **strongly recommend** that you **use NTP (Network Time Protocol)**. This will also keep the time **synchronized**.
:::

### NTP

:::note
Once NTP is enabled, it sets the time of the current time zone. You can adjust this as described [here](#change-time-zone).
:::

#### Enable

```bash
sudo timedatectl set-ntp true
```

#### Disable

```bash
sudo timedatectl set-ntp false
```

### Change Time Zone

#### Available Time Zones

You can display the available time zones with the following command. Search for your continent and the nearest capital city

```bash
sudo timedatectl list-timezones
```

:::note
Use the `F` and `B` key on your keyboard to **scroll forward and backward** through the listed timezones. **Alternatively**, you can use the `arrow` keys for scrolling. **You can exit the list with `CTRL+C`**
:::

#### Select Time Zone

Once you Identified your time zone, you can select it using following command:

```bash title="In this example Europe/Vienna"
sudo timedatectl set-timezone Europe/Vienna
```

### Manual

To set the time manually use the following command.

```bash title="In this example the time is set to 12 o'clock midnight"
sudo timedatectl set-time 00:00:00
```

>Syntax: hh:mm:ss
