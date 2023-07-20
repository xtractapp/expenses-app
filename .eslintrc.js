module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
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
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['import', 'react', '@typescript-eslint'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
};
