const { description } = require('../../package')
const getConfig = require("vuepress-bar")
const {nav, sidebar} = getConfig()

module.exports = {
  base: '/rhapsody-plugin-tutorial',
  title: 'Rhapsody Plug-in',
  description: description,
  themeConfig: {
    home: false,
    nav,
    sidebar,
  },
}
