module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/vue'
  ],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error'
  }
}
