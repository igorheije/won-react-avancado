module.exports = {
  stories: [
    "../src/Components/**/stories.tsx",
    
  ],
  addons: [
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
