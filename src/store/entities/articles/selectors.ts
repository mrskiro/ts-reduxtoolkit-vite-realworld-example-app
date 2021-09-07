import * as ReduxToolkit from '@reduxjs/toolkit'
import * as Store from '~/store'
import * as Status from '~/store/status'
import * as Entities from '~/entities'

const selectState = (state: Store.RootState) => state.entities.articles.articles

export const selectIsLoading = ReduxToolkit.createSelector(
    selectState,
    state => state.status === Status.Status.pending
)

export const selectArticles = ReduxToolkit.createSelector(selectState, state =>
    Object.values(state.data)
)

export const selectArticleBySlug = ReduxToolkit.createSelector(
    selectState,
    state =>
        (slug: Entities.Article['slug']): Entities.Article | undefined =>
            state.data[slug]
)
