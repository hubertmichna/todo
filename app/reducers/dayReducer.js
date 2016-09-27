var defaultState = {
    selectedDayIndex:0,
    week:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
};

export default function reducer(state=defaultState, action){
    switch(action.type) {
        case "SELECT_DAY": {
            return {...state,selectedDayIndex: action.index};
        }
        default:
            return state;
    }


};
