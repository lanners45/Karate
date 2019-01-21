import *  as types from './actionTypes';
import mockClassApi from '../api/mockClassApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadClassesSucess(classes) {
  return {type :types.LOAD_CLASSES_SUCCESS, classes};
}

export function createClassSuccess(classObj) {
  return {type :types.CREATE_CLASS_SUCCESS, classObj};
}

export function deleteClassSuccess(classId) {
  return {type :types.DELETE_CLASS_SUCCESS, classId};
}

export function loadClasses(){
    return function(dispatch) {
      return mockClassApi.getAllClasses().then(classes => {
        dispatch(loadClassesSucess(classes));
      }).catch(error => {
        throw error;
    });
  };
}

export function saveClass(classobj){
    return function(dispatch, getState) {
      dispatch(beginAjaxCall);
      return mockClassApi.saveClass(classobj).then(savedClass => {
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
    return mockClassApi.deleteClass(classId).then(deletedCourse => {
      dispatch(deleteClassSuccess(classId));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
