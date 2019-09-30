import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Nav from './Navigation';
import ToCities from '../assets/circled-right-2.png';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="text">
                <p>
                    Find your perfect trip, designed by insiders who know and love their cities.
                </p>
                </div>

           
                    <h4 className="title">
                        Start browsing
                    </h4>
                    <div className= "toCities container">
                        <Link to="/cities">
                            <img 
                                src={ToCities} 
                                alt="linkedCitiesImg" 
                                width="100" 
                                height="auto"
                            />
                        </Link>
                    </div>
                    <div>
                        <Nav />
                    </div>
              
            </div>
        );
    }
}

export default Home;
