import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";  // Импортируем TypeScript парсер

export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},

    // Установка глобальных переменных и среды
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                __IS_DEV__: true, // Добавление глобальной переменной
            },
            parser: tsParser,  // Указываем TypeScript парсер как объект
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },

    // Подключение рекомендованных конфигураций
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    // Расширение конфигураций
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            '@typescript-eslint/no-unused-vars': "warn",


        },
    },
];
