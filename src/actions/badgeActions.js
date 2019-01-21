import *  as types from './actionTypes';
import mockBadgeApi from '../api/mockBadgeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadBadgesSucess(badges) {
  return {type :types.LOAD_BADGES_SUCCESS, badges};
}

export function createClassSuccess(classObj) {
  return {type :types.CREATE_CLASS_SUCCESS, classObj};
}

export function deleteClassSuccess(classId) {
  return {type :types.DELETE_CLASS_SUCCESS, classId};
}

export function loadBadges(){
    return function(dispatch) {
      return mockBadgeApi.getAllBadges().then(badges => {
        dispatch(loadBadgesSucess(badges));
      }).catch(error => {
        throw error;
    });
  };
}

export function saveClass(classobj){
    return function(dispatch, getState) {
      dispatch(beginAjaxCall);
      return mockBadgeApi.saveClass(classobj).then(savedClass => {
        dispatch(createClassSuccess(savedClass));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
    });
  };
}

export function deleteClass(classId) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return mockBadgeApi.deleteClass(classId).then(deletedCourse => {
      dispatch(deleteClassSuccess(classId));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
