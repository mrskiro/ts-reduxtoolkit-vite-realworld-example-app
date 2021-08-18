import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Api from '~/api'
import { reducer } from '~/store/reducer'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

const extraArgument = {
    api: {
        me: { register: Api.register }
    }
}

type ExtraArgument = typeof extraArgument

export type AsyncThunkConfig<T = unknown> = {
    state: RootState
    dispatch: AppDispatch
    extra: ExtraArgument
    rejectValue: T
}

export const store = ReduxToolkit.configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: { extraArgument } })
})
