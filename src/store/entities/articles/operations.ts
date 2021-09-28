import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as History from 'history'
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

export const unFavorite = Reduxtoolkit.createAsyncThunk<
    Entities.Article,
    { slug: Entities.Article['slug'] },
    Store.AsyncThunkConfig
>('entities/articles/unFavorite', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.unFavorite(arg.slug)

        return response.data.article
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const createArticle = Reduxtoolkit.createAsyncThunk<
    Entities.Article,
    {
        article: Pick<
            Entities.Article,
            'title' | 'body' | 'description' | 'tagList'
        >
        history: History.History
    },
    Store.AsyncThunkConfig
>('entities/articles/createArticle', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.createArticles(
            arg.article
        )

        arg.history.push(`/article/${response.data.article.slug}`)

        return response.data.article
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getArticle = Reduxtoolkit.createAsyncThunk<
    Entities.Article,
    {
        slug: Entities.Article['slug']
    },
    Store.AsyncThunkConfig
>('entities/articles/getArticle', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.getArticle(arg.slug)
        return response.data.article
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const follow = Reduxtoolkit.createAsyncThunk<
    Entities.Article,
    {
        username: Entities.Profile['username']
        // くるしい
        slug: Entities.Article['slug']
    },
    Store.AsyncThunkConfig
>('entities/articles/follow', async (arg, thunkAPI) => {
    try {
        const article =
            thunkAPI.getState().entities.articles.articles.data[arg.slug]
        const response = await thunkAPI.extra.api.profile.follow(arg.username)
        return {
            ...article,
            author: response.data.profile
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const unFollow = Reduxtoolkit.createAsyncThunk<
    Entities.Article,
    {
        username: Entities.Profile['username']
        slug: Entities.Article['slug']
    },
    Store.AsyncThunkConfig
>('entities/articles/unFollow', async (arg, thunkAPI) => {
    try {
        const article =
            thunkAPI.getState().entities.articles.articles.data[arg.slug]
        const response = await thunkAPI.extra.api.profile.unFollow(arg.username)

        return {
            ...article,
            author: response.data.profile
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
