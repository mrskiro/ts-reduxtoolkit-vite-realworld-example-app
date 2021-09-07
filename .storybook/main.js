const Path = require('path')

module.exports = {
    stories: ['../src/**/*.stories.@(tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'storybook-builder-vite'
    },
    viteFinal: (config, options) => {
        if (config.resolve && config.resolve.alias) {
            config.resolve.alias = {
                '~': Path.resolve(__dirname, '../src')
            }
        }
        return config
    }
}
