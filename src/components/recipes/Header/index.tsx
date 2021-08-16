import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

export const Header = () => (
    <nav className="navbar navbar-light">
        <div className="container">
            <DesignSystem.Logo href="" />
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <DesignSystem.Link className="nav-link" href="">
                        Home
                    </DesignSystem.Link>
                </li>
                <li className="nav-item">
                    <DesignSystem.Link className="nav-link" href="">
                        <i className="ion-compose"></i>&nbsp;New Post
                    </DesignSystem.Link>
                </li>
                <li className="nav-item">
                    <DesignSystem.Link className="nav-link" href="">
                        <i className="ion-gear-a"></i>&nbsp;Settings
                    </DesignSystem.Link>
                </li>

                <li className="nav-item">
                    <DesignSystem.Link className="nav-link" href="">
                        Sign up
                    </DesignSystem.Link>
                </li>
            </ul>
        </div>
    </nav>
)
