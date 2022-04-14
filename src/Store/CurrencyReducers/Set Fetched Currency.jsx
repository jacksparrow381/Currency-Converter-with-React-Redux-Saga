import { SET_CURRENCY_FETCH } from "../Actions";

const initialState = {
  rates: [],
};

const SelectedNames = "";

const myFirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY_FETCH:
      return {
        ...state,
        rates: action.payload,
      };
    default:
      return state;
  }
};

export default myFirstReducer;
