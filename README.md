# storybook-addon-docusaurus

🦖 A Storybook addon to aid in developing with [Docusaurus](https://docusaurus.io/).

This addon does the following:

- Applies the core Docusaurus Webpack config.
  - Module aliases such as `@theme`, `@docusaurus`, `@generated`, `@site`, etc. are recognized. This also means `@theme` (and [sibling aliases](https://docusaurus.io/docs/advanced/client#theme-aliases)) respect loading order between core theme, plugin-provided, and Swizzled components.
  - Correctly loads SVG, fonts, and CSS modules the Docusaurus way.
  - Prefers [docusaurus-plugin-sass](https://github.com/rlamana/docusaurus-plugin-sass) over other SASS loaders.
  - Sets up resolution of assets in [`staticDirectories`](https://docusaurus.io/docs/api/docusaurus-config#staticDirectories).
  - Passes the Webpack config through all plugins that have a [`configureWebpack`](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#configureWebpack) method so they can apply their own tweaks.
- Imports all the client modules contributed via plugins that have a [`getClientModules`](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#getClientModules) method, so they are loaded into the Storybook preview window.
  - For example, if you're using the [classic theme](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic) it'll automatically load the Infima global styles and the `customCss` file you've set up.

⚠️ This is a work in progress! If you have time and would like to improve this addon please go ahead and open a PR.

## License

MIT
