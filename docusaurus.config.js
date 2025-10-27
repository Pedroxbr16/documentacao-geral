// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Base de Conhecimento',
  favicon: 'img/favicon.png',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'PedroxBR16',
  projectName: 'documentação-geral',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',        // docs na raiz
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
      },
    ],
  ],

  scripts: [
    {
      src: '/js/custom.js',
      async: true,
    }
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',

    // 🌙 força modo escuro
    colorMode: {
      defaultMode: 'dark',     
      disableSwitch: true,     
      respectPrefersColorScheme: false, 
    },

    navbar: {
      title: 'Base de Conhecimento',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Todos os Direitos Reservados © ${new Date().getFullYear()} Pedro Justo.`,
    },

    prism: {
      theme: prismThemes.dracula,  
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
