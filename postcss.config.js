import postcssPurgecss from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'

const IN_PRODUCTION = process.env.NODE_ENV === 'production'

export default {
  plugins: [
    autoprefixer,
    IN_PRODUCTION &&
      postcssPurgecss({
        content: ['./**/*.html', './src/**/*.vue'],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')

          return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /^navbar-nav/,
        ],
      }),
  ],
}
