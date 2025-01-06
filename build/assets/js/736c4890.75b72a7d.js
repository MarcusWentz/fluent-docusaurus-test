"use strict";(self.webpackChunkshardeum_docs=self.webpackChunkshardeum_docs||[]).push([[1663],{1755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"smartContracts/tokens/ERC-721","title":"ERC-721","description":"What are NFTs?","source":"@site/docs/smartContracts/tokens/ERC-721.md","sourceDirName":"smartContracts/tokens","slug":"/smartContracts/tokens/ERC-721","permalink":"/docusaurus-template/smartContracts/tokens/ERC-721","draft":false,"unlisted":false,"editUrl":"https://github.com/Shardeum/shardeum-docs/tree/master/docs/smartContracts/tokens/ERC-721.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ERC-721","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"ERC-20","permalink":"/docusaurus-template/smartContracts/tokens/ERC-20"},"next":{"title":"ERC-1155","permalink":"/docusaurus-template/smartContracts/tokens/ERC-1155"}}');var r=t(4848),s=t(8453),o=t(1470),l=t(9365);const i={title:"ERC-721",sidebar_position:2},d="Deploy NFT Smart Contract (ERC721)",c={},h=[{value:"What are NFTs?",id:"what-are-nfts",level:2},{value:"NFT Smart Contract Deployment Using Hardhat",id:"nft-smart-contract-deployment-using-hardhat",level:2},{value:"Step 1 : Initialize Our Project",id:"step-1--initialize-our-project",level:2},{value:"Step 2 : Download Hardhat",id:"step-2--download-hardhat",level:2},{value:"Step 3 : Create Hardhat Project",id:"step-3--create-hardhat-project",level:2},{value:"Step 4 : Project Folders",id:"step-4--project-folders",level:2},{value:"Step 5 : Write Our Contract",id:"step-5--write-our-contract",level:2},{value:"Step 6 : Add the Shardeum Network to Metamask/Claim Token",id:"step-6--add-the-shardeum-network-to-metamaskclaim-token",level:2},{value:"Step 7 : Connect MetaMask to Your Project",id:"step-7--connect-metamask-to-your-project",level:2},{value:"Step 8 : Install Ethers.js",id:"step-8--install-ethersjs",level:2},{value:"Step 9 : Update hardhat.config.js",id:"step-9--update-hardhatconfigjs",level:2},{value:"Step 10 : Compile Our Contract",id:"step-10--compile-our-contract",level:2},{value:"Step 11 : Write Our Deploy Script",id:"step-11--write-our-deploy-script",level:2},{value:"Step 12 : Deploy Our Contract Local Hardhat Environment",id:"step-12--deploy-our-contract-local-hardhat-environment",level:2},{value:"Step 13 : Deploy to Shardeum Liberty",id:"step-13--deploy-to-shardeum-liberty",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deploy-nft-smart-contract-erc721",children:"Deploy NFT Smart Contract (ERC721)"})}),"\n",(0,r.jsx)(n.h2,{id:"what-are-nfts",children:"What are NFTs?"}),"\n",(0,r.jsx)(n.p,{children:"NFTs are individual tokens with valuable information stored in them. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs\u2019 immutable data stored on technologies like blockchain makes it easy to assign/validate its ownership and transfer tokens between two parties transparently without any intermediary."}),"\n",(0,r.jsxs)(n.p,{children:["NFT is a virtual digital asset that is typically unique and scarce similar to a Mona Lisa painting. An NFT is unique evidence of ownership of a virtual digital asset. You can read more about the use cases of NFTs like \u2018NFT for Causes\u2019 and \u2018Private Club Memberships\u2019 ",(0,r.jsx)(n.a,{href:"https://shardeum.org/blog/top-10-nft-use-cases-in-2022/",children:"here"}),". And smart contracts are one of the best use cases/innovations of blockchain technology. It is a virtual settlement between two parties enforced through a computer program (code) instead of a third party. You can find more on smart contracts and their deployment on Shardeum using Hardhat ",(0,r.jsx)(n.a,{href:"https://shardeum.org/blog/how-to-deploy-smart-contract-on-shardeum-testnet-hardhat/",children:"here"}),", which would have similar coding as below since we will be using Hardhat for this documentation of deploying an NFT smart contract."]}),"\n",(0,r.jsx)(n.h2,{id:"nft-smart-contract-deployment-using-hardhat",children:"NFT Smart Contract Deployment Using Hardhat"}),"\n",(0,r.jsx)(n.h2,{id:"step-1--initialize-our-project",children:"Step 1 : Initialize Our Project"}),"\n",(0,r.jsx)(n.p,{children:"First, we\u2019ll need to create a folder for our project. Navigate to your command line and type the following commands."}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"mkdir shardeum-nft-dapp\ncd shardeum-nft-dapp\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Now that we\u2019re inside our project folder, we\u2019ll use \u2018npm init\u2019 to initialize the project. If you don\u2019t have npm installed already, download from here ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node"}),"."]}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm init\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"This command will create a package.json file. It doesn\u2019t really matter how you answer the installation questions, here is how we did it for reference."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package name: (shardeum-nft-dapp)\nversion: (1.0.0)\ndescription:\nentry point: (index.js)\ntest command:\ngit repository:\nkeywords:\nauthor:\nlicense: (ISC)\nAbout to write to G:shardeum-nft-dapppackage.json:\n\n{\n  "name": "shardeum-nft-dapp",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo "Error: no test specified" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n\n\nIs this OK? (yes) yes\n'})}),"\n",(0,r.jsx)(n.h2,{id:"step-2--download-hardhat",children:"Step 2 : Download Hardhat"}),"\n",(0,r.jsx)(n.p,{children:"Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers when building smart contracts and dApps locally before deploying to the live chain."}),"\n",(0,r.jsx)(n.p,{children:"Inside our shardeum-nft-dapp project run:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev hardhat\n"})})})}),"\n",(0,r.jsx)(n.h2,{id:"step-3--create-hardhat-project",children:"Step 3 : Create Hardhat Project"}),"\n",(0,r.jsx)(n.p,{children:"Inside our shardeum-nft-dapp project run:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx hardhat\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"You should then see a welcome message and option to select what you want to do. Select \u201ccreate an empty hardhat.config.js\u201d:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'G:shardeum-nft-dapp>npx hardhat\n888    888                      888 888               888\n888    888                      888 888               888\n888    888                      888 888               888\n8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888\n888    888     "88b 888P"  d88" 888 888 "88b     "88b 888\n888    888 .d888888 888    888  888 888  888 .d888888 888\n888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.\n888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888\n\nWelcome to Hardhat v2.9.5\n\n? What do you want to do? ...\n> Create a basic sample project\n  Create an advanced sample project\n  Create an advanced sample project that uses TypeScript\n  Create an empty hardhat.config.js\n  Quit\n'})}),"\n",(0,r.jsx)(n.p,{children:"This will generate a hardhat.config.js file for us, which is where we\u2019ll specify all of the set up for our project."}),"\n",(0,r.jsx)(n.h2,{id:"step-4--project-folders",children:"Step 4 : Project Folders"}),"\n",(0,r.jsx)(n.p,{children:"To keep our project organized, Hardhat creates two new folders. Navigate to the root directory of your shardeum-nft-dapp"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"contracts/ is where we\u2019ll keep our hello world smart contract code file"}),"\n",(0,r.jsx)(n.li,{children:"scripts/ is where we\u2019ll keep scripts to deploy and interact with our contract"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-5--write-our-contract",children:"Step 5 : Write Our Contract"}),"\n",(0,r.jsx)(n.p,{children:"Open up the shardeum-nft-dapp project in your favorite editor. Smart contracts are written in a language called Solidity which is what we will use to write our Domains.sol smart contract"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the \u201ccontracts\u201d folder and create a new file called Domains.sol"}),"\n",(0,r.jsxs)(n.li,{children:["Below is Domains smart contract from the ",(0,r.jsx)(n.a,{href:"https://nft.shardeum.us/",children:"nft.shardeum.us"})," that we will be using for this tutorial. Copy and paste in the contents below into your Domains.sol file."]}),"\n"]}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"solidity",label:"Solidity",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity 0.8.17;\n\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/utils/Counters.sol";\nimport "@openzeppelin/contracts/utils/Base64.sol";\n// import "hardhat/console.sol";\n\ncontract Domains is ERC721URIStorage {\n\n    error Unauthorized();\n    error AlreadyRegistered();\n    error InvalidName(string name);\n\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    string public tld;\n\n    mapping(string => address) public domains;\n    mapping(string => string) public records;\n    mapping(uint => string) public names;\n\n    address payable public owner;\n\n    string svgPartOne = \'<svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" fill="none"><path fill="url(#a)" d="M0 0h270v270H0z"/><defs><filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity=".225" width="200%" height="200%"/></filter></defs><svg x="15" y="15" width="120" height="108" viewBox="0 0 120 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.4358 77.2888L16.7213 100H103.279L90.5643 77.2888H29.4358Z" fill="white"/><path d="M60 22.7112L47.2856 0L4 77.2889H29.4358L60 22.7112Z" fill="white"/><path d="M90.5642 77.2889H116L72.7145 -3.05176e-05L60 22.7111L90.5642 77.2889Z" fill="white"/><path d="M60 73.3853C67.6037 73.3853 73.7677 67.0303 73.7677 59.1909C73.7677 51.3515 67.6037 44.9964 60 44.9964C52.3964 44.9964 46.2324 51.3515 46.2324 59.1909C46.2324 67.0303 52.3964 73.3853 60 73.3853Z" fill="white"/></svg><defs><linearGradient id="a" x1="0" y1="0" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#cb5eee"/><stop offset="1" stop-color="#0cd7e4" stop-opacity=".99"/></linearGradient></defs><text x="32.5" y="231" font-size="27" fill="#fff" filter="url(#b)" font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif" font-weight="bold">\';\n    string svgPartTwo = \'</text></svg>\';\n\n    constructor(string memory _tld) ERC721("Web3 user name NFT on shardeum | SHM", "Web3 User Name") payable {\n        owner = payable(msg.sender);\n        tld = _tld;\n        // console.log("%s name services deployed", _tld);\n    }\n\n    function price(string calldata name) public pure returns(uint){\n        uint len = StringUtils.strlen(name);\n        require(len > 2);\n        if(len == 3){\n            return 90 * 10**17;\n        }else if(len == 4){\n            return 50 * 10**17;\n        }else if(len == 5){\n            return 30 * 10**17;\n        }else{\n            return 10 * 10**17;\n        }\n    }\n\n    function registers(string calldata name) public payable {\n        // require(domains[name] == address(0));\n        if(domains[name] != address(0)) revert AlreadyRegistered();\n        if(!valid(name)) revert InvalidName(name);\n\n        uint _price = price(name);\n        require(msg.value >= _price, "not enough SHM paid");\n\n        string memory _name = string(abi.encodePacked(name, ".", tld));\n        // console.log("_name", _name);\n\n        string memory finalSvg = string(abi.encodePacked(svgPartOne, _name, svgPartTwo));\n\n        uint256 newRecordId = _tokenIds.current();\n        uint256 length = StringUtils.strlen(name);\n        string memory strLen = Strings.toString(length);\n\n        // console.log("Registering %s on the contract with tokenId %d", name, newRecordId);\n\n        string memory json = Base64.encode(\n            bytes(\n                string(\n                    abi.encodePacked(\n                        \'{"name":"\',\n                        _name,\n                        \'","description":"Web3 user name NFT on shardeum | SHM","image":"data:image/svg+xml;base64,\',\n                        Base64.encode(bytes(finalSvg)),\n                        \'","length":"\',\n                        strLen,\n                        \'"}\'\n                    )\n                )\n            )\n        );\n\n        string memory finalTokenUri = string(abi.encodePacked("data:application/json;base64,", json));\n\n        // console.log("\\n--------------------------------------------------------");\n        // console.log("Final tokenURI", finalTokenUri);\n        // console.log("--------------------------------------------------------\\n");\n\n        _safeMint(msg.sender, newRecordId);\n        _setTokenURI(newRecordId, finalTokenUri);\n\n        domains[name] = msg.sender;\n        // console.log("%s has registred a domain", msg.sender);\n\n        names[newRecordId] = name;\n        _tokenIds.increment();\n    }\n\n    function getAddress(string calldata name) public view returns (address){\n        return domains[name];\n    }\n\n    function setRecord(string calldata name ,string calldata record) public {\n        // require(domains[name] == msg.sender);\n        if(msg.sender != domains[name]) revert Unauthorized();\n        records[name] = record;\n    }\n\n    function getRecord(string calldata name) public view returns(string memory){\n        return records[name];\n    }\n\n    modifier onlyOwner(){\n        require(isOwner());\n        _;\n    }\n\n    function isOwner() public view returns (bool){\n        return msg.sender == owner;\n    }\n\n    function withdraw() public onlyOwner{\n        uint amount = address(this).balance;\n\n        (bool success, ) = msg.sender.call{value: amount}("");\n        require(success, "failed to withdraw SHM");\n    }\n\n    function getAllNames() public view returns(string[] memory){\n        string[] memory allNames = new string[](_tokenIds.current());\n        for(uint i = 0; i < _tokenIds.current(); i++){\n            // console.log("iteration i  names[i] ", names[i]);\n            // console.log("iteration i  allNames[i] ", allNames[i]);\n            allNames[i] = names[i];\n        }\n        return allNames;\n    }\n\n    function valid(string calldata name) public pure returns(bool){\n        return StringUtils.strlen(name) >= 3 && StringUtils.strlen(name) <= 10;\n    }\n}\n\nlibrary StringUtils { // Source: ENS contracts: //https://github.com/ensdomains/ens-contracts/blob/master/contracts/ethregistrar/StringUtils.sol\n    function strlen(string memory s) internal pure returns (uint256) {\n        uint256 len;\n        uint256 i = 0;\n        uint256 bytelength = bytes(s).length;\n        for (len = 0; i < bytelength; len++) {\n            bytes1 b = bytes(s)[i];\n            if (b < 0x80) {\n                i += 1;\n            } else if (b < 0xE0) {\n                i += 2;\n            } else if (b < 0xF0) {\n                i += 3;\n            } else if (b < 0xF8) {\n                i += 4;\n            } else if (b < 0xFC) {\n                i += 5;\n            } else {\n                i += 6;\n            }\n        }\n        return len;\n    }\n}\n'})})})}),"\n",(0,r.jsx)(n.p,{children:"This is the smart contract that creates Shardeum .shm Domains by calling registers function with your desired name."}),"\n",(0,r.jsx)(n.p,{children:"We used OpenZeppelin Contracts that helps you to minimize risks by using battle-tested libraries of smart contracts for Ethereum and other blockchains. It includes the most used implementations of ERC standards."}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @openzeppelin/contracts\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Now that we have created smart contract, we need to deploy this smart contract to the Shardeum liberty alphanet"}),"\n",(0,r.jsx)(n.h2,{id:"step-6--add-the-shardeum-network-to-metamaskclaim-token",children:"Step 6 : Add the Shardeum Network to Metamask/Claim Token"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"})," allows users to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a compatible web browser or the mobile app\u2019s built-in browser. Click ",(0,r.jsx)(n.a,{href:"https://metamask.io/download/",children:"here"})," to install the MetaMask extension on your browser."]}),"\n",(0,r.jsxs)(n.p,{children:["And follow these ",(0,r.jsx)(n.a,{href:"https://docs.shardeum.org/basics/claim",children:"instructions"})," to add Shardeum to MetaMask wallet and claim test 100 $SHM tokens from Liberty (alphanet) faucet."]}),"\n",(0,r.jsx)(n.h2,{id:"step-7--connect-metamask-to-your-project",children:"Step 7 : Connect MetaMask to Your Project"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ve created a MetaMask wallet and written our smart contract, and now it\u2019s time to connect these two!"}),"\n",(0,r.jsx)(n.p,{children:"Every transaction sent from your virtual wallet requires a signature using your unique private key. To provide our program with this permission, we can safely store our private key in an environment file."}),"\n",(0,r.jsx)(n.p,{children:"First, install the dotenv package in your project directory:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install dotenv --save\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Note:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".env\n\n- Your environment file must be named .env or it won\u2019t be recognized as an environment file. Do not name it process.env or .env-custom or anything else.\n"})}),"\n",(0,r.jsx)(n.p,{children:"Your .env should look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHARDEUM_RPC= https://liberty10.shardeum.org/\nPRIVATE_KEY= Your_Metamask_Private_Key\n"})}),"\n",(0,r.jsx)(n.p,{children:"To actually connect these to our code, we\u2019ll reference these variables in our hardhat.config.js file"}),"\n",(0,r.jsx)(n.h2,{id:"step-8--install-ethersjs",children:"Step 8 : Install Ethers.js"}),"\n",(0,r.jsx)(n.p,{children:"Ethers.js is a library that makes it easier to interact and make requests to Ethereum by wrapping standard JSON-RPC methods with more user friendly methods."}),"\n",(0,r.jsxs)(n.p,{children:["Hardhat makes it super easy to integrate ",(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/plugins",children:"Plugins"})," for additional tooling and extended functionality. We\u2019ll be taking advantage of the ",(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers",children:"Ethers plugin"})," for contract deployment (",(0,r.jsx)(n.a,{href:"https://github.com/ethers-io/ethers.js/",children:"Ethers.js"})," has some super clean contract deployment methods)."]}),"\n",(0,r.jsx)(n.p,{children:"In your project directory type:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @nomiclabs/hardhat-ethers \"ethers@^5.0.0\"\nnpm install --save-dev @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0'\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ll also require ethers in our hardhat.config.js in the next step."}),"\n",(0,r.jsx)(n.h2,{id:"step-9--update-hardhatconfigjs",children:"Step 9 : Update hardhat.config.js"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ve added several dependencies and plugins so far, now we need to update hardhat.config.js so that our project knows about all of them."}),"\n",(0,r.jsx)(n.p,{children:"Update your hardhat.config.js to look like this:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"javascript",label:"Javascript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'require("@nomiclabs/hardhat-waffle");\nrequire("@nomiclabs/hardhat-ethers");\nrequire("dotenv").config();\nconst SHARDEUM_RPC = process.env.SHARDEUM_RPC;\nconst privateKey = process.env.PRIVATE_KEY;\n\n\n/**\n * @type import(\'hardhat/config\').HardhatUserConfig\n */\n\nmodule.exports = {\n  defaultNetwork: "hardhat",\n  solidity: {\n    version: "0.8.10",\n  },\n  networks: {\n    shardeum: {\n      url: SHARDEUM_RPC,\n      accounts: [privateKey],\n      chainId: 8080,\n    }\n  },\n};\n'})})})}),"\n",(0,r.jsx)(n.h2,{id:"step-10--compile-our-contract",children:"Step 10 : Compile Our Contract"}),"\n",(0,r.jsx)(n.p,{children:"To make sure everything is working so far, let\u2019s compile our contract. The compile task is one of the built-in hardhat tasks."}),"\n",(0,r.jsx)(n.p,{children:"From the command line run:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx hardhat compile\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"If no errors, it will compile successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Compiled 16 Solidity files successfully\n"})}),"\n",(0,r.jsx)(n.h2,{id:"step-11--write-our-deploy-script",children:"Step 11 : Write Our Deploy Script"}),"\n",(0,r.jsx)(n.p,{children:"Now that our contract is written and our configuration file is good to go, it\u2019s time to write our contract deploy script."}),"\n",(0,r.jsx)(n.p,{children:"Navigate to the /scripts folder and create a new file called deploy.js, adding the following contents to it:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"javascript",label:"Javascript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const hre = require("hardhat");\n\nconst main = async ()=>{\n    const domainContractFactory = await hre.ethers.getContractFactory("Domains");\n    const domainContract = await domainContractFactory.deploy("shm")\n    await domainContract.deployed()\n    console.log("contract depolyed to : ", domainContract.address)\n\n\n}\n\nconst runMain = async ()=>{\n    try {\n        await main()\n        process.exit(0);\n    } catch (error) {\n        console.log("error: ",error)\n        process.exit(1)\n    }\n}\n\nrunMain();\n'})})})}),"\n",(0,r.jsx)(n.p,{children:"Hardhat does an amazing job of explaining what each line of these codes does in their contracts tutorial. We\u2019ve adopted their explanations here."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const domainContractFactory = await hre.ethers.getContractFactory("Domains");\n'})}),"\n",(0,r.jsx)(n.p,{children:"A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so  Disperse here is a factory for instances of our Disperse contract. When using the hardhat-ethers plugin ContractFactory and Contract, instances are connected to the first signer (owner) by default."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"await domainContract.deployed()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract object. This is the object that has a method for each of our smart contract functions."}),"\n",(0,r.jsx)(n.h2,{id:"step-12--deploy-our-contract-local-hardhat-environment",children:"Step 12 : Deploy Our Contract Local Hardhat Environment"}),"\n",(0,r.jsx)(n.p,{children:"Before we deploy our smart contract to Shardeum network, lets test this once in local hardhat environment to check what a generated Shardeum NFT looks like:"}),"\n",(0,r.jsx)(n.p,{children:"create a test-deploy.js file in scripts/ and copy paste the below code:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"javascript",label:"Javascript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const hre = require("hardhat");\n\nconst main = async ()=>{\n    // const [owner, superCoder] = await hre.ethers.getSigners();\n    const domainContractFactory = await hre.ethers.getContractFactory("Domains");\n    const domainContract = await domainContractFactory.deploy("shm")\n    await domainContract.deployed()\n    console.log("contract depolyed to : ", domainContract.address)\n\n    let setDR = await domainContract.registers("contract",{value: hre.ethers.utils.parseEther("1")});\n    await setDR.wait();\n    console.log("Minted domain contract.shm")\n\n    const addr = await domainContract.getAddress("contract");\n    console.log("owner of contract domain : ", addr);\n\n}\n\nconst runMain = async ()=>{\n    try {\n        await main()\n        process.exit(0);\n    } catch (error) {\n        console.log("error: ",error)\n        process.exit(1)\n    }\n}\n\nrunMain();\n'})})})}),"\n",(0,r.jsx)(n.p,{children:"Run this command in command prompt:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"node scripts/test-deploy.js\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"You should then see something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"G:\\shardeum-nft-dapp>node scripts/deploy-domains.jsshm name services deployed\ncontract depolyed to :  0x5FbDB2315678afecb367f032d93F642f64180aa3\n_name contract.shm\nRegistering contract on the contract with tokenId 0\n\n--------------------------------------------------------\nFinal tokenURI data:application/json;base64,eyJuYW1lIjoiY29udHJhY3Quc2htIiwiZGVzY3JpcHRpb24iOiJXZWIzIHVzZXIgbmFtZSBORlQgb24gc2hhcmRldW0gfCBTSE0iLCJpbWFnZSI6ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU56QWlJR2hsYVdkb2REMGlNamN3SWlCbWFXeHNQU0p1YjI1bElqNDhjR0YwYUNCbWFXeHNQU0oxY213b0kyRXBJaUJrUFNKTk1DQXdhREkzTUhZeU56QklNSG9pTHo0OFpHVm1jejQ4Wm1sc2RHVnlJR2xrUFNKaUlpQmpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVMV1pwYkhSbGNuTTlJbk5TUjBJaUlHWnBiSFJsY2xWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdhR1ZwWjJoMFBTSXlOekFpSUhkcFpIUm9QU0l5TnpBaVBqeG1aVVJ5YjNCVGFHRmtiM2NnWkhnOUlqQWlJR1I1UFNJeElpQnpkR1JFWlhacFlYUnBiMjQ5SWpJaUlHWnNiMjlrTFc5d1lXTnBkSGs5SWk0eU1qVWlJSGRwWkhSb1BTSXlNREFsSWlCb1pXbG5hSFE5SWpJd01DVWlMejQ4TDJacGJIUmxjajQ4TDJSbFpuTStQSE4yWnlCNFBTSXhOU0lnZVQwaU1UVWlJSGRwWkhSb1BTSXhNakFpSUdobGFXZG9kRDBpTVRBNElpQjJhV1YzUW05NFBTSXdJREFnTVRJd0lERXdPQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OGNHRjBhQ0JrUFNKTk1qa3VORE0xT0NBM055NHlPRGc0VERFMkxqY3lNVE1nTVRBd1NERXdNeTR5TnpsTU9UQXVOVFkwTXlBM055NHlPRGc0U0RJNUxqUXpOVGhhSWlCbWFXeHNQU0ozYUdsMFpTSXZQanh3WVhSb0lHUTlJazAyTUNBeU1pNDNNVEV5VERRM0xqSTROVFlnTUV3MElEYzNMakk0T0RsSU1qa3VORE0xT0V3Mk1DQXlNaTQzTVRFeVdpSWdabWxzYkQwaWQyaHBkR1VpTHo0OGNHRjBhQ0JrUFNKTk9UQXVOVFkwTWlBM055NHlPRGc1U0RFeE5rdzNNaTQzTVRRMUlDMHpMakExTVRjMlpTMHdOVXcyTUNBeU1pNDNNVEV4VERrd0xqVTJORElnTnpjdU1qZzRPVm9pSUdacGJHdzlJbmRvYVhSbElpOCtQSEJoZEdnZ1pEMGlUVFl3SURjekxqTTROVE5ETmpjdU5qQXpOeUEzTXk0ek9EVXpJRGN6TGpjMk56Y2dOamN1TURNd015QTNNeTQzTmpjM0lEVTVMakU1TURsRE56TXVOelkzTnlBMU1TNHpOVEUxSURZM0xqWXdNemNnTkRRdU9UazJOQ0EyTUNBME5DNDVPVFkwUXpVeUxqTTVOalFnTkRRdU9UazJOQ0EwTmk0eU16STBJRFV4TGpNMU1UVWdORFl1TWpNeU5DQTFPUzR4T1RBNVF6UTJMakl6TWpRZ05qY3VNRE13TXlBMU1pNHpPVFkwSURjekxqTTROVE1nTmpBZ056TXVNemcxTTFvaUlHWnBiR3c5SW5kb2FYUmxJaTgrUEM5emRtYytQR1JsWm5NK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmhJaUI0TVQwaU1DSWdlVEU5SWpBaUlIZ3lQU0l5TnpBaUlIa3lQU0l5TnpBaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqWTJJMVpXVmxJaTgrUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJak1HTmtOMlUwSWlCemRHOXdMVzl3WVdOcGRIazlJaTQ1T1NJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BDOWtaV1p6UGp4MFpYaDBJSGc5SWpNeUxqVWlJSGs5SWpJek1TSWdabTl1ZEMxemFYcGxQU0l5TnlJZ1ptbHNiRDBpSTJabVppSWdabWxzZEdWeVBTSjFjbXdvSTJJcElpQm1iMjUwTFdaaGJXbHNlVDBpVUd4MWN5QktZV3RoY25SaElGTmhibk1zUkdWcVlWWjFJRk5oYm5Nc1RtOTBieUJEYjJ4dmNpQkZiVzlxYVN4QmNIQnNaU0JEYjJ4dmNpQkZiVzlxYVN4ellXNXpMWE5sY21sbUlpQm1iMjUwTFhkbGFXZG9kRDBpWW05c1pDSStZMjl1ZEhKaFkzUXVjMmh0UEM5MFpYaDBQand2YzNablBnPT0iLCJsZW5ndGgiOiI4In0=\n--------------------------------------------------------\n\n0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 has registred a domain\nMinted domain contract.shm\nowner of contract domain :  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\n"})}),"\n",(0,r.jsx)(n.p,{children:"Copy the Final tokenURI and paste in browser new tab which will look like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"deploy_nft_smart_contract_1",src:t(4240).A+"",width:"1021",height:"241"})}),"\n",(0,r.jsx)(n.p,{children:"Now copy the data as selection shown above from the json and paste in new browser tab. This is how it may appear:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"deploy_nft_smart_contract_2",src:t(2239).A+"",width:"1402",height:"591"})}),"\n",(0,r.jsx)(n.h2,{id:"step-13--deploy-to-shardeum-liberty",children:"Step 13 : Deploy to Shardeum Liberty"}),"\n",(0,r.jsx)(n.p,{children:"In next line we are executing *(step 11) to deploy to Shardeum Network."}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"shell",label:"Shell",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx hardhat run scripts/deploy.js --network shardeum\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["If we go to the ",(0,r.jsx)(n.a,{href:"https://explorer.liberty10.shardeum.org/",children:"Shardeum explorer"})," and search for our contract address we should able to see that it has been deployed successfully."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"deploy_nft_smart_contract_3",src:t(530).A+"",width:"1023",height:"514"})}),"\n",(0,r.jsx)(n.p,{children:"Click on Transaction hash to see the full details of contract creation:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"deploy_nft_smart_contract_4",src:t(5137).A+"",width:"1023",height:"569"})}),"\n",(0,r.jsx)(n.p,{children:"Congrats! You just deployed a NFT smart contract to the Shardeum Liberty."}),"\n",(0,r.jsx)(n.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,r.jsx)("iframe",{id:"ytplayer",type:"text/html",class:"video",src:"https://www.youtube.com/embed/XI6vn2RpSUA",allowFullScreen:"allowFullScreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",frameBorder:"0"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(8215);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(6540),r=t(8215),s=t(3104),o=t(6347),l=t(205),i=t(7485),d=t(1682),c=t(679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,h]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=d??f;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(d(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:h,onClick:c,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(w,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},4240:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/deploy_nft_smart_contract_1-8e45218a7588692522a7fa37ae937ee0.jpg"},2239:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/deploy_nft_smart_contract_2-ec95e0988a8b4952bc0ed9a902252746.jpg"},530:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/deploy_nft_smart_contract_3-f7738c5dcfdfe786ced9c2d7c8d97a89.jpg"},5137:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/deploy_nft_smart_contract_4-0bda4395432e5b4b8d3394a49461a6d4.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);