import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Status from '~/store/status'
import * as Entities from '~/entities'

const selectState = (state: Store.RootState) => state.entities.profiles

export const selectIsLoading = ReduxToolkit.createSelector(
    selectState,
    state => state.status === Status.Status.pending
)

export const selectProfileByUsername = ReduxToolkit.createSelector(
    selectState,
    state =>
        (
            username: Entities.Profile['username']
        ): Entities.Profile | undefined =>
            state.data[username]
)
