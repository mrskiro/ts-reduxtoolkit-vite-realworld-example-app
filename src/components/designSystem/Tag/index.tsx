import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

type Props = {
    href: string
    children: React.ReactNode
    onClick?: () => void
}

export const Tag = (props: Props) => (
    <DesignSystem.Link
        href={props.href}
        className="tag-pill tag-default"
        onClick={props.onClick}
    >
        {props.children}
    </DesignSystem.Link>
)
