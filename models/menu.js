'use strict';

module.exports = function MenuModel() {
  return {
    'default': [
      {
        text: 'Herramientas',
        links: [
          {
            text: 'Saldo TUC',
            href: '/tools/tuc'
          },
          {
            text: 'Multas de tránsito',
            href: '/tools/penalties'
          }
        ]
      }
    ],
    'right': [
      {
        text: 'Acerca de',
        href: '/about',
        target: '_self'
      },
      {
        text: 'Github',
        href: 'https://github.com/apinic',
        target: '_blank'
      }
    ]
  };
};
