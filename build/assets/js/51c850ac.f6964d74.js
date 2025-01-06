"use strict";(self.webpackChunkshardeum_docs=self.webpackChunkshardeum_docs||[]).push([[3975],{8022:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"smartContracts/events/pollEvents","title":"Polling Cycles","description":"What are smart contract events?","source":"@site/docs/smartContracts/events/pollEvents.md","sourceDirName":"smartContracts/events","slug":"/smartContracts/events/pollEvents","permalink":"/docusaurus-template/smartContracts/events/pollEvents","draft":false,"unlisted":false,"editUrl":"https://github.com/Shardeum/shardeum-docs/tree/master/docs/smartContracts/events/pollEvents.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Polling Cycles","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Solidity Interfaces","permalink":"/docusaurus-template/smartContracts/EIP-2930/solidityInterfaces"},"next":{"title":"EVM Storage","permalink":"/docusaurus-template/storage/storageEVM"}}');var a=t(4848),s=t(8453),l=t(1470),o=t(9365);const i={title:"Polling Cycles",sidebar_position:6},c=void 0,u={},d=[{value:"What are smart contract events?",id:"what-are-smart-contract-events",level:2},{value:"Why are smart contract events important?",id:"why-are-smart-contract-events-important",level:2},{value:"Where are events used in smart contract applications?",id:"where-are-events-used-in-smart-contract-applications",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"How to listen to smart contract events on Shardeum?",id:"how-to-listen-to-smart-contract-events-on-shardeum",level:2},{value:"Websockets",id:"websockets",level:2},{value:"Polling",id:"polling",level:2},{value:"Reading events with Shardeum Cycles:",id:"reading-events-with-shardeum-cycles",level:2},{value:"JSON URL Filter Variables",id:"json-url-filter-variables",level:2},{value:"Event Listening With Polling Examples:",id:"event-listening-with-polling-examples",level:2}];function p(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"what-are-smart-contract-events",children:"What are smart contract events?"}),"\n",(0,a.jsx)(e.p,{children:"Smart contract events broadcast new data coming from a contract."}),"\n",(0,a.jsx)(e.h2,{id:"why-are-smart-contract-events-important",children:"Why are smart contract events important?"}),"\n",(0,a.jsx)(e.p,{children:"Smart contract event listening notifies applications and users in real time that something new has happened in a smart contract."}),"\n",(0,a.jsx)(e.h2,{id:"where-are-events-used-in-smart-contract-applications",children:"Where are events used in smart contract applications?"}),"\n",(0,a.jsx)(e.h2,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsx)(e.p,{children:"If you swap tokens on a website using a AMM DEX smart contract, the token balances will know when to be updated on the frontend almost instantly using events."}),"\n",(0,a.jsx)(e.h2,{id:"backend",children:"Backend"}),"\n",(0,a.jsx)(e.p,{children:"Trading bots can listen to AMM DEX swap contracts events and find potential arbitrage opportunities.\nIoT robotics applications in the physical world connected to a smart contract can be controlled with events.\nChainlink oracle nodes also depend on smart contract events to know when to communicate between the real world and blockchains."}),"\n",(0,a.jsx)(e.h2,{id:"how-to-listen-to-smart-contract-events-on-shardeum",children:"How to listen to smart contract events on Shardeum?"}),"\n",(0,a.jsx)(e.h2,{id:"websockets",children:"Websockets"}),"\n",(0,a.jsx)(e.p,{children:"We are planning to add websocket RPC URL support in the future to subscribe to smart contract events.\nThis way, users will be able to save API calls instead of polling for new data every new block/bundle/cycle."}),"\n",(0,a.jsx)(e.h2,{id:"polling",children:"Polling"}),"\n",(0,a.jsx)(e.p,{children:"Reading smart contract events can also be done using Shardeum cycles (we listen to blocks/bundles to do this)."}),"\n",(0,a.jsx)(e.h2,{id:"reading-events-with-shardeum-cycles",children:"Reading events with Shardeum Cycles:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"To get the current cycle: get latest block, then divide by 10, and round down."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Build the JSON URL with:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Example with:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"startCycle = endCycle = 49\naddress = 0x23FF65f07cAbAd1643440a0114d71260F2Bb6352\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://explorer-liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352",children:"https://explorer-liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352"})}),"\n",(0,a.jsxs)(e.ol,{start:"3",children:["\n",(0,a.jsx)(e.li,{children:"Filter for transactions per page [note, 10 transactions per page]:"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://explorer-liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352&page=1",children:"https://explorer-liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352&page=1"})}),"\n",(0,a.jsx)(e.h2,{id:"json-url-filter-variables",children:"JSON URL Filter Variables"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"?startCycle=lastestCycle\n&endCycle=lastestCycle\n&address=addressToListenTo\n&page=1\n"})}),"\n",(0,a.jsx)(e.h2,{id:"event-listening-with-polling-examples",children:"Event Listening With Polling Examples:"}),"\n",(0,a.jsx)(e.p,{children:"Reading transaction events from the null address (address(0)) from cycle 0 to 1000:"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"javascript",label:"Javascript",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'const axios = require(\'axios\');\n\nlet baseUrl = "https://explorer-sphinx.shardeum.org/api/transaction?startCycle=49330&endCycle=49330&address=0x6bd9e67bf927da1935b6eaea9bf22500c4e1f53a"\n\ngetTransactionsToAddressCycleRange(baseUrl)\n\nasync function readJSONLoop(totalTransactions) {\n\n\tlet total = totalTransactions;\n\tlet pageIndex = 1\n\n\twhile ( total > 0 ) {\n\n\t\tlet filterUrl = baseUrl + "&page=" + pageIndex\n\t\tconsole.log(filterUrl)\n\n\t\tlet responseRawJSON = await axios.get(filterUrl);\n\t\tresponseRawJSON = responseRawJSON.data;\n\t\tconsole.log(responseRawJSON);\n\n\t  \ttotal -= 10;\n\t\tpageIndex++;\n\t}\n\n}\n\nasync function getTransactionsToAddressCycleRange(baseUrl) {\n\n\tlet responseRawJSON = await axios.get(baseUrl);\n\tlet responseDataJSON = responseRawJSON.data;\n\tlet totalTransactions = responseDataJSON.totalTransactions\n\tconsole.log(totalTransactions);\n\n\treadJSONLoop(totalTransactions)\n    \n}\n'})})}),(0,a.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'from urllib.request import urlopen\nimport json\n\ntransactionsInCycleRangeUrlString = "https://explorer-liberty20.shardeum.org/api/transaction?startCycle=0&endCycle=1000&address=0x0000000000000000000000000000000000000000"\ntransactionsInCycleRangeUrlOpened = urlopen(transactionsInCycleRangeUrlString)\ntransactionsInCycleRangeUrlJSON = json.loads(transactionsInCycleRangeUrlOpened.read())\ntotalTransactions = transactionsInCycleRangeUrlJSON["totalTransactions"]\nprint(totalTransactions)\npageIndex = 1\n\nwhile totalTransactions > 0:\n    print(pageIndex)\n    print(totalTransactions)\n    pageIndexIncrementUrlString = transactionsInCycleRangeUrlString + "&page=" + str(pageIndex)\n    pageIndexIncrementUrlOpened = urlopen(pageIndexIncrementUrlString)\n    rawTransactionDataPage = json.loads(pageIndexIncrementUrlOpened.read())\n    print(rawTransactionDataPage)\n    totalTransactions -= 10\n    pageIndex += 1\n'})})}),(0,a.jsx)(o.A,{value:"go",label:"Go",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n   "io/ioutil"\n   "log"\n   "net/http"\n   "encoding/json"\n   "strconv"\n)\n\nfunc main() {\n   \n   baseUrl := "https://explorer-sphinx.shardeum.org/api/transaction?startCycle=";\n   transactionCount := getTransactionCount(6928, baseUrl)\n   log.Println(transactionCount)\n\n   readJsonLoop(transactionCount, baseUrl)\n\n}\n\ntype transactionCountJson struct {\n\tSuccess bool `json:"success"`\n   TotalTransactions int `json:"totalTransactions"`\n}\n\nfunc getTransactionCount(cycleNumber int, baseUrl string) (x int) {\n\n   getRequestUrl := \n      baseUrl +\n      strconv.Itoa(cycleNumber)+\n      "&endCycle="+\n      strconv.Itoa(cycleNumber);\n   log.Println(getRequestUrl)\n\n   resp, err := http.Get(getRequestUrl)\n   if err != nil {\n      log.Fatalln(err)\n   }\n\n   rawBodyBytes, err := ioutil.ReadAll(resp.Body)\n   if err != nil {\n      log.Fatalln(err)\n   }\n\n   var transactionCountJsonInstance transactionCountJson\n\n   err = json.Unmarshal(rawBodyBytes, &transactionCountJsonInstance)\n   if err != nil {\n      log.Fatalln(err)\n   }\n\n   return transactionCountJsonInstance.TotalTransactions;\n}\n\nfunc readJsonLoop(totalTransactions int, baseUrl string) {\n\n   total := totalTransactions;\n   pageIndex := 1;\n\n   for total > 0 {\n\n      getRequestUrl := \n         baseUrl+\n         strconv.Itoa(6928)+\n         "&endCycle="+\n         strconv.Itoa(6928)+\n         "&page=" + \n         strconv.Itoa(pageIndex)\n      log.Println(getRequestUrl)\n\n      resp, err := http.Get(getRequestUrl)\n      if err != nil {\n         log.Fatalln(err)\n      }\n   \n      rawBodyBytes, err := ioutil.ReadAll(resp.Body)\n      if err != nil {\n         log.Fatalln(err)\n      }\n   \n      log.Printf(string(rawBodyBytes))\n\n      total -= 10;\n      pageIndex++;\n   }\n\n}\n'})})}),(0,a.jsx)(o.A,{value:"rust",label:"Rust",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'use serde_json;\n\n#[tokio::main]\nasync fn main() -> Result<(), reqwest::Error> {\n\n    let base_url = String::from("https://explorer-sphinx.shardeum.org/api/transaction?startCycle=");\n    let cycle_number = 6928;\n\n    let transaction_count : u64 = get_transaction_count(cycle_number.clone(), base_url.clone()).await;    \n    println!("transaction_count: {:#?}", transaction_count);\n     \n    read_json_loop(cycle_number.clone(), base_url.clone(), transaction_count).await;\n\n    Ok(())\n}\n\nasync fn get_transaction_count(cycle_number: u64, base_url: String) -> u64   {\n\n    let get_request_url = \n        base_url +\n        &cycle_number.to_string() +\n        "&endCycle=" +\n        &cycle_number.to_string();\n    println!("getRequestUrl: {:#?}", get_request_url);\n\n    let new_todo: serde_json::Value = reqwest::Client::new()\n        .get(get_request_url)\n        .send()\n        .await.unwrap()\n        .json()\n        .await.unwrap();\n\n    println!("JSON raw response: {:#?}", new_todo);\n    println!("{:#?}", new_todo["success"]);\n    println!("{:#?}", new_todo["totalTransactions"]);\n    println!("{:#?}", new_todo["totalTransactions"].as_u64().unwrap());\n\n    return new_todo["totalTransactions"].as_u64().unwrap();\n\n}\n\nasync fn read_json_loop(cycle_number: u64, base_url: String, total_transactions: u64) {\n\n   let mut total : i64 = total_transactions as i64; //Convert value to be signed so we do not have an underflow error when the value become negative.\n   let mut page_index = 1;\n\n   while total > 0 {\n\n        let get_request_url = \n            base_url.clone() +\n            &cycle_number.to_string() +\n            "&endCycle=" +\n            &cycle_number.to_string() +\n            "&page=" + \n            &page_index.to_string();\n        println!("getRequestUrl: {:#?}", get_request_url);\n\n        let new_todo: serde_json::Value = reqwest::Client::new()\n            .get(get_request_url)\n            .send()\n            .await.unwrap()\n            .json()\n            .await.unwrap();\n    \n        println!("JSON raw response: {:#?}", new_todo);\n\n        total -= 10;\n        page_index += 1;\n    }   \n    \n}\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:"Listening for the latest cycle, which might contain transaction events from an address:"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"javascript",label:"Javascript",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'const axios = require(\'axios\');\nconst ethers = require(\'ethers\')\n\nconst rpcURL = "https://liberty20.shardeum.org/"\n\nconst provider = new ethers.providers.JsonRpcProvider(rpcURL)\n\nconst timeMilliSec = 1000;\n\nlistenForCycle()\n\nfunction timeout(ms) {\n\treturn new Promise(resolve => setTimeout(resolve,ms));\n}\n\nasync function listenForCycle() {\n  while (true){\n\n    console.log("Current cycle (1 cycle = 10 blocks [bundles]) ")\n    let cycle = await provider.getBlockNumber();\n    console.log(Math.floor(cycle/10))\n\n    let baseUrlCycleAddress = "https://explorer-liberty20.shardeum.org/api/transaction?startCycle=" + cycle + "&endCycle=" + cycle + "&address=0x0000000000000000000000000000000000000000" \n    console.log(baseUrlCycleAddress)\n\n    let responseRawJSON = await axios.get(baseUrlCycleAddress);\n    let responseDataJSON = responseRawJSON.data;\n    let totalTransactions = responseDataJSON.totalTransactions\n    console.log(totalTransactions);\n\n    readJSONLoopLatestCycle(totalTransactions,baseUrlCycleAddress)\n\n    await timeout(60*timeMilliSec)\n\n  }\n}\n\nasync function readJSONLoopLatestCycle(totalTransactions,baseUrl) {\n\n\tlet total = totalTransactions;\n\tlet pageIndex = 1\n\n\twhile ( total > 0 ) {\n\n\t\tlet filterUrl = baseUrl + "&page=" + pageIndex\n\t\tconsole.log(filterUrl)\n\n\t\tlet responseRawJSON = await axios.get(filterUrl);\n\t\tresponseRawJSON = responseRawJSON.data;\n\t\tconsole.log(responseRawJSON);\n\n    total -= 10;\n\t\tpageIndex++;\n\t}\n\n}\n'})})}),(0,a.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'from web3 import Web3\nimport time\nimport math\nfrom urllib.request import urlopen\nimport json\n\nShardeumConnectionHTTPS = "https://liberty20.shardeum.org/";\nweb3 = Web3(Web3.HTTPProvider(ShardeumConnectionHTTPS))\n\nprint("Connected to Web3? ")\nprint(web3.isConnected())\n\nprint("Chain ID? ")\nprint(web3.eth.chain_id)\n\naddressToSubscribeTo = "0x0000000000000000000000000000000000000000"\n\nwhile True:\nprint("Current cycle (1 cycle = 10 blocks [bundles]) ")\ncycle =  (math.floor(web3.eth.blockNumber/10))  #Divide current bundle [block] by 10, then round down to get cycle.\nprint(cycle)\n\ntransactionsInCycleRangeUrlString = "https://explorer-liberty20.shardeum.org/api/transaction?startCycle=" + str(cycle) + "&endCycle=" + str(cycle) + "&address=" + addressToSubscribeTo\nprint(transactionsInCycleRangeUrlString)\ntransactionsInCycleRangeUrlOpened = urlopen(transactionsInCycleRangeUrlString)\ntransactionsInCycleRangeUrlJSON = json.loads(transactionsInCycleRangeUrlOpened.read())\ntotalTransactions = transactionsInCycleRangeUrlJSON["totalTransactions"]\nprint(totalTransactions)\npageIndex = 1\n\nwhile totalTransactions > 0:\n    print(pageIndex)\n    print(totalTransactions)\n    pageIndexIncrementUrlString = transactionsInCycleRangeUrlString + "&page=" + str(pageIndex)\n    pageIndexIncrementUrlOpened = urlopen(pageIndexIncrementUrlString)\n    rawTransactionDataPage = json.loads(pageIndexIncrementUrlOpened.read())\n    print(rawTransactionDataPage)\n    totalTransactions -= 10\n    pageIndex += 1\n\ntime.sleep(60)   #1 cycle roughly every 60 seconds based on explorer: https://explorer-liberty20.shardeum.org/cycle\n'})})}),(0,a.jsx)(o.A,{value:"go",label:"Go",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n   "io/ioutil"\n   "log"\n   "net/http"\n   "encoding/json"\n   "context"\n   "math/big"\n   "strconv"\n   "time"\n\n   "github.com/ethereum/go-ethereum/ethclient"\n)\n\nfunc main() {\n\n   client, chainID := clientSetup("https://sphinx.shardeum.org/")\n\n   log.Println("chainID: ", chainID)\n\n\n   for {\n\n      header, err := client.HeaderByNumber(context.Background(), nil)\n      if err != nil {\n         log.Fatal(err)\n      }\n\n      blockNumber := header.Number\n      bigNumberTenBundlesPerCycle, _ := new(big.Int).SetString("10", 10)  //Value 10, decimal units also 10. \n      cycleNumber := new(big.Int).Div(blockNumber, bigNumberTenBundlesPerCycle)\n      bigNumberOne, _ := new(big.Int).SetString("1", 10)  //Value 1, decimal units 10. \n      cycleNumberMinusOne := new(big.Int).Sub(cycleNumber, bigNumberOne)\n      log.Println(cycleNumberMinusOne)\n      \n      baseUrl := "https://explorer-sphinx.shardeum.org/api/transaction?startCycle=";\n      transactionCount := getTransactionCount(cycleNumberMinusOne, baseUrl)\n      log.Println(transactionCount)\n\n      readJsonLoop(cycleNumberMinusOne,baseUrl,transactionCount)\n\n      time.Sleep(60 * time.Second)\n\n   }\n\n}\n\ntype transactionCountJson struct {\n\tSuccess bool `json:"success"`\n   TotalTransactions int `json:"totalTransactions"`\n}\n\nfunc getTransactionCount(cycleNumber *big.Int, baseUrl string) (x int) {\n\n   getRequestUrl := \n      baseUrl +\n      cycleNumber.String()+\n      "&endCycle="+\n      cycleNumber.String();\n   log.Println(getRequestUrl)\n\n   resp, err := http.Get(getRequestUrl)\n   if err != nil {\n      log.Fatalln(err)\n   }\n\n   rawBodyBytes, err := ioutil.ReadAll(resp.Body)\n   if err != nil {\n      log.Fatalln(err)\n   }\n\n   var transactionCountJsonInstance transactionCountJson\n\n   err = json.Unmarshal(rawBodyBytes, &transactionCountJsonInstance)\n   if err != nil {\n      log.Fatalln(err)\n   }\n\n   return transactionCountJsonInstance.TotalTransactions;\n}\n\nfunc readJsonLoop(cycleNumber *big.Int, baseUrl string, totalTransactions int) {\n\n   total := totalTransactions;\n   pageIndex := 1;\n\n   for total > 0 {\n\n      getRequestUrl := \n         baseUrl+\n         cycleNumber.String()+\n         "&endCycle="+\n         cycleNumber.String()+\n         "&page=" + \n         strconv.Itoa(pageIndex)\n      log.Println(getRequestUrl)\n\n      resp, err := http.Get(getRequestUrl)\n      if err != nil {\n         log.Fatalln(err)\n      }\n   \n      rawBodyBytes, err := ioutil.ReadAll(resp.Body)\n      if err != nil {\n         log.Fatalln(err)\n      }\n   \n      log.Printf(string(rawBodyBytes))\n\n      total -= 10;\n      pageIndex++;\n   }\n\n}\n\nfunc clientSetup(wssConnectionURL string) (client *ethclient.Client, chainID *big.Int) {\n\n   client, err := ethclient.Dial(wssConnectionURL) //Also works with HTTPS connections. \n   if err != nil {\n       log.Fatal(err)\n   }\n \n   chainID, err = client.NetworkID(context.Background())\n   if err != nil {\n      log.Fatal(err)\n   }\n   return\n}\n'})})}),(0,a.jsx)(o.A,{value:"rust",label:"Rust",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'use serde_json;\nuse ethers_providers::{Middleware, Provider, Http};\nuse std::thread::{sleep};\nuse std::time::{Duration};\n\n#[tokio::main]\nasync fn main() {\n\n    let rpc_shardeum_https = "https://sphinx.shardeum.org/";\n\n    let provider = Provider::<Http>::try_from(rpc_shardeum_https).expect("could not instantiate HTTP Provider");\n\n    let chainid = provider.get_chainid().await.unwrap();\n    println!("Got chainid: {}", chainid);\n\n    loop{\n\n        let current_block_number = provider.get_block_number().await.unwrap();\n        println!("current_block_number: {:?}", current_block_number);\n\n        let current_cycle_number = current_block_number/10;\n        println!("current_cycle_number: {:?}", current_cycle_number);\n\n        let current_cycle_number_minus_one = current_cycle_number-1;\n        println!("current_cycle_number: {:?}", current_cycle_number_minus_one);\n\n        let base_url = String::from("https://explorer-sphinx.shardeum.org/api/transaction?startCycle=");\n\n        let transaction_count : u64 = get_transaction_count(current_cycle_number_minus_one.as_u64().clone(), base_url.clone()).await;    \n        println!("transaction_count: {:#?}", transaction_count);\n        \n        read_json_loop(current_cycle_number_minus_one.as_u64().clone(), base_url.clone(), transaction_count).await;\n\n        sleep(Duration::from_millis(60000)); // Sleep for 60 seconds.\n\n    }\n\n}\n\nasync fn get_transaction_count(cycle_number: u64, base_url: String) -> u64   {\n\n    let get_request_url = \n        base_url +\n        &cycle_number.to_string() +\n        "&endCycle=" +\n        &cycle_number.to_string();\n    println!("getRequestUrl: {:#?}", get_request_url);\n\n    let new_todo: serde_json::Value = reqwest::Client::new()\n        .get(get_request_url)\n        .send()\n        .await.unwrap()\n        .json()\n        .await.unwrap();\n\n    println!("JSON raw response: {:#?}", new_todo);\n    println!("{:#?}", new_todo["success"]);\n    println!("{:#?}", new_todo["totalTransactions"]);\n    println!("{:#?}", new_todo["totalTransactions"].as_u64().unwrap());\n\n    return new_todo["totalTransactions"].as_u64().unwrap();\n\n}\n\nasync fn read_json_loop(cycle_number: u64, base_url: String, total_transactions: u64) {\n\n   let mut total : i64 = total_transactions as i64; //Convert value to be signed so we do not have an underflow error when the value become negative.\n   let mut page_index = 1;\n\n   while total > 0 {\n\n        let get_request_url = \n            base_url.clone() +\n            &cycle_number.to_string() +\n            "&endCycle=" +\n            &cycle_number.to_string() +\n            "&page=" + \n            &page_index.to_string();\n        println!("getRequestUrl: {:#?}", get_request_url);\n\n        let new_todo: serde_json::Value = reqwest::Client::new()\n            .get(get_request_url)\n            .send()\n            .await.unwrap()\n            .json()\n            .await.unwrap();\n    \n        println!("JSON raw response: {:#?}", new_todo);\n\n        total -= 10;\n        page_index += 1;\n    }   \n    \n}\n'})})})]})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},9365:(n,e,t)=>{t.d(e,{A:()=>l});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(n){let{children:e,hidden:t,className:l}=n;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:e})}},1470:(n,e,t)=>{t.d(e,{A:()=>f});var r=t(6540),a=t(8215),s=t(3104),l=t(6347),o=t(205),i=t(7485),c=t(1682),u=t(679);function d(n){return r.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,r.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:t}=n;return(0,r.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:t,attributes:r,default:a}}=n;return{value:e,label:t,attributes:r,default:a}}))}(t);return function(n){const e=(0,c.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function g(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:t}=n;const a=(0,l.W6)(),s=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((n=>{if(!s)return;const e=new URLSearchParams(a.location.search);e.set(s,n),a.replace({...a.location,search:e.toString()})}),[s,a])]}function m(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,s=p(n),[l,i]=(0,r.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=t.find((n=>n.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[c,d]=h({queryString:t,groupId:a}),[m,b]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((n=>{t&&s.set(n)}),[t,s])]}({groupId:a}),y=(()=>{const n=c??m;return g({value:n,tabValues:s})?n:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((n=>{if(!g({value:n,tabValues:s}))throw new Error(`Can't select invalid tab value=${n}`);i(n),d(n),b(n)}),[d,b,s]),tabValues:s}}var b=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(4848);function w(n){let{className:e,block:t,selectedValue:r,selectValue:l,tabValues:o}=n;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=n=>{const e=n.currentTarget,t=i.indexOf(e),a=o[t].value;a!==r&&(c(e),l(a))},d=n=>{let e=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{const t=i.indexOf(n.currentTarget)+1;e=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(n.currentTarget)-1;e=i[t]??i[i.length-1];break}}e?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:o.map((n=>{let{value:e,label:t,attributes:s}=n;return(0,_.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:n=>i.push(n),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===e}),children:t??e},e)}))})}function v(n){let{lazy:e,children:t,selectedValue:s}=n;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===s));return n?(0,r.cloneElement)(n,{className:(0,a.A)("margin-top--md",n.props.className)}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==s})))})}function x(n){const e=m(n);return(0,_.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,_.jsx)(w,{...e,...n}),(0,_.jsx)(v,{...e,...n})]})}function f(n){const e=(0,b.A)();return(0,_.jsx)(x,{...n,children:d(n.children)},String(e))}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function l(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);