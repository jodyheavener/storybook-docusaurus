module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-docusaurus"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {
      "fastRefresh": true
    },
  },
  "docs": {
    "autodocs": false
  }
}
