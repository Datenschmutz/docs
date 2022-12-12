// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Datenschmutz.dev',
  tagline: 'Documentations, How-To\'s and Cheat Sheets',
  url: 'https://docs.datenschmutz.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'Datenschmutz',
  projectName: 'docs',
  deploymentBranch: "gh-pages",

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB'
      },
      de: {
        htmlLang: 'en-GB'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/datenschmutz/docs/tree/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editLocalizedFiles: true,
        },
        blog: false, //{
          //showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/datenschmutz/docs/tree/main',
        //},
        gtag: {
          trackingID: 'G-M0F3MYSGDN',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cheat-sheets',
        path: 'cheat-sheets',
        routeBasePath: 'cheat-sheets',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
          'https://github.com/datenschmutz/docs/tree/main',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editLocalizedFiles: true,
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Datenschmutz.dev',
        logo: {
          alt: 'Datenschmutz Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/cheat-sheets/intro', label: 'Cheat Sheets', position: 'left'},
          {to: '/Projects', label: 'Projects', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/datenschmutz/docs',
            position: 'right',
            className: 'header-github',
            'aria-label': 'GitHub Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs - Home',
                to: '/docs/intro',
              },
              {
                label: 'Cheat Sheets - Home',
                to: '/cheat-sheets/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                to: '/CODE_OF_CONDUCT',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/20582833/datenschmutz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/datenschmutz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'TeamSpeak Badge List',
                to: '/cheat-sheets/teamspeak-badges',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Datenschmutz/docs',
              },
            ],
          },
          {
            title: 'Projects & Friends',
            items: [
              {
                label: 'Projects',
                to: '/Projects',
              },
              {
                label: 'Gaming-Lounge',
                to: 'https://www.gaming-lounge.at',
              },
              {
                label: 'T4KUUY4',
                href: 'https://github.com/T4KUUY4',
              },
            ],
          },
        ],
        logo: {
          alt: 'Datenschmutz logo',
          src: '/img/dmz-logo-main-350x-border.png',
          href: 'https://datenschmutz.org',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Datenschmutz - Built with ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
