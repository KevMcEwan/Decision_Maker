import React, { Component } from 'react';
import "./MagicEightBall.css";
import Magic_eight_ball from '../assets/Magic_eight_ball.png';
import randomArrayElement from './RandomNumberGenerator.js';


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
        this.setState({ currentMessage: (randomArrayElement(this.state.eightBallMessageArray))});
    }

    render() {
        return (
            <div className="button-and-img">
                <div>
                    <button className="shake-ball" onClick={this.shakeBall}>Click here to shake the ball!</button>
                </div>
                <div className="eight-ball-holder">
                    <img src={Magic_eight_ball} className="img-fluid" alt="magic eight ball" ></img>
                    <div className="eight-ball-text">
                        {this.state.currentMessage}
                    </div>
                </div>
            </div>
        )
    }
}

export default MagicEightBall;



