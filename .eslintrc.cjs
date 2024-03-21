module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  settings: {
    'vue-i18n': {
      localeDir: [
        {
          pattern: './src/locales/*.{json,json5,yaml,yml}',
          localeKey: 'file',
        },
      ],
      // localeDir: './src/locales/*.{json,json5,yaml,yml}',

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
    'vue/multi-word-component-names': 'off',
  },
}
