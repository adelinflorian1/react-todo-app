import React from 'react'
import Task from './Task'
import TaskController from'./TaskController'
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lists: this.props.list,
        };
    };

    addNewTask = (title) => {
        const newTask = {
            title: title,
            checked: false,
            text: 'New task soon'
        };
        const copy = this.state.lists;
        console.log(this.state.lists);
        copy.taskArray.push(newTask);
        this.setState({list: copy});
    };

    render(){
        const lists = this.state.lists;
        return<div>
            <div className='titleList'>
                <h1>{lists.title}</h1>
            </div>
            <div>
                <TaskController addFunction={this.addNewTask}/>
            </div>

            {lists.taskArray.map((i)=>
                <Task task={i}/>
            )}
        </div>
    };
}

export default List;