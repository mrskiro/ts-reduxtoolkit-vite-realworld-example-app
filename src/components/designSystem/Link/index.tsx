import * as React from 'react'

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
        <a className={className} href={props.href}>
            {props.children}
        </a>
    )
}
