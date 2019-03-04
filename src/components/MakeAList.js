import React, { Component } from 'react';
import './MakeAList.css';


class MakeAList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choicesArray: [],
            currentChoice: null
        }
        this.choicesSelector = this.choiceSelector.bind(this);
        this.createChoicesArray = this.createChoicesArray.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event){
        event.preventDefault();
        this.createChoicesArray(event);
        this.choiceSelector();
    };

    createChoicesArray(event){
        let array = [];
        array.push(event.target.choice1.value);
        array.push(event.target.choice2.value);
        array.push(event.target.choice3.value);
        array.push(event.target.choice4.value);
        array.push(event.target.choice5.value);
        array.push(event.target.choice6.value);
        this.setState({ choicesArray: array });
    };

    choiceSelector() {
        this.setState({ currentChoice: (this.state.choicesArray[Math.floor(Math.random() * this.state.choicesArray.length)]) });
    };

    render() {
  
        return (
            <div className="choices-holder">
                <form className="choices-form" onSubmit={this.handleSubmit}>
                    <input type="text" id="choice1" name="choice1" className="form-control" placeholder="Choice 1" />
                    <input type="text" id="choice2" name="choice2" className="form-control" placeholder="Choice 2" />
                    <input type="text" id="choice3" name="choice3" className="form-control" placeholder="Choice 3" />
                    <input type="text" id="choice4" name="choice4" className="form-control" placeholder="Choice 4" />
                    <input type="text" id="choice5" name="choice5" className="form-control" placeholder="Choice 5" />
                    <input type="text" id="choice6" name="choice6" className="form-control" placeholder="Choice 6" />
                    <input type="submit" className="submit-button" value="Click here to decide!" />
                </form>
                <div>
                    {this.state.currentChoice}
                </div>



            </div>
        )
    }
}

export default MakeAList;