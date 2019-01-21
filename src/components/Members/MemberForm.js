import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';
import SelectInput from '../common/SelectInput';

const MemberForm = ({member, classList, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Member</h1>

      <SelectInput
          name="Class"
          label="Class"
          onChange={onChange}
          defaultOption= "Select option"
          value= {member.classId}
          error={errors.Class}
          options={classList}/>

      <TextInput
          name="Forenames"
          label="Forenames"
          value={member.Forenames}
          onChange={onChange}
          error={errors.Forenames}/>

        <TextInput
          name="Surname"
          label="Surname"
          value={member.Surname}
          onChange={onChange}
          error={errors.Surname}/>

        <TextInput
          name="TelephoneNumber"
          label="Telephone Number"
          value={member.TelephoneNumber}
          onChange={onChange}
          error={errors.TelephoneNumber}/>

        <TextInput
          name="MobileNumber"
          label="Mobile Number"
          value={member.MobileNumber}
          onChange={onChange}
          error={errors.MobileNumber}/>

        <TextInput
          name="EmailAddress"
          label="Email Address"
          value={member.EmailAddress}
          onChange={onChange}
          error={errors.EmailAddress}/>

        <TextInput
          name="StartDate"
          label="Start Date"
          value={member.StartDate}
          onChange={onChange}
          error={errors.StartDate}/>

        <TextInput
          name="BirthDate"
          label="Birth Date"
          value={member.DateOfBirth}
          onChange={onChange}
          error={errors.DateOfBirth}/>

        <TextInput
          name="Notes"
          label="Notes"
          value={member.Notes}
          onChange={onChange}
          error={errors.Notes}/>

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'saving...' : 'save'}
          className="btn btn-primary"
          onClick={onSave}/>
    </form>
  );
};

MemberForm.propTypes = {
  member: React.PropTypes.object.isRequired,
  classList: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default MemberForm;
