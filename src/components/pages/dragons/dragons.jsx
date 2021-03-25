import React from 'react';
import { connect } from 'react-redux';
import {fetchDragons} from "../../../redux/dragons/dragons-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {dragonsGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Dragons extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchDragons())
    }

    render() {
        const {dragons, error, loading} = this.props;
        console.log("dragons", dragons, error, loading);
        let gridData = [];
        if (dragons && dragons)
        dragons && dragons.map(data => {
            const dragons = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(dragons);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={dragonsGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.dragons.loading,
    error: state.dragons.error,
    dragons: state.dragons.dragons
});

export default connect(mapStateToProps)(Dragons);
