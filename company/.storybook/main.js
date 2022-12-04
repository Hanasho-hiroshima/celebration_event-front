const path = require('path')

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next' // モジュールのパスエラー解消 https://zenn.dev/aqua_minato/articles/527ce757f05ef3
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ]
    return baseConfig
  },
}
