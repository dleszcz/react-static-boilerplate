import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { About } from './about.component';


const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
