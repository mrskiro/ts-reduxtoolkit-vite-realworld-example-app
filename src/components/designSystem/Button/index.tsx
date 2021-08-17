import * as React from 'react'

type Size = 'sm' | 'lg'

type Props = {
    children: React.ReactNode
    size: Size
} & JSX.IntrinsicElements['button']

export const Button = ({ children, size, className, ...restProps }: Props) => {
    const _className = `btn ${className ? className : ''}${
        size === 'sm' ? ' btn-sm' : ''
    }${size === 'lg' ? ' btn-lg' : ''}`

    return (
        <button className={_className} {...restProps}>
            {children}
        </button>
    )
}
