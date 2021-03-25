import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsShips} from "../../../redux/ships/shipsdetails/shipsdetails-action";

class ShipsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsShips(serialId));
    }

    render() {
        const {shipsdetails, error, loading} = this.props;
        console.log("shipsdetails", shipsdetails, error, loading)
        return (
            <div className="data-root">
                <Back to="/ships" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>Ship id: </b>{shipsdetails?.ship_id}</span>
                <span><b>Ship name: </b>{shipsdetails?.ship_name}</span>
                <span><b>Ship type: </b>{shipsdetails?.ship_type}</span>
                <span><b>Roles: </b>{shipsdetails?.roles}</span>
                <span><b>Year built: </b>{shipsdetails?.year_built}</span>
                <span><b>Home port: </b>{shipsdetails?.home_port}</span>
                <div className="img-section">
                    <img src={shipsdetails?.image} />
                </div>
                <h3>Links</h3>
                <span><a href={shipsdetails?.url} target="_blank">Ship details</a></span>
                </div>
                )}
            </div>
        );
    }
}

ShipsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    shipsdetails: state.shipsdetails.shipsDetails,
    loading: state.shipsdetails.loading,
    error: state.shipsdetails.error
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchDetailsShips: fetchDetailsShips
// }, dispatch)

export default connect(mapStateToProps)(ShipsDetails);
