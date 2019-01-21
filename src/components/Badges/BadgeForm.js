import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';

const BadgeForm = ({classObj, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Badge</h1>
      <TextInput
        name="className"
        label="Class Name"
        value={classObj.className}
        onChange={onChange}
        error={errors.className}/>

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'saving...' : 'save'}
          className="btn btn-primary"
          onClick={onSave}/>
    </form>
  );
};

BadgeForm.propTypes = {
  classObj: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default BadgeForm;
