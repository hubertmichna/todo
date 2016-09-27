import * as actions from "../../app/actions/dayActions";


describe('dayActions', () => {

    it('should create an action to ADD_CARD', () => {
        const index = 0;
        const expectedAction = {
            type: "SELECT_DAY",
            index,
        };
        expect(actions.selectDay(index)).toEqual(expectedAction)
    });

});