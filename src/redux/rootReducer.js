import { combineReducers } from "redux";
import tabReducer from "./tabSideBar/tab.reducer";

const rootReducer = combineReducers({
    tabSideBar: tabReducer
});

export default rootReducer;
