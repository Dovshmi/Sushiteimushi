import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['src/data/deliveryLocations.ts'],
    rules: {
      'no-useless-assignment': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_$' }],
    },
  },
  {
    files: ['**/*.tsx'],
    extends: [
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
  },
])
