module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:tailwindcss/recommended',
  ],
  settings: {
    'vue-i18n': {
      localeDir: [
        {
          pattern: './src/locales/*.{json,json5,yaml,yml}',
          localeKey: 'file',
        },
      ],
      messageSyntaxVersion: '^9.10.2',
    },
  },
  rules: {
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', { allow: ['error', 'warn'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'object-shorthand': ['error', 'always'],

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
            'aria-label',
            'aria-placeholder',
            'aria-roledescription',
            'aria-valuetext',
          ],
          input: ['placeholder'],
          img: ['alt'],
        },
        ignoreNodes: [],
        ignorePattern: '^[-#:()&]+$',
        ignoreText: ['EUR', 'HKD', 'USD'],
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
}
