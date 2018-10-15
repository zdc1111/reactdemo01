import React, { Component } from 'react';
import './assets/css/App.css';
import Home from './components/Home';
import New from './components/New';
class App extends Component {
    //render jsx
  render() {
    return (
      <div className="App">
          {/*<Home/>*/}
          <New/>
      </div>
    );
  }
}

export default App;
