module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec).+(ts|tsx)'],
    transform: {
        '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '^~/(.+)': '<rootDir>/src/$1'
    }
}
