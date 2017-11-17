import React from 'react';
import LogIn from './components/LogIn/LogIn';

import { Route, HashRouter } from 'react-router-dom';
export default (
  <HashRouter>
    <div>

      <Route component={LogIn} exact path='/' />
      
    </div>
  </HashRouter>
)