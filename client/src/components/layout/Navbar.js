import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../store/actions/authActions'

class Navbar extends Component {
    render () {

        const {isAuthenticated, user} = this.props.auth;
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        );

        const activeUserLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href=""
                       className="nav-link"
                       onClick={this.props.logoutUser}>
                        <img className="rounded-circle"
                             src={user.avatar}
                             title="You must have a gravatar connected to your email to display an image"
                             alt={user.name}
                             style={{width: '25px', marginRight: '5px'}}/>{' '}Logout
                    </a>
                </li>
            </ul>
        )

        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">DevConnector</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profiles"> Developers
                                </Link>
                            </li>
                        </ul>


                        {isAuthenticated ? activeUserLinks: guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps, {logoutUser})(Navbar);
