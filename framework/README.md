# storybook-framework-docusaurus

🦖 A Storybook framework to aid in developing with [Docusaurus](https://docusaurus.io/). It uses Storybook's new [Frameworks API](https://storybook.js.org/blog/framework-api/).

## Features

- Adds support for Docusaurus module aliases such as `@theme`, `@docusaurus`, `@generated`, and `@site`. [Theme alias](https://docusaurus.io/docs/advanced/client#theme-aliases) loading order is also respected across core theme, plugin-provided, and swizzled components.
- Enables core Docusaurus loaders for JS, SVG, and fonts and other assets. Will prefer [docusaurus-plugin-sass](https://github.com/rlamana/docusaurus-plugin-sass) over Storybook's SASS loader.
- Loads the [client modules](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#getClientModules) and [Webpack configs](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#configureWebpack) from all plugins.
- Applies a global decorator that wraps all components in Docusaurus React contexts, allowing the rendering of all swizzled components.

## Installing and Usage

This framework assumes you're working in a project that already has Docusaurus and Storybook (^7) set up.

### Install the framework

With npm:

```sh
npm i storybook-framework-docusaurus
```

Or with yarn:

```sh
yarn add storybook-framework-docusaurus
```

### Enable the framework

Set `"storybook-framework-docusaurus"` as the `framework` in your Storybook `.storybook/main.js` file.

```json
"framework": {
  "name": "storybook-framework-docusaurus",
  "options": {
    "ignoreClientModules": [
      "ignored-custom-plugin"
    ],
    "ignoreWebpackConfigs": [
      "ignored-custom-plugin"
    ]
  },
},
```

This framework extends [@storybook/react-webpack5](https://www.npmjs.com/package/@storybook/react-webpack5), so you can use all its existing options in addition to the following:

- `ignoreClientModules` will ignore the client modules from the listed Docusaurus plugins.
- `ignoreWebpackConfigs` will ignore the Webpack configs from the listed Docusaurus plugins.

That's it! You should now be able to write stories that make use of Docusaurus components.

## License

MIT
