import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';
import pluginVue from 'eslint-plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
   {
      ignores: [
         '.nuxt/**',
         '.output/**',
         '.prettierrc.cjs',
         '.stylelintrc.js',
         'dist/**',
         'eslint.config.mjs',
         'node_modules/**',
         'public/**',
         'yarn.lock',
      ],
   },
   ...compat.config({
      root: true,
      env: {
         browser: true,
         es2022: true,
         node: true,
      },
      extends: [
         'airbnb-base',
         'plugin:@typescript-eslint/recommended',
         'plugin:prettier/recommended',
         'prettier',
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      parserOptions: {
         ecmaVersion: 2022,
         extraFileExtensions: ['.vue'],
         parser: '@typescript-eslint/parser',
         project: ['./tsconfig.json'],
         sourceType: 'module',
         tsconfigRootDir: __dirname,
      },
      rules: {
         '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
         'arrow-parens': ['error', 'as-needed'],
         curly: ['error', 'all'],
         'import/prefer-default-export': 'off',
         'no-console': ['warn', { allow: ['error'] }],
      },
   }),
   ...pluginVue.configs['flat/recommended'],
   {
      languageOptions: {
         globals: {
            clearError: 'readonly',
            navigateTo: 'readonly',
            useHead: 'readonly',
            useNuxtApp: 'readonly',
            useRoute: 'readonly',
            useRouter: 'readonly',
         },
      },
      rules: {
         '@typescript-eslint/no-unused-vars': [
            'error',
            { args: 'after-used', ignoreRestSiblings: true },
         ],
         'import/extensions': 'off',
         'import/no-unresolved': ['error', { ignore: ['^~/', '^#'] }],
         'no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }],
         'no-unused-vars': 'off',
         'vue/html-indent': 'off',
      },
   },
   {
      files: ['**/*.vue'],
      languageOptions: {
         parserOptions: {
            parser: '@typescript-eslint/parser',
         },
      },
      rules: {
         '@typescript-eslint/no-unused-vars': 'off',
         'no-unused-vars': 'off',
         'vue/html-indent': 'off',
         'vue/jsx-sort-props': 'off',
         'vue/max-len': ['warn', { code: 100 }],
         'vue/multi-word-component-names': 'off',
      },
   },
];
