module.exports = {
  extends: ['@antfu'],
  overrides: [
    {
      files: [
        'src/*.ts',
        'src/**/*.ts',
        'src/*.tsx',
        'src/**/*.tsx',
        'packages/*.ts',
        'packages/**/*.ts',
        'packages/*.tsx',
        'packages/**/*.tsx',
      ],
    },
  ],
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
    NodeJS: true,
  },
  rules: {
    // 自定义你的js规则
    'no-unused-vars': ['error', { varsIgnorePattern: 'h' }],
    'no-console': 'off',
  },
  ignorePatterns: ['coverage', 'packages/**/dist/*'],
}
