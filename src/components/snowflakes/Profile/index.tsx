import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import * as Entities from '~/entities'
import * as Libs from '~/libs'
import { Main } from '~/components/layouts/Main'

type Props = {
    isGetMe: boolean
    isLoadingProfile: boolean
    isLoadingArticles: boolean
    profile: Entities.Profile
    articles: Entities.Article[]
    selectedTab: 'My Articles' | 'Favorited Articles'
    onClickFollow: () => void
    onClickUnFollow: () => void
    onChangeTab: (tab: 'My Articles' | 'Favorited Articles') => () => void
    onClickFavorite: (slug: Entities.Article['slug']) => () => void
    onClickUnFavorite: (slug: Entities.Article['slug']) => () => void
}

export const Profile = (props: Props) => (
    <Main isGetMe={props.isGetMe}>
        {!props.isLoadingProfile && (
            <div className="profile-page">
                <div className="user-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-10 offset-md-1">
                                <img
                                    src={props.profile.image}
                                    className="user-img"
                                />
                                <h4>{props.profile.username}</h4>
                                <p>{props.profile.bio}</p>
                                {props.profile.following ? (
                                    <DesignSystem.Button
                                        size="sm"
                                        className="btn-outline-secondary action-btn"
                                        onClick={props.onClickUnFollow}
                                    >
                                        <i className="ion-plus-round"></i>
                                        &nbsp;{' '}
                                        {`UnFollow ${props.profile.username}`}
                                    </DesignSystem.Button>
                                ) : (
                                    <DesignSystem.Button
                                        size="sm"
                                        className="btn-outline-secondary action-btn"
                                        onClick={props.onClickFollow}
                                    >
                                        <i className="ion-plus-round"></i>
                                        &nbsp;{' '}
                                        {`Follow ${props.profile.username}`}
                                    </DesignSystem.Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <div className="articles-toggle">
                                <ul className="nav nav-pills outline-active">
                                    <li className="nav-item">
                                        <DesignSystem.Link
                                            isActive={
                                                props.selectedTab ===
                                                'My Articles'
                                            }
                                            className="nav-link"
                                            href={`/profile/${props.profile.username}`}
                                            onClick={props.onChangeTab(
                                                'My Articles'
                                            )}
                                        >
                                            My Articles
                                        </DesignSystem.Link>
                                    </li>
                                    <li className="nav-item">
                                        <DesignSystem.Link
                                            isActive={
                                                props.selectedTab ===
                                                'Favorited Articles'
                                            }
                                            className="nav-link"
                                            href={`/profile/${props.profile.username}/favorites`}
                                            onClick={props.onChangeTab(
                                                'Favorited Articles'
                                            )}
                                        >
                                            Favorited Articles
                                        </DesignSystem.Link>
                                    </li>
                                </ul>
                            </div>

                            {props.isLoadingArticles ? (
                                <div className="article-preview">
                                    loading...
                                </div>
                            ) : props.articles.length === 0 ? (
                                <div className="article-preview">
                                    No articles are here... yet.
                                </div>
                            ) : (
                                props.articles.map(article => (
                                    <div
                                        className="article-preview"
                                        key={article.slug}
                                    >
                                        <div className="article-meta">
                                            <DesignSystem.Link href="">
                                                <img
                                                    src={article.author.image}
                                                    alt=""
                                                />
                                            </DesignSystem.Link>
                                            <div className="info">
                                                <DesignSystem.Link
                                                    href=""
                                                    className="author"
                                                >
                                                    {article.author.username}
                                                </DesignSystem.Link>
                                                <span className="date">
                                                    {Libs.formatForArticle(
                                                        article.createdAt
                                                    )}
                                                </span>
                                            </div>
                                            {article.favorited ? (
                                                <DesignSystem.Button
                                                    size="sm"
                                                    variant="primary"
                                                    className="pull-xs-right"
                                                    onClick={props.onClickUnFavorite(
                                                        article.slug
                                                    )}
                                                >
                                                    <i className="ion-heart"></i>{' '}
                                                    {article.favoritesCount}
                                                </DesignSystem.Button>
                                            ) : (
                                                <DesignSystem.Button
                                                    size="sm"
                                                    variant="outline-primary"
                                                    className="pull-xs-right"
                                                    onClick={props.onClickFavorite(
                                                        article.slug
                                                    )}
                                                >
                                                    <i className="ion-heart"></i>{' '}
                                                    {article.favoritesCount}
                                                </DesignSystem.Button>
                                            )}
                                        </div>
                                        <DesignSystem.Link
                                            href=""
                                            className="preview-link"
                                        >
                                            <h1>{article.title}</h1>
                                            <p>{article.description}</p>
                                            <span>Read more...</span>
                                            <ul className="tag-list">
                                                {article.tagList.map(
                                                    (tag, i) => (
                                                        <li
                                                            className="tag-default tag-pill tag-outline"
                                                            key={i}
                                                        >
                                                            {tag}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </DesignSystem.Link>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </Main>
)
