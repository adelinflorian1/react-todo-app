import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List'
import API from "./fakeAPI";

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
		    lists: [],
        };
	}

	componentWillMount(){
	    API.getTaskLists().then((result)=>{
            this.setState({lists: result});
        });
    }

  render() {
      return <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">Welcome to React</h1>
          </header>

          {this.state.lists.map((list, i) =>
              <div className='listBody'>
                  <List list={this.state.lists[i]}/>
              </div>
          )}

      </div>;
  }
}

export default App;
