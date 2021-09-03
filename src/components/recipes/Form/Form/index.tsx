import * as React from 'react'

type Props = {
    children: React.ReactNode
} & JSX.IntrinsicElements['form']

export const Form = ({ children, ...restProps }: Props) => (
    <form {...restProps}>
        <fieldset>{children}</fieldset>
    </form>
)
