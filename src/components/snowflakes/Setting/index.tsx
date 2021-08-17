import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'

export const Setting = () => (
    <Main>
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>

                        <Recipes.Form>
                            <Recipes.InputField
                                className="form-control"
                                type="text"
                                placeholder="URL of profile picture"
                            />
                            <Recipes.InputField
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Your Name"
                            />
                            <Recipes.TextareaField
                                className="form-control form-control-lg"
                                rows={8}
                                placeholder="Short bio about you"
                            />
                            <Recipes.InputField
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Email"
                            />
                            <Recipes.InputField
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                            />

                            <DesignSystem.Button>
                                Update Settings
                            </DesignSystem.Button>
                        </Recipes.Form>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
