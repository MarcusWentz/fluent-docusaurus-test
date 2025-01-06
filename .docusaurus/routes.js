import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-template/__docusaurus/debug',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug', '14a'),
    exact: true
  },
  {
    path: '/docusaurus-template/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug/config', '7e2'),
    exact: true
  },
  {
    path: '/docusaurus-template/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug/content', '960'),
    exact: true
  },
  {
    path: '/docusaurus-template/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug/globalData', '43d'),
    exact: true
  },
  {
    path: '/docusaurus-template/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug/metadata', '2ea'),
    exact: true
  },
  {
    path: '/docusaurus-template/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug/registry', '6ff'),
    exact: true
  },
  {
    path: '/docusaurus-template/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus-template/__docusaurus/debug/routes', '303'),
    exact: true
  },
  {
    path: '/docusaurus-template/markdown-page',
    component: ComponentCreator('/docusaurus-template/markdown-page', '59e'),
    exact: true
  },
  {
    path: '/docusaurus-template/search',
    component: ComponentCreator('/docusaurus-template/search', 'b74'),
    exact: true
  },
  {
    path: '/docusaurus-template/test',
    component: ComponentCreator('/docusaurus-template/test', '6cf'),
    exact: true
  },
  {
    path: '/docusaurus-template/',
    component: ComponentCreator('/docusaurus-template/', '18d'),
    routes: [
      {
        path: '/docusaurus-template/',
        component: ComponentCreator('/docusaurus-template/', 'f5b'),
        routes: [
          {
            path: '/docusaurus-template/',
            component: ComponentCreator('/docusaurus-template/', '62e'),
            routes: [
              {
                path: '/docusaurus-template/faqs/general',
                component: ComponentCreator('/docusaurus-template/faqs/general', '2f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/faqs/shardeum-liberty',
                component: ComponentCreator('/docusaurus-template/faqs/shardeum-liberty', '263'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/faqs/technology',
                component: ComponentCreator('/docusaurus-template/faqs/technology', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/faqs/validators',
                component: ComponentCreator('/docusaurus-template/faqs/validators', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/faucet/claim',
                component: ComponentCreator('/docusaurus-template/faucet/claim', '9a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/faucet/faucetStatistics',
                component: ComponentCreator('/docusaurus-template/faucet/faucetStatistics', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/introduction/consensus',
                component: ComponentCreator('/docusaurus-template/introduction/consensus', '154'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/introduction/dynamicstatesharding',
                component: ComponentCreator('/docusaurus-template/introduction/dynamicstatesharding', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/introduction/evm',
                component: ComponentCreator('/docusaurus-template/introduction/evm', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/introduction/opcodes',
                component: ComponentCreator('/docusaurus-template/introduction/opcodes', '988'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/introduction/Sharding',
                component: ComponentCreator('/docusaurus-template/introduction/Sharding', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/introduction/what-is-shardeum',
                component: ComponentCreator('/docusaurus-template/introduction/what-is-shardeum', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/network/endpoints',
                component: ComponentCreator('/docusaurus-template/network/endpoints', '434'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/network/explorer',
                component: ComponentCreator('/docusaurus-template/network/explorer', 'e65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/node/run/archive',
                component: ComponentCreator('/docusaurus-template/node/run/archive', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/node/run/rpc',
                component: ComponentCreator('/docusaurus-template/node/run/rpc', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/node/run/validator',
                component: ComponentCreator('/docusaurus-template/node/run/validator', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/node/types',
                component: ComponentCreator('/docusaurus-template/node/types', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/oracles/supraoracles',
                component: ComponentCreator('/docusaurus-template/oracles/supraoracles', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/deploy/foundry',
                component: ComponentCreator('/docusaurus-template/smartContracts/deploy/foundry', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/deploy/hardhat',
                component: ComponentCreator('/docusaurus-template/smartContracts/deploy/hardhat', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/deploy/remix',
                component: ComponentCreator('/docusaurus-template/smartContracts/deploy/remix', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/deploy/sameAddress',
                component: ComponentCreator('/docusaurus-template/smartContracts/deploy/sameAddress', '3fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/deploy/truffle',
                component: ComponentCreator('/docusaurus-template/smartContracts/deploy/truffle', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/EIP-2930/multicallContract',
                component: ComponentCreator('/docusaurus-template/smartContracts/EIP-2930/multicallContract', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/EIP-2930/solidityInterfaces',
                component: ComponentCreator('/docusaurus-template/smartContracts/EIP-2930/solidityInterfaces', '112'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/events/pollEvents',
                component: ComponentCreator('/docusaurus-template/smartContracts/events/pollEvents', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/tokens/addressList',
                component: ComponentCreator('/docusaurus-template/smartContracts/tokens/addressList', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/tokens/ERC-1155',
                component: ComponentCreator('/docusaurus-template/smartContracts/tokens/ERC-1155', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/tokens/ERC-20',
                component: ComponentCreator('/docusaurus-template/smartContracts/tokens/ERC-20', 'd0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/smartContracts/tokens/ERC-721',
                component: ComponentCreator('/docusaurus-template/smartContracts/tokens/ERC-721', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/storage/crust',
                component: ComponentCreator('/docusaurus-template/storage/crust', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/storage/ipfsAndFilecoin',
                component: ComponentCreator('/docusaurus-template/storage/ipfsAndFilecoin', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/storage/lighthouse',
                component: ComponentCreator('/docusaurus-template/storage/lighthouse', '329'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/storage/pinata',
                component: ComponentCreator('/docusaurus-template/storage/pinata', '272'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/storage/storageEVM',
                component: ComponentCreator('/docusaurus-template/storage/storageEVM', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/wallets/metamask/add-shardeum-network',
                component: ComponentCreator('/docusaurus-template/wallets/metamask/add-shardeum-network', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/wallets/metamask/create-account',
                component: ComponentCreator('/docusaurus-template/wallets/metamask/create-account', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/wallets/metamask/installing',
                component: ComponentCreator('/docusaurus-template/wallets/metamask/installing', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/wallets/metamask/introduction',
                component: ComponentCreator('/docusaurus-template/wallets/metamask/introduction', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/wallets/metamask/sending-transactions',
                component: ComponentCreator('/docusaurus-template/wallets/metamask/sending-transactions', '08a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/wallets/supported-wallets',
                component: ComponentCreator('/docusaurus-template/wallets/supported-wallets', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/',
                component: ComponentCreator('/docusaurus-template/', 'bb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
