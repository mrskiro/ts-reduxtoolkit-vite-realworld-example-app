import * as Reduxtoolkit from '@reduxjs/toolkit'
import * as Entities from '~/store/entities'
import * as Ui from '~/store/ui'

export const reducer = Reduxtoolkit.combineReducers({
    entities: Entities.reducer,
    ui: Ui.reducer
})
