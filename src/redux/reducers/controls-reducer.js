import * as types from '../actions/action-types';

const initialState = {
  selected: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SEL_PRIMITIVE:
      return {
        ...state,
        selected: [...state.selected, action.payload]
      };
    default: return state;
  }
}