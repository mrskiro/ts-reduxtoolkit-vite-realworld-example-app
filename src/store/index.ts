import * as ReduxToolkit from '@reduxjs/toolkit'
import { extraArgument } from '~/api'
import { reducer } from '~/store/reducer'

export const store = ReduxToolkit.configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: { extraArgument } })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

type ExtraArg = {
    api: typeof extraArgument.api
}

export type AsyncThunkConfig<T = unknown> = {
    state: RootState
    dispatch: AppDispatch
    extra: ExtraArg
    rejectValue: T
}
