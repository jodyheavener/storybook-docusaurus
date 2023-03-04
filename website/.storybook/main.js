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
      "ignorePlugins": [
        "docusaurus-mdx-fallback-plugin"
      ]
    },
  },
  "docs": {
    "autodocs": false
  }
}
