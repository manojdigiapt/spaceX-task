import React from 'react';
import { connect } from 'react-redux';
import {fetchLaunchPads} from "../../../redux/launchpads/launchpads-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {launchPadsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Launchpads extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchLaunchPads());
    }

    render() {
        const {launchpads, error, loading} = this.props;
        console.log("launchpads", launchpads, error, loading);
        let gridData = [];
        if (launchpads && launchpads)
        launchpads && launchpads.map(data => {
            const launchpads = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(launchpads);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={launchPadsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    launchpads: state.launchpads.launchpads,
    loading: state.launchpads.loading,
    error: state.launchpads.error
});

export default connect(mapStateToProps)(Launchpads);
