module.exports = {
  title: "ZMK Firmware",
  tagline: "Modern, open source keyboard firmware",
  url: "https://zmkfirmware.dev",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "zmkfirmware", // Usually your GitHub org/user name.
  projectName: "zmk", // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-145201102-2",
      anonymizeIP: true,
    },
    // sidebarCollapsible: false,
    navbar: {
      title: "ZMK Firmware",
      logo: {
        alt: "ZMK Logo",
        src: "img/zmk_logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/zmkfirmware/zmk",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "Development",
              to: "docs/dev-setup/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            //   {
            //     label: "Stack Overflow",
            //     href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //   },
            {
              label: "Discord",
              href:
                (process.env.URL || "https://zmkfirmware.dev") +
                "/community/discord/invite",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ZMKFirmware",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/zmkfirmware/zmk",
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright ?? ${new Date().getFullYear()} ZMK Project Contributors, Built with Docusaurus.`,
    },
    algolia: {
      apiKey: "75325855fc90356828fe212d38e5ca34",
      indexName: "zmkfirmware",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/zmkfirmware/zmk/edit/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/zmkfirmware/zmk/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
