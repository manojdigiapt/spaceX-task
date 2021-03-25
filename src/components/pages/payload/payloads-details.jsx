import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchDetailsPayloads} from "../../../redux/payloads/payloads-action";

class PayloadsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsPayloads(serialId));
    }
    render() {
        const {payloads, error, loading} = this.props;
        console.log("payloads", payloads, error, loading)
        return (
            <div className="data-root">
                Progress...
            </div>
        );
    }
}

PayloadsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    payloads: state.payloads.payloadsDetails,
    loading: state.payloads.loading,
    error: state.payloads.error
});


export default connect(mapStateToProps)(PayloadsDetails);
