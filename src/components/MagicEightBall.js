import React, { Component } from 'react';

class MagicEightBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eightBallMessageArray: [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ],
            currentMessage: "Shake me!"
        }
        this.shakeBall = this.shakeBall.bind(this);
    }

    shakeBall() {
        this.setState({currentMessage: (this.state.eightBallMessageArray[Math.floor(Math.random() * this.state.eightBallMessageArray.length)])})
    }
    render(){
        return (
            <div className="eight-ball-holder">
                <div>
                    {this.state.currentMessage}
                </div>
                <button className="shake-ball" onClick={this.shakeBall}>Click here to shake the ball!</button>
            </div>
        )
    }
}

export default MagicEightBall;

