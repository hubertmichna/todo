import * as actions from "../../app/actions/cardActions";
import List from "../../app/components/List";


describe('cardActions', () => {

    it('should create an action to ADD_CARD', () => {
        const title = 'test',
            description = 'test',
            status = 'done',
            dayIndex = 0;

        const expectedAction = {
            type: "ADD_CARD",
            title,
            description,
            status,
            dayIndex,
        };
        expect(actions.addCardfunction(title, description, status, dayIndex)).toEqual(expectedAction)
    });

    it('should create an action to DELETE_CARD', () => {
        const id = 2,
            dayIndex = 0;

        const expectedAction = {
            type: "DELETE_CARD",
            id,
            dayIndex,
        };
        expect(actions.deleteCard(id,dayIndex)).toEqual(expectedAction)
    });

    it('should create an action to UPDATE_CARD_STATUS', () => {
        const id = 2,
            status = 'done',
            dayIndex = 0;

        const expectedAction = {
            type: "UPDATE_CARD_STATUS",
            id,
            status,
            dayIndex,
        };
        expect(actions.updateCardStatus(id,status,dayIndex)).toEqual(expectedAction)
    });

    it('should create an action to UPDATE_CARD_DESCRIPTION', () => {
        const id = 2,
            description = 'test',
            dayIndex = 0;

        const expectedAction = {
            type: "UPDATE_CARD_DESCRIPTION",
            id,
            description,
            dayIndex,
        };
        expect(actions.editDescription(id, description, dayIndex)).toEqual(expectedAction)
    });

    it('should create an action to ADD_CARD_TITLE', () => {
        const title = "e";

        const expectedAction = {
            type: "ADD_CARD_TITLE",
            title,
        };
        expect(actions.addTitle(title)).toEqual(expectedAction)
    });

    it('should create an action to ADD_CARD_DESCRIPTION', () => {
        const description = "e";

        const expectedAction = {
            type: "ADD_CARD_DESCRIPTION",
            description,
        };
        expect(actions.addDescription(description)).toEqual(expectedAction)
    });

    it('should create an action to NEW_CARD_DESCRIPTION', () => {
        const description = "e";

        const expectedAction = {
            type: "NEW_CARD_DESCRIPTION",
            description,
        };
        expect(actions.newDescription(description)).toEqual(expectedAction)
    })


});