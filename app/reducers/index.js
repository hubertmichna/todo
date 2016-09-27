import { combineReducers } from "redux"

import cardReducer from "./cardReducer";
import dayReducer from "./dayReducer";



export default combineReducers({
    cardReducer,
    dayReducer,
});