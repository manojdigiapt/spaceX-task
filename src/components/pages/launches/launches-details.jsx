import React from 'react';
import { connect } from 'react-redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsLaunches} from "../../../redux/launches/launchesdetails/launchesdetails-action";

class LaunchesDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsLaunches(serialId));
    }
    render() {
        const {launchesdetails, error, loading} = this.props;
        console.log("launchesdetails", launchesdetails, error, loading)
        return (
            <div className="data-root">
                <Back to="/launches" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>Flight number: </b>{launchesdetails?.flight_number}</span>
                <span><b>Mission name: </b>{launchesdetails?.mission_name}</span>
                <span><b>Launch year: </b>{launchesdetails?.launch_year}</span>
                <h3>Rocket details</h3>
                <span><b>Rocket id: </b>{launchesdetails?.rocket?.rocket_id}</span>
                <span><b>Rocket name: </b>{launchesdetails?.rocket?.rocket_name}</span>
                <span><b>Rocket type: </b>{launchesdetails?.rocket?.rocket_type}</span>
                <h3>Launch site</h3>
                <span><b>Site id: </b>{launchesdetails?.launch_site?.site_id}</span>
                <span><b>Site name: </b>{launchesdetails?.launch_site?.site_name_long}</span>
                <h3>Links</h3>
                <span><a href={launchesdetails?.links?.wikipedia} target="_blank">Wikipedia</a></span>
                <span><a href={launchesdetails?.links?.article_link} target="_blank">Article</a></span>
                <span><b>Details: </b>{launchesdetails?.details}</span>
                </div>
                )}
            </div>
        );
    }
}

LaunchesDetails.propTypes = {};

const mapStateToProps = (state) => ({
    launchesdetails: state.launchesdetails.launchesDetails,
    loading: state.launchesdetails.loading,
    error: state.launchesdetails.error
});


export default connect(mapStateToProps)(LaunchesDetails);
