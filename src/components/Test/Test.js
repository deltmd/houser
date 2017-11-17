import React, {Component} from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { updateTest } from '../../ducks/reducer';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state={
      test: 'start'
    }
  }
  getTestEndpoint(){
    let promise = axios.get('/api/tests')
    promise.then(res=>{
      this.props.updateTest(res.data)
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.getTestEndpoint()}>{this.state.test}</button>
        <button onClick={()=>this.props.updateTest('reduxComplete')}>{this.props.test}</button>
        
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log(store);
  const { test } = store;

  return {
    test
  };
}

export default connect(mapStateToProps, { updateTest })(Test);