import React, { Component } from 'react';
import './CoinToss.css';
import PoundCoinHeads from '../assets/PoundCoinHeads.png';
import PoundCoinTails from '../assets/PoundCoinTails.png';


class CoinToss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinTossArray: [PoundCoinHeads, PoundCoinTails],
            currentSide: null
        };
        this.tossCoin = this.tossCoin.bind(this);
    }

    tossCoin() {
        this.setState({ currentSide: (this.state.coinTossArray[Math.floor(Math.random() * this.state.coinTossArray.length)]) })
    };

    render() {
        const result = this.tossCoin;
        return (
            <div className="coin-holder">
                <button className="toss-coin" onClick={this.tossCoin}>Click here to toss the coin!</button>
                <div className="coin-img">
                    <img src={this.state.currentSide} className="img-fluid"></img>
                </div>
            </div>
        )
    }
}

export default CoinToss;

