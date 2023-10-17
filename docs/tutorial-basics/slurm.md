---
sidebar_position: 6
---

# Introduction to SLURM

![Docusaurus Plushie](./slurm.png)

**[SLURM](https://slurm.schedmd.com/documentation.html)** (Simple Linux Utility for Resource Management) is a popular job scheduling and workload management system used in many high-performance computing environments. SLURM allows users to submit and manage jobs on a cluster of computers. It provides a framework for allocating resources (such as CPU cores, memory, and GPUs) and scheduling jobs efficiently.
- Logging in: To use SLURM, you need access to a cluster where SLURM is installed. Log in to the cluster using SSH or any other method provided by your system administrator.
- Job Script: Create a job script that describes the resources required for your job and the commands to be executed. A typical SLURM job script is a shell script with special directives recognized by SLURM. Here's an example job script:
```
#!/bin/bash
#SBATCH --job-name=myjob
#SBATCH --output=output.txt
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=4

# Commands to run
echo "Hello, Users!"

```
In this example, the job script specifies the job name, the output file name, the number of nodes, and the number of tasks per node. The last line is a sample command to print "Hello, World!".

- Submitting a Job: Use the sbatch command to submit your job script to SLURM:
```
sbatch job_script.sh

```
This will submit your job to the SLURM scheduler for execution.

You will then be given a message with the ID for that job:
```
Submitted batch job 208
```

- Checking Job Status: You can check the status of your jobs using the squeue command:
```
squeue -u your_username
```
This will display information about your jobs, such as job ID, job name, status, and other details.

- Managing Jobs: You can cancel a running job using the scancel command followed by the job ID:
```
scancel job_id
```

- To view detailed information about a specific job, including its resource usage, use the scontrol command:
```
scontrol show job job_id
```

- Job Output: By default, SLURM captures the standard output and standard error of your job in a file. In the job script example, the output is redirected to output.txt. After the job finishes, you can examine this file to see the job's output.
----------------------------------------------------------------------------------------------------------------------

**[SLURM Official Docs](https://slurm.schedmd.com/documentation.html)**
