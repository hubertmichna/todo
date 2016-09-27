import dayReducer from "../../app/reducers/dayReducer";



describe("cardReducer", () => {

    it("should SELECT_DAY", () => {
        const defaultState = {
            selectedDayIndex:0,
            week:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
        };
        const newState = dayReducer(defaultState, {type: 'SELECT_DAY',index:4});
        const state = {
            selectedDayIndex:4,
            week:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
        };
        expect(newState).toEqual(state);
    });



});
