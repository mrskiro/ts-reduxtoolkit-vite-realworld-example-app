import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

type Props = {
    href: string
    children: React.ReactNode
    className?: string
    isActive?: boolean
    isDisabled?: boolean
}

export const Link = (props: Props) => {
    const className = `${props.className}${props.isActive ? ' active' : ''}${
        props.isDisabled ? ' disabled' : ''
    }`
    return (
        <ReactRouter.Link className={className} to={props.href}>
            {props.children}
        </ReactRouter.Link>
    )
}
