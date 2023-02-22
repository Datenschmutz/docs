---
sidebar_position: 12
sidebar_label: 'Robocopy Cheat Sheet'
id: robocopy-cheat-sheet
description: This comprehensive Robocopy cheat sheet provides a complete guide with all available options. Learn how to use Robocopy effectively and efficiently.
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
---

# Robocopy Cheat Sheet

Robocopy is a command-line tool used for file replication. It is available in Windows operating systems and is used to copy large files or large amounts of files from one location to another.

## Syntax
```Bash
ROBOCOPY source_folder destination_folder [file(s)_to_copy] [options]
```

- **source_folder**: Specifies the folder that contains the files to copy.
- **destination_folder**: Specifies the destination folder for the copied files.
- **file(s)_to_copy**: Specifies the file(s) to be copied. You can use wildcard characters to specify multiple files.
- **options**: Specifies the options to use when copying the files.

## Options

### Copy Options
| Option          | Description                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| /S              | Copies subdirectories.                                                                                                                       |
| /E              | Copies subdirectories, including empty ones.                                                                                                 |
| /LEV:n          | Copies only the top n levels of the source directory tree.                                                                                   |
| /Z              | Copies files in restartable mode.                                                                                                            |
| /B              | Copies files in backup mode (backup operator privileges required).                                                                           |
| /ZB             | Uses restartable mode; if access is denied, Robocopy will use backup mode.                                                                   |
| /COPY:copyflag  | Copies file information specified by copyflag. You can specify multiple copyflag values separated by commas.                                 |
| /DCOPY:copyflag | Copies directory information specified by copyflag. You can specify multiple copyflag values separated by commas.                            |
| /TIMFIX         | Fixes file times to prevent timestamp drift.                                                                                                 |
| /PURGE          | Deletes destination files or directories that no longer exist in the source.                                                                 |
| /MIR            | Mirrors a directory tree (copies all files, including empty directories). Deletes files in the destination that are no longer in the source. |
| /MT[:n]         | Specifies the number of threads to use when copying files. The default is 8 threads.                                                         |

### Retry Options
| Option | Description                                                                                                |
|--------|------------------------------------------------------------------------------------------------------------|
| /R:n   | Specifies the number of times that Robocopy should retry copying a file. The default is 1 million retries. |
| /W:n   | Specifies the time, in seconds, that Robocopy should wait between retries. The default is 30 seconds.      |
| /REG   | Saves retry information to the system registry instead of a file.                                          |

### Logging Options
| Option       | Description                                                                                               |
|--------------|-----------------------------------------------------------------------------------------------------------|
| /L           | Displays the files that would be copied, but does not copy them.                                          |
| /X           | Excludes files that match specified names or paths.                                                       |
| /XC          | Excludes changed files.                                                                                   |
| /XN          | Excludes newer files.                                                                                     |
| /XO          | Excludes older files.                                                                                     |
| /XX          | Excludes extra files and directories.                                                                     |
| /XL          | Excludes "lonely" files and directories (those that are only in the source or destination, but not both). |
| /LOG:file    | Writes the status output to a log file.                                                                   |
| /LOG+:file   | Appends the status output to a log file.                                                                  |
| /TEE         | Writes the status output to the console window and to the log file.                                       |
| /NJH         | Suppresses the "job header" in the status output.                                                         |
| /NJS         | Suppresses the "job summary" in the status output.                                                        |
| /UNILOG:file | Writes the status output to a log file in Unicode format.                                                 |

### Other Options
| Option | Description                                                                      |
| ------ | -------------------------------------------------------------------------------- |
| /NFL   | Specifies that file names should not be logged.                                  |
| /NDL   | Specifies that directory names should not be logged.                             |
| /NC    | Specifies that file classes should not be logged.                                |
| /NS    | Specifies that file sizes should not be logged.                                  |
| /NP    | Specifies that the progress of the copy operation should not be displayed.       |
| /BYTES | Displays file sizes in bytes.                                                    |
| /K     | Copies file attributes.                                                          |
| /A     | Copies only files that have the archive attribute set.                           |
| /M     | Copies only files that have the archive attribute set, and resets the attribute. |
| /FFT   | Uses FAT file timing instead of NTFS.                                            |
| /256   | Uses 256-color mode.                                                             |