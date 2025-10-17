import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    typescript: true,
    vue: true,
    stylistic: {
      semi: false,
      quotes: 'single',
    },
  })
)
