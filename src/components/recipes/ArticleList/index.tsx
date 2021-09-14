import * as React from 'react'
import * as Entities from '~/entities'
import { Article } from './Article'

type Props = {
    articles: Entities.Article[]
    onClickFavorite: (slug: Entities.Article['slug']) => () => void
    onClickUnFavorite: (slug: Entities.Article['slug']) => () => void
}

export const ArticleList = (props: Props) => (
    <>
        {props.articles.map(article => (
            <Article
                key={article.slug}
                article={article}
                onClickFavorite={props.onClickFavorite(article.slug)}
                onClickUnFavorite={props.onClickUnFavorite(article.slug)}
            />
        ))}
    </>
)
