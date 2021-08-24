import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as History from 'history'
import * as Store from '~/store'
import * as Entities from '~/entities'

// https://reactrouter.com/web/guides/deep-redux-integration
export const register = Reduxtoolkit.createAsyncThunk<
    Entities.Me,
    {
        user: { name: string; email: string; password: string }
        history: History.History
    },
    Store.AsyncThunkConfig
>('me/register', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.register(arg.user)
        arg.history.push('/')
        return response.data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const login = Reduxtoolkit.createAsyncThunk<
    Entities.Me,
    {
        user: { email: string; password: string }
        history: History.History
    },
    Store.AsyncThunkConfig
>('me/login', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.login(arg.user)
        arg.history.push('/')
        return response.data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
