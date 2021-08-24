import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'

type Props = {
    name: string
    email: string
    password: string
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSignUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Register = (props: Props) => (
    <Main>
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <DesignSystem.Link href="/login">
                                Have an account?
                            </DesignSystem.Link>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <Recipes.Form>
                            <Recipes.InputField
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Your Name"
                                value={props.name}
                                onChange={props.onChangeName}
                            />
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
                                onClick={props.onSignUp}
                            >
                                Sign up
                            </DesignSystem.Button>
                        </Recipes.Form>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
