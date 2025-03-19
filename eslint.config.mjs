import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },

  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  { ignores: ['node_modules/*', 'dist/*', 'build/*', 'public/*', '.next/*'] },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-dom',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-dom', 'next'],
        },
      ],
    },
  },
];
