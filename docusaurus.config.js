module.exports = {
  title: 'Can You Hear Me?',
  tagline: 'For all your confusing audio-video menagerie',
  url: 'https://jacksonmgoode.github.io',
  baseUrl: '/canyouhearme/',
  favicon: 'img/mct-logo.ico',
  organizationName: 'jacksonmgoode', // Usually your GitHub org/user name.
  projectName: 'canyouhearme', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CYHM?',
      logo: {
        alt: 'MCT Logo',
        src: 'img/mct-logo.png',
      },
      // items: [
      //   {
      //     to: "wiki/",
      //     label: "Wiki",
      //     position: "left",
      //   },
      //   {
      //     to: "guides/",
      //     activeBasePath: "guides",
      //     label: "Guides",
      //     position: "left",
      //   }
      // ],
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        {
          to: 'guides/overview',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left'},
        {
          href: 'https://github.com/MCT-master',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'Overview',
              to: 'wiki/overview',
            },
            {
              label: 'About',
              to: 'wiki/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rzcKcxy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MCT-master',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MCT_master',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Music, Communications and Technology`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebarsWiki.js'),
          editUrl:
            'https://github.com/jacksonmgoode/canyouhearme/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "overview", // for first plugin-content-docs with "resources/" path
        homePageId: "guides",
        path: "./guides", // Path to data on filesystem, relative to site dir.
        routeBasePath: "guides", // URL Route.
        include: ["**/*.mdx"],
        sidebarPath: require.resolve("./sidebarsGuides.js"),
        disableVersioning: true, // if not set with vesions, throw: Identifier 'React' has already been declared
      },
    ],
  ],
};
