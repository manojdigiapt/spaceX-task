import React from 'react';
import { connect } from 'react-redux';
import {fetchMissions} from "../../../redux/missions/missions-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {missionsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Missions extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMissions());
    }

    render() {
        const {missions, error, loading} = this.props;
        console.log("missions", missions, error, loading);
        let gridData = [];
        if (missions && missions)
        missions && missions.map(data => {
            const missions = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(missions);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={missionsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    missions: state.missions.missions,
    loading: state.missions.loading,
    error: state.missions.error
});

export default connect(mapStateToProps)(Missions);
