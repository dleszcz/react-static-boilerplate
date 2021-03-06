import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { About } from './about.component';

import { counterIncrement, counterDecrement } from '../../redux/actions/counter';


const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(counterIncrement()),
        onDecrement: () => dispatch(counterDecrement())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
