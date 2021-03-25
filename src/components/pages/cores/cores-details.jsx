import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsCores} from "../../../redux/cores/coresdetails/coresdetails-action";

class CoresDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsCores(serialId));
    }
    render() {
        const {coresdetails, error, loading} = this.props;
        console.log("coresdetails", coresdetails?.capsule_serial, error, loading)
        return (
            <div className="data-root">
                <Back to="/cores" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>ASDS attempts: </b>{coresdetails?.asds_attempts}</span>
                <span><b>ASDS landings: </b>{coresdetails?.asds_landings}</span>
                <span><b>Details: </b>{coresdetails?.details}</span>
                {coresdetails?.missions?.map((mission, i) => (
                    <>
                        <span><b>Mission name: </b>{mission.name}</span>
                        <span><b>Flights: </b>{mission.flight}</span>
                    </>
                ))}
                <span><b>Original launch</b>{coresdetails?.original_launch}</span>
                <span><b>UNIX: </b>{coresdetails?.original_launch_unix}</span>
                <span><b>Reuse count: </b>{coresdetails?.reuse_count}</span>
                <span><b>Status: </b>{coresdetails?.status}</span>
                <span><b>RTLS attempts: </b>{coresdetails?.rtls_attempts}</span>
                <span><b>RTLS landings: </b>{coresdetails?.rtls_landings}</span>
                </div>
                )}
            </div>
        );
    }
}

CoresDetails.propTypes = {};

const mapStateToProps = (state) => ({
    coresdetails: state.coresdetails.coresDetails,
    loading: state.coresdetails.loading,
    error: state.coresdetails.error
});


export default connect(mapStateToProps)(CoresDetails);
