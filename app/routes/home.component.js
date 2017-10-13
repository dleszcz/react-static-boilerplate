import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <p><Link to='/contact'>to contact</Link></p>
        <p><Link to='/about'>to about</Link></p>
      </div>
    );
  }

}
