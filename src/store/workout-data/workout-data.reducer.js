import { WORKOUT_DATA_ACTION_TYPES } from "./workout-data.types";

export const WORKOUT_DATA_INITIAL_STATE = {
  workoutData: [],
  nameAndType: {
    name: "",
    type: { name: "", color: "" },
  },
  formFields: {
    exerciseName: "",
    setsNumber: "",
    sets: {},
  },
};

export const workoutDataReducer = (
  state = WORKOUT_DATA_INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case WORKOUT_DATA_ACTION_TYPES.SET_WORKOUT_DATA:
      return { ...state, workoutData: payload };
    case WORKOUT_DATA_ACTION_TYPES.SET_WORKOUT_NAME_TYPE:
      return { ...state, nameAndType: payload };
    case WORKOUT_DATA_ACTION_TYPES.SET_FORM_FIELDS_NAME_AND_SET:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [payload.name]: payload.value,
        },
      };
    case WORKOUT_DATA_ACTION_TYPES.SET_FORM_FIELDS_WEIGHT_AND_REP:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          sets: {
            ...state.formFields.sets,
            [payload.id]: {
              ...state.formFields.sets[payload.id],
              [payload.name]: payload.value,
            },
          },
        },
      };
    case WORKOUT_DATA_ACTION_TYPES.CLEAR_FORM_FIELDS:
      return {
        ...state,
        formFields: {
          exerciseName: "",
          setsNumber: "",
          sets: {},
        },
      };
    case WORKOUT_DATA_ACTION_TYPES.CLEAR_WORKOUT:
      return {
        ...state,
        workoutData: [],
        nameAndType: {
          name: "",
          type: { name: "", color: "" },
        },
      };
    default:
      return state;
  }
};
