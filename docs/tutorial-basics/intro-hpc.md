---
sidebar_position: 2
---

# What is High-Performance Computing (HPC)s

HPC is technology that uses clusters of powerful processors, working in parallel, to process massive multi-dimensional datasets (big data) and solve complex problems at extremely high speeds. HPC systems typically perform at speeds more than one million times faster than the fastest commodity desktop, laptop or server systems.

For decades the HPC system paradigm was the supercomputer, a purpose-built computer that embodies millions of processors or processor cores. Supercomputers are still with us; at this writing, the fastest supercomputer is the US-based Frontier, with a processing speed of 1.102 exaflops, or quintillion floating point operations per second (flops). But today, more and more organizations are running HPC solutions on clusters of high-speed computers servers, hosted on premises or in the cloud.

HPC workloads uncover important new insights that advance human knowledge and create significant competitive advantage. For example, HPC is used to sequence DNA, automate stock trading, and run artificial intelligence (AI) algorithms and simulations—like those enabling self-driving automobiles—that analyze terabytes of data streaming from IoT sensors, radar and GPS systems in real time to make split-second decisions.

# How does HPC work?

A standard computing system solves problems primarily using serial computing—it divides the workload into a sequence of tasks, and then executes the tasks one after the other on the same processor.

In contrast, HPC leverages

Massively parallel computing. Parallel computing runs multiple tasks simultaneously on multiple computer servers or processors. Massively parallel computing is parallel computing using tens of thousands to millions of processors or processor cores.

Computer clusters (also called HPC clusters). An HPC cluster consists of multiple high-speed computer servers networked together, with a centralized scheduler that manages the parallel computing workload. The computers, called nodes, use either high-performance multi-core CPUs or, more likely today, GPUs (graphical processing units), which are well suited for rigorous mathematical calculations, machine learning models and graphics-intensive tasks. A single HPC cluster can include 100,000 or more nodes.

High-performance components: All the other computing resources in an HPC cluster—networking, memory, storage and file systems—are high-speed, high-throughput and low-latency components that can keep pace with the nodes and optimize the computing power and performance of the cluster.

# HPC and Cloud Computing

As recently as a decade ago, the high cost of HPC—which involved owning or leasing a supercomputer or building and hosting an HPC cluster in an on-premises data center—put HPC out of reach for most organizations.

Today HPC in the cloud—sometimes called HPC as a service, or HPCaaS—offers a significantly faster, more scalable and more affordable way for companies to take advantage of HPC. HPCaaS typically includes access to HPC clusters and infrastructure hosted in a cloud service provider’s data center, plus ecosystem capabilities (such as AI and data analytics) and HPC expertise.

Today HPC in the cloud is driven by three converging trends:

Surging demand. Organizations across all industries are becoming increasingly dependent on the real-time insights and competitive advantage that results from solving the complex problems only HPC apps can solve. For example, credit card fraud detection—something virtually all of us rely on and most of us have experienced at one time or another—relies increasingly on HPC to identify fraud faster and reduce annoying false positives, even as fraud activity expands and fraudsters’ tactics change constantly.

Prevalence of lower-latency, higher-throughput RDMA networking. RDMA—remote direct memory access—enables one networked computer to access another networked computer’s memory without involving either computer’s operating system or interrupting either computer’s processing. This helps minimize latency and maximize throughput. Emerging high-performance RDMA fabrics—including Infiniband, Virtual Interface Architecture, and RDMA over converged ethernet (RoCE)—are essentially making cloud-based HPC possible.

Widespread public-cloud and private-cloud HPCaaS availability. Today every leading public cloud service provider offers HPC services. And while some organizations continue to run highly regulated or sensitive HPC workloads on-premises, many are adopting or migrating to private-cloud HPC solutions offered by hardware and solution vendors.

# HPC Use Cases

HPC applications have become synonymous with AI apps in general, and with machine learning and deep learning apps in particular; today most HPC systems are created with these workloads in mind. These HPC applications are driving continuous innovation in:

Healthcare, genomics and life sciences. The first attempt to sequence a human genome took 13 years; today, HPC systems can do the job in less than a day. Other HPC applications in healthcare and life sciences include drug discovery and design, rapid cancer diagnosis, and molecular modeling.

Financial services. In addition to automated trading and fraud detection (noted above), HPC powers applications in Monte Carlo simulation and other risk analysis methods.

Government and defense. Two growing HPC use cases in this area are weather forcasting and climate modeling, both of which involve processing vast amounts of historical meteorological data and millions of daily changes in climate-related data points. Other government and defense applications include energy research and intelligence work.

Energy. In some cases overlapping with government and defense, energy-related HPC applications include seismic data processing, reservoir simulation and modeling, geospatial analytics, wind simulation and terrain mapping.

## Key Features and Benefits of HPC

1. **Speed and Scalability:** HPC systems are designed to deliver exceptional processing speed and scalability. By distributing computational tasks across multiple processors or computing nodes, HPC allows for parallel execution, significantly reducing the time required to complete computationally demanding tasks.

2. **Large-Scale Data Processing:** HPC facilitates the processing and analysis of massive datasets by leveraging parallel computing techniques. It enables researchers and scientists to tackle data-intensive challenges, such as genomics, climate modeling, financial analysis, and big data analytics, with improved efficiency.

3. **Complex Simulations and Modeling:** HPC empowers researchers to perform complex simulations and modeling tasks that require extensive computational resources. It enables the exploration of intricate physical phenomena, optimization of designs, and prediction of system behavior by dividing the workload among multiple processors and solving parts of the problem simultaneously.

4. **Scientific Discovery and Innovation:** HPC plays a vital role in accelerating scientific discovery and fostering innovation. It enables researchers to tackle complex problems, conduct advanced simulations, and analyze large-scale datasets, leading to breakthroughs in diverse fields, including physics, chemistry, biology, engineering, and astronomy.

5. **Parallel Algorithms and Software:** HPC systems require the development and implementation of parallel algorithms and software to fully exploit their capabilities. Parallel programming languages, frameworks, and libraries enable programmers to efficiently distribute tasks across processors and manage communication and synchronization between them.

## Applications of HPC

HPC finds applications in various fields, including but not limited to:

- **Artificial Intelligence and Machine Learning:** HPC supports training deep neural networks, processing large datasets, and accelerating machine learning algorithms.

- **Weather and Climate Modeling:** HPC is used to run complex atmospheric models, simulate weather patterns, and predict climate change phenomena.

- **Engineering and Design Optimization:** HPC is employed to optimize engineering designs, analyze structural integrity, simulate fluid dynamics, and enhance product performance.

- **Astrophysics and Cosmology:** HPC facilitates large-scale simulations of the universe, including galaxy formation, stellar evolution, and gravitational wave analysis.

- **Drug Discovery and Molecular Dynamics:** HPC enables the simulation of drug interactions, protein folding, and molecular dynamics, aiding in the development of new pharmaceuticals.

- **Financial Modeling and Risk Analysis:** HPC helps in analyzing complex financial models, running Monte Carlo simulations, and assessing investment risks.

