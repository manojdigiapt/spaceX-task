import React from 'react';
import { connect } from 'react-redux';
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
import {fetchDetailsRockets} from "../../../redux/rockets/rocketsdetails/rocketsdetails-action";

class RocketsDetails extends React.Component {
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsRockets(serialId));
    }
    render() {
        const {rocketsdetails, error, loading} = this.props;
        console.log("rocketsdetails", rocketsdetails, error, loading)
        return (
            <div className="data-root">
                 <Back to="/rockets" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>Rocket id: </b>{rocketsdetails?.rocket_id}</span>
                <span><b>Rocket name: </b>{rocketsdetails?.rocket_name}</span>
                <span><b>Rocket type: </b>{rocketsdetails?.rocket_type}</span>
                <span><b>Cost per launch: </b>{rocketsdetails?.cost_per_launch}</span>
                <span><b>Success rate: </b>{rocketsdetails?.success_rate_pct}</span>
                <span><b>First flight: </b>{rocketsdetails?.first_flight}</span>
                <span><b>Country: </b>{rocketsdetails?.country}</span>
                <span><b>Company: </b>{rocketsdetails?.company}</span>
                <div className="img-section">
                    <img src={rocketsdetails?.flickr_images} />
                </div>
                <span><b>Description: </b>{rocketsdetails?.description}</span>
                <h3>Links</h3>
                <span><a href={rocketsdetails?.wikipedia} target="_blank">Wikipedia</a></span>
                </div>
                )}
            </div>
        );
    }
}

RocketsDetails.propTypes = {};

const mapStateToProps = (state) => ({
    rocketsdetails: state.rocketsdetails.rocketsDetails,
    loading: state.rocketsdetails.loading,
    error: state.rocketsdetails.error
});


export default connect(mapStateToProps)(RocketsDetails);
