import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'

type Props = {
    isGetMe: boolean
}

export const Header = (props: Props) => (
    <nav className="navbar navbar-light">
        <div className="container">
            <DesignSystem.Logo href="" />
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <DesignSystem.Link className="nav-link" href="/">
                        Home
                    </DesignSystem.Link>
                </li>
                {props.isGetMe ? (
                    <>
                        <li className="nav-item">
                            <DesignSystem.Link
                                className="nav-link"
                                href="/editor"
                            >
                                <i className="ion-compose"></i>&nbsp;New Post
                            </DesignSystem.Link>
                        </li>
                        <li className="nav-item">
                            <DesignSystem.Link
                                className="nav-link"
                                href="/settings"
                            >
                                <i className="ion-gear-a"></i>&nbsp;Settings
                            </DesignSystem.Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <DesignSystem.Link
                                className="nav-link"
                                href="/login"
                            >
                                Sign in
                            </DesignSystem.Link>
                        </li>

                        <li className="nav-item">
                            <DesignSystem.Link
                                className="nav-link"
                                href="/register"
                            >
                                Sign up
                            </DesignSystem.Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    </nav>
)
