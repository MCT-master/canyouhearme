module.exports = {
  title: 'Can You Hear Me?',
  tagline: 'For all confusing audio-video menagerie',
  url: 'https://jacksonmgoode.github.io',
  baseUrl: '/mct-av-wiki/',
  favicon: 'img/mct-logo.ico',
  organizationName: 'jacksonmgoode', // Usually your GitHub org/user name.
  projectName: 'mct-av-wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CYHM?',
      logo: {
        alt: 'MCT Logo',
        src: 'img/mct-logo.png',
      },
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        {to: 'blog', label: 'Guides', position: 'left'},
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
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/overview',
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
              label: 'Discord',
              href: 'https://discord.gg/rzcKcxy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jacksonmgoode/mct-av-wiki/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
