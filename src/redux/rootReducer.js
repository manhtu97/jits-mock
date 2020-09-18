import { combineReducers } from "redux";
import { tabReducer, tabCollapsed } from "./tabSideBar/tab.reducer";

const rootReducer = combineReducers({
  tabSideBar: tabReducer,
  tabCollapsed: tabCollapsed,
});

export default rootReducer;
