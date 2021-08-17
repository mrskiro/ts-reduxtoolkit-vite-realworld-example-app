import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Entities from '~/entities'

export const register = Reduxtoolkit.createAsyncThunk<
    Entities.Me,
    { name: string; email: string; password: string },
    Store.AsyncThunkConfig
>('me/register', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.RegisterUser(arg)
        return response.user
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})