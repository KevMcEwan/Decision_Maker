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
    }

    choiceSelector() {
        this.setState({ currentChoice: (this.state.choicesArray[Math.floor(Math.random() * this.state.choicesArray.length)]) })
    }

    render() {
        const result = this.tossCoin;
        return (
            <div className="choices-holder">
                <form className="choices-form">
                <input type="text" id="choice-1" name="choice-1" className="form-control"  placeholder="Choice 1" />
                <input type="text" id="choice-2" name="choice-2" className="form-control"  placeholder="Choice 2" />
                <input type="text" id="choice-3" name="choice-3" className="form-control"  placeholder="Choice 3" />
                <input type="text" id="choice-4" name="choice-4" className="form-control"  placeholder="Choice 4" />
                <input type="text" id="choice-5" name="choice-5" className="form-control"  placeholder="Choice 5" />
                <input type="text" id="choice-6" name="choice-6" className="form-control"  placeholder="Choice 6" />
                </form>
                <div>
                    {this.state.currentChoice}
                </div>
                <button className="choices-selector" onClick={this.choicesSelector}>Click here to decide!</button>
            </div>
        )
    }
}

export default MakeAList;