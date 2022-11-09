module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'eslint:recommended',
  ],
  plugins: ['react', 'react-native', 'react-hooks'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    /* nice to have */
    // "react-native/no-single-element-style-arrays": 1, // will be activated later
    'react/destructuring-assignment': 2,

    /* because using babel absolute import */
    'import/no-unresolved': 'off',

    /* unimportant for now */
    quotes: ['off', 'double'],
    'padded-blocks': 'off',
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-alert': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',

    /* using TM standard, be careful with inline styles */
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',

    /* due to usage in file system such as image */
    'global-require': 'off',

    /* using TM standard, uncomment your code after debug */
    'no-console': 'error',

    /* need to check value and type for variable comparison */
    eqeqeq: 'error',

    /* using TM standard, improve readibility */
    'arrow-body-style': ['error', 'as-needed'],

    /* reducing code complexity by capping the amount of cyclomatic complexity allowed in a program */
    complexity: 'warn',

    /* avoid crash because it will return reference error */
    'no-use-before-define': 'error',

    /* avoid to many changes during code push in git */
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'space-before-blocks': 'error',

    /* using TM standard, type checking for easy debugging */
    'react/prop-types': 'error',

    /* avoid use same color in different places */
    'react-native/no-color-literals': 'error',

    /* make sure that you use platform specific filenames when you use platform specific components */
    'react-native/split-platform-components': 2,

    /* forbid the import of external modules that are not declared in the package.json  */
    'import/no-extraneous-dependencies': 'off',
  },
  globals: {
    fetch: false,
  },
};
