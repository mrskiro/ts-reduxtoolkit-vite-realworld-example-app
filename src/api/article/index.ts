import { AxiosResponse } from 'axios'
import * as Modules from '~/api/modules'
import * as Entities from '~/entities'

export type GetArticlesParameters = {
    limit?: number
    offset?: number
    // filters
    tag?: string
    author?: string
    favorited?: string
}

type GetArticlesResponse = {
    articles: Entities.Article[]
    articlesCount: number
}

export const getArticles = async (
    parameters: GetArticlesParameters = {}
): Promise<AxiosResponse<GetArticlesResponse>> => {
    const endpoint = `articles?${Modules.toQueryString(parameters)}`
    const response = await Modules.apiInstance().get<
        void,
        AxiosResponse<GetArticlesResponse>
    >(endpoint)

    return response
}

export const getArticlesFeed = async (
    parameters: GetArticlesParameters = {}
): Promise<AxiosResponse<GetArticlesResponse>> => {
    const endpoint = `articles/feed?${Modules.toQueryString(parameters)}`
    const response = await Modules.apiInstance().get<
        void,
        AxiosResponse<GetArticlesResponse>
    >(endpoint)

    return response
}

type FavoriteResponse = {
    article: Entities.Article
}

export const favorite = async (
    slug: Entities.Article['slug']
): Promise<AxiosResponse<FavoriteResponse>> => {
    const response = await Modules.apiInstance().post<
        void,
        AxiosResponse<FavoriteResponse>
    >(`articles/${slug}/favorite`)

    return response
}

export const unFavorite = async (
    slug: Entities.Article['slug']
): Promise<AxiosResponse<FavoriteResponse>> => {
    const response = await Modules.apiInstance().delete<
        void,
        AxiosResponse<FavoriteResponse>
    >(`articles/${slug}/favorite`)

    return response
}
