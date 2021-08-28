import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Entities from '~/entities'

export const getTags = Reduxtoolkit.createAsyncThunk<
    Entities.Tag[],
    void,
    Store.AsyncThunkConfig
>('entities/tags/getTags', async (_arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.tag.getTags()
        return response.data.tags
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
