import React from 'react'
import API from "./fakeAPI";

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.task.title,
            text: this.props.task.text,
            checked: this.props.task.checked
        }
    }

    componentDidMount() {
        this.setState({
            checked: this.props.task.checked
        })
    }

    clickHandler = () => {
        const checked = this.state? this.state.checked: false;

        this.setState({
            checked: !checked
        })
    };

    render(){
        const checked = this.state? this.state.checked: false;
        const myTask = this.state;
        return <div className='task'>
            <div className='taskTitle'>
                <h2>{myTask.title}</h2>
            </div>
            <div>
                {myTask.text}
            </div>

            <div className='doneButton' onClick={this.clickHandler}>{ checked+'' }</div>


        </div>
    }
}

export default Task;