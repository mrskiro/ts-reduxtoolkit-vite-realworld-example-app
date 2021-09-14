import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Editor } from './'

export default {
    title: 'Snowflakes/Editor',
    component: Editor
} as Storybook.ComponentMeta<typeof Editor>

const Template: Storybook.ComponentStory<typeof Editor> = args => (
    <Editor {...args} />
)

export const Default = Template.bind({})
Default.args = {
    initialValues: {
        title: '',
        body: '',
        description: '',
        tagList: []
    },
    onAddTag: () => () => {},
    onSubmit: () => {}
}

export const Edit = Template.bind({})
Edit.args = {
    ...Default.args,
    initialValues: {
        title: Mock.article.title,
        body: Mock.article.body,
        description: Mock.article.description,
        tagList: Mock.article.tagList
    }
}
