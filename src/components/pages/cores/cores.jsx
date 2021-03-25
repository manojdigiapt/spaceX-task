import React from 'react';
import { connect } from 'react-redux';
import {fetchCores} from "../../../redux/cores/cores-action";
import CustomTable from "../../shared/customgrid/customgrid";
import {coresGridColumns} from "../../../mock/grid-columns";
import {formatDate} from "../../../utils/date-format";
import Loader from "../../shared/loader/loader";

class Cores extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCores());
    }

    render() {
        const {cores, error, loading} = this.props;
        console.log("cores", cores, error, loading);
        let gridData = [];
        if (cores && cores)
        cores && cores.map(data => {
            const cores = {
                ...data,
                original_launch: formatDate(data.original_launch)
            };
            gridData.push(cores);
        });
        return (
            <div className="data-root">
                {loading ? <Loader /> : (
                <CustomTable 
                    columns={coresGridColumns}
                    dataSource={gridData}
                />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cores: state.cores.cores,
    loading: state.cores.loading,
    error: state.cores.error
});

export default connect(mapStateToProps)(Cores);
