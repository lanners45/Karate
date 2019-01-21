/*import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageClassPage} from './ManageClassPage';


describe('Managed Class Page', () => {
  it('sets errror message when trying to save empty title', () => {
    const props = {
      actions: {saveClass: () => {return Promise.resolve(); }},
       classObj:  {classId:'', className:''}
    };

    const wrapper = mount(<ManageClassPage {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.className).toBe('Class name must be at least 3 characters');
  });
});
*/
