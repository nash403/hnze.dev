/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{t,j}sx?': [/* 'prettier --write',  */'eslint -c ./eslint.config.mjs --max-warnings=0 --no-warn-ignored --fix'],
  '*.{c,m}js': [/* 'prettier --write',  */'eslint -c ./eslint.config.mjs --max-warnings=0 --no-warn-ignored --fix'],
  '*.vue': ['eslint -c ./eslint.config.mjs --max-warnings=0 --no-warn-ignored --fix'],
  // 'package.json': ['prettier --write'],
}
