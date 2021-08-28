import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Home from '~/store/ui/home'
import * as Profile from '~/store/ui/profile'

export const reducer = Reduxtoolkit.combineReducers({
    home: Home.reducer,
    profile: Profile.reducer
})
