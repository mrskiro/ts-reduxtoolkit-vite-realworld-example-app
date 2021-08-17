import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/store/entities'

export const reducer = Reduxtoolkit.combineReducers({
    entities: Entities.reducer
})
