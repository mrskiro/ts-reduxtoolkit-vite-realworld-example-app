import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Entities from '~/entities'

export const getProfile = Reduxtoolkit.createAsyncThunk<
    Entities.Profile,
    {
        username: Entities.Profile['username']
    },
    Store.AsyncThunkConfig
>('entities/profiles/getProfile', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.profile.getProfile(
            arg.username
        )
        return response.data.profile
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
