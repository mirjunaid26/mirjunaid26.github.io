"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[4911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(u,".").concat(d)]||p[d]||c[d]||a;return n?o.createElement(h,l(l({ref:t},m),{},{components:n})):o.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:6},l="Introduction to SLURM",i={unversionedId:"tutorial-basics/slurm",id:"tutorial-basics/slurm",title:"Introduction to SLURM",description:"Docusaurus Plushie",source:"@site/docs/tutorial-basics/slurm.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/slurm",permalink:"/docs/tutorial-basics/slurm",draft:!1,editUrl:"https://mirjunaid26.github.io/docs/tutorial-basics/slurm.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to request access on GLiCID Cluster?",permalink:"/docs/tutorial-basics/request-access"},next:{title:"GUIX",permalink:"/docs/tutorial-basics/guix"}},u={},s=[{value:"Getting Started with Slurm",id:"getting-started-with-slurm",level:2},{value:"TP_1: SLURM Basics",id:"tp_1-slurm-basics",level:3},{value:"TP_2. Parallel Programming",id:"tp_2-parallel-programming",level:3},{value:"IntelMPI",id:"intelmpi",level:4},{value:"OpenMPI",id:"openmpi",level:4},{value:"TP_3. Conda and Micromamba",id:"tp_3-conda-and-micromamba",level:3},{value:"TP_4. FORTRAN",id:"tp_4-fortran",level:3}],m={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-slurm"},"Introduction to SLURM"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:n(2965).Z,width:"1200",height:"1098"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://slurm.schedmd.com/documentation.html"},"SLURM"))," (Simple Linux Utility for Resource Management) is a popular job scheduling and workload management system used in many high-performance computing environments. SLURM allows users to submit and manage jobs on a cluster of computers. It provides a framework for allocating resources (such as CPU cores, memory, and GPUs) and scheduling jobs efficiently."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging in: To use SLURM, you need access to a cluster where SLURM is installed. Log in to the cluster using SSH or any other method provided by your system administrator."),(0,r.kt)("li",{parentName:"ul"},"Job Script: Create a job script that describes the resources required for your job and the commands to be executed. A typical SLURM job script is a shell script with special directives recognized by SLURM.")),(0,r.kt)("h2",{id:"getting-started-with-slurm"},"Getting Started with Slurm"),(0,r.kt)("p",null,"To tell Slurm what resources you need, you will have to create an sbatch script (also called a Slurm script). In this tutorial, we will be writing sbatch scripts with bash, but you can use any programming language as long as the pound sign (#) doesn\u2019t cause an error. Your sbatch scripts will generally follow this format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n# Declaring Slurm Configuration Options\n\n# Loading Software/Libraries\n\n# Running Code\n")),(0,r.kt)("p",null,"Let\u2019s start by going over the different configuration options for Slurm in the following example."),(0,r.kt)("h3",{id:"tp_1-slurm-basics"},"TP_1: SLURM Basics"),(0,r.kt)("p",null,"Create an sbatch script ($ touch my-job.slurm). Open it using vim editor ($ vim my-job.slurm) and insert the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n#SBATCH --job-name=myjob        # Name for your job\n#SBATCH --comment="Run My Job"  # Comment for your job\n\n#SBATCH --output=%x_%j.out      # Output file\n#SBATCH --error=%x_%j.err       # Error file\n\n#SBATCH --time=0-00:05:00       # Time limit\n#SBATCH --nodes=1           # How many nodes to run on\n#SBATCH --ntasks=2          # How many tasks per node\n#SBATCH --cpus-per-task=2       # Number of CPUs per task\n#SBATCH --mem-per-cpu=10g       # Memory per CPU\n#SBATCH --qos=short         # priority/quality of service \n\n# Command to run\nhostname                # Run the command hostname\n')),(0,r.kt)("p",null,"So, in this example, we have requested a job with the following dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Max Run Time: 5 Minutes"),(0,r.kt)("li",{parentName:"ul"},"Number of Nodes: 1"),(0,r.kt)("li",{parentName:"ul"},"Number of Tasks Per Node: 2"),(0,r.kt)("li",{parentName:"ul"},"Number of CPUs Per Task: 2"),(0,r.kt)("li",{parentName:"ul"},"Memory Per CPU: 10GB")),(0,r.kt)("p",null,"Finally, we run the bash command hostname. You can run whatever kind of code you want here; C, C++, bash, python, R, Ruby, etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submitting a Job: Use the sbatch command to submit your job script to SLURM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbatch my-job.slurm\n")),(0,r.kt)("p",null,"This will submit your job to the SLURM scheduler for execution."),(0,r.kt)("p",null,"You will then be given a message with the ID for that job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Submitted batch job 1411747 on cluster nautilus\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After we submit a job, Slurm will create the output and error files. You can see them by running:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls\n")),(0,r.kt)("p",null,"You'll see the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myjob_1411747.err  myjob_1411747.out  my-job.slurm\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Checking Job Status: You can check the status of your jobs using the squeue command:\nsqueue -u username")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"squeue -u jmir@ec-nantes.fr\n")),(0,r.kt)("p",null,"or you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"squeue -u $USER\n")),(0,r.kt)("p",null,"The squeue command gives us the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JOBID: The unique ID for your job.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PARTITION: The partition your job is running on (or scheduled to run on).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NAME: The name of your job.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"USER: The username for whomever submitted the job.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ST: The status of the job. The typical status codes you may see are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CD (Completed): Job completed successfully"),(0,r.kt)("li",{parentName:"ul"},"CG (Completing): Job is finishing, Slurm is cleaning up"),(0,r.kt)("li",{parentName:"ul"},"PD (Pending): Job is scheduled, but the requested resources aren\u2019t available yet"),(0,r.kt)("li",{parentName:"ul"},"R (Running): Job is actively running"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TIME: How long your job has been running.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NODES: How many nodes your job is using.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NODELIST(REASON): Which nodes your job is running on (or scheduled to run on). If your job is not running yet, you will also see one of the following reason codes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Priority: When Slurm schedules a job, it takes into consideration how frequently you submit jobs. If you often submit many jobs, Slurm will assign you a lower priority than someone who has never submitted a job or submits jobs very infrequently. Don\u2019t worry, your job will run eventually."),(0,r.kt)("li",{parentName:"ul"},"Resources: Slurm is waiting for the requested reasources to be available before starting your job."),(0,r.kt)("li",{parentName:"ul"},"Dependency: If you are using dependent jobs, the parent job may show this reason if it\u2019s waiting for a dependent job to complete."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To view detailed information about a specific job, including its resource usage, use the scontrol command:\nscontrol show job job_id -M nautilus"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scontrol show job 1411747 -M nautilus\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Managing Jobs: You can cancel a running job using the scancel command followed by the job ID:\nscancel job_id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scancel 1411747\n")),(0,r.kt)("h3",{id:"tp_2-parallel-programming"},"TP_2. Parallel Programming"),(0,r.kt)("h4",{id:"intelmpi"},"IntelMPI"),(0,r.kt)("p",null,"Let's try one embarassingly parallel program. Create a file using touch command and name it hello-mpi.cpp"),(0,r.kt)("p",null,"Open the file using vim editor and insert the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <iostream>\n#include "mpi.h"\nusing namespace std;\nint main(int argc,char **argv)\n{\n  int rank,size;\n  MPI_Init(&argc,&argv);\n  MPI_Comm_rank(MPI_COMM_WORLD,&rank);\n  MPI_Comm_size(MPI_COMM_WORLD,&size);\n  int namesize;\n  char name[512];\n  MPI_Get_processor_name(name,&namesize);\n  cout << "hello from " << rank << " out of " << size << " running on " <<  name << " " <<  endl;\n  MPI_Finalize();\n  return 0;\n}\n')),(0,r.kt)("p",null,"Load the IntelMPI module using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module load intel/compiler intel/mpi\n")),(0,r.kt)("p",null,"Now, compile the code using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mpicxx -cxx=icpx -O3 -o hello-intelmpi hello-mpi.cpp\n")),(0,r.kt)("p",null,"Once compiled, create a slurm script and name it job-intel.slurm. Here's the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH --job-name=HelloWorldMpi\n#SBATCH --partition=standard\n\nmodule purge\nmodule load intel/compiler intel/mpi\nexport I_MPI_PMI_LIBRARY=/lib64/libpmi2.so\nexport I_MPI_COLL_EXTERNAL=0\nexport I_MPI_ADJUST_BCAST=0\nexport I_MPI_FABRICS=shm:ofi\nexport FI_PROVIDER=psm3\n\nsrun --mpi=pmi2 ./hello-intelmpi\n\n")),(0,r.kt)("p",null,"Finally, submit the job using the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbatch -M nautilus -p standard -q short job-intel.slurm\n")),(0,r.kt)("p",null,"Now, monitor your job and check the output files."),(0,r.kt)("h4",{id:"openmpi"},"OpenMPI"),(0,r.kt)("p",null,"Let's try compiling with GNU compiler and OpenMPI but first you need to purge the loaded modules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module purge\n")),(0,r.kt)("p",null,"Now, load openMPI module using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module load gcc openmpi/ucx/4.1.5_gcc_8.5.0_uxc_1.14.1_rdma_46.0\n")),(0,r.kt)("p",null,"and compile hello-mpi.cpp program using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mpicxx -O3 -o hello-openmpi hello-mpi.cpp\n")),(0,r.kt)("p",null,"Once compiled, create a slurm script and name it job-mpi.slurm. Here's the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n#SBATCH --job-name=HelloWorldMpi\n#SBATCH --partition=standard\n\nmodule purge\nmodule load gcc openmpi/ucx/4.1.5_gcc_8.5.0_ucx_1.14.1_rdma_46.0\n\nexport UCX_WARN_UNUSED_ENV_VARS=n\nexport OMPI_MCA_btl=^openib\nexport UCX_NET_DEVICES=mlx5_2:1\n\nsrun ./hello-openmpi\n")),(0,r.kt)("p",null,"Submit the job using the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbatch -M nautilus -p standard -q short job-mpi.slurm\n")),(0,r.kt)("p",null,"Now, monitor your job and check the output files."),(0,r.kt)("h3",{id:"tp_3-conda-and-micromamba"},"TP_3. Conda and Micromamba"),(0,r.kt)("p",null,"Conda is a software environment manager that is quite popular, especially in the Python community, but it has many issues in the context of HPC use."),(0,r.kt)("p",null,"Note: GLiCID administrators advise against its use, especially if the affected software is already available in Guix. However, some packages are not available(yet) on Guix.\nIn GLiCID, we have decided to use micromamba, which is the lighter version of conda. Here are the commands to run to install it locally on GLiCID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Download micromamba\nmkdir -p $HOME/.local/bin\nwget -P $HOME/.local/bin https://s3.glicid.fr/pkgs/micromamba\nchmod u+x $HOME/.local/bin/micromamba\n\n# Initilize micromamba\n$HOME/.local/bin/micromamba -r /micromamba/$USER/ shell init --shell=bash --prefix=/micromamba/$USER/\n\n# [OPTIONAL] Add an alias `conda`\necho -e '\\n\\n#Alias conda with micromamba\\nalias conda=micromamba' >> ~/.bashrc\n\n# Reload the .bashrc\nsource ~/.bashrc\n")),(0,r.kt)("p",null,"Note: It is possible that the file is not always sourced at the login on GLiCID (investigations are ongoing). If this is not the case, remember to do after each login to load well. .bashrcsource ~/.bashrcmicromamba"),(0,r.kt)("p",null,"Note: Set proxy on Nautilus (not devel) use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export http_proxy=http://proxy-upgrade.univ-nantes.fr:3128/\nexport https_proxy=http://proxy-upgrade.univ-nantes.fr:3128/\n")),(0,r.kt)("p",null,"To verify the installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'micromamba --version  # or: `conda --version`\n# -> 1.4.0\n\n# create and environment micromamba/conda\nmicromamba create -n my_env\n\n# Activate the ennvironment\nmicromamba activate my_env\n\n# -> Your prompt should now be prefixed with: (my_env)\n\n# Install the package using conda-forge\nmicromamba install -c conda-forge numpy\n\n# Test the package\npython -V\npython -c "import numpy as np; print(np.__version__)"\n# -> 1.24.2\n\n# Deactivate  the environment\nmicromamba deactivate\n\n\n')),(0,r.kt)("h3",{id:"tp_4-fortran"},"TP_4. FORTRAN"),(0,r.kt)("p",null,"In this part of the tutorial, we will write our first Fortran program: the ubiquitous \u201cHello, World!\u201d example."),(0,r.kt)("p",null,"However, before we can write our program, we need to ensure that we have a Fortran compiler set up."),(0,r.kt)("p",null,"Fortran is a compiled language, which means that, once written, the source code must be passed through a compiler to produce a machine executable that can be run."),(0,r.kt)("p",null,"Load the module using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module load gcc/13.1.0\n")),(0,r.kt)("p",null,"Once you have loaded the module, open a new file in vim editor and enter the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"program hello\n  ! This is a comment line; it is ignored by the compiler\n  print *, 'Hello, World!'\nend program hello\n")),(0,r.kt)("p",null,"Having saved your program to hello.f90, compile at the command line with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gfortran hello.f90 -o hello\n")),(0,r.kt)("p",null,".f90 is the standard file extension for modern Fortran source files. The 90 refers to the first modern Fortran standard in 1990."),(0,r.kt)("p",null,"To run your compiled program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./hello\n")),(0,r.kt)("p",null,"Congratulations, you\u2019ve written, compiled and run your first Fortran program! "),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://slurm.schedmd.com/documentation.html"},"SLURM Official Docs"))))}c.isMDXComponent=!0},2965:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/slurm-f240e7d141db178f71f6a64e85529439.png"}}]);