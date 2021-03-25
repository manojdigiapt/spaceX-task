import React from 'react';
import "./navigation-bar.scss";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const token = localStorage.getItem("token");
        let isLoggedIn = false;
        if (token) isLoggedIn = true;
        if (prevState.isLoggedIn !== isLoggedIn) {
          this.setState({ isLoggedIn: isLoggedIn });
        }
    }

    handleLogout = () => {
        localStorage.clear();
        this.setState({ isLoggedIn: false });
        this.props.history.push("/")
    }

    render() {
        console.log("history", this.props.history);
        const getRole = localStorage.getItem("role");
        return (
            <div className="navigation-bar__root">
                <div className="navigation-bar__root-items">
                <h2>SpaceX</h2>
                <div className="navigation-bar__root-account">
                <h4>{getRole}</h4>
                <h4 onClick={this.handleLogout}>Logout</h4>
                </div>
                </div>
            </div>
        );
    }
}


export default Navigation;
