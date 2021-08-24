import * as React from 'react'
import * as Recipes from '~/components/recipes'

type Props = {
    isGetMe: boolean
}

export const Main: React.FC<Props> = props => (
    <>
        <Recipes.Header isGetMe={props.isGetMe} />
        <main>{props.children}</main>
        <Recipes.Footer />
    </>
)
