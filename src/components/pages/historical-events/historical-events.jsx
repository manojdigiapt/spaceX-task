import React from 'react';
import { connect } from 'react-redux';
import {fetchHistory} from "../../../redux/history/history-actions";
import CustomTable from "../../shared/customgrid/customgrid";
import {historyGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class HistoricalEvents extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchHistory());
    }

    render() {
        const {history, error, loading} = this.props;
        console.log("history", history, error, loading);
        let gridData = [];
        if (history && history)
        history && history.map(data => {
            const history = {
                ...data,
                event_date_utc: formatDate(data.event_date_utc)
            };
            gridData.push(history);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={historyGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    history: state.history.history,
    loading: state.history.loading,
    error: state.history.error
});

export default connect(mapStateToProps)(HistoricalEvents);
