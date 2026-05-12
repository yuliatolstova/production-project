import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
});

export default [
    { ignores: ["dist/**", "build/**", "node_modules/**"] },
    ...compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ),
    {
        rules: {
            // React 17+ JSX transform (no need for `import React`)
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",

            // Project uses lazy chunks with ts-ignore in a few places
            "@typescript-eslint/ban-ts-comment": "off",

        },
    },
    {
        files: ["config/**/*.ts", "config/**/*.tsx"],
        rules: {
            "@typescript-eslint/no-var-requires": "off",
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        rules: {
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "indent": [2, 4],
            "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
