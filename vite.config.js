import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const transformHtmlPlugin = (data) => ({
  name: 'transform-html',
  transformIndexHtml: {
    order: 'pre',
    handler(html) {
      return html.replace(/<%=\s*(\w+)\s*%>/gi, (match, p1) => data[p1] || '')
    },
  },
})

export default defineConfig({
  plugins: [
    vue(),
    transformHtmlPlugin({
      title: 'ProjectName',
      description: 'A single page application created using Vue.js',
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        additionalData: `@import "./src/scss/variables.scss";`,
      },
    },
  },
})
