import { combineReducers, createStore } from 'redux';
import { BaiTapGameXucXacReducer } from '../redux/BaiTapGameXucXacReducer';
const rootReducer = combineReducers({
    stateGameXucXac: BaiTapGameXucXacReducer
})
export const store = createStore(rootReducer)


