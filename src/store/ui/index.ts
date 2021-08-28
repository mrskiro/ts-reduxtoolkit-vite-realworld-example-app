import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Home from '~/store/ui/home'

export const reducer = Reduxtoolkit.combineReducers({
    home: Home.reducer
})
