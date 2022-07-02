import { combineReducers } from 'redux'

import navbarReducer from './features/navbar/navbarSlice'


const rootReducer = combineReducers({
    navbar: navbarReducer,
})

export default rootReducer
