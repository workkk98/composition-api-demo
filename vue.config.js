// vue.config.js

module.exports = {
  configureWebpack: {
    plugins: [
      // eslint-disable-next-line
      require('unplugin-vue2-script-setup/webpack')({ /* options */ }),
    ],
  },
}