const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-react-router-v6',
    'storybook-addon-styled-component-theme/dist/preset',
    'storybook-addon-recoil-flow/dist/register',
    'storybook-addon-designs',
    '@storybook/addon-storysource'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '..', 'src'),
    };

    return config;
  },
};
