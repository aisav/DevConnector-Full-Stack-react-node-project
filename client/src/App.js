import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './store/actions/authActions';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './store/store';
import history from './store/history'

import './App.css';
if(localStorage.jwtToken) {
    const t = localStorage.jwtToken
    setAuthToken(t);
    const user = jwt_decode(t)
    //setCurrentUser(user) instead off this we must
    store.dispatch(setCurrentUser(user))

}

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
