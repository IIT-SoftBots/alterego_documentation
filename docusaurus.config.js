// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = "IIT-SoftBots";
const projectName = "alterego_documentation";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AlterEgo',
  tagline: 'Your next robot companion',
  favicon: 'img/favicon.ico',
    // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    }
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ego_social_card.webp', // this is used when linking to the site on social media, chat apps, etc.
      navbar: {
        title: 'AlterEgo',
        logo: {
          alt: 'AlterEgo Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
          //   type: 'docSidebar',
          //   sidebarId: 'setupSidebar',
          //   label: 'Setup',
          //   position: 'left',
          // },
          //  --- COMMENTED OUT FOR NOW ---
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   label: 'Tutorials',
          //   position: 'left',
          // },
          {
            to: '/team',
            label: 'Team',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contact Us',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/NMMI/AlterEgo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Setup',
          //       to: '/docs/setup/intro',
          //     },
          //     // --- COMMENTED OUT FOR NOW ---
          //     // {
          //     //   label: 'Tutorials',
          //     //   to: '/docs/tutorials/intro',
          //     // },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/alterego_robot/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/playlist?list=PLzEoYml21jz7iQs2PxzNA6aJ-_gE1JQ7K', //TODO: open our YouTube channel and add the link here
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // X SOCIAL NETWORK
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Team',
                to: '/team',
              },
              {
                label: 'Contact Us',
                to: '/contact',
              },
              // Uncomment if you want to link github also in the footer
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/NMMI/AlterEgo',
              // },
            ],
          },
        ],


        copyright: `
          <div style="display: flex; justify-content: center; align-items: center; gap: 30px; margin-bottom: 20px; margin-top: 50px; flex-wrap: wrap;">
            <a href="https://softbots.iit.it/" target="_blank" rel="noopener noreferrer">
              <img src="/alterego_documentation/logos/softbot.png" alt="Soft Bots Logo" style="height: 60px;" />
            </a>

            <a href="https://www.qbrobotics.com/" target="_blank" rel="noopener noreferrer">
              <img src="/alterego_documentation/logos/qb_robotics.png" alt="qb robotics Logo" style="height: 60px;" />
            </a>
            <a href="https://www.centropiaggio.unipi.it/" target="_blank" rel="noopener noreferrer">
              <img src="/alterego_documentation/logos/centropiaggio.png" alt="Centro Piaggio Logo" style="height: 60px;" />
            </a>
            <a href="https://contact.iit.it/" target="_blank" rel="noopener noreferrer">
              <img src="/alterego_documentation/logos/contact.png" alt="Soft Bots Logo" style="height: 60px;" />
            </a>
          </div>
          <p>Copyright © ${new Date().getFullYear()} - Built with Docusaurus.</p>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};



export default config;
