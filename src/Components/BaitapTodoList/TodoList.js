import React, { Component } from 'react'
import { Container } from '../../ComponentsTodoList/Container'
import { ThemeProvider } from 'styled-components'
import { TodoListDarkTheme } from '../../Themes/TodoListDarkTheme'
import { TodoListLightTheme } from '../../Themes/TodoListLightTheme'
import { TodoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme'
import { Dropdown } from '../../ComponentsTodoList/Dropdown'
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsTodoList/Heading'
import { TextField } from '../../ComponentsTodoList/TextField'
import { Button } from '../../ComponentsTodoList/Button'
import { Table, Thead, Tbody, Th, Td, Tr } from '../../ComponentsTodoList/Table'
import { connect } from 'react-redux'
import { addDataTask, changeDataTheme, checkTaskAction, deleteTask, getDataTask, handleInput,rejectTaskAction } from '../../redux/actions/TodoListActions'
import { CHANGE_THEME, GET_DATA_TASK, INPUT } from '../../redux/const/ReducerConst'
import Axios from 'axios'
import {arrTheme} from '../../Themes/ThemeManager'
class TodoList extends Component {
  

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.status).map((task, index) => {
            return <Tr key={index}>
                <Th ><p className="p-2 mb-0">{task.taskName}</p></Th>
                <Th className="text-right ">
                    <div className="p-2">
                        <span><Button><i class="fa fa-sticky-note"></i></Button></span>
                        <span><Button type="button"
                            onClick={() => { this.checkTask(task.taskName) }}><i class="fa fa-check"></i></Button></span>
                        <span><Button type="button"
                            onClick={() => { this.delTask(task.taskName) }}><i class="fa fa-trash"></i></Button></span>
                    </div>

                </Th>
            </Tr>
        })
    }
    renderTaskComplete = () => {
        return this.props.taskList.filter(task => task.status).map((task, index) => {
            return <Tr key={index}>
                <Th ><p className="p-2 mb-0">{task.taskName}</p></Th>
                <Th className="text-right ">
                    <div className="p-2">
                        <span><Button type="button"
                            onClick={() => { this.delTask(task.taskName) }}><i className="fa fa-trash"></i></Button></span>
                        <span><Button type="button"
                            onClick={()=>{this.rejectTask(task.taskName)}}><i class="fa fa-undo"></i></Button></span>
                    </div>

                </Th>
            </Tr>

        })
    }
    //Render theme import ThemeManager
    renderTheme=()=>{
       return arrTheme.map((theme,index)=>{
           return <option value={theme.id}>{theme.name}</option>
       })
    }
    handleChangeTheme=(e)=>{
       let {value}=e.target;
       //Dispatch value len reducer
       this.props.dispatch(changeDataTheme(value))
    }
    handleChangeInput = (e) => {
        let { value, name } = e.target
        const newsValue = { ...this.props.task.values }
        newsValue[name] = value
        console.log(newsValue[name]);
        this.props.dispatch(handleInput(newsValue))
    }
    // {
    //     type: INPUT,
    //     task: {
    //         values: newsValue,
    //     }
    // }
    //Xu li them task
    addTask =  (e) => {
        e.preventDefault();
       this.props.dispatch(addDataTask(this.props.task.values.taskName))
    }
    //Xu li xoa task
    delTask = (taskName) => {
       this.props.dispatch(deleteTask(taskName))
    }
    //Xu li check task
    checkTask = (taskName) => {
       this.props.dispatch(checkTaskAction(taskName))
    }
    //Xu li reject
    rejectTask = (taskName) => {
       this.props.dispatch(rejectTaskAction(taskName))
    }
    render() {
        return (
            <form onSubmit={this.addTask}>
                <ThemeProvider theme={this.props.themeTodoList}>
                    <Container className="w-50 text-left">
                        <Dropdown onChange={this.handleChangeTheme}>
                          {this.renderTheme()}
                        </Dropdown>
                        <Heading3 className="display-4 ">TO DO LIST</Heading3>
                        <Heading4 className="font-weight-bold">Task name</Heading4>
                        <div className="d-flex ">
                            <TextField className="mr-2 " name="taskName" placeholder="type-something"
                                value={this.props.task.values.taskName}
                                onChange={this.handleChangeInput}></TextField>
                            <Button className="mr-2 font-weight-bold px-3"><i class="fa fa-plus mr-2"
                                onClick={(e) => { this.addTask() }}></i>Add task</Button>
                            <Button className=" font-weight-bold"><i class="fa fa-upload mr-2"></i>Update task</Button>
                        </div>
                        <Heading3 className="mt-3">Task to do</Heading3>
                        <Table>
                            <Thead>
                                {this.renderTaskToDo()}
                            </Thead>
                        </Table>
                        <Heading3>Task completed</Heading3>
                        <Table>
                            <Thead>
                                {this.renderTaskComplete()}
                            </Thead>
                        </Table>
                    </Container>
                </ThemeProvider>
            </form>

        )
    }
    componentDidMount() {
        this.props.dispatch(getDataTask())
    }
}
const mapStateToProps = state => {
    return {
        themeTodoList: state.TodoListReducer.themeTodoList,
        taskList: state.TodoListReducer.taskList,
        task: state.TodoListReducer.task
    }
}
export default connect(mapStateToProps)(TodoList)