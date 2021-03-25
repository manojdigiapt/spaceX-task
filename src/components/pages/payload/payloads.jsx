import React from 'react';
import { connect } from 'react-redux';
import {fetchPayloads} from "../../../redux/payloads/payloads-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {payloadsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Payloads extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPayloads());
    }

    render() {
        const {payloads, error, loading} = this.props;
        console.log("payloads", payloads, error, loading);
        let gridData = [];
        if (payloads && payloads)
        payloads && payloads.map(data => {
            const payloads = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(payloads);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={payloadsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    payloads: state.payloads.payloads,
    loading: state.payloads.loading,
    error: state.payloads.error
});

export default connect(mapStateToProps)(Payloads);
