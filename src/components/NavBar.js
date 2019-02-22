import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/magic-eight-ball">Magic Eight Ball</Link>
                </li>
                <li>
                    <Link to="/dice">Dice</Link>
                </li>
            </ul>
        )
    }
}

export default NavBar;