import {combineReducers} from 'redux'
import {UserReducer} from './UserReducer'
import { ThemeReducer } from './ThemeReducer';

export const rootReducers = combineReducers({
                UserReducer : UserReducer,
                ThemeReducer
})