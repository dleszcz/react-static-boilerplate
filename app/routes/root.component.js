import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from 'store';

export default class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Provider store={this.state.store}>
        {this.props.children}
      </Provider>
    );
  }
}
