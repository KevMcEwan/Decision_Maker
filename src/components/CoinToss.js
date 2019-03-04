import React, { Component } from 'react';
import './CoinToss.css';
import PoundCoinHeads from '../assets/PoundCoinHeads.png';
import PoundCoinTails from '../assets/PoundCoinTails.png';


class CoinToss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinTossArray: [PoundCoinHeads, PoundCoinTails],
            currentSide: PoundCoinHeads
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
                <div className="toss-coin">
                    <img src={this.state.currentSide} className="img-fluid" onClick={this.tossCoin} ></img>
                </div>
                <div>
                    Click on the coin to toss it
                </div>
            </div>
        )
    }
}

export default CoinToss;

