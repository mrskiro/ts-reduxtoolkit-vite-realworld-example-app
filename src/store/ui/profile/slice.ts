import * as Reduxtoolkit from '@reduxjs/toolkit'

type Tab = 'My Articles' | 'Favorited Articles'

export type State = {
    selectedTab: Tab
}

const initialState: State = {
    selectedTab: 'My Articles'
}

const slice = Reduxtoolkit.createSlice({
    name: 'ui/profile',
    initialState,
    reducers: {
        onChangeTab: (state, action: Reduxtoolkit.PayloadAction<Tab>) => {
            state.selectedTab = action.payload
        }
    }
})

export const { reducer, actions } = slice
