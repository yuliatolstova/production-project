/** @type {import("stylelint").Config} */
export default {
    customSyntax: "postcss-scss",
    extends: ["stylelint-config-standard-scss"],
    plugins: ["@stylistic/stylelint-plugin"],

    rules: {
        // CSS Modules often use camelCase/PascalCase classnames
        "selector-class-pattern": null,

        // Allow SCSS `//` comments
        "no-invalid-double-slash-comments": null,
        "@stylistic/indentation": 4, // or 2
    },
    overrides: [
        {
            files: ["**/*.module.scss"],
            rules: {
                "block-no-empty": null,
            },
        },
    ],
};
