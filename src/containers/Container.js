import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import MagicEightBall from '../components/MagicEightBall';
import Dice from '../components/Dice';
import HomePage from '../components/HomePage';
import CoinToss from '../components/CoinToss';
import MakeAList from '../components/MakeAList';
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
                    <Route path="/coin-toss" component={CoinToss} />
                    <Route path="/make-a-list" component={MakeAList} />
                </Fragment>
            </Router>
        )
    }
}

export default Container;

