import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDom from 'react-router-dom'
import * as ReactFinalForm from 'react-final-form'
import * as SnowFlakes from '~/components/snowflakes'
import * as Me from '~/store/entities/me'
import * as Articles from '~/store/entities/articles'
import * as Entities from '~/entities'

export const Editor = () => {
    const history = ReactRouterDom.useHistory()

    const dispatch = ReactRedux.useDispatch()

    const isGetme = ReactRedux.useSelector(Me.selectIsFullfiled)

    const onAddTag =
        (
            renderProps: ReactFinalForm.FormRenderProps<
                Pick<
                    Entities.Article,
                    'body' | 'title' | 'description' | 'tagList'
                >
            >
        ) =>
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key == 'Enter') {
                e.preventDefault()
                if (
                    renderProps.values.tagList.filter(
                        tag => tag === e.currentTarget.value
                    ).length !== 0
                )
                    return
                renderProps.form.change('tagList', [
                    ...renderProps.values.tagList,
                    e.currentTarget.value
                ])
                e.currentTarget.value = ''
            }
        }

    const onSubmit = (
        article: Pick<
            Entities.Article,
            'title' | 'body' | 'description' | 'tagList'
        >
    ) => {
        dispatch(Articles.createArticle({ article, history }))
    }

    if (!isGetme) return <div>loading...</div>

    return (
        <SnowFlakes.Editor
            initialValues={{
                title: '',
                description: '',
                body: '',
                tagList: []
            }}
            onAddTag={onAddTag}
            onSubmit={onSubmit}
        />
    )
}
