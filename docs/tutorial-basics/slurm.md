---
sidebar_position: 6
---

# Introduction to SLURM

![Docusaurus Plushie](./slurm.png)

**[SLURM](https://slurm.schedmd.com/documentation.html)** (Simple Linux Utility for Resource Management) is a popular job scheduling and workload management system used in many high-performance computing environments. SLURM allows users to submit and manage jobs on a cluster of computers. It provides a framework for allocating resources (such as CPU cores, memory, and GPUs) and scheduling jobs efficiently.
- Logging in: To use SLURM, you need access to a cluster where SLURM is installed. Log in to the cluster using SSH or any other method provided by your system administrator.
- Job Script: Create a job script that describes the resources required for your job and the commands to be executed. A typical SLURM job script is a shell script with special directives recognized by SLURM. 

## Here's an example job script:
Let’s create an sbatch script ($ touch my-job.slurm). Open it using vim editor($ vim my-job.slurm) and insert the following code:
```
#!/bin/bash

#SBATCH --job-name=myjob		# Name for your job
#SBATCH --comment="Run My Job"	# Comment for your job

#SBATCH --output=%x_%j.out		# Output file
#SBATCH --error=%x_%j.err		# Error file

#SBATCH --time=0-00:05:00		# Time limit
#SBATCH --nodes=1			# How many nodes to run on
#SBATCH --ntasks=2			# How many tasks per node
#SBATCH --cpus-per-task=2		# Number of CPUs per task
#SBATCH --mem-per-cpu=10g		# Memory per CPU
#SBATCH --qos=short			# priority/quality of service 

# Command to run
hostname				# Run the command hostname
```
In this example, the job script specifies the job name, output file name, comment for your job, number of nodes, number of tasks per node, standard output and standard error of your job in a file. The last line is a sample command to print the host name.

- Submitting a Job: Use the sbatch command to submit your job script to SLURM:
```
sbatch my-job.slurm
```
This will submit your job to the SLURM scheduler for execution.

You will then be given a message with the ID for that job:
```
Submitted batch job 1411747 on cluster nautilus
```

- Checking Job Status: You can check the status of your jobs using the squeue command:
squeue -u username
```
squeue -u jmir@ec-nantes.fr
```
or you can use
```
squeue -u $USER
```

This will display information about your jobs, such as job ID, job name, status, and other details.

- To view detailed information about a specific job, including its resource usage, use the scontrol command:
scontrol show job job_id -M nautilus
```
scontrol show job 1411747 -M nautilus
```
- Managing Jobs: You can cancel a running job using the scancel command followed by the job ID:
scancel job_id
```
scancel 1411747
```

- Job Output: By default, SLURM captures the standard output and standard error of your job in a file. In the job script example, the output is redirected to output.txt. After the job finishes, you can examine this file to see the job's output.
----------------------------------------------------------------------------------------------------------------------

**[SLURM Official Docs](https://slurm.schedmd.com/documentation.html)**
