import * as React from 'react'

type Props = {
    children: React.ReactNode
}

export const Button = (props: Props) => (
    <button className="btn btn-lg btn-primary pull-xs-right">
        {props.children}
    </button>
)
