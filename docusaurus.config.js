module.exports = {
  title: 'Can You Hear Me?',
  tagline: 'Wiki, guides, and comparisons for the endless software solutions available today',
  url: 'https://jacksongoode.github.io',
  baseUrl: '/canyouhearme/',
  favicon: 'img/mct-logo.ico',
  organizationName: 'jacksongoode',
  projectName: 'canyouhearme',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'CYHM?',
      logo: {
        alt: 'MCT Logo',
        src: 'img/mct-logo.png',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        {
          to: 'guides',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left'
        },
        {
          href: 'https://github.com/jacksongoode/canyouhearme',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              to: 'docs',
            },
            {
              label: 'About',
              to: 'docs/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MCT-master',
            },
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
              label: 'Twitter',
              href: 'https://twitter.com/MCT_master',
            },
            {
              label: 'University of Oslo',
              href: 'https://www.uio.no/english/studies/programmes/mct-master/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Music, Communication and Technology`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebarsWiki.js'),
          editUrl:
            'https://github.com/jacksongoode/canyouhearme/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
        path: "./guides", // Path to data on filesystem, relative to site dir.
        routeBasePath: "guides", // URL Route.
        include: ["**/*.mdx"],
        sidebarPath: require.resolve("./sidebarsGuides.js"),
        editUrl:
            'https://github.com/jacksongoode/canyouhearme/edit/master/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};
