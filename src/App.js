import React, { Component } from 'react';
import router from './router'
import './App.css'
import NavHeader from './components/NavHeader/NavHeader.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTest: 'appTest'
    }
  }
  
  render() {
    return (
      <div className='all_outerWrapper'>
        <div className='all_innerWrapper'>
          {window.location.href[window.location.href.length-2] !=='#' && <NavHeader/>}
          {router}
        </div>
      </div>
    );
  }
}

export default App;
