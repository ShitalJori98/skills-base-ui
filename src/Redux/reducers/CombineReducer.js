import {combineReducers} from 'redux'
import {UserReducer} from './UserReducer'
import { ThemeReducer } from './ThemeReducer';
import{AppReducer} from './AppReducer';
export const rootReducers = combineReducers({
                UserReducer : UserReducer,
                ThemeReducer,
                AppReducer
})