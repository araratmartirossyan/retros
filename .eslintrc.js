module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'no-shadow': ['error'],
    'arrow-parens': ['error'],
    'linebreak-style': 0,
    'max-len': 0,
    "import/prefer-default-export": "off",
    "no-underscore-dangle":  ["error", { "allow": ["_id"] }],
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
