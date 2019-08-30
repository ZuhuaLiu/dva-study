// import React from 'react'
// import { connect } from 'dva'
// import PropTypes from 'prop-types'

// const Counter = (props) => {
//     console.log(props);
//     return (
//       <div>
//         <h1>{props.a.count}</h1>
//         <button>+</button>
//       </div>
//     )
//   }
  
//   Counter.propTypes = {
//     a: PropTypes.object
//   }
  
//   const mapStateToProps = (state) => {
//       return {
//           a: state.counter1
//       };
//   }
  
//   export default connect(mapStateToProps)(Counter);

import React from 'react';
import { withRouter, Link, routerRedux } from 'dva/router'
import PropTypes from 'prop-types';

const Counter = ({ counter, dispatch, counterAdd, counterAsyncAdd, history }) => {
    console.log(dispatch);
    console.log('history',history);
  return (
    <div>
      <h1>{ counter.count }</h1>
      <button onClick={ () => dispatch(routerRedux.push('/')) }>routerRedux </button>
      <Link to='/'>homelink</Link>
      <button onClick={() => {history.push('/')}}>home </button>
      <button onClick={() => { counterAdd() }}>+</button>
      <button onClick={() => { counterAsyncAdd() }}>async</button>
    </div>
  )
}

Counter.propTypes = {
  
}

export default withRouter(Counter);