import * as React from 'react'
import * as ReactRouterDom from 'react-router-dom'
import * as DesignSystem from '~/components/designSystem'
import * as Entities from '~/entities'

type Props = {
    isGetMe: boolean
    username: Entities.Me['username']
}

export const Header = (props: Props) => {
    const { pathname } = ReactRouterDom.useLocation()

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <DesignSystem.Logo href="" />
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <DesignSystem.Link
                            className="nav-link"
                            href="/"
                            isActive={pathname === '/'}
                        >
                            Home
                        </DesignSystem.Link>
                    </li>
                    {props.isGetMe ? (
                        <>
                            <li className="nav-item">
                                <DesignSystem.Link
                                    className="nav-link"
                                    href="/editor"
                                    isActive={pathname === '/editor'}
                                >
                                    <DesignSystem.Icon className="ion-compose" />
                                    &nbsp;New Post
                                </DesignSystem.Link>
                            </li>
                            <li className="nav-item">
                                <DesignSystem.Link
                                    className="nav-link"
                                    href="/settings"
                                    isActive={pathname === '/settings'}
                                >
                                    <DesignSystem.Icon className="ion-gear-a" />
                                    &nbsp;Settings
                                </DesignSystem.Link>
                            </li>
                            <li className="nav-item">
                                <DesignSystem.Link
                                    className="nav-link"
                                    href={`/profile/${props.username}`}
                                    isActive={
                                        pathname ===
                                        `/profile/${props.username}`
                                    }
                                >
                                    {props.username}
                                </DesignSystem.Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <DesignSystem.Link
                                    className="nav-link"
                                    href="/login"
                                    isActive={pathname === '/login'}
                                >
                                    Sign in
                                </DesignSystem.Link>
                            </li>

                            <li className="nav-item">
                                <DesignSystem.Link
                                    className="nav-link"
                                    href="/register"
                                    isActive={pathname === '/register'}
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
}
