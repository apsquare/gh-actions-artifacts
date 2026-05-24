module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    describe: 'readonly',
    expect: 'readonly',
    it: 'readonly',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
