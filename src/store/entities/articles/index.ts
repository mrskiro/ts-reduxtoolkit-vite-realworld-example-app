import * as ReduxToolkit from '@reduxjs/toolkit'
import * as ArticleSlice from './slice'
import * as CommentSlice from './comments/slice'

export * from './operations'
export * from './slice'
export * from './selectors'

export const articleReducer = ReduxToolkit.combineReducers({
    articles: ArticleSlice.reducer,
    comments: CommentSlice.reducer
})
