import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Status from '~/store/status'

const selectState = (state: Store.RootState) => state.entities.me

export const selectIsFullfiled = ReduxToolkit.createSelector(
    selectState,
    state => state.status === Status.Status.fullfiled
)
