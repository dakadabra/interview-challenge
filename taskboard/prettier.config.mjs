
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const Config = {
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  endOfLine: 'lf',
  tabWidth: 2,
  semi: true,
  arrowParens: 'always',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,

  // Settings for @trivago/prettier-plugin-sort-imports
  importOrder: ["^@app/(.*)$", "^[./]"],
  importOrderParserPlugins : ['typescript', 'jsx', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};

export default Config;