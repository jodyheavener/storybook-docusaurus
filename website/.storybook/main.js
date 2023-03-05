module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "storybook-framework-docusaurus",
    "options": {
      "fastRefresh": true,
      "ignoreClientModules": [
        "ignored-custom-plugin"
      ],
      "ignoreWebpackConfigs": [
        "ignored-custom-plugin"
      ]
    },
  },
  "docs": {
    "autodocs": false
  },
  "staticDirs": ['../static'],
}
