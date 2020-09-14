import { SELECT_TAB } from './tab.constant';

const initialState = {
    tabParent: 'detailOffice',
    tabChild: 'dashboard'
  }
  
  const tabReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_TAB: return {
        ...state,
        tabParent: action.tabParent,
        tabChild: action.tabChild
      }
      default: return state
    }
  }
  
  export default tabReducer