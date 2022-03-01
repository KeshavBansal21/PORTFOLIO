import  { combineReducers } from "redux";
import introReducer from "./introReducer";


const rootReducer = combineReducers({
    introduction:introReducer
})

export default rootReducer;