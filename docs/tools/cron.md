---
sidebar_position: 2
sidebar_label: 'Cron - Cronjobs'
id: cron
description: Automate the execution of tasks at (recurring) times defined by you.
slug: /cron
last_update:
  author: Fabian
  date: 12/04/2022
---

# Cron - Cronjobs

The "Cron" service is already pre-installed under Linux as a package with the same name. With the help of cron jobs, you can have certain tasks executed automatically at (recurring) times defined by you. Cron jobs are therefore useful for automatic backups, for example.

:::caution Check Server time
For the automatic execution chron uses the locally set time. You can check it with the command `/timedatectl`.
If the time is not correct, you can adjust it using [this guide](#)
:::

## Create Cronjobs

To edit the crontab of the currently logged in user, use the command.

```bash
crontab -e.
```

## Crontab

The individual cronjobs are stored in a table, the so-called "Crontab". In this table, one cronjob is defined per line. Each line contains the time when the command should be executed and the command itself. The syntax of a crontab line looks as follows:

### Crontab line Syntax

```bash
0 12 * * * Command
```

| 0 | 12 | * | * | * | Command |
|---|---|---|---|---|---|
| Minute (0-59) | Hour (0-23) | Day (1-31) | Month (1-12) | Weekday (1-7) | command to be executed |

>For all time specifications, a "*" can also be used to indicate that the execution should take place at any minute, hour, etc.

>In the example above, the command is executed every day at 12:00.

:::tip
The creation of a cronjob with the below seen additions can be a real pain therefore the usage of an [online cronjob generator](https://www.google.com/search?q=crontab+generator) is strongly recommended.
:::

#### It is possible to define more than one value per time entry by separating them with a `,`.

```bash
0 6,18 1,28 1,6,12 * Command
```

>Above cronjob will be executed on the 1st and 28th day of January, June and December at 06:00 and 18:00 respectively

#### In addition to using fixed times, it is also possible to specify an interval by using a `/`.

```bash
*/5 * * * * Command
```

>Above command is executed every 5 minutes

#### Last but not least it is also possible to execute a command automatically on restart

```bash
@reboot Command
```

>Above command is executed on reboot

## Cronjob output

By default, all output delivered by commands or scripts when executed via cronjobs is sent by email to the respective user on the server who has stored the cronjob in his crontab.

However, it is possible to redirect this output to a (log) file or to Disable it completely if desired.

### Log Cronjob output

To redirect the output of a command or script to a logfile, you have to write `">>"` after the command or script in your crontab line followed by the path of the file to which this output should be redirected.

After the path of the file must also be `"2>&1"`, this ensures that not only the normal output, but also errors are redirected to this file.

```bash example of full cronjob with log
0 12 * * * /usr/bin/script.sh >> /var/log/script.log 2>&1
```

>Above command executes the script every 12 hours and sends command results to a logfile

### Disable Cronjob output

To disable the output use `"> /dev/null"` instead of the double greater-than sign and the path of the output file after the command or script. This is the so-called [Null Device](https://en.wikipedia.org/wiki/Null_device) under Linux.

After the path of the file must also be `"2>&1"`, this ensures that not only the normal output, but also errors are redirected to the Null Device.

```bash example of full cronjob with log
0 12 * * * /usr/bin/script.sh > /dev/null 2>&1
```

>Above command executes the script every 12 hours and sends command results to the Null Device (deletes them)

## Full Crontab line breakdown

| Minute (0-59) | Hour (0-23) | Day (1-31) | Month (1-12) | Weekday (1-7) | Command | > sends output<br/> >> sends output without overwriting destination | output destination | also sends errors to destination |
|---|---|---|---|---|---|---|---|---|
| 0 | 12 | * | * | * | /usr/bin/script.sh | >> | /var/log/script.log | 2>&1 |
| 0 | 12 | * | * | * | /usr/bin/script.sh | > | /dev/null| 2>&1 |

```bash example of full cronjob with log
0 12 * * * /usr/bin/script.sh >> /var/log/script.log 2>&1
```

```bash example of full cronjob with log
0 12 * * * /usr/bin/script.sh > /dev/null 2>&1
```

- `> /dev/null`: This is the so-called [Null Device](https://en.wikipedia.org/wiki/Null_device) everything sent to it will be deleted.
- `2>&1`: this ensures that not only normal output but also errors are redirected to desetiantion.

## Cronjob folder

In addition to crontab, there are also predefined folders for specific time intervals.

The following folders exist:

- `/etc/cron.daily/`
- `/etc/cron.hourly/`
- `/etc/cron.weekly/`
- `/etc/cron.monthly/`

Pretty self-explanatory all executable files (e.g. scripts) are executed with the interwall specified in the folder name
