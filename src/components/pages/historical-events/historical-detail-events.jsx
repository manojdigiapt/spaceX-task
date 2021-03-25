import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsHistory} from "../../../redux/history/historydetails/historydetails-actions";
import {formatDate} from "../../../utils/date-format";

class HistoryDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsHistory(serialId));
    }
    render() {
        const {historydetails, error, loading} = this.props;
        console.log("historydetails", historydetails, error, loading)
        return (
            <div className="data-root">
                <Back to="/history" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>Title: </b>{historydetails?.title}</span>
                <span><b>Details: </b>{historydetails?.details}</span>
                <span><b>Event data UNIX: </b>{historydetails?.event_date_unix}</span>
                <span><b>Event data UTC: </b>{formatDate(historydetails?.event_date_utc)}</span>
                <span><b>Flight number: </b>{historydetails?.flight_number}</span>
                <h3>Links</h3>
                <span><a href={historydetails?.links?.article} target="_blank">Article</a></span>
                <span><a href={historydetails?.links?.wikipedia} target="_blank">Wikipedia</a></span>
                </div>
                )}
            </div>
        );
    }
}

HistoryDetails.propTypes = {};

const mapStateToProps = (state) => ({
    historydetails: state.historydetails.historyDetails,
    loading: state.historydetails.loading,
    error: state.historydetails.error
});


export default connect(mapStateToProps)(HistoryDetails);
