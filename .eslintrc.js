module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  react: {
    createClass: 'createReactClass',
    pragma: 'React',
    version: 'detect',
  },
  extends: ['eslint:recommended', 'react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  rules: {
    
  },
};
