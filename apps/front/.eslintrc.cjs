module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'prettier',
  ],
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
    // for React
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['plugin:react/recommended'],
      parser: '@typescript-eslint/parser',
      plugins: ['react'],
      rules: {
        // FIXME React18なので本来怒られないはずだが怒られてしまうので設定している
        'react/react-in-jsx-scope': 'off',
      },
    },
    // for Astro
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        node: true,
      },
      rules: {},
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * importの自動整理
     * https://github.com/import-js/eslint-plugin-import
     */
    'import/order': [
      'error',
      {
        // 並ぶ順番
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        // パターン指定してグループ化する
        // react import群を external の前に
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        // react を外部importと分離する
        pathGroupsExcludedImportTypes: ['react'],
        // groups 間に１行あける
        'newlines-between': 'always',
        // アルファベット順
        alphabetize: {
          order: 'asc',
          // 大文字小文字区別しない
          caseInsensitive: true,
        },
      },
    ],
    // 未使用のimportを自動削除
    'unused-imports/no-unused-imports': 'warn',
  },
};
