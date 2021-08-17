import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'
import * as Operations from './operations'

export type State = {
    data: Entities.Me
}

const initialState: State = {
    data: {
        username: '',
        email: '',
        bio: '',
        token: '',
        image: null
    }
}

const slice = Reduxtoolkit.createSlice({
    name: 'me',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(Operations.register.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const { reducer } = slice
