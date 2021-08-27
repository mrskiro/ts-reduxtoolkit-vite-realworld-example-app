import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Entities from '~/entities'

export const getArticles = Reduxtoolkit.createAsyncThunk<
    Record<Entities.Article['slug'], Entities.Article>,
    void,
    Store.AsyncThunkConfig
>('articles/getArticles', async (_arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.getArticles()
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
>('articles/favorite', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.favorite(arg.slug)

        return response.data.article
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
