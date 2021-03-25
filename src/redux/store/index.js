import { combineReducers } from "redux";
import capsules from "../capsules/capsule-reducer";
import cores from "../cores/cores-reducer";
import roadster from "../roadster/roadster-reducer";
import dragons from "../dragons/dragons-reducer";
import history from "../history/history-reducer";
import landpads from "../landpads/landpads-reducer";
import launchpads from "../launchpads/launchpads-reducer";
import launches from "../launches/launches-reducer";
import missions from "../missions/missions-reducer";
import payloads from "../payloads/payloads-reducer";
import rockets from "../rockets/rockets-reducer";
import ships from "../ships/ships-reducer";
import shipsdetails from "../ships/shipsdetails/shipsdetails-reducer";
import rocketsdetails from "../rockets/rocketsdetails/rocketsdetails-reducer";
import payloadsdetails from "../payloads/payloadsdetails/payloadsdetails-reducer";
import missionsdetails from "../missions/missionsdetails/missionsdetails-reducer";
import launchpadsdetails from "../launchpads/launchpadsdetails/launchpadsdetails-reducer";
import launchesdetails from "../launches/launchesdetails/launchesdetails-reducer";
import landpadsdetails from "../landpads/landpadsdetails/landpadsdetails-reducer";
import historydetails from "../history/historydetails/historydetails-reducer";
import dragonsdetails from "../dragons/dragonsdetails/dragonsdetails-reducer";
import coresdetails from "../cores/coresdetails/coresdetails-reducer";
import capsulesdetails from "../capsules/capsulesdetails/capsulesdetails-reducer";

export default combineReducers({
    capsules,
    cores,
    roadster,
    dragons,
    history,
    landpads,
    launchpads,
    launches,
    missions,
    payloads,
    rockets,
    ships,
    shipsdetails,
    rocketsdetails,
    payloadsdetails,
    missionsdetails,
    launchpadsdetails,
    launchesdetails,
    landpadsdetails,
    historydetails,
    dragonsdetails,
    coresdetails,
    capsulesdetails
});