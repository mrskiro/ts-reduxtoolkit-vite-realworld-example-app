import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Me from '~/store/entities/me'
import * as Tags from '~/store/entities/tags'
import * as Articles from '~/store/entities/articles'
import * as Profiles from '~/store/entities/profiles'

export const reducer = Reduxtoolkit.combineReducers({
    me: Me.reducer,
    tags: Tags.reducer,
    articles: Articles.reducer,
    profiles: Profiles.reducer
})
