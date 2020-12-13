import { combineReducers, createStore } from 'redux'
import { BaiTapOanTuXiReducer } from './BaiTapOanTuXiReducer'
const rootReducer = combineReducers({
    stateOanTuXi: BaiTapOanTuXiReducer
})
export const store = createStore(rootReducer)