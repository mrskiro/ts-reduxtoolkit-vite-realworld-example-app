import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import { Home } from '~/pages/Home'

export const Route = () => (
    <ReactRouter.HashRouter>
        <ReactRouter.Switch>
            <ReactRouter.Route exact={true} path="/" component={Home} />
        </ReactRouter.Switch>
    </ReactRouter.HashRouter>
)
