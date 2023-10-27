"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[7048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:8},o="Containers for Scientific and High-Performance Computing (Apptainer/Singularity)",s={unversionedId:"tutorial-basics/apptainers",id:"tutorial-basics/apptainers",title:"Containers for Scientific and High-Performance Computing (Apptainer/Singularity)",description:"Docusaurus Plushie",source:"@site/docs/tutorial-basics/apptainers.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/apptainers",permalink:"/docs/tutorial-basics/apptainers",draft:!1,editUrl:"https://mirjunaid26.github.io/docs/tutorial-basics/apptainers.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"GUIX",permalink:"/docs/tutorial-basics/guix"},next:{title:"CUDA Python/C++",permalink:"/docs/tutorial-basics/cuda-python"}},c={},l=[{value:"CAUTION : WORK IN PROGRESS",id:"caution--work-in-progress",level:2},{value:"Containerization in HPC and Reproducible Research",id:"containerization-in-hpc-and-reproducible-research",level:2},{value:"What&#39;s container image?",id:"whats-container-image",level:2},{value:"References:",id:"references",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"containers-for-scientific-and-high-performance-computing-apptainersingularity"},"Containers for Scientific and High-Performance Computing (Apptainer/Singularity)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:n(7710).Z,width:"2076",height:"336"})),(0,a.kt)("h2",{id:"caution--work-in-progress"},"CAUTION : WORK IN PROGRESS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"What are containers and why do we need them?"),(0,a.kt)("li",{parentName:"ol"},"Downloading and using and already existing conatiner."),(0,a.kt)("li",{parentName:"ol"},"Creating a container from scratch."),(0,a.kt)("li",{parentName:"ol"},"How to use containers for reproducible research?")),(0,a.kt)("p",null,"In the context of High-Performance Computing (HPC) and the imperative of reproducible research, it's vital to understand the concepts of containers and images. These technologies play a crucial role in facilitating the reliable and consistent execution of computational experiments and simulations."),(0,a.kt)("h2",{id:"containerization-in-hpc-and-reproducible-research"},"Containerization in HPC and Reproducible Research"),(0,a.kt)("p",null,"A container in the context of HPC and reproducible research is a meticulously isolated computational environment. It operates as a self-contained process running on an HPC cluster, ensuring strict separation from all other concurrent processes. This isolation relies on the robust capabilities of kernel namespaces and control groups (cgroups), integral features of the Linux operating system. Containers, especially those managed by tools like Docker and Singularity/Apptainer, provide an accessible and user-friendly way to harness these capabilities for the benefit of researchers and scientists."),(0,a.kt)("p",null,"In essence, a container:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Represents a runnable instance of an image, which encapsulates the entire computational environment, including software, dependencies, configurations, scripts, and binaries. These containers can be effortlessly created, launched, halted, relocated, or removed using either the Docker API or the command-line interface (CLI)."),(0,a.kt)("li",{parentName:"ol"},"Can be executed on local HPC clusters, virtualized environments, or cloud-based resources, ensuring flexibility in deployment."),(0,a.kt)("li",{parentName:"ol"},"Exhibits portability across diverse operating systems, promoting consistency and facilitating the sharing of computational workflows."),(0,a.kt)("li",{parentName:"ol"},"Guarantees isolation from other containers and maintains its own ecosystem, avoiding conflicts with concurrently executing processes.")),(0,a.kt)("p",null,"For those familiar with the concept of chroot, containers can be perceived as an extended and highly sophisticated evolution of chroot. While both chroot and containers shape the filesystem environment, containers introduce additional layers of isolation and encapsulation that surpass the capabilities of traditional chroot."),(0,a.kt)("h2",{id:"whats-container-image"},"What's container image?"),(0,a.kt)("p",null,"When a container is running, it relies on an isolated filesystem that is entirely defined by an image. An image must encompass every element necessary to run a specific computational application, encompassing all essential dependencies, configurations, scripts, binaries, and other components."),(0,a.kt)("p",null,"Furthermore, an image includes various configurations that pertain to the container itself, such as environment variables, a default command to execute upon container startup, and relevant metadata that clarifies its purpose and behavior within the HPC or research context."),(0,a.kt)("p",null,"By combining containers and images, researchers in the field of HPC and reproducible research can ensure the consistency and replicability of their computational experiments, as the entire environment, from software stacks to configurations, is encapsulated and isolated, minimizing the risk of unwanted interference and enhancing the ability to reproduce results accurately."),(0,a.kt)("h2",{id:"references"},"References:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Singularity/Apptainer Tutorial (",(0,a.kt)("a",{parentName:"li",href:"https://hsf-training.github.io/hsf-training-singularity-webpage/04-building-containers/index.html"},"https://hsf-training.github.io/hsf-training-singularity-webpage/04-building-containers/index.html"),")")))}d.isMDXComponent=!0},7710:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/apptainer-e614806cf573fd0cbbe09a25d9e69637.png"}}]);