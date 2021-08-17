import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import { Home } from '~/pages/Home'
import { Register } from '~/pages/Register'
import { Setting } from '~/pages/Setting'
import { Profile } from '~/pages/Profile'

export const Route = () => (
    <ReactRouter.HashRouter>
        <ReactRouter.Switch>
            <ReactRouter.Route path="/profile/:username" component={Profile} />
            <ReactRouter.Route path="/settings" component={Setting} />
            <ReactRouter.Route path="/register" component={Register} />
            <ReactRouter.Route exact={true} path="/" component={Home} />
        </ReactRouter.Switch>
    </ReactRouter.HashRouter>
)
