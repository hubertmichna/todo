import React from "react";
import List from "./List";


export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div>
                <List cardCallbacks={this.props.cardCallbacks} sra={this.props.sra} chuj={this.props.chuj} id="todo" title="To Do"
                                      cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List cardCallbacks={this.props.cardCallbacks} sra={this.props.sra} chuj={this.props.chuj} id="in-progress" title="In Progress"
                                      cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List cardCallbacks={this.props.cardCallbacks} sra={this.props.sra} chuj={this.props.chuj} id="done" title="Done"
                                      cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }

}
