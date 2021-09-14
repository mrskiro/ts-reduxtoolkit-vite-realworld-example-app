import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { Profile } from './'

export default {
    title: 'Snowflakes/Profile',
    component: Profile
} as Storybook.ComponentMeta<typeof Profile>

const Template: Storybook.ComponentStory<typeof Profile> = args => (
    <Profile {...args} />
)

export const MyArticles = Template.bind({})
MyArticles.args = {
    username: Mock.profile.username,
    isGetMe: true,
    isLoadingProfile: false,
    isLoadingArticles: false,
    profile: Mock.profile,
    articles: [Mock.article],
    selectedTab: 'My Articles',
    onChangeTab: () => () => {},
    onClickFavorite: () => () => {},
    onClickUnFavorite: () => () => {}
}

export const FavoritedArticles = Template.bind({})
FavoritedArticles.args = {
    ...MyArticles.args,
    selectedTab: 'Favorited Articles',
    articles: [Mock.favoritedArticle]
}
