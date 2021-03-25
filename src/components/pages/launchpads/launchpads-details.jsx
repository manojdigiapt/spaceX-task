import React from 'react';
import { connect } from 'react-redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsLaunchpads} from "../../../redux/launchpads/launchpadsdetails/launchpadsdetails-action";

class LaunchPadsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsLaunchpads(serialId));
    }
    render() {
        const {launchpadsdetails, error, loading} = this.props;
        console.log("launchpadsdetails", launchpadsdetails, error, loading)
        return (
            <div className="data-root">
                <Back to="/launchpads" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>id: </b>{launchpadsdetails?.id}</span>
                <span><b>Name: </b>{launchpadsdetails?.name}</span>
                <span><b>Status: </b>{launchpadsdetails?.status}</span>
                <span><b>Location: </b>{launchpadsdetails?.location?.name},&nbsp;{launchpadsdetails?.location?.region}</span>
                <span><b>Attempted launches: </b>{launchpadsdetails?.attempted_launches}</span>
                <span><b>Successful launches: </b>{launchpadsdetails?.successful_launches}</span>
                <span><b>Site id: </b>{launchpadsdetails?.site_id}</span>
                <span><b>Site name: </b>{launchpadsdetails?.site_name_long}</span>
                <span><b>Details: </b>{launchpadsdetails?.details}</span>
                <h3>Links</h3>
                <span><a href={launchpadsdetails?.wikipedia} target="_blank">Wikipedia</a></span>
                </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    launchpadsdetails: state.launchpadsdetails.launchpadsDetails,
    loading: state.launchpadsdetails.loading,
    error: state.launchpadsdetails.error
});


export default connect(mapStateToProps)(LaunchPadsDetails);
