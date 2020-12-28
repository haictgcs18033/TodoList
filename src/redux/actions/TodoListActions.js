import Axios from 'axios'
import { ADD_DATA_TASK, CHANGE_THEME, GET_DATA_TASK, INPUT } from '../const/ReducerConst'
export const getDataTask=()=>{
      return async (dispatch)=>{
          const result= await Axios({
              url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
              method:'GET'
          })
          dispatch({
              type:GET_DATA_TASK,
              dataTask:result.data
          })
      }
}
export const addDataTask=(taskName)=>{
    return dispatch=>{
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName: taskName }
        });
        promise.then(res => {
            console.log(res.data);
            dispatch(getDataTask());
        })
        promise.catch(error => {
            alert(error.response.data);
        })
    }
}
export const handleInput=(newsValue)=>{
    return{
        type: INPUT,
        task: {
            values: newsValue,
        }
    }
}
export const checkTaskAction=(taskName)=>{
    return dispatch=>{
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT'
        })
        promise.then(res => {
            alert(res.data)
            dispatch(getDataTask());
        })
        promise.catch(err => {
            console.log(err.response.data);
        })
    }
   
}
export const deleteTask=(taskName)=>{
    return dispatch=>{
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE'
        })
        promise.then(res => {
            console.log(res.data);
            dispatch(getDataTask());
        })
    }
}
export const rejectTaskAction=(taskName)=>{
    return dispatch=>{
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        })
        promise.then(res=>{
            alert(res.data)
            dispatch(getDataTask());
        })
        promise.catch(err=>{
            console.log(err.response.data);
        })
    }
}
export const changeDataTheme=(themeId)=>{
    return{
        type:CHANGE_THEME,
        themeId:themeId
    }   
}