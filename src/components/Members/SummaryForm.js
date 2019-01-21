import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';
import Label from '../common/Label';

const SummaryForm = ({member, classList}, onClose) => {
  let selectedClass = classList.find(c => c.value == member.ClassId).text;
  return (
    <form>
      <h1>Summary</h1>

      <Label
          name="Class"
          label="Class"
          value= {selectedClass}/>

      <Label
          name="Forenames"
          label="Forenames"
          value={member.Forenames}/>

        <Label
          name="Surname"
          label="Surname"
          value={member.Surname}/>

        <Label
          name="TelephoneNumber"
          label="Telephone Number"
          value={member.TelephoneNumber}/>

        <Label
          name="MobileNumber"
          label="Mobile Number"
          value={member.MobileNumber}/>

        <Label
          name="EmailAddress"
          label="Email Address"
          value={member.EmailAddress}/>

        <Label
          name="StartDate"
          label="Start Date"
          value={member.StartDate}/>

        <Label
          name="BirthDate"
          label="Birth Date"
          value={member.DateOfBirth}/>

        <Label
          name="Notes"
          label="Notes"
          value={member.Notes}/>

        <input
          type="submit"
          value={'ok'}
          className="btn btn-primary"
          onClick={onClose}/>
    </form>
  );
};

SummaryForm.propTypes = {
  member: React.PropTypes.object.isRequired,
  classList: React.PropTypes.array.isRequired,
  onClose: React.PropTypes.func.isRequired
};

export default SummaryForm;
