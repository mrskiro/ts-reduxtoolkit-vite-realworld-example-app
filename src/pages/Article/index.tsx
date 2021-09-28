import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as SnowFlakes from '~/components/snowflakes'
import * as Articles from '~/store/entities/articles'
import * as Comments from '~/store/entities/articles/comments'
import * as Me from '~/store/entities/me'

export const Article = () => {
    const { slug } = ReactRouterDom.useParams<{ slug: string }>()

    const dispatch = ReactRedux.useDispatch()
    const articleFactory = ReactRedux.useSelector(Articles.selectArticleBySlug)
    const article = articleFactory(slug)
    const comments = ReactRedux.useSelector(Comments.selectComments)

    const username = ReactRedux.useSelector(Me.selectUsername)
    const image = ReactRedux.useSelector(Me.selectImage)

    React.useEffect(() => {
        dispatch(Articles.getArticle({ slug }))
    }, [dispatch, slug])

    React.useEffect(() => {
        dispatch(Comments.getComments({ slug }))
    }, [dispatch, slug])

    const onClickFollow = () => {
        if (!article) return
        dispatch(Articles.follow({ username: article.author.username, slug }))
    }

    const onClickUnFollow = () => {
        if (!article) return
        dispatch(Articles.unFollow({ username: article.author.username, slug }))
    }

    const onClickFavorite = () => {
        dispatch(Articles.favorite({ slug }))
    }

    const onClickUnFavorite = () => {
        dispatch(Articles.unFavorite({ slug }))
    }

    const onSubmitComment = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        dispatch(Comments.addComment({ slug, body: 'aaa' }))
    }

    if (!article) return null
    return (
        <SnowFlakes.Article
            username={username}
            myImage={image}
            article={article}
            comments={comments}
            onClickFollow={onClickFollow}
            onClickUnFollow={onClickUnFollow}
            onClickFavorite={onClickFavorite}
            onClickUnFavorite={onClickUnFavorite}
            onSubmitComment={onSubmitComment}
        />
    )
}
