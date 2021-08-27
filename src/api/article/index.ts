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
