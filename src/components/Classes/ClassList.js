import React from 'react';
import PropTypes from 'prop-types';
import ClassListRow from './ClassListRow';

const ClassList = ({classes =[], onDelete}) => {
  return (
          <table className="table">
            <thead>
              <tr>
                <th>Class Name</th>
              </tr>
            </thead>
            <tbody>
              {classes.map(classObj =>
                <ClassListRow key={classObj.classId} classObj={classObj} onDelete={onDelete}/>
              )}
            </tbody>
          </table>
      );
};

ClassList.propTypes = {
  classes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ClassList;
