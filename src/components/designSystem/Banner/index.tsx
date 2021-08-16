import * as React from 'react'

type Props = {
    children: React.ReactNode
}

export const Banner = (props: Props) => (
    <div className="banner">
        <div className="container">{props.children}</div>
    </div>
)
