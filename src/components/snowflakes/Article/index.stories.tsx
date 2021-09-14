import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Article } from './'

export default {
    title: 'Snowflakes/Article',
    component: Article
} as Storybook.ComponentMeta<typeof Article>

const Template: Storybook.ComponentStory<typeof Article> = args => (
    <Article {...args} />
)

export const Default = Template.bind({})
Default.args = {
    username: Mock.profile.username,
    myImage: Mock.profile.image,
    article: Mock.article,
    comments: [Mock.comment1, Mock.comment2]
}

export const Favorited = Template.bind({})
Favorited.args = {
    ...Default.args,
    article: Mock.favoritedArticle
}

export const Followed = Template.bind({})
Followed.args = {
    ...Default.args,
    article: { ...Mock.favoritedArticle, author: Mock.followedProfile }
}
