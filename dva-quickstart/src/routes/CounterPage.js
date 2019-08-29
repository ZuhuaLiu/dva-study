import React from 'react';
import Counter from '../components/Counter.js';
import { connect } from 'dva'
import PropTypes from 'prop-types'

const CounterPage = (props) => {
  console.log(props);
  return (
    <div>
      <p>Counter</p>
      <Counter counter={ props.counter }/>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter1
  };
};

export default connect(mapStateToProps)(CounterPage);