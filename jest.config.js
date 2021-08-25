module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec).+(ts|tsx)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '^~/(.+)': '<rootDir>/src/$1'
    }
}
