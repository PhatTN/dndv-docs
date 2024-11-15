import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ĐNĐV - Trung tâm hỗ trợ",
  tagline: "Hướng dẫn sử dụng Đúng Người Đúng Việc",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://help.dungnguoidungviec.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dndv", // Usually your GitHub org/user name.
  projectName: "dndv-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  presets: [
    [
      "classic",
      {
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: "ĐNĐV",
      logo: {
        alt: "Đúng Người Đúng Việc Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "consultingSidebar",
          position: "left",
          label: "Tư vấn 1-1",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "seekingJobsSidebar",
        //   position: "left",
        //   label: "Tìm việc",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "recruitmentSidebar",
        //   position: "left",
        //   label: "Tuyển dụng",
        // },
        {
          href: "https://dungnguoidungviec.com",
          label: "Trang chủ",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        // {
        //   title: "Tài liệu",
        //   items: [
        //     {
        //       label: "Tư vấn 1-1",
        //       to: "/docs/tu-van/tutorial-basics/create-a-page",
        //     },
        //   ],
        // },
        {
          title: "Link nhanh",
          items: [
            {
              label: "Tư vấn 1-1",
              href: "https://dungnguoidungviec.com/tu-van",
            },
            {
              label: "Tìm Mentor",
              href: "https://dungnguoidungviec.com/mentor/tim-kiem",
            },
          ],
        },
        {
          title: "Mạng xã hội",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/dungnguoidungvieccommunity",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/dungnguoidungviec",
            },
            {
              label: "Tiktok",
              href: "https://www.tiktok.com/@dungnguoidungviecc",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@dungnguoidungviec",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Đúng Người Đúng Việc`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
