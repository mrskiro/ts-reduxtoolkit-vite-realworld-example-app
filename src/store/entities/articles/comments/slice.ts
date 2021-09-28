import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'
import * as Operations from './operations'
import { Status } from '~/store/status'

export type State = {
    status: Status
    data: Record<Entities.Comment['id'], Entities.Comment>
}

const initialState: State = {
    status: Status.pending,
    data: {}
}

const slice = Reduxtoolkit.createSlice({
    name: 'entities/articles/comments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(Operations.getComments.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.getComments.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = action.payload
        })
        builder.addCase(Operations.addComment.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.addComment.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = {
                ...state.data,
                [action.payload.id]: action.payload
            }
        })
        builder.addCase(Operations.deleteComment.fulfilled, (state, action) => {
            state.status = Status.fullfiled

            delete state.data[action.payload]
            state.data = {
                ...state.data
            }
        })
    }
})

export const { reducer } = slice
