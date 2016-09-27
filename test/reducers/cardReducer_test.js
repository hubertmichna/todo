import cardReducer from "../../app/reducers/cardReducer";



describe("cardReducer", () => {


    it("should DELETE_CARD", () => {
        const defaultState = { cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"}]]};
        const newState = cardReducer(defaultState, {type: 'DELETE_CARD', id:2,dayIndex:0});
        const state = {cards:[[{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"}],]};
        expect(newState).toEqual(state);
    });

   // it("should ADD_CARD", () => {
   //     const defaultState = { cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"}]]};
   //     const newState = cardReducer(defaultState, {type: 'ADD_CARD', title:"test",description:"test",status:"done",dayIndex:0});
   //     const state = {cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"},{id: Date.now(),title: "test",description:"test",status:"done"}],]};
   //     expect(newState).toEqual(state);
   // });

    it("should ADD_CARD", () => {
        const defaultState = { cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"}]]};
        const newState = cardReducer(defaultState, {type: 'UPDATE_CARD_STATUS', id:4,status:"done",dayIndex:0});
        const state = {cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"done"}],]};
        expect(newState).toEqual(state);
    });

    it("should UPDATE_CARD_DESCRIPTION", () => {
        const defaultState = { cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"fsfs",status:"todo"}]]};
        const newState = cardReducer(defaultState, {type: 'UPDATE_CARD_DESCRIPTION', id:4,description:"new value",dayIndex:0});
        const state = {cards:[[{key: 2,id: 2,title: "test",description:"fsfs",status:"done"},{key: 4,id: 4,title: "test",description:"new value",status:"todo"}],]};
        expect(newState).toEqual(state);
    });

    it("should ADD_CARD_TITLE", () => {
        const defaultState = { cards: [[], [], [], [], [], [], [], [{titleX: "Default Title"}],]};
        const newState = cardReducer(defaultState, {type: 'ADD_CARD_TITLE', title:"new title"});
        const state = { cards:[[], [], [], [], [], [], [], [{titleX: "new title"}],]};
        expect(newState).toEqual(state);
    });


    it("should ADD_CARD_DESCRIPTION", () => {
        const defaultState = { cards: [[], [], [], [], [], [], [], [{descriptionX: "Default Description"}],]};
        const newState = cardReducer(defaultState, {type: 'ADD_CARD_DESCRIPTION', description:"new description"});
        const state = { cards: [[], [], [], [], [], [], [], [{descriptionX: "new description"}],]};
        expect(newState).toEqual(state);
    });

    it("should NEW_CARD_DESCRIPTION", () => {
        const defaultState = { cards: [[], [], [], [], [], [], [], [{newDescription: "test"}],]};
        const newState = cardReducer(defaultState, {type: 'NEW_CARD_DESCRIPTION', description:"new description"});
        const state = { cards: [[], [], [], [], [], [], [], [{newDescription: "new description"}],]};
        expect(newState).toEqual(state);
    })


});
