import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'
import * as Operations from './operations'
import { Status } from '~/store/status'

export type State = {
    status: Status
    data: Record<Entities.Article['slug'], Entities.Article>
}

const initialState: State = {
    status: Status.pending,
    data: {}
}

const slice = Reduxtoolkit.createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(Operations.getArticles.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.getArticles.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = action.payload
        })
        builder.addCase(Operations.favorite.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.favorite.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = {
                ...state.data,
                [action.payload.slug]: action.payload
            }
        })
    }
})

export const { reducer } = slice
