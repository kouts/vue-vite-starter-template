import { config } from '@kouts/eslint-config'

export default [
  ...config({
    ts: false,
    vueVersion: 2,
  }),
  {
    // Disable multi-word-component-names for pages and layouts
    files: ['src/views/**/*.vue', 'src/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
