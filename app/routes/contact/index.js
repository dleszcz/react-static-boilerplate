import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Contact from './contact.container';


export default (
    <Route path="contact">
        <IndexRoute component={Contact} />
    </Route>
);
