import React from 'react';
import { connect } from 'react-redux';
import {fetchRoadster} from "../../../redux/roadster/roadster-action";
import Loader from "../../shared/loader/loader";

class Roadster extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchRoadster());
    }
    render() {
        const {roadster, error, loading} = this.props;
        console.log("roadster", roadster, error, loading)
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <div className="data-root__info">
                    <span><b>Name: </b>{roadster?.name}</span>
                <span><b>Apoapsis: </b>{roadster?.apoapsis_au}</span>
                <span><b>Earth distance(km): </b>{roadster?.earth_distance_km}</span>
                <span><b>Earth distance(km):</b>{roadster?.earth_distance_mi}</span>
                <span><b>Details: </b>{roadster?.details}</span>
                <span><b>Eccentricity: </b>{roadster?.eccentricity}</span>
                <span><b>Epoch: </b>{roadster?.epoch_jd}</span>
                {/* {roadster?.flickr_images?.map((img) => (
                    <img src={img} alt="img" />
                ))} */}
                <span><b>Inclination</b>{roadster?.inclination}</span>
                <span><b>Launch date unix: </b>{roadster?.launch_date_unix}</span>
                <span><b>Launch date UTC: </b>{roadster?.launch_date_utc}</span>
                <span><b>Launch mass kg: </b>{roadster?.launch_mass_kg}</span>
                <span><b>Launch mass lbs: </b>{roadster?.launch_mass_lbs}</span>
                <span><b>Longitude: </b>{roadster?.longitude}</span>
                <span><b>Mars distanc(km): </b>{roadster?.mars_distance_km}</span>
                <span><b>Mars distanc(mi): </b>{roadster?.mars_distance_mi}</span>
                <span><b>Norad id: </b>{roadster?.norad_id}</span>
                <span><b>Orbit type: </b>{roadster?.orbit_type}</span>
                <span><b>Periapsis: </b>{roadster?.periapsis_arg}</span>
                <video src={roadster?.video} />
                <a href={roadster?.wikipedia}>Wikipedia</a>
                </div>
                )}
                
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    roadster: state.roadster.roadster,
    loading: state.roadster.loading,
    error: state.roadster.error
});


export default connect(mapStateToProps)(Roadster);
