import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Status from '~/store/status'

const selectState = (state: Store.RootState) => state.entities.articles.comments

export const selectIsLoading = ReduxToolkit.createSelector(
    selectState,
    state => state.status === Status.Status.pending
)

export const selectComments = ReduxToolkit.createSelector(selectState, state =>
    Object.values(state.data)
)
