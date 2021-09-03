import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Status from '~/store/status'

const selectState = (state: Store.RootState) => state.entities.me

export const selectIsFullfiled = ReduxToolkit.createSelector(
    selectState,
    state => state.status === Status.Status.fullfiled
)

export const selectUsername = ReduxToolkit.createSelector(
    selectState,
    state => state.data.username
)

export const selectEmail = ReduxToolkit.createSelector(
    selectState,
    state => state.data.email
)

export const selectBio = ReduxToolkit.createSelector(
    selectState,
    state => state.data.bio
)

export const selectImage = ReduxToolkit.createSelector(
    selectState,
    state => state.data.image
)
