import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './store/store';
import history from './store/history'

import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div className="App">
                        <Navbar/>
                        <Route path="/" exact component={Landing}/>
                        <div className="container">
                            <Route path="/login" exact component={Login}/>
                            <Route path="/register" exact component={Register}/>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
