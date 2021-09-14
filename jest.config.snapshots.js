// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('./jest.config.base')

module.exports = {
    ...base,
    testRegex: ['src/__tests__/storyshots.spec.ts']
}
