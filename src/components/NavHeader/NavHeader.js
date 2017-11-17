import React, { Component } from 'react';
import headLogo from '../../recources/img/header_logo.png';

import './NavHeader.css'


class NavHeader extends Component{
  render() {
    return (
      <div className="hwrapper">
        <div>
          <img src={headLogo} alt=""/>
          <h1>Houser Dashboard</h1>
          <button>Logout</button>

        </div>
      </div>
    );
  }
}
export default NavHeader;