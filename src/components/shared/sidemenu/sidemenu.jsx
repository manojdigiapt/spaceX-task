import React from 'react';
import SideMenu from "react-sidemenu";
import {menuDataAdmin, menuDataUser} from "../../../mock/sidemenu";
import { Link } from "react-router-dom";

class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleMenuItemClick = (values, extras) => {
        console.log(values);
        console.log(extras);
    };

    handleRenerMenuItemContent = item => {
        const locationPath = this.props.history?.location?.pathname;
        console.log("item", item, locationPath);
        if (item.value === "capsules") {
          return <Link className={locationPath === "/capsules" && "item-active"} to="/capsules">{item.label}</Link>;
        } else if (item.value === "cores") {
          return <Link className={locationPath === "/cores" && "item-active"} to="/cores">{item.label}</Link>;
        } else if (item.value === "dragons") {
          return <Link className={locationPath === "/dragons" && "item-active"} to="/dragons">{item.label}</Link>;
        } else if (item.value === "history") { 
          return <Link className={locationPath === "/history" && "item-active"} to="/history">{item.label}</Link>;
        } else if(item.value === "landpads"){
          return <Link className={locationPath === "/landpads" && "item-active"} to="/landpads">{item.label}</Link>
        }else if(item.value === "launches"){
            return <Link className={locationPath === "/launches" && "item-active"} to="/launches">{item.label}</Link>
        } else if(item.value === "launchpads"){
            return <Link className={locationPath === "/launchpads" && "item-active"} to="/launchpads">{item.label}</Link>
        }else if(item.value === "missions"){
            return <Link className={locationPath === "/missions" && "item-active"} to="/missions">{item.label}</Link>
        }else if(item.value === "payloads"){
            return <Link className={locationPath === "/payloads" && "item-active"} to="/payloads">{item.label}</Link>
        }else if(item.value === "rockets"){
            return <Link className={locationPath === "/rockets" && "item-active"} to="/rockets">{item.label}</Link>
        }else if(item.value === "roadster"){
            return <Link className={locationPath === "/roadster" && "item-active"} to="/roadster">{item.label}</Link>
        }else if(item.value === "ships"){
            return <Link className={locationPath === "/ships" && "item-active"} to="/ships">{item.label}</Link>
        }else {
          return (
            <Link className={locationPath === "/dashboard" && "item-active"} to="/dashboard">{item.label}</Link>
          );
        }
    };

    render() {
        return (
            <div>
                <SideMenu 
                renderMenuItemContent={this.handleRenerMenuItemContent}
                onMenuItemClick={this.handleMenuItemClick}
                collapse={true}
                items={this.props.role !== "user" ? menuDataAdmin :menuDataUser}
                />
            </div>
        );
    }
}

export default Sidemenu;
