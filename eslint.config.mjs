// @ts-check
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import withNuxt from './.nuxt/eslint.config.mjs'
import tailwindcss from 'eslint-plugin-tailwindcss'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default withNuxt(
  // @ts-expect-error
  ...tailwindcss.configs['flat/recommended'],
  ...vueI18n.configs.recommended,
  {
    settings: {
      'tailwindcss': {
        config: `${dirname(fileURLToPath(import.meta.url))}/app/assets/styles/main.css`,
      },

      'vue-i18n': {
        localeDir: './i18n/locales/*.{json,json5,yaml,yml}',

        // Specify the version of `vue-i18n` you are using.
        // If not specified, the message will be parsed twice.
        messageSyntaxVersion: '^10.0.8',
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

      // Typescript
      '@typescript-eslint/no-explicit-any': 'off',

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

      // I18n
      '@intlify/vue-i18n/no-raw-text': [
        'warn',
        {
          attributes: {
            '/.+/': [
              'title',
              'label',
              'placeholder',
              'aria-label',
              'aria-placeholder',
              'aria-roledescription',
              'aria-valuetext',
            ],
            'input': ['placeholder'],
            'img': ['alt'],
          },
          ignoreNodes: [],
          ignorePattern: '^[-#:()&]+$',
          ignoreText: ['...', 'EUR', 'HKD', 'USD'],
        },
      ],

      '@intlify/vue-i18n/key-format-style': [
        'error',
        'snake_case',
        {
          splitByDots: true,
        },
      ],
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
    },
  },
)
