const prettier = require('./.prettierrc.json');

module.exports = {
  settings:{
    react:{
      "version": "detect",
    },
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:react/jsx-runtime',
      ],
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'react/prop-types': 'off',
        'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
        'arrow-parens': ['error', 'always'],
      },
      plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier',  'unused-imports'],
  rules: {
    'prettier/prettier': ['warn', prettier],
    "unused-imports/no-unused-imports": "error",
  },
};
