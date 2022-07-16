import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
import { resolve } from 'path'

module.exports = defineConfig({
  plugins: [
    createVuePlugin(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ProjectName',
          description: 'A single page application created using Vue.js'
        }
      }
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
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
})
