import React, { Component } from 'react';
import './assets/css/App.css';
import Home from './components/Home';
import New from './components/New';
import Home1 from './components/Home1';
import Todolist from './components/Todolist';
import Todolist01 from './components/Todolist01';
import TodolistTest from './components/TodolistTest';
import ReactFrom from './components/ReactFrom';
class App extends Component {
    //render jsx
  constructor(props){
    super(props);
    this.state={
      view:false
    }
  }
  changeView = ()=>{
    let view = this.state.view;
    this.setState({
        view:!view
    })
  }
  render() {
      const {view} = this.state.view;   /*在return中调用view 不能在{}内*/
    return (
      <div className="App">
          <button onClick={this.changeView}>切换界面</button>
          {/*<Home/>*/}
          {/*<New/>*/}
          {/*<Home1/>*/}
         {/* <ReactFrom/>*/}
          {/*<Todolist/>*/}
          {
              !this.state.view? <Todolist01/>:<TodolistTest/>
          }

          {/*<TodolistTest/>*/}
      </div>
    );
  }
}

export default App;
