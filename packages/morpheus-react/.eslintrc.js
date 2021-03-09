module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  env: {
    es6: true,
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-mutable-exports': 0,
    'no-labels': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/ban-types': 0,
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
};
