import *  as types from './actionTypes';
import StyleApi from '../api/mockStyleApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadStylesSuccess(styles) {
  return {type :types.LOAD_STYLES_SUCCESS, styles};
}

export function createClassSuccess(classObj) {
  return {type :types.CREATE_CLASS_SUCCESS, classObj};
}

export function deleteClassSuccess(classId) {
  return {type :types.DELETE_CLASS_SUCCESS, classId};
}

export function loadStyles(){
    return function(dispatch) {
      return StyleApi.getAllStyles().then(styles => {
        dispatch(loadStylesSuccess(styles));
      }).catch(error => {
        throw error;
    });
  };
}

export function saveStyle(style){
    return function(dispatch, getState) {
      dispatch(beginAjaxCall);
      return StyleApi.saveClass(style).then(savedClass => {
        dispatch(createClassSuccess(savedClass));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
    });
  };
}

export function deleteStyle(styleId) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return StyleApi.deleteClass(styleId).then(deletedCourse => {
      dispatch(deleteClassSuccess(styleId));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
