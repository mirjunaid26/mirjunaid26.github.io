---
sidebar_position: 1
---

# Quickstart

## Getting Started With GLiCID

This is the official user documentation of GLiCID, which is a regional High Performance Computing Centre (Mésocentre) in Loire Atalntique hosted at Ecole Centrale de Nantes and Nantes University.

It explains various aspects of using GLiCID cluster and contains both introdcutory and advanced material. The first time users might want to start from the beginning and you will learn how to log in to GlICID, familiarize yourslef with the environment, find pre-installed software, compile your programs and run them on GLiCID.

The users familiar with Liger and Waves can go through the table of conetnets and browse the topics they are interested in. We hope that you can find most of the information you need to use our computing reources. 


## How to access GLiCID Cluster

In order to gain access to GLiCID you have to follow these steps:

1. Create an account on https://clam.glicid.fr (school account, or CRU account for external users).
2. The account will be validated by an administrator.
3. User has to generate and upload the pulblic SSH key to CLAM portal (in profile's SSH Access tab).
4. Edit the .ssh/config file and add the defined configuration.
5. Finally, you can log in using SSH from terminal (on Linux and macOS) and PowerShell (on Windows).

# OpenSSH

OpenSSH is a popular and freely available SSH client for UNIX-like operating systems such as GNU/Linux and macOS.

## OpenSSH Installation

OpenSSH comes pre-installed on macOS. It is also contained in the package repository of many GNU/Linux distributions, e.g., "openssh-client" on Debian, ubuntu, etc. or "openssh-clients" on Fedora, Centoas, etc. Also, the OpenSSH source code can be downloaded from the OpenSSH webite (http://www.openssh.com/portable.html).

## OpenSSH Key Generation

At GLiCID, we do not allow logging into our systems solely with a password. Rather, we require ke-based authentication. It is important to generate secure key pairs. Generate a key using the following line
```
ssh-keygen
```

Note: If the file ~/.ssh/id_rsa already exists, ssh-keygen will ask before overwriting it. You probably do not want to overwrite the file as you might already be using it as credentials for another system. Instead, use a different file name, e.g., ~/.ssh/id_glicid and remember to use the same file name on all subsequent lines in this document.

Afterwards, ssh-keygen will ask for a passphrase. It is not mandatory to enter a passphrase as you can simple press enter to proceed without passpharse. However, it is recommended to provide a strong passphrase and it needs to be entered in the future to unlock your private key. You might want to use a password manager to save your key and easy the use of complicated passphrases. 

Keep the private key i.e., ~/.ssh/id_rsa safe and confidential on your local host. The generated puclic  key i.e., ~/.ssh/id_rsa.pub needs to be uploaded to the CLAM user portal on https://clam.glicid.fr

## OpenSSH Configuration 

The user-side SSH configuration can be used to create shortcuts to targets/hosts and configure connections. The shortcuts and options also influnce the behavious of any program that uses SSH underneath, such as git, scp, and rsync.

An overview of all the available options can be seen via "man ssh_config". That's probably overwhelming, so here are a few options and configuraions highlighted.

Edit the .ssh/config file and add the following:
```
Host Bastion
    Hostname bastion.glicid.fr
    User <username>@ec-nantes.fr
    IdentityFile ~/.ssh/id_rsa
    ForwardAgent yes

Host glicid
    Hostname login-001.glicid.fr
    User <username>@ec-nantes.fr
    ProxyJump Bastion
    IdentityFile ~/.ssh/id_rsa

Host nautilus
    Hostname nautilus-devel-001.nautilus.intra.glicid.fr
    User jmir@ec-nantes.fr
    ProxyJump glicid
    IdentityFile ~/.ssh/id_rsa
```
The above entries create a shortcut that allows you to log in to the individaul nodes via the shortcut such as glicid, nautilus, and philias(soon).   
  
Afterwards, you can simply connect to the GLiCID Cluster login nodes from the terminal using the following commands
```
ssh glicid
```
or
```
ssh nautilus
```
Note: If you're a windows user and not comfortable with the terminal, you can use MobaXterm. 

