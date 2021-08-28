import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'
import * as Operations from './operations'
import { Status } from '~/store/status'

export type State = {
    status: Status
    data: Entities.Me
}

const initialState: State = {
    status: Status.pending,
    data: {
        username: '',
        email: '',
        bio: '',
        token: '',
        image: null
    }
}

const slice = Reduxtoolkit.createSlice({
    name: 'entities/me',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(Operations.register.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.register.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = action.payload
        })
        builder.addCase(Operations.login.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.login.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = action.payload
        })
    }
})

export const { reducer } = slice
