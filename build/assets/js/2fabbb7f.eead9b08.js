"use strict";(self.webpackChunkshardeum_docs=self.webpackChunkshardeum_docs||[]).push([[9201],{9850:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"node/run/validator","title":"Validator","description":"Benefits of operating a validator","source":"@site/docs/node/run/validator.md","sourceDirName":"node/run","slug":"/node/run/validator","permalink":"/docusaurus-template/node/run/validator","draft":false,"unlisted":false,"editUrl":"https://github.com/Shardeum/shardeum-docs/tree/master/docs/node/run/validator.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Validator","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Types","permalink":"/docusaurus-template/node/types"},"next":{"title":"RPC","permalink":"/docusaurus-template/node/run/rpc"}}');var r=l(4848),s=l(8453),t=l(1470),i=l(9365);const o={title:"Validator",sidebar_position:1},d="How to run a validator node",c={},h=[{value:"Benefits of operating a validator",id:"benefits-of-operating-a-validator",level:2},{value:"Validating Transactions",id:"validating-transactions",level:2},{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",level:2},{value:"How do I run a validator on Shardeum?",id:"how-do-i-run-a-validator-on-shardeum",level:2},{value:"Step 1: Install prerequisites",id:"step-1-install-prerequisites",level:2},{value:"Open a Shell terminal",id:"open-a-shell-terminal",level:3},{value:"Install package managers",id:"install-package-managers",level:3},{value:"Update package managers",id:"update-package-managers",level:3},{value:"Install docker",id:"install-docker",level:3},{value:"Install docker-compose",id:"install-docker-compose",level:3},{value:"Step 2: Download and install validator",id:"step-2-download-and-install-validator",level:2},{value:"Step 3: Open validator CLI",id:"step-3-open-validator-cli",level:2},{value:"Step 4: Open validator GUI",id:"step-4-open-validator-gui",level:2},{value:"Step 5: Start validator",id:"step-5-start-validator",level:2},{value:"Step 6: Monitor validator",id:"step-6-monitor-validator",level:2},{value:"Step 7: Connect Wallet to Betanet",id:"step-7-connect-wallet-to-betanet",level:2},{value:"Step 8: Get SHM from Betanet Faucet",id:"step-8-get-shm-from-betanet-faucet",level:2},{value:"Step 9: Stake SHM to validator",id:"step-9-stake-shm-to-validator",level:2},{value:"GUI",id:"gui",level:3},{value:"CLI",id:"cli",level:3},{value:"Validator",id:"validator",level:2},{value:"Version",id:"version",level:3},{value:"Update",id:"update",level:3},{value:"Exit Error Logs",id:"exit-error-logs",level:3},{value:"CLI And GUI",id:"cli-and-gui",level:2},{value:"Version",id:"version-1",level:3},{value:"Update",id:"update-1",level:3},{value:"Commands",id:"commands",level:3},{value:"Uninstall Validator",id:"uninstall-validator",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-run-a-validator-node",children:"How to run a validator node"})}),"\n",(0,r.jsx)(n.h2,{id:"benefits-of-operating-a-validator",children:"Benefits of operating a validator"}),"\n",(0,r.jsx)(n.p,{children:"Running your own validator:"}),"\n",(0,r.jsx)(n.p,{children:"-enhances Shardeum network security\n-earns testnet SHM from user transaction fees"}),"\n",(0,r.jsx)(n.h2,{id:"validating-transactions",children:"Validating Transactions"}),"\n",(0,r.jsx)(n.p,{children:"Shardeum validators perform consensus on transactions."}),"\n",(0,r.jsx)(n.p,{children:"Shardeum validators with honest transaction consensus earn testnet SHM."}),"\n",(0,r.jsx)(n.p,{children:"Shardeum validators with dishonest transaction consensus will have their testnet SHM slashed."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Estimate future validator rewards using the ",(0,r.jsx)(n.a,{href:"https://shardeum.org/shm-tokenomics/",children:"Node Reward Calculator"})]})}),"\n",(0,r.jsx)(n.h2,{id:"minimum-hardware-requirements",children:"Minimum Hardware Requirements"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"-250 GB SSD storage\n-Quad core CPU less than 10 years old if self hosting\n-Dual core CPU works if hosted with newer Xeons / EPYC\n-16 GB of ram,  4+ GB of virtual memory recommended\n-Hosting: 8 GB RAM + 8 GB Virtual Memory\n"})}),"\n",(0,r.jsx)(n.h2,{id:"how-do-i-run-a-validator-on-shardeum",children:"How do I run a validator on Shardeum?"}),"\n",(0,r.jsx)(n.h2,{id:"step-1-install-prerequisites",children:"Step 1: Install prerequisites"}),"\n",(0,r.jsx)(n.h3,{id:"open-a-shell-terminal",children:"Open a Shell terminal"}),"\n",(0,r.jsx)(n.p,{children:"Access the terminal interface for Shell CLI commands:"}),"\n",(0,r.jsxs)(t.A,{groupId:"operating-systems",children:[(0,r.jsx)(i.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(Press at the same time)\nCtrl + Alt + T\n"})})}),(0,r.jsx)(i.A,{value:"mac",label:"Mac",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(Press at the same time)\nCommand + Space bar\n(Type)\nTerminal\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"install-package-managers",children:"Install package managers"}),"\n",(0,r.jsx)(n.p,{children:"We will use curl in this tutorial to download files:"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Mac comes with curl, so we will install homebrew with curl (which will handle handle packages like apt in Linux)."})}),"\n",(0,r.jsxs)(t.A,{groupId:"operating-systems",children:[(0,r.jsx)(i.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install curl\n"})})}),(0,r.jsxs)(i.A,{value:"mac",label:"Mac",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,r.jsxs)(n.p,{children:["add Homebrew to your ",(0,r.jsx)(n.code,{children:"PATH"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\'\neval "$(/opt/homebrew/bin/brew shellenv)"\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"update-package-managers",children:"Update package managers"}),"\n",(0,r.jsx)(n.p,{children:"Make sure your packages are up to date first:"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"When you add sudo to a command, the output will ask for your system password for admin verification."})}),"\n",(0,r.jsxs)(t.A,{groupId:"operating-systems",children:[(0,r.jsx)(i.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt update\n"})})}),(0,r.jsx)(i.A,{value:"mac",label:"Mac",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"brew update\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"install-docker",children:"Install docker"}),"\n",(0,r.jsx)(n.p,{children:"Install docker with docker.io:"}),"\n",(0,r.jsxs)(t.A,{groupId:"operating-systems",children:[(0,r.jsx)(i.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt install docker.io\n"})})}),(0,r.jsx)(i.A,{value:"mac",label:"Mac",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"brew install docker\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Check that docker is working with (should return version 20.10.12 or higher):"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker --version\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"install-docker-compose",children:"Install docker-compose"}),"\n",(0,r.jsx)(n.p,{children:"Curl request docker-compose:"}),"\n",(0,r.jsxs)(t.A,{groupId:"operating-systems",children:[(0,r.jsx)(i.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n'})})}),(0,r.jsx)(i.A,{value:"mac",label:"Mac",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"brew install docker-compose\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Setup permissions for docker-compose:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo chmod +x /usr/local/bin/docker-compose\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Check that docker-compose is working with (should return version 1.29.2 or higher):"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker-compose --version\n"})})})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Shardeum Validator support on Windows will be coming in the future."})}),"\n",(0,r.jsx)(n.h2,{id:"step-2-download-and-install-validator",children:"Step 2: Download and install validator"}),"\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl -O https://gitlab.com/shardeum/validator/dashboard/-/raw/main/installer.sh && chmod +x installer.sh && ./installer.sh\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The terminal will ask questions about your setup settings."}),"\n",(0,r.jsx)(n.p,{children:"Give permission to collect validator data for bug reporting:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"By running this installer, you agree to allow the Shardeum team to collect this data. (y/n)?:\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enter y to setup the web based dashboard:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Do you want to run the web based Dashboard? (y/n):\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set a password for dashboard access:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Set the password to access the Dashboard:\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add a custom session port for the web based dashboard or hit enter for port 8080:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Enter the port (1025-65536) to access the web based Dashboard (default 8080):\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add a custom external IP address or use an automatically detected IP address:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"If you wish to set an explicit external IP, enter an IPv4 address (default=auto):\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add a custom internal IP address or use an automatically detected IP address:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"If you wish to set an explicit internal IP, enter an IPv4 address (default=auto): \n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the first p2p port (default 9001):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"To run a validator on the Sphinx network, you will need to open two ports in your firewall.\nThis allows p2p communication between nodes.\nEnter the first port (1025-65536) for p2p communication (default 9001):\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the second p2p port (default 10001):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Enter the second port (1025-65536) for p2p communication (default 10001):\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add a custom path or install to root:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"What base directory should the node use (defaults to ~/.shardeum):\n"})}),"\n",(0,r.jsx)(n.p,{children:"Wait for the installation process to complete."}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"If you are behind a router and you are using ports 9001 and 10001 for p2p communication,\nmake sure ports 9001 and 10001, are forwarded (be careful doing this since it will modify your firewall)."}),(0,r.jsx)(n.p,{children:"Router port forwarding example with AT&T:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.att.com/support/article/u-verse-high-speed-internet/KM1010280/",children:"https://www.att.com/support/article/u-verse-high-speed-internet/KM1010280/"})}),(0,r.jsx)(n.p,{children:"More info on router port forwarding:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/",children:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"})}),(0,r.jsx)(n.p,{children:"Reference:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://gitlab.com/shardeum/validator/dashboard/",children:"https://gitlab.com/shardeum/validator/dashboard/"})})]}),"\n",(0,r.jsx)(n.h2,{id:"step-3-open-validator-cli",children:"Step 3: Open validator CLI"}),"\n",(0,r.jsx)(n.p,{children:"Make sure you are in the root directory by running:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Go to the hidden Shardeum directory:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd .shardeum\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Start the CLI by running the following shell script:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./shell.sh\n"})})})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"If you see docker container error:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-golang",children:"Error response from daemon: Container <container_id_hexadecimal> is not running\n"})}),(0,r.jsx)(n.p,{children:"start all docker containers until the errors go away:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker start <container_id_hexadecimal>\n"})})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"If you see docker permission error:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-golang",children:'Got permission denied while trying to connect to the Docker daemon socket at\nunix:///var/run/docker.sock:\nGet "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/shardeum-dashboard/json":\ndial unix /var/run/docker.sock:\nconnect:\npermission denied\n'})}),(0,r.jsx)(n.p,{children:"run:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo usermod -a -G docker $USER && newgrp docker\n"})})})}),(0,r.jsx)(n.p,{children:"if that does not work, also try:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo service docker start\n"})})})}),(0,r.jsx)(n.p,{children:"then try to start the shell script again."})]}),"\n",(0,r.jsx)(n.h2,{id:"step-4-open-validator-gui",children:"Step 4: Open validator GUI"}),"\n",(0,r.jsx)(n.p,{children:"While inside the shell script, run:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli gui start\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Go to your web browser and go to:"}),"\n",(0,r.jsxs)(t.A,{groupId:"validator-local-or-server",children:[(0,r.jsx)(i.A,{value:"local",label:"Local",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"https://localhost:8080/\n"})})}),(0,r.jsx)(i.A,{value:"server",label:"Server",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"https://<server_ip>:8080/\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"You might see a warning page when trying to access this address in your web browser.\nIgnore this warning and continue to the validator dashboard. Another way to work around this warning:"}),(0,r.jsxs)(t.A,{children:[(0,r.jsx)(i.A,{value:"firefox",label:"Firefox",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"From the three bar button (hamburger) menu button, go to Settings\n\nClick on \u201cPrivacy & Security\u201d on the left.\n\nScroll down to locate \u201cView Certificates\u201d and click that button.\n\nClick the \u201cServers\u201d tab, then click \u201cAdd Exception\u201d.\n\nType: \u201chttps://localhost:8080\u201d (or your remote/VPS server\u2019s IP and port),\nthen click \u201cGet Certificate\u201d, then click \u201cConfirm Security Exception\u201d.\n\nThe result should be the server/localhost in the list, click \u201cOK\u201d.\n\nRefresh the operator dashboard page and the certificate error should be gone.\n"})})}),(0,r.jsx)(i.A,{value:"chrome",label:"Chrome",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Click on the \u201cNot secure\u201d alert and select/click on \u201cCertificate is not valid\u201d.\n\nClick on the \u201cDetails\u201d tab, then click n \u201clocalhost\u201d in the \u201cCertificate Hierarchy\u201d box and click the \u201cExport\u201d button.\n\nClick on the \u201cDetails\u201d tab, then click on\n\u201cmynode-sphinx.shardeum.local\u201d in the \u201cCertificate Hierarchy\u201d box and click the \u201cExport\u201d button.\n\nThe result of the steps above are two certificate files save in a location to be used in the following steps.\n\nType: chrome://settings in address bar, hit enter.\n\nClick on \u201cPrivacy and security\u201d on the left menu. Then click \u201cSecurity\u201d from the list in the main window.\n\nScroll down to find \u201cManage device certificates\u201d in the main windows and select it.\n\nClick the \u201cImport\u201d button.\n\nFollow the import prompts.\n\nPlace the \u2018mynode-sphinx.shardeum.local.crt\u201d in the \u201cTrusted Root Cert\u2026 Auth..\u201d folder.\n\nClick \u201cYes\u201d and then \u201cOK\u201d.\n\nClick \u201cImport\u201d once more.\n\nThen follow the import prompts.\n\nPlace the \u2018localhost.crt\u201d in the \u201cPersonal\u201d folder.\n\nClose all Chrome windows (as in Exit Chrome).\n\nWhen you have successfully restarted chrome, the operator dashboard will not show with a white lock.\n"})})})]})]}),"\n",(0,r.jsx)(n.p,{children:"You will be asked for your password set during setup."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"loginPage.jpg",src:l(3099).A+"",width:"1919",height:"955"})}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"The login will fail even if you put no password during the setup process.\nTo set a new password inside the validator CLI:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli gui set password <type_new_password__here>\n"})})})})]}),"\n",(0,r.jsx)(n.p,{children:"You should see the \u201cOverview\u201d page for the Shardeum Validator Dashboard in your web browser:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"overviewBetanet.jpg",src:l(2437).A+"",width:"1919",height:"959"})}),"\n",(0,r.jsx)(n.h2,{id:"step-5-start-validator",children:"Step 5: Start validator"}),"\n",(0,r.jsx)(n.p,{children:"Go to the \u201cMaintenance\u201d page, then click the \u201cStart Node\u201d button in the top left white box:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"startBetanet.jpg",src:l(5722).A+"",width:"1919",height:"956"})}),"\n",(0,r.jsx)(n.p,{children:"(Same as running)"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli start\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Wait and refresh the page."}),"\n",(0,r.jsx)(n.p,{children:"The node is running correctly if the \u201cStart Node\u201d button now says \u201cStop Node\u201d. If you want to stop tne node with the CLI:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli stop\n"})})})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"startedBetanet.jpg",src:l(7923).A+"",width:"1919",height:"961"})}),"\n",(0,r.jsx)(n.h2,{id:"step-6-monitor-validator",children:"Step 6: Monitor validator"}),"\n",(0,r.jsx)(n.p,{children:"Go to \u201cPerformance\u201d to see your node\u2019s hardware performance here:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"performanceBetanet.jpg",src:l(2264).A+"",width:"1919",height:"957"})}),"\n",(0,r.jsx)(n.p,{children:"For more details about your node status run the following inside the CLI:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli status\n"})})})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"If your node becomes inactive, try checking its status."})}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pm2 list\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Reset the validator from the list by running:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pm2 delete [id]\n"})})})}),"\n",(0,r.jsx)(n.h2,{id:"step-7-connect-wallet-to-betanet",children:"Step 7: Connect Wallet to Betanet"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/network/endpoints#connect-wallet",children:"Connect to Sphinx 1.X with your wallet by clicking the button linked here"})}),"\n",(0,r.jsx)(n.h2,{id:"step-8-get-shm-from-betanet-faucet",children:"Step 8: Get SHM from Betanet Faucet"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/faucet/claim#shardeum-faucet-website",children:"Shardeum Twitter SHM Faucet Guide for Sphinx 1.X"})}),"\n",(0,r.jsx)(n.h2,{id:"step-9-stake-shm-to-validator",children:"Step 9: Stake SHM to validator"}),"\n",(0,r.jsx)(n.h3,{id:"gui",children:"GUI"}),"\n",(0,r.jsx)(n.p,{children:"After you start the validator, go to the \u201cSettings\u201d page. You will be asked to connect your wallet:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"connectWalletBetanet.jpg",src:l(6401).A+"",width:"1919",height:"958"})}),"\n",(0,r.jsx)(n.p,{children:"After you connect your wallet, you should see the following:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"connectedWalletOptions.jpg",src:l(8269).A+"",width:"1919",height:"958"})}),"\n",(0,r.jsx)(n.p,{children:'When you click "Add Stake", you will see the following:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"connectedWalletAddStake.jpg",src:l(5754).A+"",width:"1919",height:"960"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"-Stake Wallet Address [wallet connected]\n-Nominee Public Key [filled in automatically while validator is running]\n-Stake amount (SHM) [empty and is in units ether not wei]\n"})}),"\n",(0,r.jsx)(n.p,{children:"This example has filled in 10 SHM tokens to stake."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"It is recommended to stake just 10 SHM per Validator node,\nsince rewards will be the same with 10 SHM or more staked for a Validator."})}),"\n",(0,r.jsx)(n.p,{children:"Once all fields are filled, click the \u201cStake\u201d button."}),"\n",(0,r.jsx)(n.p,{children:"Your wallet will ask you to sign the transaction stake your SHM."}),"\n",(0,r.jsx)(n.p,{children:"Once the transaction is signed and complete, you have staked your SHM tokens successfully."}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"If your node status is on Standby and you have 10 SHM or more staked, your validator node is setup correctly."}),(0,r.jsx)(n.p,{children:"The network will automatically add your validator to be active in the network."}),(0,r.jsx)(n.p,{children:"The time to be added as an active validator will vary based on network load and validators in the network."})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:'If you have staked before, you can "Remove Stake". However, you will stop getting testnet SHM rewards when you unstake.'})}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:'If you see your validator IP address as "0.0.0.0":'}),(0,r.jsx)(n.p,{children:"Go into the operator dashboard docker (may be different if you customized install location:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd ~/.shardeum\n./shell.sh\n"})})})}),(0,r.jsx)(n.p,{children:"Get your node's external IP:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl https://ipinfo.io/ip\n"})})})}),(0,r.jsx)(n.p,{children:"The returned IP in the format of nnn.nnn.nnn.nnn is your EXTERNAL_IP."}),(0,r.jsx)(n.p,{children:"Set the number above in place of EXTERNAL_IP:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'export APP_IP="EXTERNAL_IP"\n'})})})})]}),"\n",(0,r.jsx)(n.h3,{id:"cli",children:"CLI"}),"\n",(0,r.jsx)(n.p,{children:"You can also stake and unstake from the Validator CLI if you are not able to access a web browser for the Validator GUI."}),"\n",(0,r.jsx)(n.p,{children:"First, set your private key in your Validator CLI:"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Be very careful with your private keys. We recommend you use a private key which has testnet tokens only to be safe."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"export PRIV_KEY=<private_key>\n"})}),"\n",(0,r.jsx)(n.p,{children:"make sure your private key is stored in your Validator CLI by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"echo $PRIV_KEY\n"})}),"\n",(0,r.jsx)(n.p,{children:"add stake with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli stake 10\n"})}),"\n",(0,r.jsx)(n.p,{children:"check your stake amount with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli stake_info <wallet_address>\n"})}),"\n",(0,r.jsx)(n.p,{children:"remove stake with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli unstake\n"})}),"\n",(0,r.jsx)(n.h2,{id:"validator",children:"Validator"}),"\n",(0,r.jsx)(n.h3,{id:"version",children:"Version"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"New validator versions will be released over time.\nIt is necessary to keep your validator updated\nby checking the minimum version required and your current version periodically."})}),"\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsxs)(t.A,{groupId:"validator-local-or-server",children:[(0,r.jsx)(i.A,{value:"local",label:"Local",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl localhost:9001/nodeinfo\n"})})}),(0,r.jsx)(i.A,{value:"server",label:"Server",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl <server_ip>:9001/nodeinfo\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Stop and Unstake your SHM tokens from the validator"}),"\n",(0,r.jsx)(n.li,{children:"In your terminal, first exit from the container using"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"exit\ncd ..\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run the following curl script"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl -O https://gitlab.com/shardeum/validator/dashboard/-/raw/main/installer.sh && chmod +x installer.sh && ./installer.sh\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"You might manually have to start the GUI afterwards with:"}),(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli gui start\n"})})})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check your currect version from either CLI or GUI and make sure it is the latest version."}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"exit-error-logs",children:"Exit Error Logs"}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo docker exec shardeum-dashboard cat cli/build/logs/exit-summary.json\n"})})}),(0,r.jsxs)(i.A,{value:"CLI",label:"CLI",default:!0,children:[(0,r.jsx)(n.p,{children:"Navigate to the .shardeum directory by entering:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd .shardeum\n"})}),(0,r.jsx)(n.p,{children:"Execute the shell.sh script by entering:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./shell.sh\n"})}),(0,r.jsx)(n.p,{children:"With the Validator CLI running, navigate to the cli/build/logs directory by entering:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd cli/build/logs\n"})}),(0,r.jsx)(n.p,{children:"View the contents of the exit-summary.json file by entering:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cat exit-summary.json\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"cli-and-gui",children:"CLI And GUI"}),"\n",(0,r.jsx)(n.h3,{id:"version-1",children:"Version"}),"\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli version\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"update-1",children:"Update"}),"\n",(0,r.jsx)(n.p,{children:"Run:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli update\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,r.jsx)(n.p,{children:"To see all CLI commands, run:"}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(i.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"operator-cli help\n"})})})}),"\n",(0,r.jsx)(n.h2,{id:"uninstall-validator",children:"Uninstall Validator"}),"\n",(0,r.jsx)(n.p,{children:"Useful if your validator is outdated and you want to clean your last installation."}),"\n",(0,r.jsx)(n.p,{children:"You can delete the validator folder while in your root directory with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"rm -rf .shardeum\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also delete docker containers and images that the Shardeum validator was using."}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"These commands will delete all docker images and containers on your computer!"}),(0,r.jsx)(n.p,{children:"Delete all docker containers:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker rm -vf $(docker ps -aq)\n"})}),(0,r.jsx)(n.p,{children:"Delete all docker images:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker rmi -f $(docker images -aq)\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,n,l)=>{l.d(n,{A:()=>t});l(6540);var a=l(8215);const r={tabItem:"tabItem_Ymn6"};var s=l(4848);function t(e){let{children:n,hidden:l,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,t),hidden:l,children:n})}},1470:(e,n,l)=>{l.d(n,{A:()=>y});var a=l(6540),r=l(8215),s=l(3104),t=l(6347),i=l(205),o=l(7485),d=l(1682),c=l(679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:r}}=e;return{value:n,label:l,attributes:a,default:r}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,t.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,s=u(e),[t,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,h]=x({queryString:l,groupId:r}),[m,j]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(l);return[r,(0,a.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:r}),g=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=l(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=l(4848);function f(e){let{className:n,block:l,selectedValue:a,selectValue:t,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,l=o.indexOf(n),r=i[l].value;r!==a&&(d(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:i.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function b(e){let{lazy:n,children:l,selectedValue:s}=e;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,v.jsx)(w,{...e,children:h(e.children)},String(n))}},6401:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/connectWalletBetanet-e844c33bd3f4aecae772648f1602a5c5.jpg"},5754:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/connectedWalletAddStake-bc1b9ab8875adcf3ca54a52f432dd4d4.jpg"},8269:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/connectedWalletOptions-e908b5e2929d1c594b87ccee93b0e1c2.jpg"},3099:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/loginPage-b0c8345bbfd71249dde4ace04fe4dd4d.jpg"},2437:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/overviewBetanet-ab6f21beccb631a1fb4a82930b95b102.jpg"},2264:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/performanceBetanet-98d836bf67bac1021add34af3eaeb6ea.jpg"},5722:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/startBetanet-30512f936b2c976db151e6aea9361704.jpg"},7923:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/startedBetanet-d4270a56e8d10fa33e85947984929a3b.jpg"},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>i});var a=l(6540);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);