import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
  
class Nav extends Component {
    render() {
        return (
                <div>
                    <p className="question">
                        Want to build your own MYtinerary?
                    </p>
                    <div className="links container">
                        <Link to="/login" className="link-nav">Log in</Link>
                        <Link to="/registration" className="link-nav">Create Account</Link>
                    </div>
                </div>
        );
    }
}

export default Nav;