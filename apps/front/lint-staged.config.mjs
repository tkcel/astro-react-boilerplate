export default {
  // tsc コマンドでファイル指定した場合、tsconfig.json が読み込まれない
  // lint-staged の通常設定だと staged されたファイルが引数で渡されてしまい動かなくなるのでメソッド化で回避
  // cf. https://github.com/okonet/lint-staged#user-content-example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
  'src/**/*.{ts?(x),astro}': () => 'tsc -p tsconfig.json --noEmit',
  'src/**/*.{js,jsx,ts,tsx,astro,json}': ['prettier --write', 'eslint --fix'],
  'src/**/*.{css,less,scss,sass}': ['stylelint --fix']
};
