import { SELECT_TAB, COLLAPSED } from "./tab.constant";

export const selectTab = (tabParent, tabChild) => {
  return {
    type: SELECT_TAB,
    tabParent: tabParent,
    tabChild: tabChild,
  };
};
export const collapsed = (isCollapsed) => {
  return {
    type: COLLAPSED,
    collapsed: isCollapsed,
  };
};
