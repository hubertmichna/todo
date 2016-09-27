import update from "react-addons-update";

var defaultState = { cards:[
    [{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"}],
    [],
    [{key: 3,id: 3,title: "test",description:"fsfs",status:"todo"}],
    [],
    [],
    [],
    [],
    [
        {
            newDescription:true,
            titleX: "Default Title",
            descriptionX: "No Description Added",
            statusX: "",
        },
    ]

]};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "DELETE_CARD": {
            let cardIndex2 = state.cards[action.dayIndex].findIndex((card)=>card.id == action.id);
            return update(state, {cards:{ [action.dayIndex]: { $splice: [[cardIndex2,1]] }}});
        }
        case "ADD_CARD": {
            let newCard = {
                id: Date.now(),
                title: action.title,
                description: action.description,
                status: action.status,
            };
            return update(state, {cards:{ [action.dayIndex]: { $push: [newCard]}} });
        }
        case "UPDATE_CARD_DESCRIPTION": {
            let cardIndex = state.cards[action.dayIndex].findIndex((card)=>card.id == action.id);
            return update(state, {cards:{ [action.dayIndex]: { [cardIndex]:{ description: {$set: action.description} } }} });
        }
        case "UPDATE_CARD_STATUS": {
            let cardIndex = state.cards[action.dayIndex].findIndex((card)=>card.id == action.id);
            let newState = update(state, {cards:{ [action.dayIndex]: { [cardIndex]:{ status: {$set: action.status} } }} });
            return newState;
        }
        case "ADD_CARD_TITLE": {
            let newState = update(state, {cards:{ [7]: { [0]:{ titleX: {$set: action.title} } }} });
            return newState;
        }
        case "ADD_CARD_DESCRIPTION": {
            let newState = update(state, {cards:{ [7]: { [0]:{ descriptionX: {$set: action.description} } }} });
            return newState;
        }
        case "NEW_CARD_DESCRIPTION": {
            let newState = update(state, {cards:{ [7]: { [0]:{ newDescription: {$set: action.description} } }} });
            return newState;
        }
        default:
            return state;
    }
};
