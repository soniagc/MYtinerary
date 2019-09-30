import React, { Component } from 'react';
import HomeIcon from '../assets/homeIcon.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer container">
                <Link to="/">
                    <button><img 
                    className="homeIcon" 
                    src={HomeIcon} 
                    alt="homeIcon"
                    width="40" 
                    height="auto" 
                    /></button>
                </Link >
            </div> 
        );
    }
}

export default Footer;