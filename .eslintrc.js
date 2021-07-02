const jestVariable = ['describe', 'it', 'test', 'expect']
const jestSetupAPI = ['beforeEach', 'beforeAll', 'afterEach', 'afterAll']
const jestMap = [...jestVariable, ...jestSetupAPI].reduce(
  (pre, api) => ({ ...pre, [api]: 'readonly' }),
  {}
)

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: { ...jestMap },
  extends: ['standard', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['dist/*'],
}
