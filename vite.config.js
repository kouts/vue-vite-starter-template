import { minifyHtml, injectHtml } from 'vite-plugin-html'
import legacy from '@vitejs/plugin-legacy'
const path = require('path')
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [
    createVuePlugin(),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: 'ProjectName',
        description: 'A single page application created using Vue.js'
      }
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
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
