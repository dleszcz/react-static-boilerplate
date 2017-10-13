import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './about.container';


export default (
    <Route path="about">
        <IndexRoute component={About} />
    </Route>
);
