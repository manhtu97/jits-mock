import { SELECT_TAB } from "./tab.constant";

export const selectTab = (tabParent, tabChild) => {
  return {
    type: SELECT_TAB,
    tabParent: tabParent,
    tabChild: tabChild,
  };
};
