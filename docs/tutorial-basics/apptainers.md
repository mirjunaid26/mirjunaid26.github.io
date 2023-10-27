---
sidebar_position: 8
---

#  Containers for Scientific and High-Performance Computing (Apptainer/Singularity)

![Docusaurus Plushie](./apptainer.png)

## CAUTION : WORK IN PROGRESS

1. What are containers and why do we need them?
2. Downloading and using and already existing conatiner.
3. Creating a container from scratch.
4. How to use containers for reproducible research?


In the context of High-Performance Computing (HPC) and the imperative of reproducible research, it's vital to understand the concepts of containers and images. These technologies play a crucial role in facilitating the reliable and consistent execution of computational experiments and simulations.

## Containerization in HPC and Reproducible Research

A container in the context of HPC and reproducible research is a meticulously isolated computational environment. It operates as a self-contained process running on an HPC cluster, ensuring strict separation from all other concurrent processes. This isolation relies on the robust capabilities of kernel namespaces and control groups (cgroups), integral features of the Linux operating system. Containers, especially those managed by tools like Docker and Singularity/Apptainer, provide an accessible and user-friendly way to harness these capabilities for the benefit of researchers and scientists.

In essence, a container:

1. Represents a runnable instance of an image, which encapsulates the entire computational environment, including software, dependencies, configurations, scripts, and binaries. These containers can be effortlessly created, launched, halted, relocated, or removed using either the Docker API or the command-line interface (CLI).
2. Can be executed on local HPC clusters, virtualized environments, or cloud-based resources, ensuring flexibility in deployment.
3. Exhibits portability across diverse operating systems, promoting consistency and facilitating the sharing of computational workflows.
4. Guarantees isolation from other containers and maintains its own ecosystem, avoiding conflicts with concurrently executing processes.

For those familiar with the concept of chroot, containers can be perceived as an extended and highly sophisticated evolution of chroot. While both chroot and containers shape the filesystem environment, containers introduce additional layers of isolation and encapsulation that surpass the capabilities of traditional chroot.

## What's container image?

When a container is running, it relies on an isolated filesystem that is entirely defined by an image. An image must encompass every element necessary to run a specific computational application, encompassing all essential dependencies, configurations, scripts, binaries, and other components.

Furthermore, an image includes various configurations that pertain to the container itself, such as environment variables, a default command to execute upon container startup, and relevant metadata that clarifies its purpose and behavior within the HPC or research context.

By combining containers and images, researchers in the field of HPC and reproducible research can ensure the consistency and replicability of their computational experiments, as the entire environment, from software stacks to configurations, is encapsulated and isolated, minimizing the risk of unwanted interference and enhancing the ability to reproduce results accurately.


## References:
1. Singularity/Apptainer Tutorial (https://hsf-training.github.io/hsf-training-singularity-webpage/04-building-containers/index.html)
