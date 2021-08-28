import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

type Props = {
    href: string
    children: React.ReactNode
    className?: string
    isActive?: boolean
    isDisabled?: boolean
    onClick?: () => void
}

export const Link = (props: Props) => {
    const className = `${props.className}${props.isActive ? ' active' : ''}${
        props.isDisabled ? ' disabled' : ''
    }`

    const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!props.onClick) return

        e.preventDefault()
        props.onClick()
    }

    return (
        <ReactRouter.Link
            className={className}
            to={props.href}
            onClick={onClick}
        >
            {props.children}
        </ReactRouter.Link>
    )
}
