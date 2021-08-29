import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as SnowFlakes from '~/components/snowflakes'
import * as Entities from '~/entities'
import * as Me from '~/store/entities/me'
import * as Articles from '~/store/entities/articles'
import * as Profiles from '~/store/entities/profiles'
import * as Ui from '~/store/ui/profile'

export const Profile = () => {
    const history = ReactRouterDom.useHistory()
    const { username } = ReactRouterDom.useParams<{ username: string }>()
    const { location } = ReactRouterDom.useHistory()

    const dispatch = ReactRedux.useDispatch()

    const isGetme = ReactRedux.useSelector(Me.selectIsFullfiled)

    const profileFactory = ReactRedux.useSelector(
        Profiles.selectProfileByUsername
    )
    const profile = profileFactory(username)

    const articles = ReactRedux.useSelector(Articles.selectArticles)

    const selectedTab = ReactRedux.useSelector(Ui.selectSelectedTab)

    const isLoadingProfile = ReactRedux.useSelector(Profiles.selectIsLoading)
    const isLoadingArticles = ReactRedux.useSelector(Articles.selectIsLoading)

    React.useEffect(() => {
        dispatch(Profiles.getProfile({ username }))
    }, [dispatch, username])

    React.useEffect(() => {
        if (location.pathname.includes('favorites')) {
            dispatch(Articles.getArticles({ favorited: username }))
            return
        }
        dispatch(Articles.getArticles({ author: username }))
    }, [dispatch, username, location.pathname])

    const onClickFollow = () => {
        if (!isGetme) {
            history.push('/login')
            return
        }
        dispatch(Profiles.follow({ username }))
    }

    const onClickUnFollow = () => {
        dispatch(Profiles.unFollow({ username }))
    }

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

    const onChangeTab = (tab: 'My Articles' | 'Favorited Articles') => () => {
        dispatch(Ui.actions.onChangeTab(tab))
        tab === 'My Articles'
            ? history.push(`/profile/${username}`)
            : history.push(`/profile/${username}/favorites`)
    }

    if (!profile) return null
    return (
        <SnowFlakes.Profile
            isGetMe={isGetme}
            profile={profile}
            isLoadingProfile={isLoadingProfile}
            isLoadingArticles={isLoadingArticles}
            articles={articles}
            selectedTab={selectedTab}
            onClickFollow={onClickFollow}
            onClickUnFollow={onClickUnFollow}
            onChangeTab={onChangeTab}
            onClickFavorite={onClickFavorite}
            onClickUnFavorite={onClickUnFavorite}
        />
    )
}
