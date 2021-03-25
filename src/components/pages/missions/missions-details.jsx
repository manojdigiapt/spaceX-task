import React from 'react';
import { connect } from 'react-redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsMissions} from "../../../redux/missions/missionsdetails/missionsdetails-action";

class MissionDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsMissions(serialId));
    }
    render() {
        const {missionsdetails, error, loading} = this.props;
        console.log("missionsdetails", missionsdetails, error, loading)
        return (
            <div className="data-root">
               <Back to="/missions" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>Mission id: </b>{missionsdetails?.mission_id}</span>
                <span><b>Mission name: </b>{missionsdetails?.mission_name}</span>
                <span><b>Manufacturer: </b>{missionsdetails?.manufacturers}</span>
                <span><b>Payload id's: </b>{missionsdetails?.payload_ids}</span>
                <span><b>Description: </b>{missionsdetails?.description}</span>
                <h3>Links</h3>
                <span><a href={missionsdetails?.wikipedia} target="_blank">Wikipedia</a></span>
                <span><a href={missionsdetails?.website} target="_blank">Website</a></span>
                <span><a href={missionsdetails?.twitter} target="_blank">Twitter</a></span>
                </div>
                )}
            </div>
        );
    }
}

MissionDetails.propTypes = {};

const mapStateToProps = (state) => ({
    missionsdetails: state.missionsdetails.missionsDetails,
    loading: state.missionsdetails.loading,
    error: state.missionsdetails.error
});


export default connect(mapStateToProps)(MissionDetails);
