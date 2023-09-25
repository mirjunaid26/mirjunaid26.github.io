---
sidebar_position: 3
---

# Linux Command Line


### Table of Contents

---

| No. | Topic                                                                   |
| --- | ----------------------------------------------------------------------- |
| 1   | [**Background and History**](#link)                               |
| 2   | [**The Command Line**](#link)               |
| 3   | [**Linux Directory Structure**](#link)                           |
| 4   | [**Files**](#link)                  |
| 5   | [**Text Display and Search**](#link)                         |
| 6   | [**Users and Permissions**](#link)                 |
| 7   | [**Processes**](#link)                              |
| 8   | [**The vim Text Editor**](#link) |
| 9   | [**Shell Scripts**](#link)                                                   |
| 10   | [**Environment Variables**](#link)                               |
| 11  | [**System Configuration**](#link)               |
| 12  | [**SSH Connections**](#link)                           |
| 13  | [**SSH: Graphics and File Transfer**](#link)                  |
| 14  | [**Tips**](#link)                         |

---

| No. | Topic                                                                   |
| --- | ----------------------------------------------------------------------- |
| 1   | [**General Commands**](#General-commands)                               |
| 2   | [**File Management Commands**](#File-management-commands)               |
| 3   | [**Text Processing**](#Text-processing)                           |
| 4   | [**Permission Based Commands**](#Permission-commands)                  |
| 5   | [**Networking Commands**](#Networking-commands)                         |
| 6   | [**Package Management Commands**](#managing-packages)                 |
| 7   | [**Memory Usage Commands**](#Memory-usage)                              |
| 8   | [**System and Hardware information**](#system-and-hardware-information) |
| 9   | [**System**](#system)                                                   |



----------------------------------------------------------------------------------------------------------------------
When working with High-Performance Computing (HPC) systems in Linux, there are several basic commands that are commonly used. Here are some of the essential commands:

1. `pwd`: print present working directory

	Example: ```pwd```


1. `ssh`: Secure Shell (SSH) is used to connect to remote HPC systems. You can use the `ssh` command followed by the remote server's IP address or hostname to establish a secure shell connection.

    Example: `ssh username@remote_server`

2. `ls`: List the contents of a directory. It displays the files and directories in the current working directory.

   Example: `ls`

3. `cd`: Change directory. Use `cd` followed by the directory path to navigate to a specific directory.

   Example: `cd /path/to/directory`

4. `pwd`: Print the current working directory. It displays the path of the current directory you are in.

   Example: `pwd`

5. `cp`: Copy files and directories. You can use `cp` to create a copy of a file or directory.

   Example: `cp source_file destination_file`

6. `mv`: Move or rename files and directories. It can be used to move files or directories from one location to another or rename them.

   Example: `mv source_file destination_file`

7. `rm`: Remove files and directories. This command is used to delete files and directories. Be cautious when using it, as deleted files are not recoverable.

   Example: `rm filename`

8. `mkdir`: Create directories. Use `mkdir` followed by the directory name to create a new directory.

   Example: `mkdir directory_name`

9. `cat`: Display file content. It is used to print the contents of a file on the console.

   Example: `cat filename`

10. `nano` or `vi`: Text editors for creating or modifying files. You can use either `nano` or `vi` to edit text files directly from the command line.

   Example (nano): `nano filename`

These are just a few basic commands, but there are many more available in Linux for various purposes. It's also worth mentioning that some HPC systems may have additional commands or utilities specific to their setup or configuration.

11. Transferring files to HPC Clusters from a Mac/Linux.
   scp filename username@cluster:~

12. Transferring files to HPC Clusters from windows.
   Install WinSCP
