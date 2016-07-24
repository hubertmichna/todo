import React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import KanbanBoard from './KanbanBoard';
import update from 'react-addons-update';


class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            cardsList: [{
                id: 1,
                title: "Fuck some bitches",
                description: "right in the pussy",
                status: "in-progress"
            },
                {
                    id: 2,
                    title: "Eat",
                    description: "Get some mass",
                    status: "todo"
                },
                {
                    id: 3,
                    title: "UMYC OKNA",
                    description: "trrrrrrrr",
                    status: "done",
                },
                {
                    id: 4,
                    title: "wypic maslanke",
                    description: "wlowlwolowlowlowlowlolwoowowlowllowolw",
                    status: "in-progress"
                },
                {
                    id: 5,
                    title: "Parampam pam",
                    description: "trrrrrrrr",
                    status: "todo",
                }
            ],
            idX: 0,
            titleX: "kek",
            descriptionX: "mek",
            statusX: ""

        }


        this.sra = this.sra.bind(this);
        this.update2 = this.update2.bind(this);
        this.update3 = this.update3.bind(this);
        this.update4 = this.update4.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.x = 0;

    }


    sra() {
        this.x++;
        var elo = {
            id: Date.now(),
            title: this.state.titleX,
            description: this.state.descriptionX,
            status: this.state.statusX,
        };
        this.setState({
            cardsList: this.state.cardsList.concat([elo])
        });
        console.log(this.state.cardsList);
    }
    

    update2(e) {
        this.setState({
            titleX: e.target.value
        })
    }

    update3(e) {
        this.setState({
            descriptionX: e.target.value
        })
    }

    update4(e) {
        this.setState({
            statusX: e.target.value
        })
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

    updateCardStatus(cardId, listId){

        let cardIndex = this.state.cardsList.findIndex((card)=>card.id == cardId);
            this.setState(update(this.state, {cardsList: {[cardIndex]: {status: {$set: listId }}}}));

    }



    render() {

        return (
            <div>
                <div className="addTask">
                    <select onChange={this.update4} className="form-control">
                        <option value="done">done</option>
                        <option value="in-progress">in-progres</option>
                        <option value="todo">to do</option>
                    </select>
                    <input type="text" onChange={this.update2}className="form-control" placeholder="Title"/>
                    <input type="text" onChange={this.update3}className="form-control" placeholder="Description"/>
                    <button onClick={this.sra} className="btn btn-success">Add</button>
                </div>
                <KanbanBoard cardCallbacks={this.updateCardStatus.bind(this)} chuj={this.deleteCard} cards={this.state.cardsList}/>
            </div>
        );
    }

}


export default DragDropContext(HTML5Backend)(Layout);

