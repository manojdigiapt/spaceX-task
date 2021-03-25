import React from 'react';
import { connect } from 'react-redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsLandpads} from "../../../redux/landpads/landpadsdetails/landpadsdetails-action";

class LandpadsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsLandpads(serialId));
    }
    render() {
        const {landpadsdetails, error, loading} = this.props;
        console.log("landpadsdetails", landpadsdetails, error, loading)
        return (
            <div className="data-root">
                <Back to="/landpads" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>id: </b>{landpadsdetails?.id}</span>
                <span><b>Full name: </b>{landpadsdetails?.full_name}</span>
                <span><b>Landing type: </b>{landpadsdetails?.landing_type}</span>
                <span><b>Location: </b>{landpadsdetails?.location?.name},&nbsp;{landpadsdetails?.location?.region}</span>
                <span><b>Attempted landings: </b>{landpadsdetails?.attempted_landings}</span>
                <span><b>Successful landings: </b>{landpadsdetails?.successful_landings}</span>
                <h3>Links</h3>
                <span><a href={landpadsdetails?.wikipedia} target="_blank">Wikipedia</a></span>
                </div>
                )}
            </div>
        );
    }
}

LandpadsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    landpadsdetails: state.landpadsdetails.landpadsDetails,
    loading: state.landpadsdetails.loading,
    error: state.landpadsdetails.error
});


export default connect(mapStateToProps)(LandpadsDetails);
