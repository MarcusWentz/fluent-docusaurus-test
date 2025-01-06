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
    component: ComponentCreator('/docusaurus-template/', '9ae'),
    routes: [
      {
        path: '/docusaurus-template/',
        component: ComponentCreator('/docusaurus-template/', '10f'),
        routes: [
          {
            path: '/docusaurus-template/',
            component: ComponentCreator('/docusaurus-template/', '56e'),
            routes: [
              {
                path: '/docusaurus-template/Developer Guides/supported-wallets',
                component: ComponentCreator('/docusaurus-template/Developer Guides/supported-wallets', '319'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Developer Preview/Build with the Fluentbase SDK',
                component: ComponentCreator('/docusaurus-template/Developer Preview/Build with the Fluentbase SDK', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Developer Preview/Connect to the Fluent Devnet',
                component: ComponentCreator('/docusaurus-template/Developer Preview/Connect to the Fluent Devnet', '4b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Knowledge Base/claim copy 2',
                component: ComponentCreator('/docusaurus-template/Knowledge Base/claim copy 2', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Knowledge Base/claim copy 3',
                component: ComponentCreator('/docusaurus-template/Knowledge Base/claim copy 3', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Knowledge Base/claim copy 4',
                component: ComponentCreator('/docusaurus-template/Knowledge Base/claim copy 4', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Knowledge Base/Fluent Overview',
                component: ComponentCreator('/docusaurus-template/Knowledge Base/Fluent Overview', 'fe6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-template/Resources/Glossary',
                component: ComponentCreator('/docusaurus-template/Resources/Glossary', '6ee'),
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
