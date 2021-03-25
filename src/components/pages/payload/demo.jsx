import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class demo extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

demo.propTypes = {};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(demo);
