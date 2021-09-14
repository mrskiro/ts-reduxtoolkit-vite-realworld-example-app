import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Login } from './'

export default {
    title: 'Snowflakes/Login',
    component: Login
} as Storybook.ComponentMeta<typeof Login>

const Template: Storybook.ComponentStory<typeof Login> = args => (
    <Login {...args} />
)

export const Default = Template.bind({})
Default.args = {
    email: '',
    password: ''
}
