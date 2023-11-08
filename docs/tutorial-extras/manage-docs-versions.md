---
sidebar_position: 1
---

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
5. Finally, you can log in using SSH from terminal (on Linux and macOS) and using MobaXTerm or PowerShell (on Windows).

## OpenSSH Configuration

OpenSSH is a popular and freely available SSH client for UNIX-like operating systems such as GNU/Linux and macOS.

# OpenSSH Installation

OpenSSH comes pre-installed on macOS. It is also contained in the package repository of many GNU/Linux distributions, e.g., "openssh-client" on Debian, ubuntu, etc. or "openssh-clients" on Fedora, Centoas, etc. Also, the OpenSSH source code can be downloaded from the OpenSSH webite (http://www.openssh.com/portable.html).

# OpenSSH Key Generation

At GLiCID, we do not allow logging into our systems solely with a password. Rather, we require ke-based authentication. It is important to generate secure key pairs. Generate a key using the following line
```
ssh-keygen
```

