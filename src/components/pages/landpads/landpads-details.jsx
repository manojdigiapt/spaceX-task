import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchDetailsLandpads} from "../../../redux/landpads/landpads-action";

class LandpadsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsLandpads(serialId));
    }
    render() {
        const {landpads, error, loading} = this.props;
        console.log("landpads", landpads, error, loading)
        return (
            <div className="data-root">
                Progress....
            </div>
        );
    }
}

LandpadsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    landpads: state.landpads.landpadsDetails,
    loading: state.landpads.loading,
    error: state.landpads.error
});


export default connect(mapStateToProps)(LandpadsDetails);
