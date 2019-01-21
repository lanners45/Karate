import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function badgeReduces(state = initialState.badges, action) {
  switch (action.type) {
    case types.LOAD_BADGES_SUCCESS:
      return action.badges;
    case types.CREATE_BADGE_SUCCESS:
          return  [
            ...state,
            Object.assign({}, action.classObj)
          ];
    case types.DELETE_BADGE_SUCCESS: {
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
