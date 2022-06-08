module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'sonarjs'],
  rules: {
    camelcase: 'warn',
    quotes: [2, 'single'],
    complexity: ['error', 12],
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          jsx: 'never',
          js: 'never',
          tsx: 'never',
          ts: 'never',
          svg: 'always'
        },
      },
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'max-len': [
      'error',
      100,
      {
        ignoreComments: true,
      },
    ],
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': [2, 'always'],
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'sonarjs/cognitive-complexity': ['error', 12],
    'sonarjs/no-one-iteration-loop': ['error'],
    'sonarjs/no-identical-expressions': ['error'],
    'sonarjs/no-use-of-empty-return-value': ['error'],
    'sonarjs/no-extra-arguments': ['error'],
    'sonarjs/no-identical-conditions': ['error'],
    'sonarjs/no-collapsible-if': ['error'],
    'sonarjs/no-collection-size-mischeck': ['error'],
    'sonarjs/no-duplicate-string': ['error'],
    'sonarjs/no-duplicated-branches': ['error'],
    'sonarjs/no-identical-functions': ['error'],
    'sonarjs/no-redundant-boolean': ['error'],
    'sonarjs/no-unused-collection': ['error'],
    'sonarjs/no-useless-catch': ['error'],
    'sonarjs/prefer-object-literal': ['error'],
    'sonarjs/prefer-single-boolean-return': ['error'],
    'sonarjs/no-inverted-boolean-check': ['error'],
  },
  settings: {
    react: {
        version: 'detect',
    },
  }
};
