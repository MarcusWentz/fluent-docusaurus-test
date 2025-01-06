"use strict";(self.webpackChunkshardeum_docs=self.webpackChunkshardeum_docs||[]).push([[6327],{6428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"storage/ipfsAndFilecoin","title":"IPFS And Filecoin","description":"Decentralized content based storage","source":"@site/docs/storage/ipfsAndFilecoin.md","sourceDirName":"storage","slug":"/storage/ipfsAndFilecoin","permalink":"/docusaurus-template/storage/ipfsAndFilecoin","draft":false,"unlisted":false,"editUrl":"https://github.com/Shardeum/shardeum-docs/tree/master/docs/storage/ipfsAndFilecoin.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"IPFS And Filecoin","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"EVM Storage","permalink":"/docusaurus-template/storage/storageEVM"},"next":{"title":"Crust Network","permalink":"/docusaurus-template/storage/crust"}}');var a=t(4848),o=t(8453),s=t(1470),i=t(9365);const l={title:"IPFS And Filecoin",sidebar_position:2},u=void 0,c={},d=[{value:"Decentralized content based storage",id:"decentralized-content-based-storage",level:2},{value:"How to upload to IPFS?",id:"how-to-upload-to-ipfs",level:2},{value:"How to download from IPFS?",id:"how-to-download-from-ipfs",level:2},{value:"Mint an NFT on Shardeum using IPFS and Filecoin",id:"mint-an-nft-on-shardeum-using-ipfs-and-filecoin",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"decentralized-content-based-storage",children:"Decentralized content based storage"}),"\n",(0,a.jsx)(n.p,{children:"IPFS and Filecoin together are used for decentralized storage for large data files."}),"\n",(0,a.jsx)(n.p,{children:"IPFS (InterPlanetary File System) is a file sharing protocol."}),"\n",(0,a.jsx)(n.p,{children:"On IPFS, data is accessed based on a:"}),"\n",(0,a.jsx)(n.p,{children:"CID (Content Identifier)"}),"\n",(0,a.jsx)(n.p,{children:"In contrast, HTTPS data is accessed based on a location with a:"}),"\n",(0,a.jsx)(n.p,{children:"Network IP Address (OSI Layer 3)\nSession Port (OSI Layer 5)"}),"\n",(0,a.jsx)(n.p,{children:"Storage space is competitive on IPFS. You can pin your data and have others pin your data.\nHowever, if all pins go down for that data, that data will not be stored anymore on IPFS."}),"\n",(0,a.jsx)(n.p,{children:"Filecoin is used to keep IPFS content active for simplicity."}),"\n",(0,a.jsx)(n.h2,{id:"how-to-upload-to-ipfs",children:"How to upload to IPFS?"}),"\n",(0,a.jsx)(n.p,{children:"Easily write to IPFS using Fleek:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://fleek.co/",children:"https://fleek.co/"})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-download-from-ipfs",children:"How to download from IPFS?"}),"\n",(0,a.jsx)(n.p,{children:"In the Brave Web Browser, search for this IPFS CID URL:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ipfs://Qma1bfuubpepKn7DLDy4NPSKDeT3S4VPCNhu6UmdGrb6YD\n"})}),"\n",(0,a.jsx)(n.h2,{id:"mint-an-nft-on-shardeum-using-ipfs-and-filecoin",children:"Mint an NFT on Shardeum using IPFS and Filecoin"}),"\n",(0,a.jsx)(n.p,{children:"Shardeum logo hosted on IPFS and Filecoin using Fleek:"}),"\n",(0,a.jsx)("img",{src:"https://ipfs.fleek.co/ipfs/bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq",alt:"shardeumLogo"}),"\n",(0,a.jsx)(n.p,{children:"Mint NFT with Shardeum logo using ERC-721 imported OpenZeppelin library."}),"\n",(0,a.jsx)(n.p,{children:"Note: put the IPFS CID:"}),"\n",(0,a.jsx)(n.p,{children:"bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq"}),"\n",(0,a.jsx)(n.p,{children:"instead of the IPFS gateway URL:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://ipfs.fleek.co/ipfs/bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq",children:"https://ipfs.fleek.co/ipfs/bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq"})}),"\n",(0,a.jsx)(n.p,{children:"since gateways can go down."}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"solidity",label:"Solidity",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity 0.8.17;\n\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\n\ncontract ShardeumLogoNFT is ERC721URIStorage {\n\n  constructor() ERC721 ("shardeumLogo", "SL"){\n    _safeMint(msg.sender, 1); //Mint NFT with tokenId = 1.\n    _setTokenURI(1, "bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq"); //For tokenId = 1, set IPFS CID for image data.\n  }\n\n}\n'})})})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),a=t(8215),o=t(3104),s=t(6347),i=t(205),l=t(7485),u=t(1682),c=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function I(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(I,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);