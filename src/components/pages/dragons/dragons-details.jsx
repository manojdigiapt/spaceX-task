import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {fetchDetailsDragons} from "../../../redux/dragons/dragonsdetails/dragonsdetails-action";
import Loader from "../../shared/loader/loader";
import Back from "../../shared/backbutton/backbutton";
class DragonDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsDragons(serialId));
        console.log(this.props.dragonsdetails?.id, this.props.dragonsId, this.state.dragonId)
    }
    render() {
        const {dragonsdetails, error, loading, dragonsId} = this.props;
        console.log("dragonsdetails", dragonsdetails, error, loading, dragonsId)
        return (
            <div className="data-root">
                <Back to="/dragons" />
                {loading ? <Loader /> : (
                <div className="data-root__info">
                    <span><b>Id: </b>{dragonsdetails?.id}</span>
                    <span><b>Name: </b>{dragonsdetails?.name}</span>
                    <span><b>Type: </b>{dragonsdetails?.type}</span>
                    <span><b>Crew capacity: </b>{dragonsdetails?.crew_capacity}</span>
                    <span><b>Side wall angle deg: </b>{dragonsdetails?.sidewall_angle_deg}</span>
                    <span><b>Orbit duration year: </b>{dragonsdetails?.orbit_duration_yr}</span>
                    <span><b>Dry mass lb: </b>{dragonsdetails?.dry_mass_lb}</span>
                    <span><b>First flight: </b>{dragonsdetails?.first_flight}</span>
                    <h3>Heat shields</h3>
                    <span><b>Material: </b>{dragonsdetails?.heat_shield?.material}</span>
                    <span><b>Size meters: </b>{dragonsdetails?.heat_shield?.size_meters}</span>
                    <span><b>Temp degrees: </b>{dragonsdetails?.heat_shield?.temp_degrees}</span>
                    <span><b>Dev partner: </b>{dragonsdetails?.heat_shield?.dev_partner}</span>
                    {dragonsdetails && dragonsdetails?.thrusters?.map((thusters, i) => (
                        <div className="sub-data" key={i}>
                            <span><b>Type: </b>{thusters.type}</span>
                            <span><b>Amount: </b>{thusters.amount}</span>
                            <span><b>Fuel 1: </b>{thusters.fuel_1}</span>
                            <span><b>Fuel 2: </b>{thusters.fuel_2}</span>
                            <span><b>ISP: </b>{thusters.isp}</span>
                            <span><b>Kn: </b>{thusters.thrust.kN}</span>
                        </div>
                    ))}
                    <a href={dragonsdetails?.wikipedia}>Wekipedia</a>
                    <h3>Description</h3>
                    <span>{dragonsdetails?.description}</span>
                    {/* <div className="img-section">
                    {dragonsdetails && dragonsdetails?.flickr_images.map((img, i) => (
                        <div key={i}>
                            <img src={img} />
                        </div>
                    ))}
                    </div> */}
                </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dragonsdetails: state.dragonsdetails.dragonsDetails,
    loading: state.dragonsdetails.loading,
    error: state.dragonsdetails.error,
});


export default connect(mapStateToProps)(DragonDetails);
