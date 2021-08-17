import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Me from '~/store/entities/me'

export const reducer = Reduxtoolkit.combineReducers({
    me: Me.reducer
})
