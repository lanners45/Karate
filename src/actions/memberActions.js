import *  as types from './actionTypes';
import mockMemberrApi from '../api/mockMemberrApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadMembersSucess(members) {
  return {type :types.LOAD_MEMBERS_SUCCESS, members};
}

export function createMemberSuccess(member) {
  return { type: types.CREATE_MEMBER_SUCCESS, member };
}

export function updateMemberSuccess(member) {
  return { type: types.UPDATE_MEMBER_SUCCESS, member };
}

export function loadMembers(){
    return function(dispatch) {
      return mockMemberrApi.getAllMembers().then(members => {
        dispatch(loadMembersSucess(members));
      }).catch(error => {
        throw error;
    });
  };
}

export function saveMember(member) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return mockMemberrApi.saveMember(member).then(savedMember => {
      member.id ? dispatch(updateMemberSuccess(savedMember)) : dispatch(createMemberSuccess(savedMember));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
