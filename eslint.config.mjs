import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,ts,mjs}'],
        extends: [js.configs.recommended, tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
        languageOptions: {
            globals: { ...globals.browser, process: 'readonly' },
            parserOptions: {
                projectService:true,
            }
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },
    {
        files: ['webpack.*.{js,ts}', 'eslint.config.mjs'],
        languageOptions: {
            globals: globals.node,
        },
    }
);