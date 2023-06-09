// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   rules: {
//     '@typescript-eslint/no-unused-vars': 'warn',
//   },
// };

module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        'react/display-name': 'off',
        '@typescript-eslint/no-duplicate-imports': 'warn',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-empty-function': 'off',
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'off',
        'react-native/no-raw-text': 'warn',
        'react-native/no-single-element-style-arrays': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'jsx-quotes': 'off',
        curly: 'off',
      },
    },
  ],
};
