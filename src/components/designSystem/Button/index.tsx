import * as React from 'react'

type Size = 'sm' | 'lg'
type Variant = 'primary' | 'outline-primary'

type Props = {
    children: React.ReactNode
    size: Size
    variant?: Variant
} & JSX.IntrinsicElements['button']

export const Button = ({
    children,
    size,
    className,
    variant = 'primary',
    ...restProps
}: Props) => {
    const _className = `btn btn-${variant} ${className ? className : ''}${
        size === 'sm' ? ' btn-sm' : ''
    }${size === 'lg' ? ' btn-lg' : ''}`

    return (
        <button className={_className} {...restProps}>
            {children}
        </button>
    )
}
