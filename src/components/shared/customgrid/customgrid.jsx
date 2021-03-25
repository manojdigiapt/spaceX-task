import React from 'react';
import "./customgrid.scss";
import { Table } from 'antd';
import 'antd/dist/antd.css';

class CustomGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Table 
                    columns={this.props.columns}
                    dataSource={this.props.dataSource} 
                /> 
            </>
        );
    }
}

export default CustomGrid;
