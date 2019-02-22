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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let array = [];
        array.push(event.target.value);
        this.setState({ choicesArray: array })
    }



    choiceSelector() {
        this.setState({ currentChoice: (this.state.choicesArray[Math.floor(Math.random() * this.state.choicesArray.length)]) })
    }

    render() {
        const result = this.tossCoin;
        return (
            <div className="choices-holder">

                <form className="choices-form" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="redirect" value={this.choiceSelector} />
                    <input type="text" name="choice-1[]" className="form-control" placeholder="Choice 1" />
                    <input type="text" name="choice-2[]" className="form-control" placeholder="Choice 2" />
                    <input type="text" name="choice-3[]" className="form-control" placeholder="Choice 3" />
                    <input type="text" name="choice-4[]" className="form-control" placeholder="Choice 4" />
                    <input type="text" name="choice-5[]" className="form-control" placeholder="Choice 5" />
                    <input type="text" name="choice-6[]" className="form-control" placeholder="Choice 6" />
                    <input type="submit" className="submit-button" value="Submit" />
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