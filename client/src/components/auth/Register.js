import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {registerUser} from '../../store/actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    unSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.onRegisterUser(newUser, this.props.history);
    }

    render() {
        const {errors} = this.state;

        // we can get user
        // const {user} = this.props.auth;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form noValidate onSubmit={this.unSubmit}>
                                <TextFieldGroup
                                    name="name"
                                    value={this.state.name}
                                    placeholder="Name"
                                    onChange={this.onChange}
                                    error={errors.name}/>

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

                                <TextFieldGroup
                                    name="password2"
                                    type="password"
                                    value={this.state.password2}
                                    placeholder="Confirm Password"
                                    onChange={this.onChange}
                                    error={errors.password2}/>

                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    onRegisterUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors: state.errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: (usr) => dispatch(registerUser(usr)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
