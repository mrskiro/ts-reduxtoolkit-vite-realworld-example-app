import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'
import * as Operations from './operations'
import { Status } from '~/store/status'

export type State = {
    status: Status
    data: {
        all: Entities.Tag[]
    }
}

const initialState: State = {
    status: Status.pending,
    data: {
        all: []
    }
}

const slice = Reduxtoolkit.createSlice({
    name: 'entities/tags',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(Operations.getTags.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.getTags.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data.all = action.payload
        })
    }
})

export const { reducer } = slice
