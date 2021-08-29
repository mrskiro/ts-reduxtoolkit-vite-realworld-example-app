import * as Api from './api'

export const handlers = [
    Api.register,
    Api.login,
    Api.getUser,
    Api.getTags,
    Api.getArticles,
    Api.getArticlesFeed,
    Api.favorite,
    Api.unFavorite,
    Api.getProfile,
    Api.follow,
    Api.unFollow
]
