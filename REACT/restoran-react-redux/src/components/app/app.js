import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom'
import Background from './food-bg.jpg';
import { connect } from 'react-redux';


const App = ({totalPrice}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={totalPrice}/>
            <Switch>
                <Route path={'/'} exact component={MainPage}/>
                <Route path={'/cart'} component={CartPage}/>
                <Route exact component={MainPage}/>
            </Switch>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        totalPrice: state.total
    }
}

export default connect(mapStateToProps)(App);