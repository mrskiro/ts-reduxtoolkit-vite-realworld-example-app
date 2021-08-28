import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'
import * as Operations from './operations'
import { Status } from '~/store/status'

export type State = {
    status: Status
    data: Record<Entities.Profile['username'], Entities.Profile>
}

const initialState: State = {
    status: Status.pending,
    data: {}
}

const slice = Reduxtoolkit.createSlice({
    name: 'entities/profiles',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(Operations.getProfile.pending, state => {
            state.status = Status.pending
        })
        builder.addCase(Operations.getProfile.fulfilled, (state, action) => {
            state.status = Status.fullfiled
            state.data = {
                ...state.data,
                [action.payload.username]: action.payload
            }
        })
    }
})

export const { reducer } = slice
