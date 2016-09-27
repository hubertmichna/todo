import React from "react";
import KanbanBoardConnector from "./Connectors/KanbanBoardConnector";
import Header from "./Header";


export default class Calendar extends React.Component {

    render() {
        return (
            <div className="calendar">
                <Header selectedDayIndex={this.props.selectedDayIndex} setSelectedDay={this.props.setSelectedDay} week={this.props.week}/>
                <KanbanBoardConnector/>
            </div>
        )
    }
}
