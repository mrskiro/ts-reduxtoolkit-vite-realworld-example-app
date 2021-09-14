import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Setting } from './'

export default {
    title: 'Snowflakes/Setting',
    component: Setting
} as Storybook.ComponentMeta<typeof Setting>

const Template: Storybook.ComponentStory<typeof Setting> = args => (
    <Setting {...args} />
)

export const Default = Template.bind({})
Default.args = {
    username: Mock.profile.username,
    initialValues: {
        username: '',
        bio: '',
        email: '',
        image: ''
    },
    onSubmit: () => {}
}

export const Edit = Template.bind({})
Edit.args = {
    ...Default.args,
    initialValues: {
        username: Mock.profile.username,
        bio: Mock.profile.bio,
        email: 'jake@jake.jake',
        image: Mock.profile.image
    }
}
