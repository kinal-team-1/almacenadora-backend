module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single'],
    'no-mixed-operators': 'error',
    indent: ['error', 2],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
