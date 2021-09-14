// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('./jest.config.base')

module.exports = {
    ...base,
    testMatch: ['**/?(*.)+(spec).+(ts|tsx)'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/src/__tests__/storyshots.spec.ts'
    ]
}
