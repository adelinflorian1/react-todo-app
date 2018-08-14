import React from 'react'

class TaskController extends React.Component{

    addFunction = () => {
        const addHandler = this.props.addFunction;

        addHandler(this.inputValue);
    }

    changeFunction = (value) => {
        this.inputValue = value;
    }

    render() {
        const myTask = this.props.task;
        const checked = this.state? this.state.checked: false;

        return <div className='inputArea'>
            <input onChange={(e) => this.changeFunction(e.target.value)}/>
            <span id='ok' onClick={this.addFunction}>OK</span>
        </div>
    }
}

export default TaskController;