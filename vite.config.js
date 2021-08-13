const path = require('path')
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables";`
      }
    }
  }
}
