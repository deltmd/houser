import React from 'react';
import Test from './components/Test/Test';

import { Route, HashRouter } from 'react-router-dom';
export default (
  <HashRouter>
    <div>

      <Route component={Test} exact path='/' />
      
    </div>
  </HashRouter>
)