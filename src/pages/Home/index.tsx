import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as SnowFlakes from '~/components/snowflakes'
import * as Entities from '~/entities'
import * as Me from '~/store/entities/me'
import * as Tags from '~/store/entities/tags'
import * as Articles from '~/store/entities/articles'

export const Home = () => {
    const history = ReactRouterDom.useHistory()

    const dispatch = ReactRedux.useDispatch()
    const isGetme = ReactRedux.useSelector(Me.selectIsFullfiled)

    const articles = ReactRedux.useSelector(Articles.selectArticles)

    const allTags = ReactRedux.useSelector(Tags.selectAll)

    const isLoadingArticles = ReactRedux.useSelector(Articles.selectIsLoading)
    const isLoadingTags = ReactRedux.useSelector(Tags.selectIsLoading)

    React.useEffect(() => {
        dispatch(Tags.getTags())
        dispatch(Articles.getArticles())
    }, [dispatch])

    const onClickFavorite = (slug: Entities.Article['slug']) => () => {
        if (!isGetme) {
            history.push('/login')
            return
        }
        dispatch(Articles.favorite({ slug }))
    }

    return (
        <SnowFlakes.Home
            isGetMe={isGetme}
            isLoadingArticles={isLoadingArticles}
            isLoadingTags={isLoadingTags}
            tags={allTags}
            articles={articles}
            onClickFavorite={onClickFavorite}
        />
    )
}
