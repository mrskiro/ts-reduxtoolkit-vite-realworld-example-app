import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

export const Footer = () => (
    <footer>
        <div className="container">
            <DesignSystem.Link href="/" className="logo-font">
                conduit
            </DesignSystem.Link>
            <span className="attribution">
                An interactive learning project from{' '}
                <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
                licensed under MIT.
            </span>
        </div>
    </footer>
)
