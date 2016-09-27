import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import List from "../List";

import  { addCardfunction }  from "../../actions/cardActions"
import  { addTitle }  from "../../actions/cardActions"
import  { addDescription }  from "../../actions/cardActions"

class ListConnector extends React.Component {
    render() {
        return (
            <List {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        defaultCard: state.cardReducer.cards[7][0],
        selectedDayIndex: state.dayReducer.selectedDayIndex,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addCardfunction,addTitle,addDescription},dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(ListConnector)