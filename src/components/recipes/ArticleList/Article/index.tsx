import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Entities from '~/entities'
import * as Libs from '~/libs'

type Props = {
    article: Entities.Article
    onClickFavorite: () => void
    onClickUnFavorite: () => void
}

export const Article = (props: Props) => (
    <div className="article-preview">
        <div className="article-meta">
            <DesignSystem.Link
                href={`/profile/${props.article.author.username}`}
            >
                <img src={props.article.author.image} alt="" />
            </DesignSystem.Link>
            <div className="info">
                <DesignSystem.Link
                    href={`/profile/${props.article.author.username}`}
                    className="author"
                >
                    {props.article.author.username}
                </DesignSystem.Link>
                <span className="date">
                    {Libs.formatForArticle(props.article.createdAt)}
                </span>
            </div>
            {props.article.favorited ? (
                <DesignSystem.Button
                    size="sm"
                    variant="primary"
                    className="pull-xs-right"
                    onClick={props.onClickUnFavorite}
                >
                    <DesignSystem.Icon className="ion-heart" />{' '}
                    {props.article.favoritesCount}
                </DesignSystem.Button>
            ) : (
                <DesignSystem.Button
                    size="sm"
                    variant="outline-primary"
                    className="pull-xs-right"
                    onClick={props.onClickFavorite}
                >
                    <DesignSystem.Icon className="ion-heart" />{' '}
                    {props.article.favoritesCount}
                </DesignSystem.Button>
            )}
        </div>
        <DesignSystem.Link href="" className="preview-link">
            <h1>{props.article.title}</h1>
            <p>{props.article.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
                {props.article.tagList.map((tag, i) => (
                    <li className="tag-default tag-pill tag-outline" key={i}>
                        {tag}
                    </li>
                ))}
            </ul>
        </DesignSystem.Link>
    </div>
)
