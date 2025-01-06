// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Fluent Docs',
  tagline: 'Explore Fluent Docs',
  url: 'https://docs.Fluent.org',
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
            href: '/network/endpoints#connect-wallet',
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
                to: 'https://Fluent.org',
              },
              {
                href: '/faucet/claim',
                label: 'Claim 100 Testnet SHM',
                position: 'left',

              },
              {
                label: 'Super Shardians',
                to: 'https://Fluent.org/super-shardian/',
              },
              {
                label: 'Blog',
                to: 'https://Fluent.org/blog',
              },
              {
                label: 'Languages',
                to: 'https://docs.Fluent.org/community#global-discord-channels',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Telegram',
              //   to: 'https://t.me/Fluent',
              // },
              {
                label: 'Discord',
                to: 'https://discord.com/invite/fluentxyz',
              },
              // {
              //   label: 'Twitter',
              //   to: 'https://twitter.com/Fluent',
              // },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Litepaper',
                to: 'https://Fluent.org/Fluent-Litepaper.pdf',
              },
              {
                label: 'FAQs',
                to: 'https://docs.google.com/document/d/1RilXqwJN6hupaKdrXhk2RF9gl_DS5qY3uPm6iII3Xyg/edit?usp=sharing',
              },
              {
                label: 'Brand Assets Page',
                to: 'https://drive.google.com/drive/folders/1jdjJNMajHG_QDu_uAXTRrqpXW3AUuiJu',
              },
              {
                label: 'Public Drive Link',
                to: 'https://drive.google.com/drive/folders/1zal5vN3f67Ql-Q8jiSYsp6Nf0xoJuqNI',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'General Inquiries',
                to: 'mailto:hi@Fluent.org',
              },
              {
                label: 'Investment Purpose',
                to: 'mailto:invest@Fluent.org',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/fluentlabs-xyz/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Fluent Logo',
          src: 'img/fluent.png',
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
