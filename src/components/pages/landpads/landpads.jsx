import React from 'react';
import { connect } from 'react-redux';
import {fetchLandPads} from "../../../redux/landpads/landpads-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {landingPadsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Landpads extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchLandPads());
    }

    render() {
        const {landpads, error, loading} = this.props;
        console.log("landpads", landpads, error, loading)
        let gridData = [];
        if (landpads && landpads)
        landpads && landpads.map(data => {
            const landpads = {
                ...data,
            };
            gridData.push(landpads);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={landingPadsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    landpads: state.landpads.landpads,
    loading: state.landpads.loading,
    error: state.landpads.error
});

export default connect(mapStateToProps)(Landpads);
