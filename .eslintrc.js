module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'global-require': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-key': 0,
  },
}
