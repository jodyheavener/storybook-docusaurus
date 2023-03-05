# storybook-addon-docusaurus

🦖 A Storybook addon to aid in developing with [Docusaurus](https://docusaurus.io/).

## Features

- Adds support for Docusaurus module aliases such as `@theme`, `@docusaurus`, `@generated`, and `@site`. [Theme alias](https://docusaurus.io/docs/advanced/client#theme-aliases) loading order is also respected across core theme, plugin-provided, and swizzled components.
- Enables core Docusaurus loaders for JS, SVG, and fonts and other assets. Will prefer [docusaurus-plugin-sass](https://github.com/rlamana/docusaurus-plugin-sass) over Storybook's SASS loader.
- Loads the [client modules](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#getClientModules) and [Webpack configs](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#configureWebpack) from all plugins.
- Applies a global decorator that wraps all components in Docusaurus React contexts, allowing the rendering of all swizzled components.

## Installing and Usage

This addon assumes you're working in a project that already has Docusaurus and Storybook set up.

### Install the addon

With npm:

```sh
npm i storybook-addon-docusaurus
```

Or with yarn:

```sh
yarn add storybook-addon-docusaurus
```

### Enable the addon

Add `"storybook-addon-docusaurus"` to the list of `addons` in your Storybook `.storybook/main.js` file. [Learn more.](https://storybook.js.org/docs/react/addons/install-addons/)

That's it! You should now be able to write stories that make use of Docusaurus components.

## License

MIT
