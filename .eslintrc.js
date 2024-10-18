module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  extends: [
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'react/prop-types': 0,
    'no-shadow': 'off',
    'default-param-last': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//   plugins: [
//     'jsx-a11y',
//     'react',
//     'react-hooks'
//   ],
//   extends: [
//     'plugin:jsx-a11y/recommended',
//     'airbnb-base',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended'
//   ],
//   parserOptions: {
//     ecmaVersion: 13,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true
//     }
//   },
//   rules: {
//     'class-methods-use-this': 0,
//     'comma-dangle': ['error', 'never'],
//     'linebreak-style': 0,
//     'global-require': 0,
//     'eslint linebreak-style': [0, 'error', 'windows'],
//     'react/prop-types': 0,
//     'no-shadow': 0,
//     'default-param-last': 0
//   }
// };
