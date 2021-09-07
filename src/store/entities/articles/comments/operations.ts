import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Entities from '~/entities'

export const getComments = Reduxtoolkit.createAsyncThunk<
    Record<Entities.Comment['id'], Entities.Comment>,
    { slug: Entities.Article['slug'] },
    Store.AsyncThunkConfig
>('entities/articles/getComments', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.comments.getComments(
            arg.slug
        )
        const comments: Record<Entities.Comment['id'], Entities.Comment> =
            response.data.comments.reduce(
                (prev, current) => ({
                    ...prev,
                    [current.id]: current
                }),
                {}
            )
        return comments
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const addComment = Reduxtoolkit.createAsyncThunk<
    Entities.Comment,
    { slug: Entities.Article['slug']; body: Entities.Comment['body'] },
    Store.AsyncThunkConfig
>('entities/articles/addComment', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.article.comments.addComment({
            slug: arg.slug,
            body: arg.body
        })
        return response.data.comment
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
