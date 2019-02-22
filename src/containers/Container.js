import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import MagicEightBall from '../components/MagicEightBall';
import Dice from '../components/Dice';
import HomePage from '../components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/magic-eight-ball" component={MagicEightBall} />
                    <Route path="/Dice" component={Dice} />
                </Fragment>
            </Router>
        )
    }
}

export default Container;

