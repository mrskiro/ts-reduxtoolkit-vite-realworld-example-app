import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as SnowFlakes from '~/components/snowflakes'
import * as Entities from '~/entities'
import * as Me from '~/store/entities/me'
import * as Tags from '~/store/entities/tags'
import * as Articles from '~/store/entities/articles'
import * as Ui from '~/store/ui/home'

export const Home = () => {
    const history = ReactRouterDom.useHistory()

    const dispatch = ReactRedux.useDispatch()
    const isGetme = ReactRedux.useSelector(Me.selectIsFullfiled)

    const articles = ReactRedux.useSelector(Articles.selectArticles)

    const allTags = ReactRedux.useSelector(Tags.selectAll)

    const hashTag = ReactRedux.useSelector(Ui.selectHashTag)
    const selectedTab = ReactRedux.useSelector(Ui.selectSelectedTab)

    const isLoadingArticles = ReactRedux.useSelector(Articles.selectIsLoading)
    const isLoadingTags = ReactRedux.useSelector(Tags.selectIsLoading)

    React.useEffect(() => {
        dispatch(Tags.getTags())
    }, [dispatch])

    React.useEffect(() => {
        if (selectedTab !== 'Global Feed') return

        dispatch(Articles.getArticles({}))
    }, [dispatch, selectedTab])

    React.useEffect(() => {
        if (selectedTab !== 'Your Feed') return
        dispatch(Articles.getArticlesFeed({}))
    }, [dispatch, selectedTab])

    React.useEffect(() => {
        if (!hashTag) return
        dispatch(Articles.getArticles({ tag: hashTag }))
    }, [dispatch, hashTag])

    const onClickFavorite = (slug: Entities.Article['slug']) => () => {
        if (!isGetme) {
            history.push('/login')
            return
        }
        dispatch(Articles.favorite({ slug }))
    }

    const onClickUnFavorite = (slug: Entities.Article['slug']) => () => {
        dispatch(Articles.unFavorite({ slug }))
    }

    const onChangeTab = (tab: string) => () => {
        dispatch(Ui.actions.onChangeTab(tab))
    }

    const onClickTag = (tag: Entities.Tag) => () => {
        dispatch(Ui.actions.onClickTag(tag))
    }

    return (
        <SnowFlakes.Home
            isGetMe={isGetme}
            isLoadingArticles={isLoadingArticles}
            isLoadingTags={isLoadingTags}
            tags={allTags}
            articles={articles}
            selectedTab={selectedTab}
            hashTag={hashTag}
            onChangeTab={onChangeTab}
            onClickFavorite={onClickFavorite}
            onClickUnFavorite={onClickUnFavorite}
            onClickTag={onClickTag}
        />
    )
}
