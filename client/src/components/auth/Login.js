import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'

import {loginUser} from '../../store/actions/authActions'

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }

    //this we want to change components react state-errors
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    unSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginUser(user);
    }


    render() {
        const {errors} = this.state
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit={this.unSubmit}>
                                <TextFieldGroup
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    placeholder="Email Address"
                                    onChange={this.onChange}
                                    error={errors.email}/>


                                <TextFieldGroup
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.onChange}
                                    error={errors.password}/>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

// ownProps second parameter
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors: state.errors
    }
};


// const mapDispatchToProps = dispatch => {
//     return {
//         onRegisterUser: (usr) => dispatch( loginUser(usr)),
//     };
// };

export default connect(mapStateToProps, {loginUser})(Login);
