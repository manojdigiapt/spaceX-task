import React from 'react';
import "./main.scss";
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideMenu from "../../components/shared/sidemenu/sidemenu";
import {menuDataAdmin, menuDataUser} from "../../mock/sidemenu";
import NavigationBar from "../../components/shared/navigation-bar/navigation-bar";
import Login from "../../components/auth/login";
import Dashboard from "../../components/pages/dashboard/dashboard";
import Capsules from "../../components/pages/capsules/capsules";
import CapsulesDetails from "../../components/pages/capsules/capsule-details";
import Cores from "../../components/pages/cores/cores";
import CoresDetails from "../../components/pages/cores/cores-details";
import Dragons from "../../components/pages/dragons/dragons";
import DragonDetails from "../../components/pages/dragons/dragons-details";
import Landpads from "../../components/pages/landpads/landpads";
import LandpadsDetails from "../../components/pages/landpads/landpads-details";
import Launches from "../../components/pages/launches/launches";
import LaunchDetails from "../../components/pages/launches/launches-details";
import Launchpads from "../../components/pages/launchpads/launchpads";
import LaunchpadsDetails from "../../components/pages/launchpads/launchpads-details";
import Missions from "../../components/pages/missions/missions";
import MissionsDetails from "../../components/pages/missions/missions-details";
import Payloads from "../../components/pages/payload/payloads";
import PayloadsDetails from "../../components/pages/payload/payloads-details";
import Rockets from "../../components/pages/rockets/rockets";
import RocketsDetails from "../../components/pages/rockets/rockets-details";
import Roadster from "../../components/pages/roadster/roadster";
import History from "../../components/pages/historical-events/historical-events";
import HistoryDetails from "../../components/pages/historical-events/historical-detail-events";
import Ships from "../../components/pages/ships/ships";
import ShipsDetails from "../../components/pages/ships/ships-details";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            role: ""
        }
    }

    componentDidMount(){
        const roleBased = localStorage.getItem("role");
        this.setState({
            role: roleBased
        })
    }

    render() {
        // const {role} = this.state;
        const role = localStorage.getItem("role");
        console.log("history", this.props.history)
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={props => <Login {...props} />} />
                    {role && (
                    <>
                    <NavigationBar history={this.props.history} />
                    <div className="space-c-info__root">
                    <SideMenu 
                    role={role} 
                    history={this.props.history} 
                    />
                    <Route path="/dashboard" component={props => <Dashboard  {...props}/>} />
                    <Route
                        path={`/capsules`}
                        component={props => <Capsules {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/capsules/:id`}
                        component={props => <CapsulesDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/cores`}
                        component={props => <Cores {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/cores/:id`}
                        component={props => <CoresDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/dragons`}
                        component={props => <Dragons {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/dragons/:id`}
                        component={props => <DragonDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/landpads`}
                        component={props => <Landpads {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/landpads/:id`}
                        component={props => <LandpadsDetails {...props} />}
                        exact
                    />
                      <Route
                        path={`/launches`}
                        component={props => <Launches {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/launches/:id`}
                        component={props => <LaunchDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/launchpads`}
                        component={props => <Launchpads {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/launchpads/:id`}
                        component={props => <LaunchpadsDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/missions`}
                        component={props => <Missions {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/missions/:id`}
                        component={props => <MissionsDetails {...props} />}
                        exact
                    />
                     <Route
                        path={`/payloads`}
                        component={props => <Payloads {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/payloads/:id`}
                        component={props => <PayloadsDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/rockets`}
                        component={props => <Rockets {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/rockets/:id`}
                        component={props => <RocketsDetails {...props} />}
                        exact
                    />
                      <Route
                        path={`/ships`}
                        component={props => <Ships {...props}/>} 
                        exact
                    />
                    <Route
                        path={`/ships/:id`}
                        component={props => <ShipsDetails {...props} />}
                        exact
                    />
                    <Route
                        path={`/roadster`}
                        component={props => <Roadster {...props} />}
                        exact
                    />
                    <Route
                        path={`/history`}
                        component={props => <History {...props} />}
                        exact
                    />
                    <Route
                        path={`/history/:id`}
                        component={props => <HistoryDetails {...props} />}
                        exact
                    />
                    </div>
                    </>
                    )}
                </Switch>
            </div>
        );
    }
}


export default withRouter(Main);
