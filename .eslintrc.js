/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next'],
  settings: {
    next: {
      rootDir: __dirname,
    },
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
} 