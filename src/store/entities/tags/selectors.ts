import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Status from '~/store/status'

const selectState = (state: Store.RootState) => state.entities.tags

export const selectIsLoading = ReduxToolkit.createSelector(
    selectState,
    state => state.status === Status.Status.pending
)

export const selectAll = ReduxToolkit.createSelector(
    selectState,
    state => state.data.all
)
