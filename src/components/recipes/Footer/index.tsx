import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

export const Footer = () => (
    <footer>
        <div className="container">
            <DesignSystem.Link href="" className="logo-font">
                conduit
            </DesignSystem.Link>
            <span className="attribution">
                An interactive learning project from{' '}
                <DesignSystem.Link href="https://thinkster.io">
                    Thinkster
                </DesignSystem.Link>
                . Code &amp; design licensed under MIT.
            </span>
        </div>
    </footer>
)
