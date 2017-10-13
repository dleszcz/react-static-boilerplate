import React, { Component } from 'react';
import { Link } from 'react-router';

export class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { counter, onDecrement, onIncrement } = this.props;

        return (
            <div className="about">
                <h1>About page (counter = {counter})</h1>
                <p><Link to='/'>to home</Link></p>
                <p><Link to='/contact'>to contact</Link></p>

                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
}
