import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Register } from './'

export default {
    title: 'Snowflakes/Register',
    component: Register
} as Storybook.ComponentMeta<typeof Register>

const Template: Storybook.ComponentStory<typeof Register> = args => (
    <Register {...args} />
)

export const Default = Template.bind({})
Default.args = {
    name: '',
    email: '',
    password: ''
}
