import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';




const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            status: props.status,
        };
    }
};


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Card extends React.Component {

    render() {

        const { connectDragSource} = this.props;
        return connectDragSource(
            <div className={"card " + this.props.status}>
                <a className="btn btn-danger deleteCard" onClick={() => this.props.deleteCard(this.props.id)}>delete</a>
            <div className="cardTitle">{this.props.title}</div>
                <div className="cardDetails">
                    {this.props.description}
                </div>
            </div>
        );
    }
                }

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);



