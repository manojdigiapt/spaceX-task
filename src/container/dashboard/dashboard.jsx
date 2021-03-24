import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from "../../redux/actions/index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "../../components/auth/login";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route
                        path="/"
                        render={({ match: { path } }) => (
                        <>
                        <Route
                            path={`${path}`}
                            component={Login}
                            exact
                        />
                        </>
                        )}
                    />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, actionCreators) (Dashboard);
