import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

type Props = {
    href: string
}
export const Logo = (props: Props) => (
    <DesignSystem.Link className="navbar-brand" href={props.href}>
        conduit
    </DesignSystem.Link>
)
