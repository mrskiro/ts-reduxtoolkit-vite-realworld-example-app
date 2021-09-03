import * as Api from './api'

export const handlers = [
    Api.getUser,
    Api.update,
    Api.register,
    Api.login,
    Api.getTags,
    Api.getArticles,
    Api.getArticlesFeed,
    Api.favorite,
    Api.unFavorite,
    Api.getProfile,
    Api.follow,
    Api.unFollow
]
