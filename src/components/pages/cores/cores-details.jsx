import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import Loader from "../../shared/loader/loader";
import {fetchDetailsCores} from "../../../redux/cores/cores-action";

class CoresDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsCores(serialId));
    }
    render() {
        const {cores, error, loading} = this.props;
        console.log("cores", cores?.capsule_serial, error, loading)
        return (
            <div className="data-root">
                <div style={{textAlign:"left"}}>
                    <Link to="/cores">Back</Link>
                </div>
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>ASDS attempts</b>{cores?.asds_attempts}</span>
                <span><b>ASDS landings</b>{cores?.asds_landings}</span>
                <span><b>Details: </b>{cores?.details}</span>
                {cores?.missions?.map((mission, i) => (
                    <>
                        <span><b>Mission name: </b>{mission.name}</span>
                        <span><b>Flights: </b>{mission.flight}</span>
                    </>
                ))}
                <span><b>Original launch</b>{cores?.original_launch}</span>
                <span><b>UNIX: </b>{cores?.original_launch_unix}</span>
                <span><b>Reuse count: </b>{cores?.reuse_count}</span>
                <span><b>Status: </b>{cores?.status}</span>
                <span><b>RTLS attempts: </b>{cores?.rtls_attempts}</span>
                <span><b>RTLS landings: </b>{cores?.rtls_landings}</span>
                </div>
                )}
            </div>
        );
    }
}

CoresDetails.propTypes = {};

const mapStateToProps = (state) => ({
    cores: state.cores.coresDetails,
    loading: state.cores.loading,
    error: state.cores.error
});


export default connect(mapStateToProps)(CoresDetails);
