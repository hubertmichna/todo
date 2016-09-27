import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import KanbanBoard from "../KanbanBoard";

import  { updateCardStatus }  from "../../actions/cardActions";

class KanbanBoardConnector extends React.Component {
    render() {
        return (
            <KanbanBoard cards={this.props.cards} selectedDayIndex={this.props.selectedDayIndex} updateCardStatus={this.props.updateCardStatus}/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cards: state.cardReducer.cards[state.dayReducer.selectedDayIndex],
        day: state.dayReducer.week,
        selectedDayIndex: state.dayReducer.selectedDayIndex,

    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateCardStatus},dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(KanbanBoardConnector);
