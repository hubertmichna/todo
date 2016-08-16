import React from "react";
import List from "./List";


export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div>
                <List cardCallbacks={this.props.cardCallbacks} addCard={this.props.addCard} deleteCard={this.props.deleteCard} id="todo" title="To Do"
                                      cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List cardCallbacks={this.props.cardCallbacks} addCard={this.props.addCard} deleteCard={this.props.deleteCard} id="in-progress" title="In Progress"
                                      cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List cardCallbacks={this.props.cardCallbacks} addCard={this.props.addCard} deleteCard={this.props.deleteCard} id="done" title="Done"
                                      cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }

}
