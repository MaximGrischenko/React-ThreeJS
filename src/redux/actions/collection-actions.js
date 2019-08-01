import * as types from './action-types';

export const addSuccess = (uuid, index) => ({
  type: types.ADD_SUCCESS,
  payload: {id: uuid, index: index}
});

export const delPrimitive = id => ({
  type: types.DEL_PRIMITIVE,
  payload: {id}
});

// export const selPrimitive = (type) => (dispatch) => {
//    dispatch(addPrimitive(type))
// };

export const selPrimitive = (type) => ({
  type: types.SEL_PRIMITIVE,
  payload: {type: type}
});