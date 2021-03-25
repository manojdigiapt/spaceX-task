import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {fetchDetailsCapsules} from "../../../redux/capsules/capsulesdetails/capsulesdetails-action";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";

class CapsuleDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsCapsules(serialId));
    }
    render() {
        const {capsulesdetails, error, loading} = this.props;
        console.log("capsulesdetails", capsulesdetails?.capsule_serial, error, loading)
        return (
            <div className="data-root">
                <Back to="/capsules" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                    <span><b>Capsules id: </b>{capsulesdetails?.capsule_id}</span>
                    <span><b>Capsule serial: </b>{capsulesdetails?.capsule_serial}</span>
                    <span><b>Details: </b>{capsulesdetails?.details}</span>
                    <span><b>Landings: </b>{capsulesdetails?.landings}</span>
                    {capsulesdetails?.missions?.map((mission, i) => (
                        <>
                            <span><b>Mission name: </b>{mission.name}</span>
                            <span><b>Flights: </b>{mission.flight}</span>
                        </>
                    ))}
                    <span><b>Original launch: </b>{formatDate(capsulesdetails?.original_launch)}</span>
                    <span><b>UNIX: </b>{capsulesdetails?.original_launch_unix}</span>
                    <span><b>Reuse count: </b>{capsulesdetails?.reuse_count}</span>
                    <span><b>Status: </b>{capsulesdetails?.status}</span>
                    <span><b>Type: </b>{capsulesdetails?.type}</span>
                </div>
                )}
            </div>
        );
    }
}

CapsuleDetails.propTypes = {};

const mapStateToProps = (state) => ({
    capsulesdetails: state.capsulesdetails.capsuleDetails,
    loading: state.capsulesdetails.loading,
    error: state.capsulesdetails.error
});


export default connect(mapStateToProps)(CapsuleDetails);
