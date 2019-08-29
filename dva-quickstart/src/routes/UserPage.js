import React from 'react';
import { connect } from 'dva';

const User = (props) => {
    console.log('USERProps',props);
    const {  error, user } = props.user;
    const { dispatch } = props;
    let isFetching = props.loading.effects['user/fetch'];
    let data;

    if (error) {
        data = error;
    } else if (isFetching) {
        data = "Loading..."
    } else {
        data = user && user.data[0].name
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={() =>dispatch({type:'user/fetch'})}>getUser</button>
            <button onClick={() =>dispatch({type:'user/fetch/start'})}>getUser</button>
            <button onClick={() =>dispatch({type:'SHOW'})}>getUsershow</button>
        </div>
    )
}

User.propTypes = {

}

const mapStateToProps = (state) => {
    console.log('stateLoading',state)
    return {
      user: state.user,
      loading: state.loading
    };
};

export default connect(mapStateToProps)(User);