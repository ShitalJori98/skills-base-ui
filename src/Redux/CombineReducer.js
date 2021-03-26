import {combineReducers} from 'redux'
import {UserReducer} from './UserReducer'

export const rootReducers = combineReducers(
        {UserReducer : UserReducer }
)