import React, { Component } from 'react';
// import axios from 'axios';

// import { connect } from 'react-redux';
// import { updateButton } from '../../ducks/reducer';
import './Button.css'

class Button extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     button: 'start'
  //   }
  // }
  render() {
    return (
      <button className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}

// function mapStateToProps(store) {
//   console.log(store);
//   const { button } = store;

//   return {
//     button
//   };
// }

export default Button;