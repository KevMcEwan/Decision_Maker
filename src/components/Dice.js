import React, { Component } from 'react';


class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceArray: [1, 2, 3, 4, 5, 6],
            currentNumber: "Roll"
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
                    {this.state.currentNumber}
                </div>
                <button className="roll-dice" onClick={this.rollDice}>Click here to roll dice!</button>
            </div>
        )
    }
}

export default Dice;
