import React from 'react';
import {Link} from "react-router-dom"

class Back extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{textAlign:"left"}}>
                <Link to={this.props.to}>Back</Link>
            </div>
        );
    }
}

export default Back;
