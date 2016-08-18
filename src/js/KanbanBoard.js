import React from "react";
import List from "./List";


export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div>
                <List {...this.props} id="todo" title="To Do"
                                      cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List {...this.props} id="in-progress" title="In Progress"
                                      cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List {...this.props} id="done" title="Done"
                                      cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }

}
