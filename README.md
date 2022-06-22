# storybook-addon-docusaurus

🦖 A Storybook addon to aid in developing with [Docusaurus](https://docusaurus.io/).

This addon does the following:

- Sets up the many module aliases Docusaurus uses, such as `@theme`, `@docusaurus`, `@generated`, `@site`, etc., so you can work with components in Storybook that reference these modules. `@theme` and its [sibling aliases](https://docusaurus.io/docs/next/advanced/client#theme-aliases) correctly account for components contributed via plugins, as well as Swizzled components.
- Imports all the client modules contributed via plugins, so they are loaded into the Storybook preview window. For example, if you're using the [classic theme](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic) it'll automatically load the Infima global styles and the `customCss` file you've set up.
- Sets up loaders for [CSS modules](https://docusaurus.io/docs/styling-layout#css-modules) and SVGs.

⚠️ This is a work in progress! If you have time and would like to improve this addon please go ahead and open a PR.

## License

MIT
