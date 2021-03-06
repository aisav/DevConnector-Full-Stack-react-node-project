import React, {Component} from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Spinner from '../common/Spinner'
import ProfileActions from './ProfileActions'
import {getCurrentProfile, deleteAccount} from '../../store/actions/profileActions'

class Dashboard extends Component {
    componentDidMount () {
        this.props.getCurrentProfile()
    }

    onDeleteClick = (e) => {
        this.props.deleteAccount()
    }

    render() {
        const { user } = this.props.auth
        const { profile, loading } = this.props.profile

        let dashboardContent

        if (profile === null || loading) {
            dashboardContent = <Spinner />
        } else {
            if (Object.keys(profile).length > 0) {
                dashboardContent = (
                    <div>
                        <p className="lead text-muted"></p>
                        Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
                        <div>

                                <ProfileActions/>
                        </div>
                        <div style={{ marginBottom:'60px' }}/>

                    </div>
                )
            } else {
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">Welcome {user.name}</p>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info">
                            Create Profile
                        </Link>
                    </div>
                )
            }
        }

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                            {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

// ownProps as second  parameter
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard)