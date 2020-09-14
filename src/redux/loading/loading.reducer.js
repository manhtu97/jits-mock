import { LOADING_PAGE } from "./loading.constant";

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PAGE:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};

export default loadingReducer;
