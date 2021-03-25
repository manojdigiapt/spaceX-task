import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchDetailsMissions} from "../../../redux/missions/missions-action";

class MissionDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsMissions(serialId));
    }
    render() {
        const {missions, error, loading} = this.props;
        console.log("missions", missions, error, loading)
        return (
            <div className="data-root">
               Progress
            </div>
        );
    }
}

MissionDetails.propTypes = {};

const mapStateToProps = (state) => ({
    missions: state.missions.missionsDetails,
    loading: state.missions.loading,
    error: state.missions.error
});


export default connect(mapStateToProps)(MissionDetails);
