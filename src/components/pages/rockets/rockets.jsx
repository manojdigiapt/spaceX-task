import React from 'react';
import { connect } from 'react-redux';
import {fetchRockets} from "../../../redux/rockets/rockets-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {rocketsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Rockets extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchRockets());
    }

    render() {
        const {rockets, error, loading} = this.props;
        console.log("rockets", rockets, error, loading);
        let gridData = [];
        if (rockets && rockets)
        rockets && rockets.map(data => {
            const rockets = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(rockets);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={rocketsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    rockets: state.rockets.rockets,
    loading: state.rockets.loading,
    error: state.rockets.error
});

export default connect(mapStateToProps)(Rockets);
