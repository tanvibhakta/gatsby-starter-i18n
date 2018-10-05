module.exports = {
    'extends': 'airbnb',
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ],
    'rules': {
        'semi': 0,
        'comma-dangle': 0,
        'global-require': 0,
        'react/prop-types': 0,
        'import/no-unresolved': 0,
        'import/no-webpack-loader-syntax': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'react/prefer-stateless-function': 0,
        'react/no-danger': 0,
        'no-multi-spaces': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'arrow-body-style': 0,
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'camelcase': 0,
        'indent': ['error', 'tab'],
        'no-tabs': 0,
        'react/jsx-indent': 0,
        'no-console': 0,
        'import/prefer-default-export': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/no-unescaped-entities': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-filename-extension': 0,
        'function-paren-newline': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-indent-props': 0,
        'import/no-extraneous-dependencies': 0,
        'object-curly-newline': 0,
        'no-restricted-globals': 0,
        'arrow-parens': 0,
        'import/no-useless-path-segments': 0,
        'import/no-cycle': 0
    },
    'parser': 'babel-eslint',
    'globals': {
        'location': 1,
        'alert': 1,
        'fetch': 1,
        'graphql': 1,
        'document': 1,
        'localStorage': 1,
        '__PATH_PREFIX__': 1
    }
};