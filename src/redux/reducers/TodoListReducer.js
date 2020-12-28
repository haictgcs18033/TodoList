import { TodoListDarkTheme } from "../../Themes/TodoListDarkTheme"
import { ADD_DATA_TASK, CHANGE_THEME, GET_DATA_TASK, INPUT } from "../const/ReducerConst"
import {arrTheme} from '../../Themes/ThemeManager'
const stateDefault = {
    themeTodoList: TodoListDarkTheme,
    taskList: [
    ],
    task: {
        values: {
            taskName: ''
        },
    }

}
export const TodoListReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_DATA_TASK: {
            return { ...state, taskList: action.dataTask }
        }
        case INPUT:{
            return{...state,task:action.task}
        }
        case CHANGE_THEME:{
            let theme=arrTheme.find(theme=>theme.id==action.themeId);
            if(theme){
                console.log(theme);
                state.themeTodoList={...theme.theme};
            }
            return{...state}
          
        }
    }
    return { ...state }
}