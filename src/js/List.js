import React, { PropTypes, Component } from "react";

import Card from "./Card";
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';



const cardTarget = {
    drop: function (props, monitor, component) {
        const draggedId = monitor.getItem().id;
        props.cardCallbacks(draggedId, props.id);
    }

};


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class List extends React.Component {

    render() {
        

        const { connectDropTarget } = this.props;

        var cards = this.props.cards.map((card) => {
            return <Card     cardCallbacks={this.props.cardCallbacks}
                            chuj={this.props.chuj}
                            key={card.id}
                           id={card.id}
                           title={card.title}
                           description={card.description}
                            status={card.status}
                           />
        });

        return connectDropTarget(

            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }

}

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(List);
