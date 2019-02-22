import React, { Component, Fragment } from 'react';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home-message">
                <h1>Welcome to the Decision Maker!</h1>
                <br></br>
                <h2>Indecisive? Can't decide if you want to be more decisive or not?</h2>
                <h2>Then you've come to the right place!</h2>
            </div>
        )
    }
}

export default HomePage;
