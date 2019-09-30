import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Cities from './components/Cities';
import Login from './components/Login';
import Registration from './components/Registration';
import Footer from './components/Footer';
import PageError from './components/PageError';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route
                        exact
                        path="/"
                        component={Home} />
                        <Route
                        path="/cities"
                        component={Cities} />
                        <Route
                        path="/login"
                        component={Login} />
                        <Route
                        path="/registration"
                        component={Registration} />                  
                        <Route
                        component={PageError} />                  
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
    );
  }
}
    
export default App;
