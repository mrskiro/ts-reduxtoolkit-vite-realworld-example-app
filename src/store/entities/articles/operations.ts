import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Entities from '~/entities'
import * as Api from '~/api'

export const getArticles = Reduxtoolkit.createAsyncThunk<
    Record<Entities.Article['slug'], Entities.Article>,
    Api.GetArticlesParameters,
    Store.AsyncThunkConfig
>('entities/articles/getArticles', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.getArticles(arg)
        const articles: Record<Entities.Article['slug'], Entities.Article> =
            response.data.articles.reduce(
                (prev, current) => ({
                    ...prev,
                    [current.slug]: current
                }),
                {}
            )
        return articles
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getArticlesFeed = Reduxtoolkit.createAsyncThunk<
    Record<Entities.Article['slug'], Entities.Article>,
    Api.GetArticlesParameters,
    Store.AsyncThunkConfig
>('entities/articles/getArticlesFeed', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.getArticlesFeed(arg)
        const articles: Record<Entities.Article['slug'], Entities.Article> =
            response.data.articles.reduce(
                (prev, current) => ({
                    ...prev,
                    [current.slug]: current
                }),
                {}
            )
        return articles
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const favorite = Reduxtoolkit.createAsyncThunk<
    Entities.Article,
    { slug: Entities.Article['slug'] },
    Store.AsyncThunkConfig
>('entities/articles/favorite', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.favorite(arg.slug)

        return response.data.article
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
