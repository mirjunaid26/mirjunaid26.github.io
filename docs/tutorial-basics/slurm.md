---
sidebar_position: 6
---

# Introduction to SLURM

![Docusaurus Plushie](./slurm.png=100x200)

**[SLURM](https://slurm.schedmd.com/documentation.html)** (Simple Linux Utility for Resource Management) is a popular job scheduling and workload management system used in many high-performance computing environments. SLURM allows users to submit and manage jobs on a cluster of computers. It provides a framework for allocating resources (such as CPU cores, memory, and GPUs) and scheduling jobs efficiently.
- Logging in: To use SLURM, you need access to a cluster where SLURM is installed. Log in to the cluster using SSH or any other method provided by your system administrator.
- Job Script: Create a job script that describes the resources required for your job and the commands to be executed. A typical SLURM job script is a shell script with special directives recognized by SLURM.

## Getting Started with Slurm

To tell Slurm what resources you need, you will have to create an sbatch script (also called a Slurm script). In this tutorial, we will be writing sbatch scripts with bash, but you can use any programming language as long as the pound sign (#) doesn’t cause an error. Your sbatch scripts will generally follow this format:

```
#!/bin/bash
# Declaring Slurm Configuration Options

# Loading Software/Libraries

# Running Code
```
Let’s start by going over the different configuration options for Slurm in the following example.

### TP_1: SLURM Basics

Create an sbatch script ($ touch my-job.slurm). Open it using vim editor ($ vim my-job.slurm) and insert the following code:
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
So, in this example, we have requested a job with the following dimensions:

- Max Run Time: 5 Minutes
- Number of Nodes: 1
- Number of Tasks Per Node: 2
- Number of CPUs Per Task: 2
- Memory Per CPU: 10GB

Finally, we run the bash command hostname. You can run whatever kind of code you want here; C, C++, bash, python, R, Ruby, etc.

- Submitting a Job: Use the sbatch command to submit your job script to SLURM:
```
sbatch my-job.slurm
```
This will submit your job to the SLURM scheduler for execution.

You will then be given a message with the ID for that job:
```
Submitted batch job 1411747 on cluster nautilus
```
- After we submit a job, Slurm will create the output and error files. You can see them by running:
```
ls
```
You'll see the following files:
```
myjob_1411747.err  myjob_1411747.out  my-job.slurm
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

The squeue command gives us the following information:

- JOBID: The unique ID for your job.
- PARTITION: The partition your job is running on (or scheduled to run on).
- NAME: The name of your job.
- USER: The username for whomever submitted the job.
- ST: The status of the job. The typical status codes you may see are:
	- CD (Completed): Job completed successfully
	- CG (Completing): Job is finishing, Slurm is cleaning up
	- PD (Pending): Job is scheduled, but the requested resources aren’t available yet
	- R (Running): Job is actively running
- TIME: How long your job has been running.
- NODES: How many nodes your job is using.
- NODELIST(REASON): Which nodes your job is running on (or scheduled to run on). If your job is not running yet, you will also see one of the following reason codes:
	- Priority: When Slurm schedules a job, it takes into consideration how frequently you submit jobs. If you often submit many jobs, Slurm will assign you a lower priority than someone who has never submitted a job or submits jobs very infrequently. Don’t worry, your job will run eventually.
	- Resources: Slurm is waiting for the requested reasources to be available before starting your job.
	- Dependency: If you are using dependent jobs, the parent job may show this reason if it’s waiting for a dependent job to complete.

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

### TP_2. OpenMP/MPI

### TP_3. Conda and Micromamba

Conda is a software environment manager that is quite popular, especially in the Python community, but it has many issues in the context of HPC use.
 
Note: GLiCID administrators advise against its use, especially if the affected software is already available in Guix. However, some packages are not available(yet) on Guix.
In GLiCID, we have decided to use micromamba, which is the lighter version of conda. Here are the commands to run to install it locally on GLiCID:
```
# Download micromamba
mkdir -p $HOME/.local/bin
wget -P $HOME/.local/bin https://s3.glicid.fr/pkgs/micromamba
chmod u+x $HOME/.local/bin/micromamba

# Initilize micromamba
$HOME/.local/bin/micromamba -r /micromamba/$USER/ shell init --shell=bash --prefix=/micromamba/$USER/

# [OPTIONAL] Add an alias `conda`
echo -e '\n\n#Alias conda with micromamba\nalias conda=micromamba' >> ~/.bashrc

# Reload the .bashrc
source ~/.bashrc
```
Note: It is possible that the file is not always sourced at the login on GLiCID (investigations are ongoing). If this is not the case, remember to do after each login to load well. .bashrcsource ~/.bashrcmicromamba

To verify the installation:
```
micromamba --version  # or: `conda --version`
# -> 1.4.0

# create and environment micromamba/conda
micromamba create -n my_env

# Activate the ennvironment
micromamba activate my_env

# -> Your prompt should now be prefixed with: (my_env)

# Install the package using conda-forge
micromamba install -c conda-forge numpy

# Test the package
python -V
python -c "import numpy as np; print(np.__version__)"
# -> 1.24.2

# Deactivate  the environment
micromamba deactivate


```

### TP_4. FORTRAN

In this part of the tutorial, we will write our first Fortran program: the ubiquitous “Hello, World!” example.

However, before we can write our program, we need to ensure that we have a Fortran compiler set up.

Fortran is a compiled language, which means that, once written, the source code must be passed through a compiler to produce a machine executable that can be run.

Load the module using the following command:
```
module load gcc/13.1.0
```

Once you have loaded the module, open a new file in vim editor and enter the following:
```
program hello
  ! This is a comment line; it is ignored by the compiler
  print *, 'Hello, World!'
end program hello
```
Having saved your program to hello.f90, compile at the command line with:
```
gfortran hello.f90 -o hello
```

.f90 is the standard file extension for modern Fortran source files. The 90 refers to the first modern Fortran standard in 1990.

To run your compiled program:
```
./hello
```

Congratulations, you’ve written, compiled and run your first Fortran program! 


----------------------------------------------------------------------------------------------------------------------

**[SLURM Official Docs](https://slurm.schedmd.com/documentation.html)**
