import { SELECT_TAB, COLLAPSED } from "./tab.constant";

const initialState = {
  tabParent: "detailOffice",
  tabChild: "dashboard",
};
const initCollapsed = false;

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        tabParent: action.tabParent,
        tabChild: action.tabChild,
      };
    default:
      return state;
  }
};
export const tabCollapsed = (state = initCollapsed, action) => {
  switch (action.type) {
    case COLLAPSED:
      return action.collapsed;
    default:
      return state;
  }
};
