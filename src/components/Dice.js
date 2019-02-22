import React, { Component } from 'react';
import './Dice.css';
import Dice1 from '../assets/Dice-1.png';
import Dice2 from '../assets/Dice-2.png';
import Dice3 from '../assets/Dice-3.png';
import Dice4 from '../assets/Dice-4.png';
import Dice5 from '../assets/Dice-5.png';
import Dice6 from '../assets/Dice-6.png';


class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceArray: [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6],
            currentNumber: null
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        this.setState({currentNumber: (this.state.diceArray[Math.floor(Math.random() * this.state.diceArray.length)])})
    }

    render() {
        const result = this.rollDice;
        return (
            <div className="dice-holder">
                <div>
                    <img src={this.state.currentNumber} height="500px"/>
                </div>
                <button className="roll-dice" onClick={this.rollDice}>Click here to roll dice!</button>
            </div>
        )
    }
}

export default Dice;
