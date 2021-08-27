import * as Api from './api'

export const handlers = [
    Api.register,
    Api.login,
    Api.getUser,
    Api.getTags,
    Api.getArticles,
    Api.favorite
]
