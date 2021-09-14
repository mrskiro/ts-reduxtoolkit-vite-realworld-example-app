import * as React from 'react'
import * as ReactFinalForm from 'react-final-form'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import * as Entities from '~/entities'
import { Main } from '~/components/layouts/Main'

type Props = {
    username: Entities.Me['username']
    initialValues: {
        username: string
        bio: string
        email: string
        image?: string
    }
    onSubmit: (values: Props['initialValues'] & { password: string }) => void
}

export const Setting = (props: Props) => (
    <Main isGetMe={true} username={props.username}>
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>
                        <ReactFinalForm.Form
                            onSubmit={props.onSubmit}
                            initialValues={props.initialValues}
                            render={renderProps => (
                                <Recipes.Form
                                    onSubmit={renderProps.handleSubmit}
                                >
                                    <ReactFinalForm.Field name="image">
                                        {({ input }) => (
                                            <Recipes.InputField
                                                className="form-control"
                                                type="text"
                                                placeholder="URL of profile picture"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>
                                    <ReactFinalForm.Field name="username">
                                        {({ input }) => (
                                            <Recipes.InputField
                                                className="form-control form-control-lg"
                                                type="text"
                                                placeholder="Your Name"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>
                                    <ReactFinalForm.Field name="bio">
                                        {({ input }) => (
                                            <Recipes.TextareaField
                                                className="form-control form-control-lg"
                                                rows={8}
                                                placeholder="Short bio about you"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>
                                    <ReactFinalForm.Field name="email">
                                        {({ input }) => (
                                            <Recipes.InputField
                                                className="form-control form-control-lg"
                                                type="text"
                                                placeholder="Email"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>
                                    <ReactFinalForm.Field name="password">
                                        {({ input }) => (
                                            <Recipes.InputField
                                                className="form-control form-control-lg"
                                                type="password"
                                                placeholder="Password"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>
                                    <DesignSystem.Button
                                        size="lg"
                                        type="submit"
                                    >
                                        Update Settings
                                    </DesignSystem.Button>
                                </Recipes.Form>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
