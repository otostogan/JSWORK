import React from 'react';
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';


const Counter = ({counter, inc, dec, rnd}) =>{
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={dec}  className="btn btn-primary">DEC</button>
            <button onClick={inc}  className="btn btn-primary">INC</button>
            <button onClick={rnd}  className="btn btn-primary">RND</button>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        counter: state
    }
} 

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, actions)(Counter);