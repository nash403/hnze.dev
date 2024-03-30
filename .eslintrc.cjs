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
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'always',
    //       normal: 'never',
    //       component: 'always',
    //     },
    //   },
    // ],

    // Tailwind CSS
    'tailwindcss/no-custom-classname': 'off',
  },
}
