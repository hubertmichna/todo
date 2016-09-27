import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Card from "../Card"

import  {newDescription}  from "../../actions/cardActions"
import  {editDescription}  from "../../actions/cardActions"
import  {deleteCard}  from "../../actions/cardActions"


class CardConnector extends React.Component {

    render() {
        return (
            <Card {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        defaultCard: state.cardReducer.cards[7][0],
        selectedDayIndex: state.dayReducer.selectedDayIndex,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({editDescription, newDescription, deleteCard}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CardConnector);

