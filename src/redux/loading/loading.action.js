import { LOADING_PAGE } from "./loading.constant";

export const loading = (isLoading) => {
  return {
    type: LOADING_PAGE,
    isLoading: isLoading
  };
};
