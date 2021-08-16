import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Route } from '~/routes'

ReactDom.render(
    <React.StrictMode>
        <Route />
    </React.StrictMode>,
    document.getElementById('root')
)
