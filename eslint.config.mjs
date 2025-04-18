// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
// });

// const eslintConfig = [
//     ...compat.extends('next/core-web-vitals', 'next/typescript'),
//     {
//         rules: {
//             'react-hooks/exhaustive-deps': 'off',
//             '@typescript-eslint/no-unused-vars': 'off',
//             '@typescript-eslint/no-explicit-any': 'off',
//             '@typescript-eslint/ban-ts-comment': 'off',
//             '@typescript-eslint/no-unsafe-assignment': 'off',
//         },
//     },
// ];

// export default eslintConfig;

import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import { next } from '@next/eslint-plugin-next';

export default [
    ...tseslint.configs.recommended,
    ...next(['core-web-vitals']),
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: true,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
        },
    },
];
