module.exports = {
    customSyntax: 'postcss-scss',
    extends: ['stylelint-config-standard-scss'],
    rules: {
        // CSS Modules often use camelCase/PascalCase classnames
        'selector-class-pattern': null,

        // Allow SCSS `//` comments
        'no-invalid-double-slash-comments': null,
        indentation: 4,
    },
};
