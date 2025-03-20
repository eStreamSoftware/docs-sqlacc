// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import path from "path";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SQL Account Documentation",
  tagline: "SQL Account documentation",
  favicon: "img/account-logo.png",
  staticDirectories: ["static"],

  // Set the production url of your site here
  url: "https://example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "plugin-image-zoom",
    [
      path.resolve(__dirname, 'plugins/generate-help-json'),
      {
        docsPath: 'docs',
        outputPath: '/'
      },
    ],
    function aliasPlugin(context, options) {
      return {
        name: 'alias-plugin',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                "@src": path.resolve(__dirname, "src"),
              },
            },
          };
        },
      };
    }
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: [require.resolve("./static/css/custom.css")],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "SQL Account Documentation",
        logo: {
          alt: "SQL Account",
          src: "img/account-logo.png",
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Home",
                href: "https://sql.com.my",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/SQLEstream/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCqgEE2ak1HLaVJf3g_sYgMQ",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eStream Software`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: ".markdown img",
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          // background: "#BADA55",
          // scrollOffset: 0,
          //   container: "#zoom-container",
          //   template: "#zoom-template",
        },
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
};

export default config;
