import React from 'react';
import { Route } from 'react-router';

import Root from './root.component';
import HomeRoute from './home.component';
import AboutRoute from './about';
import ContactRoute from './contact';

export default (
  <Route component={Root}>
      <Route path='/' component={HomeRoute} />
      <Route> {AboutRoute} </Route>
      <Route> {ContactRoute} </Route>
  </Route>
);
