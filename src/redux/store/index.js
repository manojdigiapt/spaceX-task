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
    ships
});