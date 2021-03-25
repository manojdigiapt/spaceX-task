import React from 'react';
import { connect } from 'react-redux';
import {fetchCompanyInfo} from "../../../redux/roadster/roadster-action";
import Loader from "../../shared/loader/loader";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCompanyInfo());
    }
    render() {
        const {companyInfo, error, loading} = this.props;
        console.log("companyInfo", companyInfo, error, loading)
        return (
            <div className="data-root">
                <h2>Company Information</h2>
                {loading ? <Loader /> : (
                <div className="data-root__info">
                <span><b>CEO: </b>{companyInfo?.ceo}</span>
                <span><b>COO: </b>{companyInfo?.coo}</span>
                <span><b>CTO: </b>{companyInfo?.cto}</span>
                <span><b>CTO Propulsion: </b>{companyInfo?.cto_propulsion}</span>
                <span><b>Employess: </b>{companyInfo?.employees}</span>
                <span><b>Founded: </b>{companyInfo?.founded}</span>
                <span><b>Founder: </b>{companyInfo?.founder}</span>
                <span><b>Address: </b>{companyInfo?.headquarters?.address}</span>
                <span><b>Launch sites: </b>{companyInfo?.launch_sites}</span>
                <span><b>Name: </b>{companyInfo?.name}</span>
                <span><b>Summary: </b>{companyInfo?.summary}</span>
                <span><b>Test sites: </b>{companyInfo?.test_sites}</span>
                <span><b>Valuation: </b>{companyInfo?.valuation}</span>
                <span><b>Vehicles: </b>{companyInfo?.vehicles}</span>
                </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.roadster.loading,
    error: state.roadster.error,
    companyInfo: state.roadster.companyInfo
});


export default connect(mapStateToProps)(Dashboard);
