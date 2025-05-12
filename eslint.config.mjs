import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import parserTypescript from '@typescript-eslint/parser'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config} */ // comentário de tipagem que informa ao TS e ao VSCode qual o tipo de dado que a variável a seguir deve ter
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: parserTypescript
    },
    settings: {
      react: {
        version: 'detect' // eslint detecta automaticamente a versão do react
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // aponta um problema no hooks como erro
      'react-hooks/exhaustive-deps': 'warn', // Alerta sobre dependências em hooks
      'react/prop-types': 'off', // Hoje o TypeScript substitui o prop-types, então ele não é necessário
      'react/react-in-jsx-scope': 'off', // A partir do React 17 ligado, nos obriga a importar o react
      '@typescript-eslint/explicit-module-boundary-types': 'off' // faz não necessário explicitar o tipo de retorno de funções
    }
  }
]

