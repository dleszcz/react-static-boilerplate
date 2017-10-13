import React, { Component } from 'react';
import { Link } from 'react-router';

export class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { counter, onDecrement, onIncrement } = this.props;

        return (
            <div className="contact">
                <h1>Contact page (counter = {counter})</h1>
                <p><Link to='/'>to home</Link></p>
                <p><Link to='/about'>to about</Link></p>

                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
}
