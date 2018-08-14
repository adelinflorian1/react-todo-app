import React from 'react'
import Task from './Task'
import TaskController from'./TaskController'
import API from "./fakeAPI";
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lists: this.props.list,
        };
    };

    addNewTask = (title) => {

        API.addTask(this.state.lists.title,title,'New task soon').then(()=>{
            this.setState({list: []});
        });
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