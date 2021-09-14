import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Header } from './'

export default {
    title: 'Recipes/Header',
    component: Header
} as Storybook.ComponentMeta<typeof Header>

const Template: Storybook.ComponentStory<typeof Header> = args => (
    <Header {...args} />
)

export const Default = Template.bind({})
Default.args = {
    isGetMe: false,
    username: Mock.profile.username
}
