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

const Counter = ({ counter }) => {
  return (
    <div>
      <h1>{ counter.count }</h1>
      <button>+</button>
    </div>
  )
}

Counter.propTypes = {
}

export default Counter;