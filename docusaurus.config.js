// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Fluent Docs',
  tagline: 'Explore Fluent Docs',
  url: 'https://docs.fluent.org',
  baseUrl: '/docusaurus-template/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Fluent', // Usually your GitHub org/user name.
  projectName: 'Fluent-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fluentlabs-xyz/',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: process.env.GTM_ID || 'GTM-XXXXXXX',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "CK38X87BB3",
        apiKey: "6d53d06cfe9c8cb794826061687d47b5",
        indexName: "Fluent"
      },
      imageZoom: {
     // CSS selector to apply the plugin to, defaults to '.markdown img'
     // selector: '.markdown img',
     // Optional medium-zoom options
     // see: https://www.npmjs.com/package/medium-zoom#options
     options: {
       margin: 40,
       background: '#000',
       scrollOffset: 60,
       // container: 'main',
       // template: '#zoom-template',
     },
   },
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'Fluent Docs Logo',
          src:     '/img/fluent_documentation_dark.png',
          srcDark: '/img/fluent_documentation_light.png',
        },

        items: [
          {
            href: 'https://chainlist.org/?search=fluent&testnets=true',
            label: 'Connect to Fluent',
            position: 'left',
            // className: 'navbar_item_button',
          },
          {
            href: 'https://faucet.dev.gblend.xyz/',
            label: 'Claim Testnet ETH Faucet',
            position: 'left',
            // className: 'navbar_item_button',
          },
          {
            href: 'https://blockscout.dev.gblend.xyz/',
            label: 'Block Explorer',
            position: 'left',
            // className: 'navbar_item_button',
          },
          {
            href: 'https://www.google.com/',
            label: 'List dApp on Ecosystem Page',
            position: 'left',
            // className: 'navbar_item_1',
          },
          {
            href: 'https://github.com/fluentlabs-xyz/',
            label: 'Report Bugs Here',
            position: 'left',
            // className: 'navbar_item_2',
          },
          {
            href: 'https://github.com/fluentlabs-xyz/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Home',
                to: 'https://fluent.xyz',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.com/invite/fluentxyz',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/fluentlabs-xyz/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Fluent Logo',
          src: 'img/fluent_logo.png',
          href: 'https://github.com/fluentlabs-xyz/',
          height: 100,
          width: 100
        },
      },
      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ["solidity","python","rust"],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
      }
    }),
  // plugins: ['docusaurus-plugin-sass',
  //           'plugin-image-zoom',
  //           'docusaurus-lunr-search'],
    plugins: ['docusaurus-plugin-sass',
    'plugin-image-zoom'],
};
