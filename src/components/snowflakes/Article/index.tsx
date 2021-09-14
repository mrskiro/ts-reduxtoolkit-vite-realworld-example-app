import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'
import * as Entities from '~/entities'

type Props = {
    username: Entities.Me['username']
    myImage: Entities.Me['image']
    article: Entities.Article
    comments: Entities.Comment[]
    onClickFollow: () => void
    onClickUnFollow: () => void
    onClickFavorite: () => void
    onClickUnFavorite: () => void
    onSubmitComment: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
}

export const Article = (props: Props) => (
    <Main isGetMe={false}>
        <div className="article-page">
            <DesignSystem.Banner>
                <h1>{props.article.title}</h1>
                <div className="article-meta">
                    <DesignSystem.Link
                        href={`/${props.article.author.username}`}
                    >
                        <img src={props.article.author.image} />
                    </DesignSystem.Link>
                    <div className="info">
                        <DesignSystem.Link href="" className="author">
                            {props.article.author.username}
                        </DesignSystem.Link>
                        <span className="date">{props.article.createdAt}</span>
                    </div>
                    <DesignSystem.Button
                        size="sm"
                        className="btn-outline-secondary"
                        onClick={props.onClickFollow}
                    >
                        <DesignSystem.Icon className="ion-plus-round" />
                        &nbsp; Follow {props.article.author.username}{' '}
                        {/* <span className="counter">({props.article.favoritesCount})</span> */}
                    </DesignSystem.Button>
                    &nbsp;&nbsp;
                    <DesignSystem.Button
                        size="sm"
                        className="btn-outline-primary"
                        onClick={props.onClickFavorite}
                    >
                        <DesignSystem.Icon className="ion-heart" />
                        &nbsp; Favorite Article{' '}
                        <span className="counter">
                            ({props.article.favoritesCount})
                        </span>
                    </DesignSystem.Button>
                </div>
            </DesignSystem.Banner>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <div>
                            <p>{props.article.body}</p>
                        </div>
                        {/* <p>
                            Web development technologies have evolved at an
                            incredible clip over the past few years.
                        </p>
                        <h2 id="introducing-ionic">Introducing RealWorld.</h2>
                        <p>
                            It's a great solution for learning how other
                            frameworks work.
                        </p> */}
                        <ul className="tag-list">
                            {props.article.tagList.map(tag => (
                                <li
                                    key={tag}
                                    className="tag-default tag-pill tag-outline"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="article-actions">
                    <div className="article-meta">
                        <DesignSystem.Link href="profile.html">
                            <img src={props.article.author.image} />
                        </DesignSystem.Link>
                        <div className="info">
                            <DesignSystem.Link
                                href={`/${props.article.author.username}`}
                                className="author"
                            >
                                {props.article.author.username}
                            </DesignSystem.Link>
                            <span className="date">
                                {props.article.updatedAt}
                            </span>
                        </div>
                        <DesignSystem.Button
                            size="sm"
                            className="btn-outline-secondary"
                        >
                            <DesignSystem.Icon className="ion-plus-round" />
                            &nbsp; Follow {props.article.author.username}{' '}
                            {/* <span className="counter">(10)</span> */}
                        </DesignSystem.Button>
                        &nbsp;
                        <DesignSystem.Button
                            size="sm"
                            className="btn-outline-primary"
                        >
                            <DesignSystem.Icon className="ion-heart" />
                            &nbsp; Favorite Post{' '}
                            <span className="counter">
                                ({props.article.favoritesCount})
                            </span>
                        </DesignSystem.Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <form className="card comment-form">
                            <div className="card-block">
                                <DesignSystem.Textarea
                                    className="form-control"
                                    placeholder="Write a comment..."
                                    rows={3}
                                />
                            </div>
                            <div className="card-footer">
                                <img
                                    src={props.myImage}
                                    className="comment-author-img"
                                />
                                <DesignSystem.Button
                                    size="sm"
                                    className="btn-primary"
                                    onClick={props.onSubmitComment}
                                >
                                    Post Comment
                                </DesignSystem.Button>
                            </div>
                        </form>

                        {props.comments.map(comment => (
                            <div className="card">
                                <div className="card-block">
                                    <p className="card-text">{comment.body}</p>
                                </div>
                                <div className="card-footer">
                                    <DesignSystem.Link
                                        href=""
                                        className="comment-author"
                                    >
                                        <img
                                            src={comment.author.image}
                                            className="comment-author-img"
                                        />
                                    </DesignSystem.Link>
                                    &nbsp;
                                    <DesignSystem.Link
                                        href={`/${comment.author.username}`}
                                        className="comment-author"
                                    >
                                        {comment.author.username}
                                    </DesignSystem.Link>
                                    <span className="date-posted">
                                        {/* Dec 29th */}
                                        {comment.updatedAt}
                                    </span>
                                    <span className="mod-options">
                                        {/* <i className="ion-edit"></i> */}
                                        {comment.author.username ===
                                            props.username && (
                                            <DesignSystem.Icon className="ion-trash-a" />
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
