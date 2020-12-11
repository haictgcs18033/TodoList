import {combineReducers,createStore} from 'redux'
import {BaiTapDatVePhimReducer} from '../reducer/BaiTapDatVephimReduce'
const rootReducer=combineReducers({
 stateDatVePhim:BaiTapDatVePhimReducer
})
export const store=createStore(rootReducer)