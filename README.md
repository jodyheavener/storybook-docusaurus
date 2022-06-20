# storybook-addon-docusaurus

A Storybook addon that allows you to work with Docusaurus components (kind of)

The purpose of this addon is to provide Storybook with the information it needs to resolve the many module aliases Docusaurus uses, such as `@docusaurus`, `@generated`, `@site`, `@theme`, and much more, as well as autmatically import the default theme styles.

⚠️ **This is a work in progress**, and there are some notable caveats/gaps:

- Currently hard-coded to work with the [classic theme](https://docusaurus.io/docs/next/api/themes/@docusaurus/theme-classic).
- Mostly handles `@theme`, `@theme-original`, and `@theme-init`, but does not currently incorporate components introduced via plugins.
- Does currently not import theme `customCSS`.

If you have time and would like to improve this addon please go ahead and open a PR!

## Usage

Here's how to use this addon:

- Storybook needs to be [set up](https://storybook.js.org/docs/react/get-started/install) in your project.
- Install the dependency with `yarn add --dev storybook-addon-docusaurus` or `npm i --save-dev storybook-addon-docusaurus`
- Add `storybook-addon-docusaurus`  it to the list of `addons` in `./storybook/main.js`. [Learn more.](https://storybook.js.org/docs/react/addons/install-addons/)
- You should now be able to import components that uses Docusaurus aliases.

## License

MIT

## Acknowledgement

This addon was originally conceptualized from the [Storybook config](https://github.com/Unleash/unleash/blob/main/website/.storybook/main.js) found in the [Unleash/unleash repo](https://github.com/Unleash/unleash) ([LICENCE](https://github.com/Unleash/unleash/blob/main/LICENSE)).
