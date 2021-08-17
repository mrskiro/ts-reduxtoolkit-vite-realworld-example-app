import * as React from 'react'

type Size = 'sm' | 'lg'

type Props = {
    children: React.ReactNode
    size: Size
    className?: string
}

export const Button = (props: Props) => {
    const className = `btn ${props.className ? props.className : ''}${
        props.size === 'sm' ? ' btn-sm' : ''
    }`
    return <button className={className}>{props.children}</button>
}
