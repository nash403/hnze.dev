// @ts-check
import { dirname } from 'path'
import withNuxt from './.nuxt/eslint.config.mjs'
import tailwindcss from 'eslint-plugin-tailwindcss'
import { fileURLToPath } from 'url'

export default withNuxt(
  // @ts-expect-error
  ...tailwindcss.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/app/assets/styles/main.css`,
      },
    },
  },
  {
    // Your custom configs here
    files: ['**/*.?([cm])[jt]s?(x)', '**/*.vue'],
    rules: {
      'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', { allow: ['error', 'warn'] }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'object-shorthand': ['error', 'always'],
      'no-new-native-nonconstructor': 'error',

      // @stylistic
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      // Vue
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
        },
      ],

      // Tailwind CSS
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)
