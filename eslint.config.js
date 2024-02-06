const globals = require('globals')
const { configs: eslintConfigs } = require('@eslint/js')
const eslintPluginImport = require('eslint-plugin-import')
const eslintPluginStylistic = require('@stylistic/eslint-plugin')

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        Log: 'readonly',
        Module: 'readonly',
      },
    },
    plugins: {
      ...eslintPluginStylistic.configs['recommended-flat'].plugins,
      import: eslintPluginImport,
    },
    rules: {
      ...eslintConfigs['recommended'].rules,
      ...eslintPluginImport.configs['recommended'].rules,
      ...eslintPluginStylistic.configs['recommended-flat'].rules,
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/max-statements-per-line': ['error', { max: 2 }],
    },
  },
]
