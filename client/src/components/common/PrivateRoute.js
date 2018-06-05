import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated ?
                <Component {...props}/> :
                <Redirect to="/login"/>}/>
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

// ownProps as second  parameter
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(PrivateRoute)