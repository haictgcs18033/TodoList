import { applyMiddleware,combineReducers, createStore } from 'redux'
import {TodoListReducer} from './reducers/TodoListReducer'
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    TodoListReducer
})
export const store = createStore(rootReducer,applyMiddleware(reduxThunk))