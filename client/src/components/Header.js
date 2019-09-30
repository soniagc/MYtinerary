import React, { Component } from 'react';
import Logo from '../assets/MYtineraryLogo.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img 
                    className="logo" 
                    width="100%" 
                    height="auto" 
                    src={Logo} 
                    alt="logo"
                    />
            </div>
        );
    }
}

export default Header;