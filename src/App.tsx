import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as ReactRedux from 'react-redux'
import { Route } from '~/routes'
import { store } from '~/store'
import { worker } from '../mock_server/browser'

if (process.env.NODE_ENV === 'development') {
    worker.start()
}

ReactDom.render(
    <React.StrictMode>
        <ReactRedux.Provider store={store}>
            <Route />
        </ReactRedux.Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
