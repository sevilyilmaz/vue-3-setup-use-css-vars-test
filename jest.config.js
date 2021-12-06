module.exports = {
  collectCoverageFrom: ['src/**/*.{js,vue}'],
  coverageReporters: ['text', 'cobertura', 'json', 'lcov', 'clover'],
  coverageProvider: 'v8',
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  notify: false,
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      require.resolve('jest-transform-stub'),
  },
  transformIgnorePatterns: ['/node_modules/(?!some-internal-modules).+\\.js$'],
};
