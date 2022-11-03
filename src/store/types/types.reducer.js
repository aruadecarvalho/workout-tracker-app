import { TYPES_ACTION_TYPES } from "./types.types";

const TYPES_INITIAL_STATE = {
  types: [],
};

export const typesReducer = (state = TYPES_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES_ACTION_TYPES.ADD_TYPE:
      if (state.types.length > 10) {
        return state;
      }
      return {
        types: [...state.types, payload],
      };
    default:
      return state;
  }
};
