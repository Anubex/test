module.exports = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    "prettier-plugin-tailwindcss"
  ],
  importOrder: ['^components/(.*)$', '^store/(.*)$', '^styles/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}