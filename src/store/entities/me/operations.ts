import * as ReduxToolkit from '@reduxjs/toolkit'
import * as History from 'history'
import * as Store from '~/store'
import * as Entities from '~/entities'

// https://reactrouter.com/web/guides/deep-redux-integration
export const register = ReduxToolkit.createAsyncThunk<
    Entities.Me,
    {
        user: { name: string; email: string; password: string }
        history: History.History
    },
    Store.AsyncThunkConfig
>('entities/me/register', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.register(arg.user)
        localStorage.setItem('token', response.data.user.token)
        arg.history.push('/')
        return response.data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const login = ReduxToolkit.createAsyncThunk<
    Entities.Me,
    {
        user: { email: string; password: string }
        history: History.History
    },
    Store.AsyncThunkConfig
>('entities/me/login', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.login(arg.user)
        localStorage.setItem('token', response.data.user.token)
        arg.history.push('/')
        return response.data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getMe = ReduxToolkit.createAsyncThunk<
    Entities.Me,
    void,
    Store.AsyncThunkConfig
>('entities/me/getMe', async (_arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.getMe()

        return response.data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const updateMe = ReduxToolkit.createAsyncThunk<
    Entities.Me,
    Omit<Entities.Me, 'token'>,
    Store.AsyncThunkConfig
>('entities/me/updateMe', async (arg, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.me.updateMe(arg)

        return response.data.user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
