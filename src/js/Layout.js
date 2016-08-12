import React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import KanbanBoard from './KanbanBoard';
import update from 'react-addons-update';


class Layout extends React.Component {
    constructor(props) {
        super(props);
        var keppo = JSON.parse(localStorage.getItem(this.props.day)) || [];
        this.state = {
            cardsList:
                keppo

        }


        this.sra = this.sra.bind(this);
        this.deleteCard = this.deleteCard.bind(this);

    }


    sra(title,description,status) {

        var elo = {
            id: Date.now(),
            title: title,
            description: description,
            status: status,
        };
        this.setState({
            cardsList: this.state.cardsList.concat([elo])
        });
        localStorage[this.props.day] = JSON.stringify(this.state.cardsList);
    }



    deleteCard(id) {
        var index = -1;
        for (var i = 0; i < this.state.cardsList.length; i++) {
            if (id === this.state.cardsList[i].id)
                index = i;
        }
        this.state.cardsList.splice(index, 1);
        if (index !== -1) {
            this.setState({cardsList: this.state.cardsList})
            localStorage[this.props.day] = JSON.stringify(this.state.cardsList);
        }
    }

    updateCardStatus(cardId, listId){

        let cardIndex = this.state.cardsList.findIndex((card)=>card.id == cardId);
            this.setState(update(this.state, {cardsList: {[cardIndex]: {status: {$set: listId }}}}));
        localStorage[this.props.day] = JSON.stringify(this.state.cardsList);

    }

    render() {

        return (
            <div>
                <KanbanBoard cardCallbacks={this.updateCardStatus.bind(this)} sra={this.sra} chuj={this.deleteCard} cards={this.state.cardsList}/>
            </div>
        );
    }

}


export default DragDropContext(HTML5Backend)(Layout);

