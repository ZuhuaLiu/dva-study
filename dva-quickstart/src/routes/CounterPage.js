import React from 'react';
import Counter from '../components/Counter.js';
import { connect } from 'dva'
import PropTypes from 'prop-types'

import { counterAdd, counterAsyncAdd } from '../actions';
console.log('counterAdd',counterAdd);
console.log('counterAsyncAdd',counterAsyncAdd);
const CounterPage = (props) => {
  console.log(props);
  return (
    <div>
      <p>Counter</p>
      <Counter counterAdd={ props.counterAdd } counterAsyncAdd={ props.counterAsyncAdd } counter={ props.counter } dispatch ={ props.dispatch } history={ props.history }/>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps,{ counterAdd, counterAsyncAdd })(CounterPage);