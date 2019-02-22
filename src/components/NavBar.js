import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-parent">
                <div className="nav-child">
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </div>
                <div className="nav-child">
                    <Link to="/magic-eight-ball" style={{ textDecoration: 'none' }}>Magic Eight Ball</Link>
                </div>
                <div className="nav-child">
                    <Link to="/dice" style={{ textDecoration: 'none' }}>Dice</Link>
                </div>
                <div className="nav-child">
                    <Link to="/coin-toss" style={{ textDecoration: 'none' }}>Coin Toss</Link>
                </div>
                <div className="nav-child">
                    <Link to="/make-a-list" style={{ textDecoration: 'none' }}>Make A List</Link>
                </div>

            </div>
        )
    }
}

export default NavBar;