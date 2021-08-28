import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/entities'

type Tab = 'Global Feed' | 'Your Feed' | Entities.Tag

export type State = {
    selectedTab: Tab
    hashTag?: Entities.Tag
}

const initialState: State = {
    selectedTab: 'Global Feed',
    hashTag: undefined
}

const slice = Reduxtoolkit.createSlice({
    name: 'ui/home',
    initialState,
    reducers: {
        onChangeTab: (state, action: Reduxtoolkit.PayloadAction<Tab>) => {
            state.hashTag = undefined
            state.selectedTab = action.payload
        },
        onClickTag: (
            state,
            action: Reduxtoolkit.PayloadAction<Entities.Tag>
        ) => {
            state.hashTag = action.payload
            state.selectedTab = action.payload
        }
    }
})

export const { reducer, actions } = slice
