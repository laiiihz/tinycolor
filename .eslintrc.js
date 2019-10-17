module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['xo-space/esnext', 'xo-typescript'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-function-return-type': 0,
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'max-params': 0,
    '@typescript-eslint/prefer-string-starts-ends-with': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
  },
};
