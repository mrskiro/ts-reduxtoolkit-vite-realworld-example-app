import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'

type Props = {
    email: string
    password: string
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSignIn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Login = (props: Props) => (
    <Main>
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <DesignSystem.Link href="/register">
                                Need an account?
                            </DesignSystem.Link>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <Recipes.Form>
                            <Recipes.InputField
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Email"
                                value={props.email}
                                onChange={props.onChangeEmail}
                            />
                            <Recipes.InputField
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                                value={props.password}
                                onChange={props.onChangePassword}
                            />

                            <DesignSystem.Button
                                size="lg"
                                className="btn-primary pull-xs-right"
                                onClick={props.onSignIn}
                            >
                                Sign in
                            </DesignSystem.Button>
                        </Recipes.Form>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
