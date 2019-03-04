import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'jquery';
import 'popper.js/dist/popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="flex-bar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/magic-eight-ball" style={{ textDecoration: 'none' }}>Magic Eight Ball</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dice" style={{ textDecoration: 'none' }}>Dice</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/coin-toss" style={{ textDecoration: 'none' }}>Coin Toss</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/make-a-list" style={{ textDecoration: 'none' }}>Make A List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;