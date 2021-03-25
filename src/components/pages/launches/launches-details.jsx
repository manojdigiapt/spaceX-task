import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchDetailsLaunches} from "../../../redux/launches/launches-action";

class LaunchesDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsLaunches(serialId));
    }
    render() {
        const {launches, error, loading} = this.props;
        console.log("launches", launches, error, loading)
        return (
            <div className="data-root">
                Progress..
            </div>
        );
    }
}

LaunchesDetails.propTypes = {};

const mapStateToProps = (state) => ({
    launches: state.launches.launchesDetails,
    loading: state.launches.loading,
    error: state.launches.error
});


export default connect(mapStateToProps)(LaunchesDetails);
