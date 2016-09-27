import React, {PropTypes, Component} from "react";

import CardConnector from "./Connectors/CardConnector";
import ItemTypes from './ItemTypes';
import {DropTarget} from 'react-dnd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const cardTarget = {
    drop: function (props, monitor) {
        const draggedId = monitor.getItem().id;
        props.updateCardStatus(draggedId, props.id,props.selectedDayIndex);
    }

};


function collect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}



class List extends React.Component {
    constructor() {
        super();
        this.state = {
            showAddCard: false,
        }
    }

    toggleAddCard() {
        this.setState({showAddCard: !this.state.showAddCard});
    }



    render() {
        let addCard;
        const {connectDropTarget} = this.props;
        if (this.state.showAddCard === true) {
            addCard = (
                <div className="addTask">
                    <input type="text" onChange={(e) => this.props.addTitle(e.target.value)} className="form-control title"
                           placeholder="Title"/>
                    <textarea type="text" onChange={(e) => this.props.addDescription(e.target.value)} className="form-control"
                              placeholder="Description"/>
                    <button onClick={() => this.props.addCardfunction(this.props.defaultCard.titleX, this.props.defaultCard.descriptionX, this.props.defaultCard.statusX ? this.props.defaultCard.statusX : this.props.id,this.props.selectedDayIndex)} className="btn btn-success addCardButton">Add</button>
                </div>
            )
        }

        var cards = this.props.cards.map((card) => {
            return <CardConnector
                         key={card.id}
                         id={card.id}
                         title={card.title}
                         description={card.description}
                         status={card.status}
            />
        });


        return connectDropTarget(
            <div className="list">
                <a className="btn btn-primary toggleAddCard" onClick={this.toggleAddCard.bind(this)}>newCard</a>
                <h1>{this.props.title}</h1>
                <ReactCSSTransitionGroup transitionName="addCard" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {addCard}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="cards" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {cards}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(List);
