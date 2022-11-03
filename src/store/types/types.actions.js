import { createAction } from "../../utils/reducer/reducer.utils";
import { TYPES_ACTION_TYPES } from "./types.types";

export const addType = (type) => {
  return createAction(TYPES_ACTION_TYPES.ADD_TYPE, type);
};
