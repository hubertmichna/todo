import React from "react";
import ListConnector from "./Connectors/ListConnector";
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {connect} from "react-redux";


class KanbanBoard extends React.Component {
    render() {
        return (
            <div className="day">
                <ListConnector  id="todo" title="To Do"
                                        selectedDayIndex={this.props.selectedDayIndex}
                                        updateCardStatus={(id,status,dayIndex) => {this.props.updateCardStatus(id, status, dayIndex)}}
                                        cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <ListConnector  id="in-progress" title="In Progress"
                                        selectedDayIndex={this.props.selectedDayIndex}
                                        updateCardStatus={(id,status,dayIndex) => {this.props.updateCardStatus(id, status, dayIndex)}}
                                        cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <ListConnector  id="done" title="Done"
                                        selectedDayIndex={this.props.selectedDayIndex}
                                        updateCardStatus={(id,status,dayIndex) => {this.props.updateCardStatus(id, status, dayIndex)}}
                                        cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }
}



export default DragDropContext(HTML5Backend)(KanbanBoard);
