import * as Storyshots from '@storybook/addon-storyshots'

Storyshots.default({
    framework: 'react',
    test: Storyshots.multiSnapshotWithOptions({})
})
