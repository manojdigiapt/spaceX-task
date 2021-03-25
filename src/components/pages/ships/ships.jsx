import React from 'react';
import { connect } from 'react-redux';
import {fetchShips} from "../../../redux/ships/ships-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {shipsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Ships extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShips());
    }

    render() {
        const {ships, error, loading} = this.props;
        console.log("ships", ships, error, loading)
        let gridData = [];
        if (ships && ships)
        ships && ships.map(data => {
            const ships = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(ships);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={shipsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ships: state.ships.ships,
    loading: state.ships.loading,
    error: state.ships.error
});

export default connect(mapStateToProps)(Ships);
