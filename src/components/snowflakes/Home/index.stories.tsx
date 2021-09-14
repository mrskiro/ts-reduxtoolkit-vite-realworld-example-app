import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Home } from './'

export default {
    title: 'Snowflakes/Home',
    component: Home
} as Storybook.ComponentMeta<typeof Home>

const Template: Storybook.ComponentStory<typeof Home> = args => (
    <Home {...args} />
)

export const Default = Template.bind({})
Default.args = {
    isGetMe: false,
    isLoadingTags: false,
    isLoadingArticles: false,
    tags: Mock.article.tagList,
    articles: [Mock.article, Mock.favoritedArticle],
    selectedTab: 'Global Feed',
    hashTag: '',
    onClickTag: () => () => {},
    onChangeTab: () => () => {},
    onClickFavorite: () => () => {},
    onClickUnFavorite: () => () => {}
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    ...Default.args,
    isGetMe: true
}

export const YourFeed = Template.bind({})
YourFeed.args = {
    ...Default.args,
    isGetMe: true,
    selectedTab: 'Your Feed'
}

export const SelectedTag = Template.bind({})
SelectedTag.args = {
    ...Default.args,
    hashTag: Mock.article.tagList[0],
    selectedTab: Mock.article.tagList[0]
}
