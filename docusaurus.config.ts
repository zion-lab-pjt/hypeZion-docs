import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hypezion Finance',
  tagline: 'Stability without Liquidation. Leverage without Funding.',
  favicon: 'img/favicon.png',

  url: 'https://docs.hypezion.finance',
  baseUrl: '/',

  organizationName: 'hypezion',
  projectName: 'hypeZion-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/hypezion-social-card.png',
    navbar: {
      title: 'Hypezion Finance',
      logo: {
        alt: 'Hypezion Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://app.hypezion.com/',
          label: 'Launch App',
          position: 'right',
        },
        {
          href: 'https://github.com/hypezion',
          label: 'GitHub',
          position: 'right',
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
              label: 'Overview',
              to: '/',
            },
            {
              label: 'Protocol',
              to: '/protocol/design-overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hypezion',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/hypezion',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hypezion',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Hypezion Finance. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
