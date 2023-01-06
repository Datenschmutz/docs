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
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB'
      },
      de: {
        htmlLang: 'de'
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
      metadata: [{name: 'keywords', content: 'datenschmutz, IT, documentation, docs, guides, how-to, cheat sheets, technical, support, troubleshooting'}],
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
      algolia: {
      // The application ID provided by Algolia
      appId: 'RUM87DTR7N',
      // Public API key: it is safe to commit it
      apiKey: 'f39edca439efb43fa184e501216178bc',
      indexName: 'datenschmutz',
      // Optional: ensures that search results are relevant to the current language and version.
      contextualSearch: true,
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Documenations',
                to: '/docs/intro',
              },
              {
                label: 'Cheat Sheets',
                to: '/cheat-sheets/intro',
              },
              {
                label: 'Projects',
                to: '/Projects',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contribute',
                to: 'https://github.com/Datenschmutz/docs/blob/main/CONTRIBUTING.md',
              },
              {
                label: 'Code of Conduct',
                to: '/CODE_OF_CONDUCT',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Datenschmutz/docs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/datenschmutz',
              },
              //{
              //  label: 'Stack Overflow',
              //  href: 'https://stackoverflow.com/users/20582833/datenschmutz',
              //},
            ],
          },
          {
            title: 'Pages',
            items: [
              {
                label: 'TeamSpeak Badge List',
                to: '/cheat-sheets/teamspeak-badges',
              },
              {
                label: 'Voron Backup Automation',
                to: '/docs/category/voron-backup-automation',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'What does Datenschmutz mean?',
                href: '/datenschmutz',
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
