import React, {PropTypes, Component} from "react";

import Card from "./Card";
import ItemTypes from './ItemTypes';
import {DropTarget} from 'react-dnd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const cardTarget = {
    drop: function (props, monitor) {
        const draggedId = monitor.getItem().id;
        props.cardCallbacks(draggedId, props.id);
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
            titleX: "Default Title",
            descriptionX: "No Description Added",
            statusX: "",
        }
    }

    add() {
        this.props.addCard(this.state.titleX, this.state.descriptionX, this.state.statusX ? this.state.statusX : this.props.id)
    }


    updateTitle(e) {
        this.setState({
            titleX: e.target.value
        })
    }

    updateDescription(e) {
        this.setState({
            descriptionX: e.target.value
        })
    }


    toggleAddCard() {
        this.setState({showAddCard: !this.state.showAddCard});
    }

    componentWillReceiveProps() {
        this.setState({showAddCard: false,titleX: "Default Title",descriptionX: "No Description Added"});
    }

    render() {
        let addCard;
        const {connectDropTarget} = this.props;
        if (this.state.showAddCard === true) {
            addCard = (
                <div className="addTask">
                    <input type="text" onChange={this.updateTitle.bind(this)} className="form-control title"
                           placeholder="Title"/>
                    <textarea type="text" onChange={this.updateDescription.bind(this)} className="form-control"
                              placeholder="Description"/>
                    <button onClick={this.add.bind(this)} className="btn btn-success addCardButton">Add</button>
                </div>
            )
        }

        var cards = this.props.cards.map((card) => {
            return <Card cardCallbacks={this.props.cardCallbacks}
                         deleteCard={this.props.deleteCard}
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
