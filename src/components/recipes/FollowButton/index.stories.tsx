import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { FollowButton, UnFollowButton } from './'

export default {
    title: 'Recipes/FollowButton'
} as Storybook.ComponentMeta<typeof FollowButton | typeof UnFollowButton>

export const Default = () => (
    <FollowButton username={Mock.profile.username} onClickFollow={() => {}} />
)

export const UnFollow = () => (
    <UnFollowButton
        username={Mock.profile.username}
        onClickUnFollow={() => {}}
    />
)
