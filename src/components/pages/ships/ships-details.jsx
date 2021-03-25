import React from 'react';
import { connect } from 'react-redux';
import {fetchDetailsShips} from "../../../redux/ships/ships-action";

class ShipsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsShips(serialId));
    }
    render() {
        const {ships, error, loading} = this.props;
        console.log("ships", ships, error, loading)
        return (
            <div className="data-root">
                Progress...
            </div>
        );
    }
}

ShipsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    ships: state.ships.shipsDetails,
    loading: state.ships.loading,
    error: state.ships.error
});


export default connect(mapStateToProps)(ShipsDetails);
