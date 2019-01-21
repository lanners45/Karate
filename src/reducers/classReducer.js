import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function classReduces(state = initialState.classes, action) {
  switch (action.type) {
    case types.LOAD_CLASSES_SUCCESS:
      return action.classes;
    case types.CREATE_CLASS_SUCCESS:
          return  [
            ...state,
            Object.assign({}, action.classObj)
          ];
    case types.DELETE_CLASS_SUCCESS: {
      let newState = [
        ...state.filter(classObj => classObj.ClassIdd !== action.classId),
        Object.assign({}, action.classId)
      ];
      newState = newState.filter(value => Object.keys(value).length !== 0);
    return newState;
    }
    default:
      return state;
  }
}
