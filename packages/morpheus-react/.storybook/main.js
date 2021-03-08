const scss = require('../config/rules/scss');

module.exports = {
  stories: [
    './generalStories/*.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(scss);
    return config;
  },
};
