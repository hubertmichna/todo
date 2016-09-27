import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import  {selectDay}  from "../../actions/dayActions"

import Calendar from "../Calendar";

class CalendarConnector extends React.Component {
    render() {
        return (
            <Calendar selectedDayIndex={this.props.selectedDayIndex} setSelectedDay={(index) => {this.props.selectDay(index)}} week={this.props.week}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDayIndex: state.dayReducer.selectedDayIndex,
        week: state.dayReducer.week,
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectDay},dispatch)
};
export default connect(mapStateToProps,mapDispatchToProps)(CalendarConnector);