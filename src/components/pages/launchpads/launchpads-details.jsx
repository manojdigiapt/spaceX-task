import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchDetailsLaunchpads} from "../../../redux/launchpads/launchpads-action";

class LaunchPadsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsLaunchpads(serialId));
    }
    render() {
        const {launchpads, error, loading} = this.props;
        console.log("launchpads", launchpads, error, loading)
        return (
            <div className="data-root">
                Progress...
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    launchpads: state.launchpads.launchpadsDetails,
    loading: state.launchpads.loading,
    error: state.launchpads.error
});


export default connect(mapStateToProps)(LaunchPadsDetails);
