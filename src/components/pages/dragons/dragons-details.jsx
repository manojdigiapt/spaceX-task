import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {fetchDetailsDragons} from "../../../redux/dragons/dragons-action";
import Loader from "../../shared/loader/loader";

class DragonDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dragonId : ""
        }
    }
    componentWillReceiveProps = (newProps) => {
        console.log("newProps",newProps);
        this.setState({
            dragonId: newProps.dragonsId
        })
    }
    componentDidMount() {
        const serialId = this.props.match.params.id;
        this.props.dispatch(fetchDetailsDragons(serialId));
        console.log(this.props.dragons?.id, this.props.dragonsId, this.state.dragonId)
    }
    render() {
        const {dragons, error, loading, dragonsId} = this.props;
        console.log("dragons", dragons, error, loading, dragonsId)
        return (
            <div className="data-root">
                <div style={{textAlign:"left"}}>
                    <Link to="/dragons">Back</Link>
                </div>
                {loading ? <Loader /> : (
                <div className="data-root__info">
                    <span><b>Id: </b>{dragons?.id}</span>
                    <span><b>Name: </b>{dragons?.name}</span>
                    <span><b>Type: </b>{dragons?.type}</span>
                    <span><b>Crew capacity: </b>{dragons?.crew_capacity}</span>
                    <span><b>Side wall angle deg: </b>{dragons?.sidewall_angle_deg}</span>
                    <span><b>Orbit duration year: </b>{dragons?.orbit_duration_yr}</span>
                    <span><b>Dry mass lb: </b>{dragons?.dry_mass_lb}</span>
                    <span><b>First flight: </b>{dragons?.first_flight}</span>
                    <h3>Heat shields</h3>
                    <span><b>Material: </b>{dragons?.heat_shield?.material}</span>
                    <span><b>Size meters: </b>{dragons?.heat_shield?.size_meters}</span>
                    <span><b>Temp degrees: </b>{dragons?.heat_shield?.temp_degrees}</span>
                    <span><b>Dev partner: </b>{dragons?.heat_shield?.dev_partner}</span>
                    {dragons && dragons?.thrusters?.map((thusters, i) => (
                        <div className="sub-data" key={i}>
                            <span><b>Type: </b>{thusters.type}</span>
                            <span><b>Amount: </b>{thusters.amount}</span>
                            <span><b>Fuel 1: </b>{thusters.fuel_1}</span>
                            <span><b>Fuel 2: </b>{thusters.fuel_2}</span>
                            <span><b>ISP: </b>{thusters.isp}</span>
                            <span><b>Kn: </b>{thusters.thrust.kN}</span>
                        </div>
                    ))}
                    <a href={dragons?.wikipedia}>Wekipedia</a>
                    <h3>Description</h3>
                    <span>{dragons?.description}</span>
                    {/* <div className="img-section">
                    {dragons && dragons?.flickr_images.map((img, i) => (
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
    dragons: state.dragons.dragonsDetails,
    loading: state.dragons.loading,
    error: state.dragons.error,
    dragonsId: state.dragons.dragonsDetails?.id
});


export default connect(mapStateToProps)(DragonDetails);
