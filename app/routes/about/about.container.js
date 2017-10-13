import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { About } from './about.component';


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
