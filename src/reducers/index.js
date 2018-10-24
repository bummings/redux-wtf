import { FETCH_ANIMALS } from "../actions";

export const animalsReducer = (state = [], action) => {
  if (action.type === FETCH_ANIMALS) {
    return state.concat(action.payload);
  }
  return state;
};
