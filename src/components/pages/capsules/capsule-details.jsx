import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {fetchDetailsCapsules} from "../../../redux/capsules/capsule-action";
import Loader from "../../shared/loader/loader";

class CapsuleDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsCapsules(serialId));
    }
    render() {
        const {capsules, error, loading} = this.props;
        console.log("capsules", capsules?.capsule_serial, error, loading)
        return (
            <div className="data-root">
                <div style={{textAlign:"left"}}>
                    <Link to="/capsules">Back</Link>
                </div>
                {loading ? <Loader /> : (
                <div className="data-root__info">
                    <span><b>Capsules id: </b>{capsules?.capsule_id}</span>
                    <span><b>Capsule serial: </b>{capsules?.capsule_serial}</span>
                    <span><b>Details: </b>{capsules?.details}</span>
                    <span><b>Landings: </b>{capsules?.landings}</span>
                    {capsules?.missions?.map((mission, i) => (
                        <>
                            <span><b>Mission name: </b>{mission.name}</span>
                            <span><b>Flights: </b>{mission.flight}</span>
                        </>
                    ))}
                    <span><b>Original launch</b>{capsules?.original_launch}</span>
                    <span><b>UNIX: </b>{capsules?.original_launch_unix}</span>
                    <span><b>Reuse count: </b>{capsules?.reuse_count}</span>
                    <span><b>Status: </b>{capsules?.status}</span>
                    <span><b>Type: </b>{capsules?.type}</span>
                </div>
                )}
            </div>
        );
    }
}

CapsuleDetails.propTypes = {};

const mapStateToProps = (state) => ({
    capsules: state.capsules.capsuleDetails,
    loading: state.capsules.loading,
    error: state.capsules.error
});


export default connect(mapStateToProps)(CapsuleDetails);
