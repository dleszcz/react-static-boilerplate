import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Contact } from './contact.component';


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
