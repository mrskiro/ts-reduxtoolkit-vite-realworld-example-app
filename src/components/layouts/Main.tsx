import * as React from 'react'
import * as Recipes from '~/components/recipes'

type Props = React.ComponentPropsWithoutRef<typeof Recipes.Header>

export const Main: React.FC<Props> = props => (
    <>
        <Recipes.Header isGetMe={props.isGetMe} username={props.username} />
        <main>{props.children}</main>
        <Recipes.Footer />
    </>
)
