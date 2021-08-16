import * as React from 'react'

type Props = {
    href: string
    children: React.ReactNode
    className?: string
    isActive?: boolean
}

export const Link = (props: Props) => {
    const className = `${props.className}${props.isActive ? ' active' : ''}`
    return (
        <a className={className} href={props.href}>
            {props.children}
        </a>
    )
}
