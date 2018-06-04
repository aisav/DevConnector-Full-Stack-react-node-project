import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {getCurrentProfile} from '../../store/actions/profileActions'

class Dashboard extends Component {
    componentDidMount () {
        this.props.getCurrentProfile();
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

// ownProps as second  parameter
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profile
    }
};

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);