import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'

const selectState = (state: Store.RootState) => state.ui.profile

export const selectSelectedTab = ReduxToolkit.createSelector(
    selectState,
    state => state.selectedTab
)
