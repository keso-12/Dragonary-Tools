module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-console': [
      1,
      {
        allow: [
          'error',
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-self-import': 0,
    'react/jsx-fragments': [
      2,
      'element',
    ],
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'no-useless-constructor': 0,
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          './',
          'src/',
          'node_modules',
        ],
        extensions: [
          '.js',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};
