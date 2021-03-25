import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchDetailsRockets} from "../../../redux/rockets/rockets-action";

class RocketsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsRockets(serialId));
    }
    render() {
        const {rockets, error, loading} = this.props;
        console.log("rockets", rockets, error, loading)
        return (
            <div className="data-root">
                Progress...
            </div>
        );
    }
}

RocketsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    rockets: state.rockets.rocketsDetails,
    loading: state.rockets.loading,
    error: state.rockets.error
});


export default connect(mapStateToProps)(RocketsDetails);
