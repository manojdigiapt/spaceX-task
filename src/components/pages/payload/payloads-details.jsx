import React from 'react';
import { connect } from 'react-redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsPayloads} from "../../../redux/payloads/payloadsdetails/payloadsdetails-action";

class PayloadsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsPayloads(serialId));
    }
    render() {
        const {payloadsdetails, error, loading} = this.props;
        console.log("payloadsdetails", payloadsdetails, error, loading)
        return (
            <div className="data-root">
                <Back to="/payloads" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>Payload id: </b>{payloadsdetails?.payload_id}</span>
                <span><b>Customers: </b>{payloadsdetails?.customers}</span>
                <span><b>Nationality: </b>{payloadsdetails?.nationality}</span>
                <span><b>Manufacturer: </b>{payloadsdetails?.manufacturer}</span>
                <span><b>Payload type: </b>{payloadsdetails?.payload_type}</span>
                <span><b>Orbit: </b>{payloadsdetails?.orbit}</span>
                <h3>Orbit params</h3>
                <span><b>Reference system: </b>{payloadsdetails?.orbit_params?.reference_system}</span>
                <span><b>Regime: </b>{payloadsdetails?.orbit_params?.regime}</span>
                <span><b>Inclination degree: </b>{payloadsdetails?.orbit_params?.inclination_deg}</span>
                </div>
                )}
            </div>
        );
    }
}

PayloadsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    payloadsdetails: state.payloadsdetails.payloadsDetails,
    loading: state.payloadsdetails.loading,
    error: state.payloadsdetails.error
});


export default connect(mapStateToProps)(PayloadsDetails);
