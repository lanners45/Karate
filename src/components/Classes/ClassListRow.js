import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const  ClassListRow  = ({classObj, onDelete}) => {
     return (
       <tr key={classObj.classId.toString()}>
          <td>{classObj.className}</td>
          <td>
              <button type="button" className="btn btn-primary" onClick={onDelete} id={classObj.classId}>Delete</button>
          </td>
        </tr>
    );
};


ClassListRow.propTypes = {
  classObj: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ClassListRow;
