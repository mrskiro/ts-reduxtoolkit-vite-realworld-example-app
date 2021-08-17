import * as React from 'react'

type Props = {
    children: React.ReactNode
}

export const Form = (props: Props) => (
    <form>
        <fieldset>{props.children}</fieldset>
    </form>
)
