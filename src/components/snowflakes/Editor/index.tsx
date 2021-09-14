import * as React from 'react'
import * as ReactFinalForm from 'react-final-form'
import * as DesignSystem from '~/components/designSystem'
import * as Recipes from '~/components/recipes'
import { Main } from '~/components/layouts/Main'
import * as Entities from '~/entities'

type Props = {
    initialValues: Pick<
        Entities.Article,
        'title' | 'body' | 'description' | 'tagList'
    >
    onAddTag: (
        renderProps: ReactFinalForm.FormRenderProps<
            Pick<Entities.Article, 'body' | 'title' | 'description' | 'tagList'>
        >
    ) => (e: React.KeyboardEvent<HTMLInputElement>) => void
    onSubmit: (article: Props['initialValues']) => void
}

export const Editor = (props: Props) => (
    <Main isGetMe>
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <ReactFinalForm.Form
                            onSubmit={props.onSubmit}
                            initialValues={props.initialValues}
                            render={renderProps => (
                                <Recipes.Form
                                    onSubmit={renderProps.handleSubmit}
                                >
                                    <ReactFinalForm.Field name="title">
                                        {({ input }) => (
                                            <Recipes.InputField
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Article Title"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>

                                    <ReactFinalForm.Field name="description">
                                        {({ input }) => (
                                            <Recipes.InputField
                                                type="text"
                                                className="form-control"
                                                placeholder="What's this article about?"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>

                                    <ReactFinalForm.Field name="body">
                                        {({ input }) => (
                                            <Recipes.TextareaField
                                                className="form-control"
                                                rows={8}
                                                placeholder="Write your article (in markdown)"
                                                {...input}
                                            />
                                        )}
                                    </ReactFinalForm.Field>

                                    <Recipes.InputField
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter tags"
                                        onKeyPress={props.onAddTag(renderProps)}
                                    >
                                        <div className="tag-list">
                                            {renderProps.values.tagList.map(
                                                tag => (
                                                    <span
                                                        className="tag-pill tag-default"
                                                        key={tag}
                                                    >
                                                        <DesignSystem.Icon className="ion-close-round" />
                                                        {tag}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </Recipes.InputField>

                                    <DesignSystem.Button
                                        size="lg"
                                        className="pull-xs-right btn-primary"
                                        type="submit"
                                    >
                                        Publish Article
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
