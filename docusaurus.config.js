// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubRepoName = "CS1101S-teach";
const githubRepoLink = `https://github.com/shenyih0ng/${githubRepoName}`;

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NUS AY23/24 CS1101S",
  url: "https://1101s.wiki/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shenyih0ng",
  projectName: githubRepoName,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: githubRepoLink + "/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          exclude: ["**/extras/**", "**/mastery-check/**", "week-[0][3-9].md", "week-1[0-3].md"]
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "NUS AY23/24 CS1101S",
        logo: {
          alt: "lambda",
          src: "img/logo.svg",
        },
        items: [
          {
            href: githubRepoLink,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Source Academy / SICP",
            items: [
              {
                label: "SICP JS",
                href: "https://sourceacademy.nus.edu.sg/sicpjs/index",
              },
              {
                label: "Source Academy @ NUS",
                href: "https://sourceacademy.nus.edu.sg/",
              },
              {
                label: "Source Academy Repositories",
                href: "https://github.com/source-academy/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
