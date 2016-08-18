import React, {Component, PropTypes} from 'react';
import ItemTypes from './ItemTypes';
import {DragSource} from 'react-dnd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    constructor() {
        super();
        this.state = {showEditDescription: false, newEditDescription:true}
    }

    toggleShowEditDescription() {
        this.setState({showEditDescription: !this.state.showEditDescription})
    }

    newEditDescription(e) {
        this.setState({newEditDescription: e.target.value})
    }

    render() {
        let editDescription;
        if (this.state.showEditDescription) {
            editDescription = (<div>
                <textarea type="text" onChange={(this.newEditDescription.bind(this))} className="form-control"
                          defaultValue={this.props.description}/>
                <span className="glyphicon glyphicon-ok btn-lg"
                      onClick={() => {this.props.editDescription(this.props.id, this.state.newEditDescription);this.toggleShowEditDescription()}}/>
            </div>)

        }

        const {connectDragSource} = this.props;
        return connectDragSource(
            <div className={"card " + this.props.status}>
                <a className="btn btn-danger deleteCard" onClick={() => this.props.deleteCard(this.props.id)}>delete</a>
                <div className="cardTitle">{this.props.title}</div>
                <ReactCSSTransitionGroup transitionName="des" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {editDescription}
                </ReactCSSTransitionGroup>
                <span className="glyphicon glyphicon-pencil btn-lg" onClick={this.toggleShowEditDescription.bind(this)}/>
                <div className="cardDetails">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);



