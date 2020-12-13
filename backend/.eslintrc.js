// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'node'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
  },
};
