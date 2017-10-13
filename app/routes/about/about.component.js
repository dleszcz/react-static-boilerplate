import React, { Component } from 'react';
import { Link } from 'react-router';

export class About extends Component {
    constructor(props) {
        console.log('About constructor props', props);

        super(props);
    }

    componentDidMount() {
        console.log('About componentDidMount props', this.props)
    }

    render() {
        const { counter, onDecrement, onIncrement } = this.props;
        console.log('About render props', this.props);

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
