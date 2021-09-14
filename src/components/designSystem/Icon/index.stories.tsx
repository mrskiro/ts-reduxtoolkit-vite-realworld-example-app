import * as React from 'react'
import * as Storybook from '@storybook/react'

import { Icon } from './'

export default {
    title: 'DesignSystem/Icon',
    component: Icon
} as Storybook.ComponentMeta<typeof Icon>

const Template: Storybook.ComponentStory<typeof Icon> = args => (
    <Icon {...args} />
)

export const Plus = Template.bind({})
Plus.args = {
    className: 'ion-plus-round'
}

export const Compose = Template.bind({})
Compose.args = {
    className: 'ion-compose'
}

export const Gear = Template.bind({})
Gear.args = {
    className: 'ion-gear-a'
}

export const Heart = Template.bind({})
Heart.args = {
    className: 'ion-heart'
}

export const Edit = Template.bind({})
Edit.args = {
    className: 'ion-edit'
}

export const Trash = Template.bind({})
Trash.args = {
    className: 'ion-trash-a'
}

export const Pound = Template.bind({})
Pound.args = {
    className: 'ion-pound'
}

export const Close = Template.bind({})
Close.args = {
    className: 'ion-close-round'
}
