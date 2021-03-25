import React from 'react';
import { connect } from 'react-redux';
import {fetchLaunches} from "../../../redux/launches/launches-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {launchesGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Launches extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchLaunches());
    }

    render() {
        const {launches, error, loading} = this.props;
        console.log("launches", launches, error, loading);
        let gridData = [];
        if (launches && launches)
        launches && launches.map(data => {
            const launches = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(launches);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={launchesGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    launches: state.launches.launches,
    loading: state.launches.loading,
    error: state.launches.error
});

export default connect(mapStateToProps)(Launches);
