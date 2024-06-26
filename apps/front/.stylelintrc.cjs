module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    // キャメルケース と スネークケース が混ざる場合があるので OFFに
    'selector-class-pattern': null,
    // prettierとの兼ね合いが悪いのでOFFに
    'declaration-colon-newline-after': null,
  },
  overrides: [
    {
      files: ['*.astro', '**/*.astro'],
      // `*.astro` では postcss-html を指定しないとシンタックスエラーになってしまう
      customSyntax: 'postcss-html',
    },
  ],
};
