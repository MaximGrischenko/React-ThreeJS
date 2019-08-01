import * as types from '../actions/action-types';

const initialState = {
  collection: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_SUCCESS:
      return {
        ...state,
        collection: [...state.collection, action.payload]
      };
    case types.DEL_PRIMITIVE:
      return {
        ...state,
        collection: state.collection.filter(primitive => primitive.id !== action.payload.id)
      };
    default: return state;
  }
}