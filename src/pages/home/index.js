import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


class Home extends Component {
    render() {
        console.log('index',this.props)
        return (
            <div>
               首页 
            </div>
        );
    }
}


Home.propTypes = {
    
};

export default connect(state => state)(Home)
