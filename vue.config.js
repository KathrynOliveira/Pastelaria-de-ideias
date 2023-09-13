const { defineConfig } = require('@vue/cli-service')

const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  rules: {
    'vue/multi-word-component-names': 0,
  },
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@basePath': path.resolve('/src'),
        '@components': path.resolve('/src/components'),
      }
    }
  }
}
