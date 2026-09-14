module.exports = {
    env: {
        jest: true,
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:jest/recommended',
    ],
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
};