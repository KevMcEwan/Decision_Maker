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
        }
        this.tossCoin = this.tossCoin.bind(this);
    }

    tossCoin() {
        this.setState({currentSide: (this.state.coinTossArray[Math.floor(Math.random() * this.state.coinTossArray.length)])})
    }

    render() {
        const result = this.tossCoin;
        return (
            <div className="coin-holder">
                <div>
                    {/* {this.state.currentSide} */}
                    <img src={this.state.currentSide}></img>
                </div>
                <button className="toss-coin" onClick={this.tossCoin}>Click here to toss the coin!</button>
            </div>
        )
    }
}

export default CoinToss;
