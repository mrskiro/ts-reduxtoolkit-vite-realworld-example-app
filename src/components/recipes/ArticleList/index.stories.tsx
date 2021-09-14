import * as React from 'react'
import * as Storybook from '@storybook/react'
import * as Mock from '~/__tests__/__mocks__'

import { ArticleList } from './'

export default {
    title: 'Recipes/ArticleList',
    component: ArticleList
} as Storybook.ComponentMeta<typeof ArticleList>

const Template: Storybook.ComponentStory<typeof ArticleList> = args => (
    <ArticleList {...args} />
)

export const Default = Template.bind({})
Default.args = {
    articles: [Mock.article, Mock.favoritedArticle],
    onClickFavorite: () => () => {},
    onClickUnFavorite: () => () => {}
}
