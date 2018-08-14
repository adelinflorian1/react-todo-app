import React from 'react'

class ListController extends React.Component{

    addFunction = () => {
        const addHandler = this.props.addFunction;

        addHandler(this.inputValue);
    }

    changeFunction = (value) => {
        this.inputValue = value;
    }

    render() {
        const myList = this.props.task;

        return <div className='inputArea'>
            <input onChange={(e) => this.changeFunction(e.target.value)}/>
            <span id='ok' onClick={this.addFunction}>OK</span>
        </div>
    }
}

export default ListController;