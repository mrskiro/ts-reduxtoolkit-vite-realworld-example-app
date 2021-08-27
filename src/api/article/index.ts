import { AxiosResponse } from 'axios'
import { apiInstance } from '~/api/instance'
import * as Entities from '~/entities'

type GetArticlesResponse = {
    articles: Entities.Article[]
    articlesCount: number
}

export const getArticles = async (): Promise<
    AxiosResponse<GetArticlesResponse>
> => {
    const response = await apiInstance.get<
        void,
        AxiosResponse<GetArticlesResponse>
    >('articles')

    return response
}

type FavoriteResponse = {
    article: Entities.Article
}

export const favorite = async (
    slug: Entities.Article['slug']
): Promise<AxiosResponse<FavoriteResponse>> => {
    const response = await apiInstance.post<
        void,
        AxiosResponse<FavoriteResponse>
    >(`articles/${slug}/favorite`)

    return response
}
