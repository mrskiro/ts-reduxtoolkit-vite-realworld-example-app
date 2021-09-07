import * as React from 'react'
import * as ReactRouterDom from 'react-router-dom'
import * as Storybook from '@storybook/react'

export const Decorators: Storybook.DecoratorFn = (storyFn, context) => (
    <ReactRouterDom.MemoryRouter>
        {storyFn(context)}
    </ReactRouterDom.MemoryRouter>
)
