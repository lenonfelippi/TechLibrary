const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@assets': 'src/assets',
    '@componentes': 'src/componentes',
    '@contexts': 'src/contexts',
    '@pages': 'src/pages',
    '@styles': 'src/styles'
  })(config);

  return config;
};
