import * as React from 'react'
import * as Recipes from '~/components/recipes'

export const Main: React.FC = props => (
    <>
        <Recipes.Header />
        <main>{props.children}</main>
        <Recipes.Footer />
    </>
)
