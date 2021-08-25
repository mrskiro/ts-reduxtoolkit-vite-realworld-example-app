import * as React from 'react'
import * as History from 'history'
import * as RTL from '@testing-library/react'
import * as ReactRedux from 'react-redux'
import * as ReduxToolkit from '@reduxjs/toolkit'
import * as ReactRouterDom from 'react-router-dom'
import * as Store from '~/store'
import { reducer } from '~/store/reducer'

// https://redux.js.org/usage/writing-tests#components
const render = (
    ui: React.ReactElement,
    preloadedState: Store.RootState = Store.store.getState(),
    history: History.History = History.createMemoryHistory(),
    options: Omit<RTL.RenderOptions, 'queries'> = {}
) => {
    const store = ReduxToolkit.configureStore({
        preloadedState,
        reducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: { extraArgument: Store.extraArgument }
            })
    })

    const Wrapper: React.FC = props => (
        <ReactRedux.Provider store={store}>
            <ReactRouterDom.Router history={history}>
                {props.children}
            </ReactRouterDom.Router>
        </ReactRedux.Provider>
    )

    return RTL.render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { render }
