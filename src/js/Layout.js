import React from "react";
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import KanbanBoard from './KanbanBoard';
import update from 'react-addons-update';


class Layout extends React.Component {
    constructor() {
        super();
    }

    addCard(title, description, status) {
        var elo = {
            id: Date.now(),
            title: title,
            description: description,
            status: status,
        };

        this.setState({cardsList: this.state.cardsList.concat([elo])});
    }

    deleteCard(id) {
        var index = -1;
        for (var i = 0; i < this.state.cardsList.length; i++) {
            if (id === this.state.cardsList[i].id)
                index = i;
        }
        this.state.cardsList.splice(index, 1);
        if (index !== -1)
            this.setState({cardsList: this.state.cardsList})
    }

    editDescription(cardId,updatedDescription) {
        if(updatedDescription !== true) {
            let cardIndex = this.state.cardsList.findIndex((card)=>card.id == cardId);
            this.setState(update(this.state, {cardsList: {[cardIndex]: {description: {$set: updatedDescription}}}}));
        }

    }

    updateCardStatus(cardId, listId) {
        let cardIndex = this.state.cardsList.findIndex((card)=>card.id == cardId);
        this.setState(update(this.state, {cardsList: {[cardIndex]: {status: {$set: listId}}}}));
    }

    componentWillReceiveProps(nextProps) {
        var cardListFromLocalStorage = JSON.parse(localStorage.getItem(nextProps.day)) || [];
        this.setState({cardsList: cardListFromLocalStorage})
    }

    componentWillMount() {
        var cardListFromLocalStorage = JSON.parse(localStorage.getItem(this.props.day)) || [];
        this.setState({cardsList: cardListFromLocalStorage})
    }

    componentWillUpdate(newProps, newState) {
        localStorage[newProps.day] = JSON.stringify(newState.cardsList);
    }

    render() {
        return <KanbanBoard cardCallbacks={this.updateCardStatus.bind(this)} addCard={(...args) => this.addCard(...args)}
                            deleteCard={(id) => this.deleteCard(id)} editDescription={(...args) => this.editDescription(...args)} cards={this.state.cardsList}/>;
    }

}


export default DragDropContext(HTML5Backend)(Layout);

