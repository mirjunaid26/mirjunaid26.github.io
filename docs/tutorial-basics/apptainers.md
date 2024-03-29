---
sidebar_position: 8
---

#  Containers for Scientific and High-Performance Computing (Apptainer/Singularity)

![Docusaurus Plushie](./apptainer.png)



In the context of High-Performance Computing (HPC) and the imperative of reproducible research, it's vital to understand the concepts of containers and images. These technologies play a crucial role in facilitating the reliable and consistent execution of computational experiments and simulations.

A container in the context of HPC and reproducible research is a meticulously isolated computational environment. It operates as a self-contained process running on an HPC cluster, ensuring strict separation from all other concurrent processes. This isolation relies on the robust capabilities of kernel namespaces and control groups (cgroups), integral features of the Linux operating system. Containers, especially those managed by tools like Docker and Singularity/Apptainer, provide an accessible and user-friendly way to harness these capabilities for the benefit of researchers and scientists.

In essence, a container:

1. Represents a runnable instance of an image, which encapsulates the entire computational environment, including software, dependencies, configurations, scripts, and binaries. These containers can be effortlessly created, launched, halted, relocated, or removed using either the Docker API or the command-line interface (CLI).
2. Can be executed on local HPC clusters, virtualized environments, or cloud-based resources, ensuring flexibility in deployment.
3. Exhibits portability across diverse operating systems, promoting consistency and facilitating the sharing of computational workflows.
4. Guarantees isolation from other containers and maintains its own ecosystem, avoiding conflicts with concurrently executing processes.

For those familiar with the concept of chroot, containers can be perceived as an extended and highly sophisticated evolution of chroot. While both chroot and containers shape the filesystem environment, containers introduce additional layers of isolation and encapsulation that surpass the capabilities of traditional chroot.

When a container is running, it relies on an isolated filesystem that is entirely defined by an image. An image must encompass every element necessary to run a specific computational application, encompassing all essential dependencies, configurations, scripts, binaries, and other components.

Furthermore, an image includes various configurations that pertain to the container itself, such as environment variables, a default command to execute upon container startup, and relevant metadata that clarifies its purpose and behavior within the HPC or research context.

By combining containers and images, researchers in the field of HPC and reproducible research can ensure the consistency and replicability of their computational experiments, as the entire environment, from software stacks to configurations, is encapsulated and isolated, minimizing the risk of unwanted interference and enhancing the ability to reproduce results accurately.


# TP

```
apptainer --help
```
It will give the description of the apptainer and various options using apptainer.
There are lots of different options but we are going to focus on shell, run, exec, build, and sign and verify. We are not gonna cover everything.

```
cat /etc/os-release
```
PRETTY_NAME="Ubuntu 22.04.3 LTS"
NAME="Ubuntu"
VERSION_ID="22.04"
VERSION="22.04.3 LTS (Jammy Jellyfish)"
VERSION_CODENAME=jammy
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=jammy

Let's say we want to switch to another OS by grabbing a container from docker hub and shell into it using Apptainer. Let's shell into official Apline container

```
apptainer shell docker://alpine
```

```
cat /etc/os-release
```
jmir@pc-ici02:~/container-tutorial$ apptainer shell docker://alpine
INFO:    Using cached SIF image
Apptainer> cat /etc/os-release
NAME="Alpine Linux"
ID=alpine
VERSION_ID=3.18.4
PRETTY_NAME="Alpine Linux v3.18"
HOME_URL="https://alpinelinux.org/"
BUG_REPORT_URL="https://gitlab.alpinelinux.org/alpine/aports/-/issues"
Apptainer>

You can see now that we are on Alpine Linux instead of Ubuntu. So, we just sawpped our OS with a single command. That's the essence of containers.

Now, if we want to do the same thing without shelling into the container, we can do so using exec command

```
apptainer exec docker://alpine cat /etc/os-release
```

Apptainer will enter the command, execute this command and then pop back out and give us the result. This is the quick easy way to do the same thing. 

jmir@pc-ici02:~/container-tutorial$ apptainer exec docker://alpine cat /etc/os-release
INFO:    Using cached SIF image
NAME="Alpine Linux"
ID=alpine
VERSION_ID=3.18.4
PRETTY_NAME="Alpine Linux v3.18"
HOME_URL="https://alpinelinux.org/"
BUG_REPORT_URL="https://gitlab.alpinelinux.org/alpine/aports/-/issues"

Try whoami, hostname, id by entering the container and then on your system. You're the same user inside the container as you are outside the container. It makes reading and writing files from the host system easier.

## Most people want to use containers because they have applications which they don't have installed on the host system and don't want to install on the host system because of some reason and they want to have quick and easy access to them.

I'm gonna give you a trivial example but you can see how this can scale up to more difficult examples.

```
python
```

For example, python is not installed and it shows you python: command not found.

But if you want to run some AI workflow that has a lot of dependencies that I don't have installed on my system or maybe a software that was written by a scientist in a lab and it doesn't have any packaging behind it.
If there's something like that I need to run and that happens to be a container available in a place like docker hub or some other registry, I can go ahead, grab it and run it.

Here's how:

```
apptainer shell docker://python
```

INFO:    Using cached SIF image
Apptainer> python
Python 3.12.0 (main, Nov  1 2023, 12:56:53) [GCC 12.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 

It will download the conatiner and shell into it. Then you if type python, you'll find that it's installed and you can run the python script. As simple as that.

Here we have to exit twice once from the python environment and then from the container.

So, these were some basics about containers.

# Let me show you something that's a little bit different that what you might have seen if you're familiar with other container runtimes

Apptainer has this pull command that we can use to pull the conatiners from any conatiner registry.

```
apptainer pull docker://alpine
```

jmir@pc-ici02:~/container-tutorial$ apptainer pull docker://alpine
INFO:    Using cached SIF image
jmir@pc-ici02:~/container-tutorial$ ls
alpine_latest.sif 

When we pull it we end up with a new file "alpine_latest.sif" and this new file is a sif file known as singularity image format file. And that file is the container. We can shell into that container

```
apptainer shell alpine_latest.sif 
```
jmir@pc-ici02:~/container-tutorial$ apptainer shell alpine_latest.sif 
Apptainer> cat /etc/os-release 
NAME="Alpine Linux"
ID=alpine
VERSION_ID=3.18.4
PRETTY_NAME="Alpine Linux v3.18"
HOME_URL="https://alpinelinux.org/"
BUG_REPORT_URL="https://gitlab.alpinelinux.org/alpine/aports/-/issues"
Apptainer> 

Now, we are in Alpine using that sif file.
Also, if we don't like the name we can do so using
```
jmir@pc-ici02:~/container-tutorial$ mv alpine_latest.sif alpine.sif
jmir@pc-ici02:~/container-tutorial$ ls
alpine.sif 
```

Now, if want to shell into that container, we can do so that as well

jmir@pc-ici02:~/container-tutorial$ apptainer shell alpine.sif 
Apptainer> cat /etc/os-release 
NAME="Alpine Linux"
ID=alpine
VERSION_ID=3.18.4
PRETTY_NAME="Alpine Linux v3.18"
HOME_URL="https://alpinelinux.org/"
BUG_REPORT_URL="https://gitlab.alpinelinux.org/alpine/aports/-/issues"
Apptainer> 

This is great. That means if you can manage files, you can manage your container.
You can copy it and move it. You can out it on a website and download it. You could scp it or email it to somebody if it is so small. This let's you manage your conatiner by yourself.

These were the basics. Let's dive into what differentiates Apptainer from other runtime containers.

First this is it has a simple and sensible privilige escalation model.

Let's look at some simple details about who I am on this system.

```
jmir@pc-ici02:~/container-tutorial$ id
uid=1001(jmir) gid=1001(jmir) groups=1001(jmir),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),122(lpadmin),134(sambashare),137(docker)
jmir@pc-ici02:~/container-tutorial$ 
```

I'm gonna go ahead and shell into that alpine.sif container.

```
jmir@pc-ici02:~/container-tutorial$ apptainer shell alpine.sif 
Apptainer> id
uid=1001(jmir) gid=1001(jmir) groups=4(adm),24(cdrom),27(video),30(readproc),46(plugdev),122(lpadmin),134(sambashare),137(docker),1001(jmir)
Apptainer> 
```

If you check the details, they're same and this is the major difference between Apptainer and other container runtimes. I'm the same user with the same uid, gid, group, etc. inside the container as I'm outside the container.

Let's look and see if I can elevate my priviliges.

```
Apptainer> sudo whoami
/bin/sh: sudo: not found
Apptainer> 
```

It doesn't have sudo installed inside of it. Let's go and download a conatiner which has sudo. Let's run that instead.

```
jmir@pc-ici02:~/container-tutorial$ apptainer shell docker://godlovedc/sudo
INFO:    Using cached SIF image
Apptainer> sudo whoami
sudo: The "no new privileges" flag is set, which prevents sudo from running as root.
sudo: If sudo is running in a container, you may need to adjust the container configuration to disable the flag.
Apptainer> 
```
Now, you might have anticipated that it wasn't going to work because I told you that whatever prilileges you have on the host system, those same privileges you have inside the container. You can't elevate privileges once you enter the container.
But what is cool about this is that it doesn't give you a stadard error message but it gives you something different.
It says, the "no new privileges" flag is set, which prevents sudo from running as root.
sudo: If sudo is running in a container, you may need to adjust the container configuration to disable the flag.

What happens under the hood here, apptainer starts a process which is responsible for spawning your container and when it starts that process, it starts with no new privileges flag which is a kernel flag which allows the kernel to say, I'm not going to elevate your privileges in this process or child processes.

Another thing is when you enter a container and you have a new file system, you have a new root file system. The way that works is the new file system is mounted to you host file system and then the mount namespace which we talk about later, you pivot into a new mount namespace which allows the kernel to present that file system to you as though it were the root file system.

When Apptainer does that operation it passes the nosuid to the mount command which prevents you from being bale to use suid programs like sudo within the container. So the point of telling all this is it's not like there's some complicated security privilege model which is taked on top of apptainer to make everything secure. Instead apptainer just uses the kernel and the file system features which have existed in linux for ever and which are really well known and which are dependent upon and make sure you can't excalate your privileges inside th container. It's really simple and stratightforward.

Let me show you once of the interesting side of that.

--------------------------------------------------------------------------------

Let's pull a container from OCI registry using oras and then check the contents inside which we cannot do after pulling normal docker image

jmir@pc-ici02:~/container-tutorial$ apptainer pull --force lolcow.sif oras://docker.io/godlovedc/lolcow:sif
INFO:    Downloading oras image
jmir@pc-ici02:~/container-tutorial$ ls
alpine.sif         conda-environment.tar.gz  foo         python_latest.sif     test-installation-container
conda-environment  docker-tutorial           lolcow.sif  singularity-training  test-script.py
jmir@pc-ici02:~/container-tutorial$ apptainer inspect --deffile lolcow.sif 
bootstrap: docker
from: ubuntu:18.04

%environment
    export LC_ALL=C
    export PATH=/usr/games:$PATH

%runscript
    fortune | cowsay | lolcat

%post
    apt-get -y update
    apt-get -y install fortune cowsay lolcat
jmir@pc-ici02:~/container-tutorial$ 

Voila. This is why you would want to use oras rather than normal oci image.

Then shell into the container.

mir@pc-ici02:~/container-tutorial$ apptainer shell lolcow.sif 
Apptainer> cowsay moo
Apptainer> fortune
Apptainer> exit      
exit
jmir@pc-ici02:~/container-tutorial$ cowsay moo
Command 'cowsay' not found, but can be installed with:
sudo apt install cowsay
jmir@pc-ici02:~/container-tutorial$ 

Directly running the container

jmir@pc-ici02:~/container-tutorial$ apptainer run lolcow.sif cowsay moo

jmir@pc-ici02:~/container-tutorial$ 

Also, if you type ll, you'll see lolcow.sif is executable.

So, you can simple run

```
./lowcow.sif
```
jmir@pc-ici02:~/container-tutorial$ ./lolcow.sif 


So, that's basic Apptainer look and feel and how to download and interact with them.


# TP: Job submission on Nautilus

#!/bin/bash
#SBATCH --job-name=single_gpu        # name of job
#SBATCH --account=<project_id>       # replace <project_id> by your project ID
#SBATCH --ntasks=1                   # total number of processes (= number of GPUs here)
#SBATCH -p gpus                      # name of the GPU partition
#SBATCH -w turing02                  # name of the target GPU server
#SBATCH --gres=gpu:1                 # number of GPUs (1/4 of GPUs)
#SBATCH --cpus-per-task=12           # number of cores per task (1/4 of the 4-GPUs node)
# /!\ Caution, "multithread" in Slurm vocabulary refers to hyperthreading.
#SBATCH --hint=nomultithread         # hyperthreading is deactivated
#SBATCH --time=00:10:00              # maximum execution time requested (HH:MM:SS)
#SBATCH --output=gpu_single%j.out    # name of output file
#SBATCH --error=gpu_single%j.out     # name of error file (here, appended with the output file)

# cleans out the modules loaded in interactive and inherited by default 
module purge

# load Singularity
module load singularity   

# echo of launched commands
set -x

# code execution. As in the previous examples, use singularity to submit your job in a 
# container that you chose. Let's use the TF container once again
singularity exec --nv -B ./:app \  # tell singularity to run a program with nvidia gpus 
                                   # copy the current folder in the container
            /softs/singularity/containers/ai/ngc-tf2.3-fat_latest.sif \ # container name
            python3 \ # command to run - Python interpreter in this case
            train.py  # python file with AI training


# TP 1: Hello World Container

Check this https://hsf-training.github.io/hsf-training-singularity-webpage/05-definition-files/index.html

BootStrap: docker
From: ubuntu:20.04

%runscript
  echo "Hello World"
# Print Hello world when the image is loaded

# TP 2: Anaconda Container

# TP 3: PyTorch

# TP 4: Tensorflow

# TP 5

BootStrap: docker
From: ubuntu:20.04

%post
    apt-get update -y
    apt-get install wget -y
    export DEBIAN_FRONTEND=noninteractive
    apt-get install dpkg-dev cmake g++ gcc binutils libx11-dev libxpm-dev \
        libxft-dev libxext-dev python libssl-dev libgsl0-dev libtiff-dev -y
    cd /opt
    wget https://root.cern/download/root_v6.22.06.Linux-ubuntu20-x86_64-gcc9.3.tar.gz
    tar -xzvf root_v6.22.06.Linux-ubuntu20-x86_64-gcc9.3.tar.gz

%environment
    export PATH=/opt/root/bin:$PATH
    export LD_LIBRARY_PATH=/opt/root/lib:$LD_LIBRARY_PATH
    export PYTHONPATH=/opt/root/lib

%runscript
    python /opt/root/tutorials/roofit/rf101_basics.py

%labels
    Author HEPTraining
    Version v0.0.1

%help
    Example container running the RooFit tutorial and producing the rf101_basics.png image.
    The container provides ROOT with RooFit and Python integration running on Ubuntu.


## References:
1. Singularity/Apptainer Tutorial (https://hsf-training.github.io/hsf-training-singularity-webpage/04-building-containers/index.html)
