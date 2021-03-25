import React from 'react';
import { connect } from 'react-redux';
import {fetchCapsules} from "../../../redux/capsules/capsule-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {capsulesGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Capsules extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchCapsules());
    }

    render() {
        const {capsules, error, loading} = this.props;
        console.log("capsules", capsules, error, loading);
        let gridData = [];
        if (capsules && capsules)
        capsules && capsules.map(data => {
            const capsules = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(capsules);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={capsulesGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    capsules: state.capsules.capsules,
    loading: state.capsules.loading,
    error: state.capsules.error
});

export default connect(mapStateToProps)(Capsules);
