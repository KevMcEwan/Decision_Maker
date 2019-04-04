import React, { Component } from 'react';
import './Dice.css';
import Dice1 from '../assets/Dice-1.png';
import Dice2 from '../assets/Dice-2.png';
import Dice3 from '../assets/Dice-3.png';
import Dice4 from '../assets/Dice-4.png';
import Dice5 from '../assets/Dice-5.png';
import Dice6 from '../assets/Dice-6.png';
import randomArrayElement from './RandomNumberGenerator.js';


class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceArray: [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6],
            currentNumber: Dice5
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        this.setState({ currentNumber: (randomArrayElement(this.state.diceArray)) });
    }

    render() {
        const result = this.rollDice;
        return (
            <div className="dice-holder">
                {/* <button className="roll-dice" >Click here to roll dice!</button> */}
                <div className="dice-button">
                    <img src={this.state.currentNumber} onClick={this.rollDice} className="img-fluid" />
                </div>

            </div>
        )
    }
}

export default Dice;
