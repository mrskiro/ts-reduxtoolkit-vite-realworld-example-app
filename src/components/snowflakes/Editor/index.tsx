import * as React from 'react'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'

export const Editor = () => (
    <Main>
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <Recipes.Form>
                            <Recipes.InputField
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Article Title"
                            />
                            <Recipes.InputField
                                type="text"
                                className="form-control"
                                placeholder="What's this article about?"
                            />
                            <Recipes.TextareaField
                                className="form-control"
                                rows={8}
                                placeholder="Write your article (in markdown)"
                            />
                            <Recipes.InputField
                                type="text"
                                className="form-control"
                                placeholder="Enter tags"
                            />

                            <DesignSystem.Button
                                size="lg"
                                className="pull-xs-right btn-primary"
                                type="button"
                            >
                                Publish Article
                            </DesignSystem.Button>
                        </Recipes.Form>
                    </div>
                </div>
            </div>
        </div>
    </Main>
)
