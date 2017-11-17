import React, { Component } from 'react';
import router from './router'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTest: 'appTest'
    }
  }
  
  render() {
    return (
      <div>
        {this.state.appTest}
        {router}
      </div>
    );
  }
}

export default App;
