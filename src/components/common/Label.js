import React, { PropTypes } from 'react';

const Label = ({name, label, value}) => {
  let wrapperClass = 'form-group';
  return (
    <div className={wrapperClass}>
      <label htmlFor="{name}">{label} : </label>
      <label htmlFor="{name}">{value}</label>
    </div>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default Label;
