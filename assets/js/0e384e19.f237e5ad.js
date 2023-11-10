"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Quickstart",s={unversionedId:"intro",id:"intro",title:"Quickstart",description:"Getting Started With GLiCID",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://mirjunaid26.github.io/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},l={},c=[{value:"Getting Started With GLiCID",id:"getting-started-with-glicid",level:2},{value:"How to access GLiCID Cluster",id:"how-to-access-glicid-cluster",level:2},{value:"OpenSSH Installation",id:"openssh-installation",level:2},{value:"OpenSSH Key Generation",id:"openssh-key-generation",level:2},{value:"OpenSSH Configuration",id:"openssh-configuration",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("h2",{id:"getting-started-with-glicid"},"Getting Started With GLiCID"),(0,a.kt)("p",null,"This serves as the official user guide for GLiCID, a regional High Performance Computing center (M\xe9socentre) located in Loire Atlantique and hosted by Ecole Centrale de Nantes and Nantes University. "),(0,a.kt)("p",null,"It provides comprehensive instructions for utilizing the GLiCID cluster, catering to both beginners and advanced users. Newcomers are encouraged to begin from the start, where they'll find guidance on how to log in to GLiCID, acquaint themselves with the environment, discover pre-installed software, compile programs, and execute them on GLiCID."),(0,a.kt)("p",null,"Experienced users who are already acquainted with Liger and Waves can conveniently navigate the table of contents and explore the specific topics they're interested in."),(0,a.kt)("h2",{id:"how-to-access-glicid-cluster"},"How to access GLiCID Cluster"),(0,a.kt)("p",null,"In order to gain access to GLiCID you have to follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an account on ",(0,a.kt)("a",{parentName:"li",href:"https://clam.glicid.fr"},"https://clam.glicid.fr")," (school account, or CRU account for external users)."),(0,a.kt)("li",{parentName:"ol"},"The account will be validated by an administrator."),(0,a.kt)("li",{parentName:"ol"},"User has to generate and upload the pulblic SSH key to CLAM portal (in profile's SSH Access tab)."),(0,a.kt)("li",{parentName:"ol"},"Edit the .ssh/config file and add the defined configuration."),(0,a.kt)("li",{parentName:"ol"},"Finally, you can log in using SSH from terminal (on Linux and macOS) and PowerShell (on Windows).")),(0,a.kt)("h1",{id:"openssh"},"OpenSSH"),(0,a.kt)("p",null,"OpenSSH is a popular and freely available SSH client for UNIX-like operating systems such as GNU/Linux and macOS."),(0,a.kt)("h2",{id:"openssh-installation"},"OpenSSH Installation"),(0,a.kt)("p",null,'OpenSSH comes pre-installed on macOS. It is also contained in the package repository of many GNU/Linux distributions, e.g., "openssh-client" on Debian, ubuntu, etc. or "openssh-clients" on Fedora, Centoas, etc. Also, the OpenSSH source code can be downloaded from the OpenSSH webite (',(0,a.kt)("a",{parentName:"p",href:"http://www.openssh.com/portable.html"},"http://www.openssh.com/portable.html"),")."),(0,a.kt)("h2",{id:"openssh-key-generation"},"OpenSSH Key Generation"),(0,a.kt)("p",null,"At GLiCID, we do not allow logging into our systems solely with a password. Rather, we require ke-based authentication. It is important to generate secure key pairs. Generate a key using the following line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-keygen\n")),(0,a.kt)("p",null,"Note: If the file ~/.ssh/id_rsa already exists, ssh-keygen will ask before overwriting it. You probably do not want to overwrite the file as you might already be using it as credentials for another system. Instead, use a different file name, e.g., ~/.ssh/id_glicid and remember to use the same file name on all subsequent lines in this document."),(0,a.kt)("p",null,"Afterwards, ssh-keygen will ask for a passphrase. It is not mandatory to enter a passphrase as you can simple press enter to proceed without passpharse. However, it is recommended to provide a strong passphrase and it needs to be entered in the future to unlock your private key. You might want to use a password manager to save your key and easy the use of complicated passphrases. "),(0,a.kt)("p",null,"Keep the private key i.e., ~/.ssh/id_rsa safe and confidential on your local host. The generated puclic  key i.e., ~/.ssh/id_rsa.pub needs to be uploaded to the CLAM user portal on ",(0,a.kt)("a",{parentName:"p",href:"https://clam.glicid.fr"},"https://clam.glicid.fr")),(0,a.kt)("h2",{id:"openssh-configuration"},"OpenSSH Configuration"),(0,a.kt)("p",null,"The user-side SSH configuration can be used to create shortcuts to targets/hosts and configure connections. The shortcuts and options also influnce the behavious of any program that uses SSH underneath, such as git, scp, and rsync."),(0,a.kt)("p",null,'An overview of all the available options can be seen via "man ssh_config". That\'s probably overwhelming, so here are a few options and configuraions highlighted.'),(0,a.kt)("p",null,"Edit the .ssh/config file and add the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host Bastion\n    Hostname bastion.glicid.fr\n    User <username>@ec-nantes.fr\n    IdentityFile ~/.ssh/id_rsa\n    ForwardAgent yes\n\nHost glicid\n    Hostname login-001.glicid.fr\n    User <username>@ec-nantes.fr\n    ProxyJump Bastion\n    IdentityFile ~/.ssh/id_rsa\n\nHost nautilus\n    Hostname nautilus-devel-001.nautilus.intra.glicid.fr\n    User jmir@ec-nantes.fr\n    ProxyJump glicid\n    IdentityFile ~/.ssh/id_rsa\n")),(0,a.kt)("p",null,"The above entries create a shortcut that allows you to log in to the individaul nodes via the shortcut such as glicid, nautilus, and philias(soon).   "),(0,a.kt)("p",null,"Afterwards, you can simply connect to the GLiCID Cluster login nodes from the terminal using the following commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh glicid\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh nautilus\n")),(0,a.kt)("p",null,"Note: If you're a windows user and not comfortable with the terminal, you can use MobaXterm."))}d.isMDXComponent=!0}}]);